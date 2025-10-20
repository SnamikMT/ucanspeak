<template>
  <section :class="$style.wrap">
    <div class="container" :class="$style.container">
      <!-- ===== Заголовок ===== -->
      <header :class="$style.head">
        <!-- Desktop -->
        <h2 :class="[$style.title, $style.titleDesk]">
          <span :class="$style.brand">Ucanspeak</span>
          — легкий способ<br/>заговорить на английском
        </h2>

        <!-- Mobile (ровно 3 строки) -->
        <h2
          :class="[$style.title, $style.titleMob]"
          aria-label="Ucanspeak — лёгкий способ заговорить на английском"
        >
          <span :class="$style.mLine">
            <span :class="$style.brand">Ucanspeak</span> — лёгкий
          </span>
          <span :class="$style.mLine">способ заговорить</span>
          <span :class="$style.mLine">на английском</span>
        </h2>

        <!-- Плашка со штифтом -->
        <div :class="$style.note">
          <p :class="$style.noteText">
            Полноценная система разговорной практики:
            <br />
            <span :class="$style.line2">
              <span :class="$style.lineText">интерактивные уроки + аудиотренажер</span>
              <img :class="$style.underline" :src="underline" alt="" aria-hidden="true" />
            </span>
          </p>
          <img :class="$style.pin" :src="pin" alt="" aria-hidden="true" />
        </div>
      </header>

      <!-- ===== Панель (ПК) ===== -->
      <div :class="$style.panel">
        <!-- Левая колонка -->
        <aside :class="$style.left">
          <div :class="$style.item">
            <strong :class="$style.itemTitle">Курс английского для взрослых</strong>
            <span :class="$style.itemText">60+ интерактивных уроков</span>
          </div>

          <div :class="$style.item">
            <strong :class="$style.itemTitle">Курс английского для детей</strong>
            <span :class="$style.itemText">90+ интерактивных уроков</span>
          </div>

          <div :class="$style.item">
            <strong :class="$style.itemTitle">Тренажер по английскому + тесты</strong>
            <ul :class="$style.itemList">
              <li :class="$style.liRow">
                <span :class="$style.tag" style="--dx:-6px; --oy:-2px;">
                  <span :class="$style.tagText">Школьный курс:</span>
                  <img :src="decorSchool" :class="$style.tagUnderline" alt="" aria-hidden="true" />
                </span>
                &nbsp;400+ уроков, грамматика со 2 по 11 класс
              </li>

              <li :class="$style.liRow">
                <span :class="$style.tag" style="--dx:-4px; --oy:-2px;">
                  <span :class="$style.tagText">Взрослый курс:</span>
                  <img :src="decorSchool" :class="$style.tagUnderline" alt="" aria-hidden="true" />
                </span>
                &nbsp;170+ уроков, 4 уровня
              </li>

              <li :class="$style.liRow">
                <span :class="$style.tag" style="--dx:-2px; --oy:-2px;">
                  <span :class="$style.tagText">Туризм:</span>
                  <img :src="decorTalk" :class="$style.tagUnderline" alt="" aria-hidden="true" />
                </span>
                &nbsp;180+ уроков, 2 уровня
              </li>
            </ul>
          </div>

          <a href="#" :class="$style.demoBtn">
            <span>Бесплатный демодоступ на 14 дней</span>
            <i aria-hidden="true">
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                <path
                  d="M1 10L11 1M11 1H4.5M11 1V7.5"
                  stroke="#B87EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
              </svg>
            </i>
          </a>
        </aside>

        <!-- Правая «стенка» с карточками -->
        <div :class="$style.canvas">
          <!-- 1 -->
          <img :src="talk"   alt="" :class="$style.cardImg" :style="styleFor(0)" />
          <!-- 2 -->
          <img :src="school" alt="" :class="$style.cardImg" :style="styleFor(1)" />
          <!-- 3 -->
          <img :src="adult"  alt="" :class="$style.cardImg" :style="styleFor(2)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import pin       from '@/assets/img/pin.svg'
import underline from '@/assets/img/underline.svg'

import talk   from '@/assets/img/course-talk.png'
import school from '@/assets/img/course-school.png'
import adult  from '@/assets/img/course-adult.png'

import decorTalk   from '@/assets/img/decor-school.svg'
import decorSchool from '@/assets/img/decor-talk.svg'

/* ===== резиновое позиционирование для промежутка 641–1200 ===== */
const vw = ref(1920)
function onResize(){ vw.value = window.innerWidth || document.documentElement.clientWidth }
onMounted(()=>{ onResize(); window.addEventListener('resize', onResize, { passive:true }) })
onBeforeUnmount(()=> window.removeEventListener('resize', onResize))

type TBP = 'pc'|'m'|'t1'|'t2'
const bp = computed<TBP>(() => {
  if (vw.value <= 640) return 'm'
  if (vw.value >= 1201) return 'pc'
  return vw.value > 900 ? 't2' : 't1' // t2: 901–1200, t1: 641–900
})

/** Правимые пресеты для промежуточных диапазонов */
const PRESETS = {
  t2: [ // 901–1200
    { left:'10%', top:'140px', w:250, rot:0,   z:1 },
    { left:'32%', top:'40px',  w:250, rot:0.5, z:2 },
    { left:'58%', top:'170px', w:250, rot:-0.5,z:3 },
  ],
  t1: [ // 641–900
    { left:'15%', top:'140px', w:240, rot:0,   z:1 },
    { left:'45%', top:'60px',  w:240, rot:0.5, z:2 },
    { left:'42%', top:'320px', w:240, rot:-0.5,z:3 },
  ],
} as const

function styleFor(i: number){
  if (bp.value === 'pc' || bp.value === 'm') return {}
  const p = PRESETS[bp.value as 't1'|'t2'][i]
  if (!p) return {}
  return {
    '--card-left': String(p.left),
    '--card-top':  String(p.top),
    '--card-w':    typeof p.w === 'number' ? `${p.w}px` : String(p.w),
    '--card-rot':  `${p.rot}deg`,
    '--card-z':    String(p.z),
  } as any
}
</script>

<style module>
/* ===== Секция / контейнеры ===== */
.wrap{ padding:140px 0 0; overflow:visible; }
.container{ overflow:visible; }

/* ===== Заголовок ===== */
.head{ position:relative; text-align:center; margin-bottom:0; overflow:visible; }
.title{
  margin:0 0 51px 0;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-0.05em;
  color:#2C2C2C;
}
.titleDesk{ display:block; }
.titleMob{ display:none; }
.mLine{ display:block; }

.brand{
  position:relative; display:inline-block;
  padding:.1em .3em;
  border-radius:10px;
  z-index:0;
}
.brand::before{
  content:""; position:absolute; inset:0; background:#FFD249; border-radius:10px;
  transform:rotate(1.51deg); z-index:-1; box-shadow:inset 0 -2px 0 rgba(0,0,0,.06);
}

/* Плашка под заголовком */
.note{
  position:relative; display:inline-block; background:#fff; border-radius:10px;
  box-shadow:3px 4px 9px rgba(0,0,0,.25);
  transform:translateY(26px) rotate(5.26deg);
  padding:16px 24px 14px; text-align:left; z-index:3;
  width:555px; height:auto; overflow:visible; box-sizing:border-box;
}
.noteText{ margin:0; font:500 20px/1.3 Inter, sans-serif; letter-spacing:-.03em; color:#2C2C2C; }
.line2{ position:relative; display:inline-block; z-index:0; }
.lineText{ position:relative; z-index:1; }
.underline{
  position:absolute; left:0; bottom:-2.22em; transform: rotate(-6deg) translateY(2%);
  transform-origin:left center; height:auto; width:100%; pointer-events:none; z-index:-1;
}
.pin{
  position:absolute; right:-22px; top:-28px; width:104px; height:104px;
  filter:drop-shadow(0 8px 14px rgba(0,0,0,.18)); pointer-events:none;
}

/* ===== Панель (ПК по умолчанию) ===== */
.panel{
  width:1390px; height:540px; margin:0 auto; background:#fff; border-radius:20px; padding:30px;
  box-shadow:0 12px 32px rgba(16,24,40,.08);
  position:relative; display:grid; grid-template-columns:340px 1fr; column-gap:20px; align-items:start;
  z-index:1; overflow:visible;
}
.left{ width:370px; display:flex; flex-direction:column; gap:20px; overflow:visible; }
.item{
  width:370px; background:#F7F9FE; border:2px solid #EAEEF7; border-radius:12px; padding:16px 18px;
  box-sizing:border-box; overflow:visible;
}
.itemTitle{ display:block; color:#2C2C2C; font:600 18px/1.3 Inter, sans-serif; letter-spacing:-.03em; margin-bottom:4px; }
.itemText, .itemList{ font:500 16px/1.3 Inter, sans-serif; letter-spacing:-.03em; color:#2C2C2C; }
.itemList{ margin:8px 0 0; padding:0; list-style:none; }
.itemList li{ margin:.28em 0; line-height:1.35; }
.liRow{ position:relative; }
.tag{ position:relative; display:inline-block; z-index:0; }
.tagText{ position:relative; z-index:1; }
.tagUnderline{
  position:absolute; left:0; bottom:-0.2em; transform:translate(var(--dx,0px), var(--oy,0px));
  transform-origin:left center; width:100%; height:auto; pointer-events:none; z-index:-1;
}
.demoBtn{
  width:370px; height:46px; background:#B87EFF; color:#fff; text-decoration:none; border-radius:12px;
  display:flex; align-items:center; justify-content:space-between; padding:0 5px 0 15px; margin-top:0;
  box-shadow:0 8px 22px rgba(184,126,255,.25); font:600 16px/1.3 Inter, sans-serif; letter-spacing:-.03em;
}
.demoBtn i{ width:36px; height:36px; border-radius:10px; background:#fff; display:grid; place-items:center; flex:0 0 36px; }

/* Правая «стенка» — ПК (фиксированная, как в макете) */
.canvas{ position:absolute; inset:0; z-index:1; overflow:visible; }
.cardImg{ position:absolute; display:block; width:325px; height:auto; filter:drop-shadow(0 20px 36px rgba(16,24,40,.12)); pointer-events:none; }

/* ПК: точные позиции (вернули пиксель-перфект) */
@media (min-width:1201px){
  .cardImg:nth-child(1){ left:550px; top:152px; z-index:1; }
  .cardImg:nth-child(2){ left:735px; top:27px;  z-index:2; }
  .cardImg:nth-child(3){ left:980px; top:198px; z-index:3; }
}

/* ===== Планшеты/ноуты ≤1200: базовые уменьшения контента слева ===== */
@media (max-width:1200px){
  .title{ font-size:48px; }
  .panel{
    width:100%; height:auto; max-width:1040px;
    padding:24px; grid-template-columns:1fr; row-gap:16px; margin:0 24px; overflow:visible;
  }
  .left{ width:100%; }
  .item, .demoBtn{ width:100%; }

  .note{ transform: translateY(22px) rotate(4deg); padding:14px 18px; width:auto; max-width:700px; }
  .pin{ right:-10px; top:-20px; width:84px; height:84px; }
}

/* ===== ПРОМЕЖУТОЧНЫЕ: 901–1200px — карточки ПОД картинкой ===== */
@media (min-width:901px) and (max-width:1200px){
  .container{
    width:min(96vw, 1200px);
    margin:0 auto;
  }

  .top{
    border-radius: clamp(16px, 1.6vw, 20px);
    padding: 0 clamp(16px, 2vw, 24px) 0;
  }

  .head{
    padding-top: clamp(36px, 5vw, 58px);
  }

  .title{
    font-size: clamp(40px, 5vw, 55px);
  }

  .kicker{
    margin-top: clamp(18px, 2.4vw, 31px);
    font-size: clamp(16px, 1.8vw, 18px);
  }

  /* ГЛАВНАЯ сетка: ОДНА колонка — видео, потом карточки */
  .grid{
    margin-top: clamp(30px, 4vw, 50px);
    gap: clamp(16px, 2vw, 20px);
    grid-template-columns: 1fr;      /* ← только видео в строке */
    justify-content: center;
    align-items: start;
  }

  /* Видео — резиновое, с сохранением пропорций */
  .video{
    width: 100%;
    height: auto;
    aspect-ratio: 654 / 330;
  }
  .poster{
    width: 100%;
    height: 100%;
    border-radius: clamp(16px, 1.6vw, 20px);
    object-fit: cover;
  }

  /* Наклейка — подвинем, чтобы не наезжала */
  .sticky{
    left: clamp(20px, 6vw, 70px);
    top: clamp(-20px, -1.5vw, -8px);
    width: clamp(280px, 36vw, 390px);
    height: auto;
    padding: clamp(10px, 1.2vw, 12px) clamp(12px, 1.4vw, 16px);
    transform: rotate(5.26deg);
  }
  .stickyText{ font-size: clamp(14px, 1.6vw, 16px); line-height: clamp(18px, 2vw, 20px); }
  .underTv{ bottom: clamp(-14px, -1.2vw, -10px); }
  .pin{
    right: clamp(-10px, -1.5vw, -18px);
    top: clamp(-46px, -4vw, -58px);
    transform: scale(clamp(.8, 1.1vw, 1));
    transform-origin: top right;
  }

  /* ПРАВЫЕ карточки — теперь ПОД видео, в СТОЛБИК */
  .right{
    grid-template-columns: 1fr;      /* ← одна под другой */
    gap: clamp(14px, 2vw, 20px);
  }
  .info{
    width: 100%;
    height: auto;                     /* ← не фиксируем */
    min-height: clamp(200px, 26vw, 330px);
    border-radius: clamp(14px, 1.6vw, 20px);
    padding: clamp(20px, 2.2vw, 30px) clamp(16px, 1.8vw, 24px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .info h3{ font-size: clamp(22px, 2.6vw, 28px); }
  .info p{ font-size: clamp(14px, 1.6vw, 16px); }

  /* CTA — без переноса, с запасом по ширине */
  .ctaRow{ padding: clamp(24px, 4vw, 40px) 0; }
  .cta{
    height: 46px;
    white-space: nowrap;
    width: auto;                      /* тянется по тексту */
    padding: 0 12px 0 16px;
  }

  /* Нижние фичи — 3 в ряд остаются как на десктопе */
  .features{
    grid-template-columns: repeat(3, minmax(260px, 1fr));
    gap: clamp(14px, 2vw, 20px);
    margin-top: clamp(16px, 2vw, 20px);
  }
  .feature{
    border-radius: clamp(12px, 1.4vw, 12px);
    height: clamp(190px, 22vw, 215px);
    padding: clamp(22px, 2vw, 30px);
  }
  .ficon{ top: clamp(20px, 2vw, 30px); left: clamp(20px, 2vw, 30px); }
}


/* ===== ПРОМЕЖУТОЧНЫЕ 641–1200: резиновая «правая стенка» по пресетам ===== */
@media (min-width:641px) and (max-width:1200px){
  .panel{
    width:min(96vw, 1200px); max-width:1200px; margin:0 auto;
    padding:clamp(20px, 2vw, 30px);
    grid-template-columns: clamp(300px, 32vw, 360px) 1fr;
    column-gap:clamp(14px, 1.6vw, 20px);
    height:auto; overflow:visible;
  }

  .note{
    width:auto; max-width:min(62vw, 700px);
    padding:clamp(12px, 1.4vw, 18px) clamp(14px, 1.8vw, 24px);
    transform: translateY(22px) rotate(4.6deg);
  }
  .noteText{ font-size:clamp(16px, 1.8vw, 20px); }
  .pin{
    right:clamp(-16px, -1.2vw, -10px); top:clamp(-26px, -2.2vw, -18px);
    width:clamp(72px, 7vw, 92px); height:auto;
  }

  /* Контекст для абсолютного позиционирования */
  .canvas{
    position:relative; inset:auto; height:clamp(420px, 46vw, 540px); overflow:visible;
  }

  /* Карточки читают vars из styleFor(i) */
  .cardImg{
    position:absolute !important;
    left: var(--card-left, 60%);
    top:  var(--card-top,  120px);
    width: var(--card-w, 280px);
    height:auto;
    transform: rotate(var(--card-rot, 0deg));
    z-index: var(--card-z, 1);
    filter: drop-shadow(0 14px 26px rgba(16,24,40,.12));
    pointer-events:none;
  }
}
/* ===== Мобилка ≤640 ===== */
@media (max-width:640px){
  .wrap{ padding:120px 0 0; }
  .head{ overflow:visible; }

  .titleDesk{ display:none; }
  .titleMob{ display:block; }
  .titleMob{ margin:0 0 24px; font-size:33px; line-height:1.02; letter-spacing:-.04em; color:#2C2C2C; }
  .mLine{ display:block; }
  .brand{ border-radius:8px; }

  /* фикс 390 для головы и панели */
  .head, .panel{
    width:390px; max-width:390px; margin-left:auto; margin-right:auto; box-sizing:border-box; overflow:visible;
  }

  .note{
    display:block; width:381px; height:auto; padding:12px 14px;
    transform: translateY(50px) rotate(5.26deg); margin-left:auto; margin-right:auto;
    box-shadow:0 4px 10px rgba(0,0,0,.18);
  }
  .noteText{ font-size:14px; line-height:1.28; }
  .underline{ bottom:-2.22em; transform: rotate(-6deg) translateY(2%); }
  .pin{ width:72px; height:72px; top:-14px; right:-12px; }

  .panel{ padding:25px; border-radius:16px; box-shadow:0 8px 22px rgba(16,24,40,.06); height:auto; }

  .left{
    width:100%; display:flex; flex-direction:column; gap:12px; box-sizing:border-box; overflow:visible; margin-top:60px;
  }
  .item{ padding:12px; border-radius:10px; }
  .itemTitle{ font-size:16px; margin-bottom:2px; }
  .itemText,.itemList{ font-size:14px; }
  .itemList li{ margin:.2em 0; }
  .demoBtn{
    width:340px; max-width:340px; align-self:flex-start; height:auto; padding:5px 5px 5px 15px;
    font-size:14px; gap:10px; line-height:130%; letter-spacing:-.03em; border-radius:10px;
  }
  .demoBtn i{ width:36px; height:36px; border-radius:10px; }

  .tagUnderline{ bottom:-0.3em; transform: translate(var(--dx,0px), var(--oy,0px)); width:100%; }

  /* Мобильная стопка карточек (как было через vars) */
  .canvas{
    position:relative; width:100%; height:360px; margin-top:30px; overflow:visible;
  }
  .canvas > img{
    position:absolute; left:50% !important; top:auto !important;
    bottom:var(--mb,0px) !important;
    transform:translateX(calc(-50% + var(--mx,0px))) rotate(var(--mrot,0deg));
    width:var(--mwidth,180px) !important; height:auto !important;
  }
  /* те же значения, что были раньше в inline-стилях */
  .canvas > img:nth-child(1){ --mx:-70px; --mb:65px;  --mrot:-4deg; --mwidth:192px; }
  .canvas > img:nth-child(2){ --mx:70px;  --mb:170px; --mrot:2deg;  --mwidth:192px; }
  .canvas > img:nth-child(3){ --mx:58px;  --mb:-24px; --mrot:0deg;  --mwidth:192px; }

  .wrap, .container { overflow: visible; }
}

/* ===== DESKTOP-S: 1201–1389px — без переползания вправо ===== */
@media (min-width:1201px) and (max-width:1389px){

  .cardImg:nth-child(1){ left:650px; top:152px; z-index:1; width: 250px; }
  .cardImg:nth-child(2){ left:835px; top:27px;  z-index:2; width: 250px; }
  .cardImg:nth-child(3){ left:1080px; top:198px; z-index:3; width: 250px; }

  /* лёгкие внутренние поля контейнера (чтоб были видны отступы от краёв) */
  .container{
    /* если глобальный .container уже с паддингами — можешь убрать это */
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
  }

  /* панель тянем по вьюпорту, но не шире 1390 и центрируем */
  .panel{
    width: 100%;
    max-width: 1390px;
    margin: 0 auto;
    /* сохраняем твои паддинги/тени/радиусы из базовых правил */
  }

  /* правая «стенка» — масштаб готовой десктопной композиции */
  .canvas{
    /* фиксированная «сцена» 1390×540, притянута к правому краю панели */
    position: absolute;
    top: 0; right: 0; left: auto; bottom: auto;
    width: 1390px;
    height: 540px;

    /* коэффициент: сколько помещается внутрь ширины панели с учётом 32px внутренних полей */
    --k: clamp(0.86, calc((100vw - 32px) / 1390), 1);

    transform-origin: right top;
    transform: scale(var(--k));

    /* чтобы тени не выглядели чрезмерно при уменьшении */
    filter: none;
  }

  /* мягче тени на уменьшении (подправим сами картинки) */
  .cardImg{
    filter: drop-shadow(0 calc(20px * var(--k)) calc(36px * var(--k)) rgba(16,24,40,.12));
  }
}

/* на полном десктопе ≥1390 — оставляем твой пиксель-перфект как есть */
@media (min-width:1390px){
  .container{ padding-left: 0; padding-right: 0; } /* опционально, если в проекте так принято */
}


</style>
