<template>
  <article :class="$style.card">
    <span :class="$style.num"><b>{{ num }}</b></span>
    <h3 :class="$style.title" v-html="title"></h3>

    <!-- Видео приоритетнее картинки -->
    <video
      v-if="videoWebm || videoMp4"
      ref="vid"
      autoplay
      muted
      loop
      playsinline
      webkit-playsinline
      preload="auto"
      :poster="poster || ''"
      :class="[$style.art, ready ? $style.ready : $style.loading]"
      :style="cssVars"
      controls="false"
      controlslist="nodownload noplaybackrate noremoteplayback nofullscreen"
      disablepictureinpicture
      disableremoteplayback
      :oncontextmenu="() => false"
      @loadeddata="onReady"
      @canplay="onReady"
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
import { computed, ref } from 'vue'

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
const ready = ref(false)
function onReady(){ ready.value = true }
</script>

<style module>
.card{
  position:relative;
  width:450px; height:200px;
  background:#fff; border-radius:20px; overflow:hidden;
  padding:30px 24px 30px 30px;
  box-shadow:0 6px 18px rgba(16,24,40,.06);
}

.num{
  position:absolute; top:30px; left:30px;
  width:32px; height:32px; border-radius:999px;
  display:grid; place-items:center;
  background:#B87EFF; color:#fff;
  box-shadow:0 4px 10px rgba(184,126,255,.35);
}
.num b{ font:600 14px/1.3 Inter, sans-serif; }

.title{
  position:absolute; left:30px; bottom:30px; margin:0;
  max-width:260px; font:500 20px/1.2 Inter, sans-serif; letter-spacing:-.03em; color:#0F172A;
}

/* Общие правила для арта (img/video) */
.art{
  position:absolute;
  right: var(--art-right, 0);
  bottom: var(--art-bottom, 0);
  width: var(--art-width, auto);
  height: var(--art-height, auto);
  object-fit: contain;
  background: transparent;
  pointer-events: none;
  user-select: none;
}

/* Убираем любые встроенные контролы на WebKit */
.art::-webkit-media-controls { display:none !important; }
.art::-webkit-media-controls-enclosure { display:none !important; }

/* анти-мерцание */
.loading{ opacity:0; }
.ready{ opacity:1; transition:opacity .2s ease; }

/* доп. плашка */
.pill{
  position:absolute; z-index:2; padding:8px 14px;
  background: linear-gradient(180deg, rgba(172,129,255,.18), rgba(172,129,255,.05));
  color:#7C5CFF; border:1px solid rgba(124,92,255,.35);
  border-radius:999px; font-size:14px; font-weight:600; letter-spacing:-.01em;
  backdrop-filter: blur(6px); white-space:nowrap; transform: rotate(-8deg);
  box-shadow:0 6px 14px rgba(124,92,255,.22);
}

/* мобилка */
@media (max-width:640px){
  .card{ width:100%; height:168px; padding:24px 16px 24px 24px; }
  .num{ top:24px; left:24px; width:30px; height:30px; }
  .title{ left:24px; bottom:24px; font-size:16px; }
  .art{ width: var(--mobile-art-width, var(--art-width, auto)); }
}
</style>
