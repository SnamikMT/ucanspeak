<template>
  <section :class="$style.wrap">
    <div :class="$style.panel">
      <!-- Header внутри героя -->
      <Header :inside-hero="true" />

      <!-- Левый столбец -->
      <div :class="$style.left">
        <!-- DESKTOP заголовок (Одна плашка на «для учителей и языковых школ») -->
        <h1 :class="[$style.title, $style.titleDesk]">
          <span :class="$style.line">Интерактивная платформа</span>
          <span :class="$style.line">разговорной практики английского</span>
          <span :class="$style.line">
            языка
            <span :class="[$style.hlBox, $style.hlAll]">для учителей и языковых школ</span>
          </span>
        </h1>

        <!-- MOBILE заголовок (две плашки: отдельно «для учителей» и «и языковых школ») -->
        <h1 :class="[$style.title, $style.titleMob]">
          <span :class="$style.mline">Интерактивная</span>
          <span :class="$style.mline">платформа</span>
          <span :class="$style.mline">разговорной</span>
          <span :class="$style.mline">практики английского</span>
          <span :class="[$style.mline, $style.hlBox, $style.hlFirstMob]">языка для учителей</span>
          <span :class="[$style.mline, $style.hlBox, $style.hlSecondMob]">и языковых школ</span>
        </h1>

        <p :class="$style.lead">
          Уникальный функционал платформы поможет сделать уроки незабываемыми и реализовать ваш потенциал
        </p>
      </div>

      <!-- Правый столбец: медиа (постер + видео + play) -->
      <div :class="$style.mediaBox">
        <!-- Постер — виден до первого кадра -->
        <img
          :class="[$style.mediaPoster, showPoster ? $style.visible : $style.hidden]"
          :src="poster"
          alt="Видео превью"
          draggable="false"
        />

        <!-- Видео — становится видимым только после первого кадра -->
        <video
          ref="vid"
          :class="[$style.mediaVideo, showVideo ? $style.visible : $style.hidden]"
          :poster="poster"
          muted
          playsinline
          webkit-playsinline
          preload="metadata"
          controls="false"
          controlslist="nodownload noplaybackrate noremoteplayback nofullscreen"
          disablepictureinpicture
          disableremoteplayback
          :oncontextmenu="() => false"
        >
          <source v-if="videoWebm" :src="videoWebm" type="video/webm" />
          <source v-if="videoMp4"  :src="videoMp4"  type="video/mp4" />
        </video>

        <!-- Play поверх всего -->
        <button
          type="button"
          :class="[$style.playBtn, hasStarted ? $style.hidden : $style.visible]"
          aria-label="Смотреть демо"
          @click="startVideo"
        >
          <svg width="20" height="20" viewBox="0 0 13 16" fill="none" aria-hidden="true">
            <path d="M1 1v14l11-7L1 1z" fill="#fff"/>
          </svg>
        </button>
      </div>

      <!-- CTA -->
      <a href="#" :class="$style.cta">
        <span>Попробовать бесплатно 14 дней</span>
        <i aria-hidden="true"><img src="@/assets/img/teachers/teachers-hero-arrow.svg" alt="" /></i>
      </a>

      <!-- Бэйджи (как были) -->
      <aside :class="$style.badge1">
        Интерактивные уроки <br/>по английской грамматике <br/>для взрослых и детей
      </aside>
      <aside :class="$style.badge2">
        Видео и аудио материалы, <br/>озвученные носителями языка
      </aside>
      <aside :class="$style.badge3">
        Аудиотренажер с тестами
      </aside>

      <!-- Фоны -->
      <img :class="$style.bgDesk" :src="waveDesk" alt="" aria-hidden="true" />
      <img :class="$style.bgMob"  :src="waveMob"  alt="" aria-hidden="true" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header   from '@/components/Header.vue'
import waveDesk from '@/assets/img/teachers/teachers-hero-wave.svg'
import waveMob  from '@/assets/img/teachers/teachers-hero-wave-mobile.svg'

/* видео (webm с альфой — при наличии) + mp4 фолбек + постер */
import videoWebm from '@/assets/video/hero-alpha.webm'
import videoMp4  from '@/assets/video/hero.mp4'
const poster = '/hero-girl.jpg'  /* замените на ваш постер при необходимости */

const vid = ref<HTMLVideoElement|null>(null)
const hasStarted = ref(false)
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

function startVideo(){
  const v = vid.value
  if (!v) return
  hasStarted.value = true
  v.muted = true
  v.currentTime = 0
  revealOnFirstFrame(v)
  v.play().catch(()=>{})
}
</script>

<style module>
/* фон страницы */
.wrap{
  padding:25px 0 0;
  background:#E9EFF7;
}

/* белая панель героя */
.panel{
  position:relative;
  max-width:1390px;
  margin:0 auto;
  border-radius:20px;
  background:#fff;
  overflow:hidden;
  isolation:isolate;
  box-shadow:0 12px 40px rgba(0,0,0,.06);
  min-height:800px;
  padding:0 0 64px;
}

/* Контент слева */
.left{
  padding-left:50px; padding-right:30px;
  display:flex; flex-direction:column; z-index:2;
}

/* === ТИПОГРАФИКА === */
.title{
  margin:10px 0 18px;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:50px;
  line-height:.95;
  letter-spacing:-0.06em;
  color:#2C2C2C;
}
.line{ display:block; }

.titleDesk{ display:block; }
.titleMob { display:none; }

.lead{
  margin:0 0 24px;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:18px;
  line-height:1.3;
  letter-spacing:-0.03em;
  color:#2C2C2C;
  max-width:594px;
}

/* ===== ПЛАШКИ: вращаем только фон, текст ровный ===== */
.hlBox{
  position:relative;
  display:inline-block;
  padding:.05em .35em;
  border-radius:10px;
  vertical-align:baseline;
}
.hlBox::before{
  content:"";
  position:absolute; z-index:-1;
  left:-.18em; right:-.18em; top:-.10em; bottom:-.10em;
  background:#FFD551;
  border-radius:10px;
  transform: rotate(1.51deg);
  transform-origin:left center;
  box-shadow:inset 0 -2px 0 rgba(0,0,0,.06);
}
.hlAll{} /* десктоп — одна общая плашка */

/* ===== Правый медиа-бокс ===== */
.mediaBox{
  position:absolute; bottom:50px; right:50px;
  width:320px; height:500px; border-radius:20px; overflow:hidden;
  background:#fff; box-shadow:0 18px 44px rgba(0,0,0,.10); z-index:2;
}

/* Постер и видео — стопка, видео сверху */
.mediaPoster, .mediaVideo{
  position:absolute; inset:0;
  width:100%; height:100%;
  object-fit:cover; display:block;
  border-radius:20px; background:transparent;
}
.mediaVideo{ z-index:2; }
.mediaPoster{ z-index:1; }

/* убираем контролы webkit */
.mediaVideo::-webkit-media-controls,
.mediaVideo::-webkit-media-controls-enclosure{ display:none !important; }

/* Play кнопка поверх */
.playBtn{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:94px; height:50px; border:0; border-radius:12px; background:#B87EFF; color:#fff;
  display:grid; place-items:center; box-shadow:0 10px 28px rgba(184,126,255,.45); cursor:pointer;
  z-index:3;
}

/* Плавная видимость */
.visible{ opacity:1; transition:opacity .18s ease; }
.hidden { opacity:0; transition:opacity .18s ease; pointer-events:none; }

/* CTA */
.cta{
  position:absolute; bottom:50px; left:50px;
  display:flex; align-items:center; justify-content:space-between;
  width:364px; height:64px; padding:0 10px 0 18px;
  background:#3232E9; color:#fff; text-decoration:none; border-radius:14px;
  font:600 16px/1 Inter,sans-serif; z-index:2;
}
.cta i{ width:50px; height:50px; border-radius:10px; background:#fff; display:grid; place-items:center; }
.cta i img{ width:22px; height:16px; }

/* Бэйджи */
.badgeBase{
  position:absolute; background:#EAEEF7; border-radius:10px; padding:16px 20px;
  font:500 16px/1.25 Inter,sans-serif; letter-spacing:-.03em;
  box-shadow:0 10px 24px rgba(17,24,39,.10); z-index:3;
  display:flex; align-items:center; justify-content:center; text-align:center;
}
.badge1{ composes: badgeBase; width:260px; height:103px; transform:rotate(5deg);  top:439px; left:50px; }
.badge2{ composes: badgeBase; width:283px; height:82px;  transform:rotate(-5deg); top:453px; left:375px; }
.badge3{ composes: badgeBase; width:239px; height:61px;  transform:rotate(5deg);  top:430px; left:695px; }

/* Фоны */
.bgDesk{ position:absolute; left:0; right:0; bottom:0; width:100%; height:auto; z-index:1; display:block; pointer-events:none; }
.bgMob{ display:none; pointer-events:none; }

/* ===== Адаптив ===== */
@media (max-width:1390px){
  .panel{ margin:0 15px; }
}

@media (max-width:640px){
  /* фикс ширины 390 */
  .panel{
    width:390px; max-width:390px;
    height:824px; min-height:824px;
    margin:0 auto;
  }
  .left{ padding-left:25px; padding-right:25px; }

  .title{
    font-size:33px; line-height:.95; letter-spacing:-.05em; margin-bottom:12px;
  }
  .titleDesk{ display:none; }
  .titleMob { display:block; }
  .mline{ display:block; }

  /* MOBILE плашки фикс. размеров */
  .hlFirstMob, .hlSecondMob{
    padding:0 0px; height:42px; line-height:42px; border-radius:8px;
  }
  .hlFirstMob::before{
    width:207px; height:42px;
    left:93px; top:45%;
    transform: translateY(-50%) rotate(1.51deg);
    border-radius:8px;
  }
  .hlSecondMob::before{
    width:272px; height:42px;
    left:-6px; top:45%;
    transform: translateY(-50%) rotate(1.51deg);
    border-radius:8px;
  }

  .lead{ font-size:14px; margin-top:10px; max-width:none; }

  .bgDesk{ display:none; }
  .bgMob{ display:block; position:absolute; left:0; right:0; bottom:40px; width:100%; height:auto; z-index:1; }

  /* круглый медиабокс */
  .mediaBox{
    width:162px; height:162px; border-radius:50%;
    right:15px; top:447px; left:auto; bottom:auto;
    border:3px solid #EAEEF7; overflow:hidden; background:#fff;
    box-shadow:0 14px 26px rgba(0,0,0,.10); z-index:3;
  }
  .mediaPoster, .mediaVideo{ border-radius:50%; }

  .playBtn{
    width:34px; height:34px; border-radius:50%; background:#B87EFF;
    box-shadow:0 8px 18px rgba(184,126,255,.35);
  }

  /* Мобильные бэйджи компактнее */
  .badgeBase{ padding:14px; font:500 14px/1.25 Inter,sans-serif; }
  .badge1{ width:250px; height:78px;  transform:rotate(5deg);  top:464px; left:12px; z-index:2; }
  .badge2{ width:238px; height:60px;  transform:rotate(-5deg); top:570px; left:12px; z-index:2; }
  .badge3{ width:207px; height:42px;  transform:rotate(5deg);  top:650px; left:168px; }

  .cta{
    position:absolute; left:25px; right:25px; bottom:25px;
    width:auto; height:56px; margin:0;
  }
  .cta i{ width:36px; height:36px; }
}
</style>
