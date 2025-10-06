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

      <!-- ===== Панель 1390×540 (ПК) ===== -->
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
          <img
            :src="talk"
            alt=""
            :class="$style.cardImg"
            :style="{
              left: '450px', top: '152px', zIndex: 1,
              '--mx': '-70px', '--mb': '65px', '--mrot': '-4deg', '--mwidth': '180px'
            }"
          />
          <!-- 2 -->
          <img
            :src="school"
            alt=""
            :class="$style.cardImg"
            :style="{
              left: '735px', top: '27px', zIndex: 2,
              '--mx': '70px', '--mb': '170px', '--mrot': '2deg', '--mwidth': '182px'
            }"
          />
          <!-- 3 (вылазит ниже панели) -->
          <img
            :src="adult"
            alt=""
            :class="$style.cardImg"
            :style="{
              left: '980px', top: '198px', zIndex: 3,
              '--mx': '80px', '--mb': '-39px', '--mrot': '0', '--mwidth': '178px'
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import pin       from '@/assets/img/pin.svg'
import underline from '@/assets/img/underline.svg'

import talk   from '@/assets/img/course-talk.png'
import school from '@/assets/img/course-school.png'
import adult  from '@/assets/img/course-adult.png'

import decorTalk   from '@/assets/img/decor-school.svg'
import decorSchool from '@/assets/img/decor-talk.svg'
</script>

<style module>
/* ===== Секция / контейнеры — разрешаем выходить за края ===== */
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
  background:#FFD249;
  padding:.1em .3em;
  border-radius:10px;
  transform: rotate(1.51deg);
  z-index:0;
}

/* Плашка под заголовком — адаптивная */
.note{
  position:relative;
  display:inline-block;
  background:#fff;
  border-radius:10px;
  box-shadow: 3px 4px 9px rgba(0,0,0,.25);
  transform: translateY(26px) rotate(5.26deg);
  padding:16px 24px 14px 24px;
  text-align:left;
  z-index:3;

  /* десктоп размеры */
  width:555px;
  height:auto;
  overflow:visible;
  box-sizing:border-box;
}
.noteText{
  margin:0;
  font-family: Inter, sans-serif;
  font-weight:500; font-size:20px; line-height:1.3; letter-spacing:-0.03em; color:#2C2C2C;
}
/* подчёркивание — привязка к низу текста, не «улетает» */
.line2{ position:relative; display:inline-block; z-index:0; }
.lineText{ position:relative; z-index:1; }
.underline{
  position:absolute; left:0; right:auto;
  bottom:-2.22em;            /* ключ: отталкиваем от baseline */
  transform: rotate(-6deg) translateY(2%);
  transform-origin:left center;
  height:auto; width:100%;
  pointer-events:none; z-index:-1;
}

/* pin */
.pin{
  position:absolute; right:-22px; top:-28px;
  width:104px; height:104px;
  filter: drop-shadow(0 8px 14px rgba(0,0,0,.18));
  pointer-events:none;
}

/* ===== Панель (ПК) ===== */
.panel{
  width:1390px; height:540px;
  margin:0 auto;
  background:#fff;
  border-radius:20px;
  padding:30px;
  box-shadow:0 12px 32px rgba(16,24,40,.08);
  position:relative;
  display:grid;
  grid-template-columns: 340px 1fr;
  column-gap:20px;
  align-items:start;
  z-index:1;

  /* важно для видимости 3-й карточки снизу */
  overflow:visible;
}
.left{
  width:340px; display:flex; flex-direction:column; gap:20px;
  overflow:visible;
}
.item{
  width:340px; background:#F7F9FE; border:2px solid #EAEEF7;
  border-radius:12px; padding:16px 18px; box-sizing:border-box;
  overflow:visible;
}
.itemTitle{
  display:block; color:#2C2C2C; font-family: Inter, sans-serif;
  font-weight:600; font-size:18px; line-height:1.3; letter-spacing:-0.03em; margin-bottom:4px;
}
.itemText, .itemList{
  font-family: Inter, sans-serif; font-weight:500; font-size:16px;
  line-height:1.3; letter-spacing:-0.03em; color:#2C2C2C;
}
.itemList{ margin:8px 0 0 0; padding:0; list-style:none; }
.itemList li{ margin:.28em 0; line-height:1.35; }

/* Овалы в списке — подчёркивание под словом, привязано к низу текста */
.liRow{ position:relative; }
.tag{ position:relative; display:inline-block; z-index:0; }
.tagText{ position:relative; z-index:1; }
.tagUnderline{
  position:absolute; left:0;
  bottom:-0.15em;                        /* фикс уезда подчёркивания */
  transform: translate(var(--dx,0px), var(--oy,0px)) rotate(0deg);
  transform-origin:left center;
  width:100%; height:auto; pointer-events:none; z-index:-1;
}

/* Кнопка */
.demoBtn{
  width:340px; height:46px; background:#B87EFF; color:#fff; text-decoration:none;
  border-radius:10px; display:flex; align-items:center; justify-content:space-between;
  padding:0 5px 0 15px; margin-top:0; box-shadow:0 8px 22px rgba(184,126,255,.25);
  letter-spacing: -0.03em;
}
.demoBtn span{
  font-family: Inter, sans-serif; font-weight:600; font-size:16px;
  line-height:1.3; letter-spacing:-0.03em;
}
.demoBtn i{
  width:36px; height:36px; border-radius:10px; background:#fff;
  display:grid; place-items:center; flex:0 0 36px;
}

/* Правая «стенка» */
.canvas{
  position:absolute; inset:0; z-index:1;
  overflow:visible;      /* обязательно */
}
.cardImg{
  position:absolute; display:block; width:325px; height:auto;
  filter: drop-shadow(0 20px 36px rgba(16,24,40,.12));
  pointer-events:none;
}

/* ====== Планшеты ====== */
@media (max-width: 1200px){
  .title{ font-size:48px; }
  .panel{
    width:100%; height:auto; max-width:1040px;
    padding:24px; grid-template-columns: 1fr; row-gap:16px; margin:0 24px;
    overflow:visible;
  }
  .left{ width:100%; }
  .item, .demoBtn{ width:100%; }

  .note{
    transform: translateY(22px) rotate(4deg);
    padding:14px 18px;
    width:auto; max-width:700px;
  }
  .pin{ right:-10px; top:-20px; width:84px; height:84px; }
}

/* ====== Мобилка ====== */
@media (max-width: 600px){
  .wrap{ padding:120px 0 0; }
  .head{ overflow:visible; }

  /* показываем мобильный заголовок */
  .titleDesk{ display:none; }
  .titleMob{ display:block; }
  .titleMob{
    margin:0 0 24px 0;
    font-size:33px; line-height:1.02; letter-spacing:-0.04em; color:#2C2C2C;
  }
  .mLine{ display:block; }
  .brand{ border-radius:8px; }

  /* фикс ширины 390 для головы и панели */
  .head,
  .panel{
    width:390px;
    max-width:390px;
    margin-left:auto;
    margin-right:auto;
    box-sizing:border-box;
    overflow:visible;          /* важно */
  }

  /* плашка — не вылезает, до 290px, центрируем */
  .note{
    display:block;
    width: 381px;
    height:auto;
    padding:12px 14px;
    transform: translateY(50px) rotate(2.2deg);
    margin-left:auto; margin-right:auto;
    box-shadow: 0 4px 10px rgba(0,0,0,.18);
  }
  .noteText{ font-size:16px; line-height:1.28; }
  .underline{ bottom:-2.22em; transform: rotate(-6deg) translateY(2%); }
  .pin{ width:72px; height:72px; top:-14px; right:-12px; }

  /* панель */
  .panel{
    padding:25px;
    border-radius:16px;
    box-shadow:0 8px 22px rgba(16,24,40,.06);
    height:auto;
  }

  /* левая колонка (чтобы не вылазила) */
  .left{
    width:100%;
    display:flex;
    flex-direction:column;
    gap:12px;
    box-sizing:border-box;
    overflow:visible;
    margin-top: 80px;
  }
  .item,
  .demoBtn{
    width:100%;
    max-width:100%;
    box-sizing:border-box;
  }
  .demoBtn span {
    font-size: 14px;
  }
  .item{ padding:12px; border-radius:10px; }
  .itemTitle{ font-size:16px; margin-bottom:2px; }
  .itemText,.itemList{ font-size:14px; }
  .itemList li{ margin:.2em 0; }
  .demoBtn{ height:44px; border-radius:10px; }
  .demoBtn i{ width:32px; height:32px; border-radius:8px; }

  /* подчёркивания в списке — фиксируем по baseline */
  .tagUnderline{
    bottom:-0.3em;
    transform: translate(var(--dx,0px), var(--oy,0px)) rotate(-4deg);
    width:100%;
  }

  /* «стопка» карточек: хаотично снизу, третья вылезает за контейнер */
  .canvas{
    position:relative;
    width:100%;
    height:360px;
    margin-top:8px;
    overflow:visible; /* даём выйти вниз */
  }
  .canvas > img{
    position:absolute;
    left:50% !important; top:auto !important;
    bottom:var(--mb,0px) !important;
    transform:translateX(calc(-50% + var(--mx,0px))) rotate(var(--mrot,0deg));
    width:var(--mwidth,180px) !important; height:auto !important;
  }
  /* третья — вылезает сильнее (см. --mb в inline-style) */

  /* чтобы «вылазание» было видно и за пределами секции */
  .wrap, .container { overflow: visible; }
}
</style>
