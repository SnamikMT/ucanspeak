<template>
  <article :class="$style.card">
    <span :class="$style.num"><b>{{ num }}</b></span>
    <h3 :class="$style.title" v-html="title"></h3>

    <!-- Видео приоритетнее картинки -->
    <video
      v-if="videoWebm || videoMp4"
      ref="vid"
      muted
      autoplay
      loop
      playsinline
      webkit-playsinline
      preload="metadata"
      :poster="poster || ''"
      :class="[$style.art, ready ? $style.show : $style.hide]"
      :style="cssVars"
      controlslist="nodownload noplaybackrate noremoteplayback nofullscreen"
      disablepictureinpicture
      disableremoteplayback
      :oncontextmenu="() => false"
      @loadedmetadata="armReady"
      @canplay="armReady"
    >
      <source v-if="videoWebm" :src="videoWebm" type="video/webm" />
      <source v-if="videoMp4"  :src="videoMp4"  type="video/mp4" />
    </video>

    <img
      v-else
      :src="img"
      alt=""
      aria-hidden="true"
      :class="$style.art"
      :style="cssVars"
    />

    <span
      v-if="pill"
      :class="$style.pill"
      :style="{ right: (pillRight ?? 42) + 'px', bottom: (pillBottom ?? 58) + 'px' }"
    >{{ pill }}</span>
  </article>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

const props = defineProps<{
  num: string
  title: string
  img?: string
  videoWebm?: string
  videoMp4?: string
  poster?: string
  pill?: string
  artWidth?: number
  artHeight?: number
  artRight?: number
  artBottom?: number
  pillRight?: number
  pillBottom?: number
  mobileArtWidth?: number
}>()

/* размеры — через CSS-переменные */
const cssVars = computed(() => ({
  '--art-right':  (props.artRight  ?? 0) + 'px',
  '--art-bottom': (props.artBottom ?? 0) + 'px',
  ...(props.artWidth       ? { '--art-width':         props.artWidth + 'px' }       : {}),
  ...(props.artHeight      ? { '--art-height':        props.artHeight + 'px' }      : {}),
  ...(props.mobileArtWidth ? { '--mobile-art-width':  props.mobileArtWidth + 'px' } : {}),
}))

/* анти-мерцание плеера */
const vid = ref<HTMLVideoElement|null>(null)
const ready = ref(false)
function markReady(){ if (!ready.value) ready.value = true }
function armReady(){
  const v = vid.value; if (!v) return
  const anyV = v as any
  if (typeof anyV.requestVideoFrameCallback === 'function'){
    anyV.requestVideoFrameCallback(() => markReady())
  }else{
    const onTick = () => {
      if (v.currentTime > 0 && v.readyState >= 2){
        markReady()
        v.removeEventListener('timeupdate', onTick)
        v.removeEventListener('canplay',   onTick)
      }
    }
    v.addEventListener('timeupdate', onTick)
    v.addEventListener('canplay', onTick, { once:true })
  }
}
onMounted(()=>{ vid.value?.play().catch(()=>{}) })
</script>

<style module>
/* Карточка резиновая по ширине колонки, пиксель-перфект на десктопе */
.card{
  position:relative;
  width:100%;
  max-width:450px;
  height:200px;
  background:#fff; border-radius:20px; overflow:hidden;
  padding:30px 24px 30px 30px;
  box-shadow:0 6px 18px rgba(16,24,40,.06);
}

/* номер */
.num{
  position:absolute; top:30px; left:30px;
  width:32px; height:32px; border-radius:999px;
  display:grid; place-items:center;
  background:#B87EFF; color:#fff;
  box-shadow:0 4px 10px rgba(184,126,255,.35);
}
.num b{ font:600 14px/1.3 Inter, sans-serif; }

/* заголовок */
.title{
  position:absolute; left:30px; bottom:30px; margin:0;
  max-width:260px; font:500 20px/1.2 Inter, sans-serif; letter-spacing:-.03em; color:#0F172A;
}

/* Арт (img/video).
   На промежуточных ширинах ограничиваем долей карточки,
   чтобы не вылезал — min(заданная ширина, 62% от карточки). */
.art{
  position:absolute;
  right: var(--art-right, 0);
  bottom: var(--art-bottom, 0);
  width: min(var(--art-width, 9999px), 62%);
  height: var(--art-height, auto);
  object-fit: contain;
  background: transparent;
  pointer-events: none;
  user-select: none;
}

/* webkit-контролы — в ноль */
.art::-webkit-media-controls,
.art::-webkit-media-controls-enclosure{ display:none !important; }

/* анти-мерцание */
.hide{ opacity:0; visibility:hidden; }
.show{ opacity:1; visibility:visible; transition:opacity .2s ease; }

/* Плашка */
.pill{
  position:absolute; z-index:2; padding:8px 14px;
  background: linear-gradient(180deg, rgba(172,129,255,.18), rgba(172,129,255,.05));
  color:#7C5CFF; border:1px solid rgba(124,92,255,.35);
  border-radius:999px; font-size:14px; font-weight:600; letter-spacing:-.01em;
  backdrop-filter: blur(6px); white-space:nowrap; transform: rotate(-8deg);
  box-shadow:0 6px 14px rgba(124,92,255,.22);
}

/* ===== Адаптив карточки ===== */

/* широкие планшеты/ноутбуки */
@media (max-width:1180px){
  .card{ max-width:none; height:190px; }
}

/* узкие планшеты (но ещё не мобилка) */
@media (max-width:820px){
  .card{ height:184px; }
  .title{ max-width:240px; }
}

/* мобилка — как по макету 390 */
@media (max-width:640px){
  .card{ width:100%; height:168px; padding:24px 16px 24px 24px; border-radius:16px; }
  .num{ top:24px; left:24px; width:30px; height:30px; }
  .title{ left:24px; bottom:24px; font-size:16px; max-width:220px; }
  .art{
    width: var(--mobile-art-width, min(var(--art-width, 9999px), 62%));
  }
}
</style>
