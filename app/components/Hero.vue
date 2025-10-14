<template>
  <section :class="$style.wrap">
    <div :class="$style.panel">
      <!-- Шапка -->
      <Header :inside-hero="true" />

      <!-- Левый столбец -->
      <div :class="$style.left">
        <h1 :class="$style.title">
          <span :class="$style.line1">
            Заговорите <span :class="$style.hl">на&nbsp;английском уже</span>
          </span>
          <span :class="$style.line2">сегодня с Ucanspeak</span>
        </h1>

        <p :class="$style.lead">
          Интерактивная платформа обучения английскому языку: выучите легко и быстро более 5000
          английских разговорных фраз, занимаясь всего 20 минут в день в любое удобное для вас время.
        </p>
      </div>

      <!-- Правый столбец: медиабокс -->
      <div
        :class="[$style.mediaBox, wideOnMobile ? $style.wideMob : '']"
        @click="onMediaClick"
      >
        <!-- Постер снизу -->
        <img
          :class="[$style.mediaPoster, showPoster ? $style.visible : $style.hidden]"
          :src="poster"
          alt="Видео превью"
          draggable="false"
        />

        <!-- Видео сверху, только после 1-го кадра -->
        <video
          ref="vid"
          :class="[$style.mediaVideo, showVideo ? $style.visible : $style.hidden]"
          :poster="poster"
          :muted="muted"
          playsinline
          webkit-playsinline
          preload="metadata"
          controlslist="nodownload noplaybackrate noremoteplayback nofullscreen"
          disablepictureinpicture
          disableremoteplayback
          :oncontextmenu="() => false"
        >
          <source v-if="videoWebm" :src="videoWebm" type="video/webm" />
          <source v-if="videoMp4"  :src="videoMp4"  type="video/mp4" />
        </video>

        <!-- Play -->
        <button
          type="button"
          :class="[$style.playBtn, hasStarted && isPlaying ? $style.hidden : $style.visible]"
          aria-label="Смотреть демо"
          @click.stop="onPlayButton"
        >
          <svg v-if="!hasStarted || !isPlaying" width="20" height="20" viewBox="0 0 13 16" fill="none" aria-hidden="true">
            <path d="M1 1v14l11-7L1 1z" fill="#fff"/>
          </svg>
        </button>

        <!-- Пауза -->
        <button
          v-if="hasStarted"
          type="button"
          :class="[$style.pauseBtn, isPlaying ? $style.visible : $style.hidden]"
          aria-label="Пауза"
          @click.stop="pauseVideo"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="3" y="2" width="4" height="12" rx="1" fill="white"/>
            <rect x="9" y="2" width="4" height="12" rx="1" fill="white"/>
          </svg>
        </button>
      </div>

      <!-- CTA -->
      <a href="#" :class="$style.cta">
        <span>Бесплатный демоурок без регистрации</span>
        <i aria-hidden="true"><img src="@/assets/img/hero-arrow.svg" alt="" /></i>
      </a>

      <!-- Бэйджи -->
      <aside :class="$style.badge1">Для тех, кто готов<br/> заниматься самостоятельно</aside>
      <aside :class="$style.badge2">Для взрослых и детей<br/>с любым уровнем языка</aside>

      <!-- Фоны -->
      <img :class="$style.bgDesk" :src="waveDesk" alt="" aria-hidden="true" />
      <img :class="$style.bgMob"  :src="waveMob"  alt="" aria-hidden="true" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Header   from '@/components/Header.vue'
import waveDesk from '@/assets/img/hero-wave.svg'
import waveMob  from '@/assets/img/hero-wave-mobile.svg'

/* Видео (горизонтальный ролик) */
import videoWebm from '@/assets/video/hero.mp4' // при наличии webm — можно заменить
import videoMp4  from '@/assets/video/hero.mp4'
const poster = '/hero-girl.jpg'

/* Переключатель для мобилки: прямоугольник вместо кружка */
const useWideMobileVideo = true

/* медиазапрос для мобилки */
const isMobile = ref(false)
let mql: MediaQueryList | null = null
function applyMq(){ isMobile.value = !!mql?.matches }
onMounted(()=>{
  mql = window.matchMedia('(max-width: 640px)')
  mql.addEventListener?.('change', applyMq)
  applyMq()
})
onBeforeUnmount(()=>{
  mql?.removeEventListener?.('change', applyMq)
})

const wideOnMobile = computed(()=> useWideMobileVideo && isMobile.value)

/* Воспроизведение */
const vid = ref<HTMLVideoElement|null>(null)
const hasStarted = ref(false)
const isPlaying  = ref(false)
const muted      = ref(false)
const showPoster = ref(true)
const showVideo  = ref(false)

function revealOnFirstFrame(v: HTMLVideoElement){
  const anyV = v as any
  if (typeof anyV.requestVideoFrameCallback === 'function'){
    anyV.requestVideoFrameCallback(() => {
      showVideo.value = true
      setTimeout(()=>{ showPoster.value = false }, 60)
    })
    return
  }
  const onTick = () => {
    if (v.currentTime > 0 && v.readyState >= 2){
      showVideo.value = true
      setTimeout(()=>{ showPoster.value = false }, 60)
      v.removeEventListener('timeupdate', onTick)
      v.removeEventListener('canplay',   onTick)
    }
  }
  v.addEventListener('timeupdate', onTick)
  v.addEventListener('canplay', onTick, { once:true })
}

async function startVideo(){
  const v = vid.value
  if (!v) return
  hasStarted.value = true
  muted.value = false
  v.muted = false
  v.volume = 1
  v.currentTime = 0
  revealOnFirstFrame(v)

  try{
    await v.play()
    isPlaying.value = true
  }catch{
    try{
      v.muted = true
      muted.value = true
      await v.play()
      isPlaying.value = true
      setTimeout(()=>{ try{ v.muted = false; muted.value = false }catch{} }, 0)
    }catch{}
  }
}
function pauseVideo(){ vid.value?.pause(); isPlaying.value = false }
function resumeVideo(){
  const v = vid.value; if (!v) return
  v.muted = false; muted.value = false
  v.play().then(()=> isPlaying.value = true).catch(()=>{})
}

/* клики */
function onMediaClick(){
  if (!hasStarted.value) startVideo()
  else isPlaying.value ? pauseVideo() : resumeVideo()
}
function onPlayButton(){ startVideo() }
</script>

<style module>
/* фон страницы */
.wrap{
  padding: 25px 0 28px;
  background:#E9EFF7;
}

/* белая панель */
.panel{
  position:relative;
  max-width:1390px;
  margin:0 auto;
  border-radius:20px;
  background:#fff;
  overflow:hidden;
  isolation:isolate;
  box-shadow:0 12px 40px rgba(0,0,0,.06);
  min-height:700px;
  padding:0 0 64px;
}

/* Контент слева */
.left{
  padding-left:50px; padding-right:30px;
  display:flex; flex-direction:column; z-index:2;
}
.title{
  margin:10px 0 18px;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:65px;
  line-height:.95;
  letter-spacing:-0.06em;
  color:#141414;
}
.line1, .line2{ display:block; }
.hl{
  position: relative;
  display: inline-block;
  padding: .06em .28em;
  border-radius: 10px;
}
.hl::before{
  content:""; position:absolute; z-index:-1;
  left:-.18em; right:-.18em; top:-.10em; bottom:-.10em;
  background:#FFD249; border-radius:10px; transform:rotate(1.51deg);
  box-shadow: inset 0 -2px 0 rgba(0,0,0,.06);
}
.lead{
  margin:0 0 24px;
  font:500 18px/1.3 Inter, sans-serif; letter-spacing:-.03em; color:#4B5563;
  max-width:594px;
}

/* Бэйджи */
.badgeBase{
  position:absolute; background:#EAEEF7; border-radius:10px; padding:16px 20px;
  font:500 16px/1.3 Inter,sans-serif; letter-spacing:-.03em;
  box-shadow:0 10px 24px rgba(17,24,39,.10); z-index:3;
}
.badge1{ composes: badgeBase; width:260px; height:74px; transform:rotate(5deg);  top:400px; left:148px; }
.badge2{ composes: badgeBase; width:241px; height:74px; transform:rotate(-5deg); top:403px; left:535px; }

/* ===== Медиабокс =====
   ДЕСКТОП: горизонтальный прямоугольник 16:9 (например 560×315)
*/
.mediaBox{
  position:absolute; bottom:50px; right:50px;
  width:560px; height:315px;            /* ← горизонтальный на ПК */
  border-radius:20px; overflow:hidden;
  background:#000; box-shadow:0 18px 44px rgba(0,0,0,.10); z-index:2;
  cursor:pointer;
}
.mediaPoster, .mediaVideo{
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  display:block; border-radius:20px; background:transparent;
}
.mediaVideo{ z-index:2; }
.mediaPoster{ z-index:1; }

/* скрыть webkit-контролы */
.mediaVideo::-webkit-media-controls,
.mediaVideo::-webkit-media-controls-enclosure{ display:none !important; }

/* Кнопки */
.playBtn{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:94px; height:50px; border:0; border-radius:12px; background:#B87EFF; color:#fff;
  display:grid; place-items:center; box-shadow:0 10px 28px rgba(184,126,255,.45); cursor:pointer;
  z-index:3; pointer-events:auto;
}
.pauseBtn{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:48px; height:48px; border:0; border-radius:50%;
  background:rgba(0,0,0,.28); display:grid; place-items:center; cursor:pointer;
  z-index:3; pointer-events:auto;
}

/* Плавная видимость */
.visible{ opacity:1; transition:opacity .18s ease; }
.hidden { opacity:0; transition:opacity .18s ease; pointer-events:none; }

/* CTA */
.cta{
  position:absolute; bottom:50px; left:50px;
  display:flex; align-items:center; justify-content:space-between;
  width:428px; height:64px; padding:0 10px 0 18px;
  background:#B87EFF; color:#fff; text-decoration:none; border-radius:14px;
  font:600 16px/1 Inter,sans-serif; box-shadow:0 12px 30px rgba(184,126,255,.35); z-index:2;
}
.cta i{ width:50px; height:50px; border-radius:10px; background:#fff; display:grid; place-items:center; }
.cta i img{ width:22px; height:16px; }

/* Фоны */
.bgDesk{ position:absolute; left:0; right:0; bottom:0; width:100%; height:auto; z-index:1; display:block; pointer-events:none;}
.bgMob{ display:none; pointer-events:none; }

/* ===== Адаптив ===== */
@media (max-width:1390px){
  .panel{ margin:0 15px; }
  /* Чтобы прямоугольник на меньших десктопах не влезал за край */
  .mediaBox{ width:520px; height:293px; }
}

@media (max-width:1024px){
  .mediaBox{ width:480px; height:270px; } /* 16:9 */
}

@media (max-width:640px){
  /* фикс 390 */
  .panel{
    width:390px; max-width:390px;
    height:680px; min-height:680px;
    margin:0 auto;
  }
  .left{ padding-left:25px; padding-right:25px; }
  .title{
    font-size:33px; line-height:.95; letter-spacing:-.05em; margin-bottom:20px;
  }
  .lead{ font-size:14px; max-width:none; text-align:left; }

  .bgDesk{ display:none; }
  .bgMob{ display:block; position:absolute; left:0; right:0; bottom:40px; width:100%; height:auto; z-index:1; }

  /* Вариант по умолчанию на мобилке (кружок) — перезапишем размеры ниже */
  .mediaBox{
    width:162px; height:162px; border-radius:50%;
    right:15px; top:345px; left:auto; bottom:auto;
    border:3px solid #EAEEF7; overflow:hidden; background:#000;
    box-shadow:0 14px 26px rgba(0,0,0,.10); z-index:3;
  }
  .mediaPoster, .mediaVideo{ border-radius:50%; }

  .playBtn{
    width:34px; height:34px; border-radius:50%; background:#B87EFF;
    box-shadow:0 8px 18px rgba(184,126,255,.35);
  }
  .pauseBtn{
    width:42px; height:42px; border-radius:50%;
    background:rgba(0,0,0,.28);
  }

  /* ГОРИЗОНТАЛЬНЫЙ на мобилке (флаг включён) */
  .wideMob{
    position:absolute;
    left:15px; right:15px; top:350px;
    width:auto; height:220px;
    border-radius:16px; border:none;
  }
  .wideMob .mediaPoster,
  .wideMob .mediaVideo{
    border-radius:16px; object-fit:cover;
  }

  /* Бэйджи и CTA */
  .badge1, .badge2{
    left:25px; right:auto; width:254px; height:auto; padding:12px 14px;
    background:#EAEEF7; box-shadow:0 8px 18px rgba(17,24,39,.10);
    z-index: 2; font-size: 14px;
  }
  .badge1{ top:53%; transform:rotate(5deg); }
  .badge2{ top:65%; transform:rotate(-5deg); }

  .cta{
    position:absolute; left:25px; right:25px; bottom:25px;
    width:340px; max-width:340px;
    height:auto; padding:5px 5px 5px 15px; gap:10px;
    font-size:14px; line-height:130%; letter-spacing:-.03em;
  }
  .cta i{ width:36px; height:36px; }
}
</style>
