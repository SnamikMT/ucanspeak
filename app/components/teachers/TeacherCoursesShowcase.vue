<template>
  <section :class="$style.wrap">
    <div class="container">
      <!-- Заголовок -->
      <header :class="$style.head">
        <!-- Десктопная версия заголовка (как было) -->
        <h2 :class="[$style.title, $style.titleDesk]">
          <span :class="$style.brand">Ucanspeak</span>
          — легкий способ<br>заговорить на английском
        </h2>

        <!-- Мобильная версия в 3 строки -->
        <h2 :class="[$style.title, $style.titleMob]" aria-label="Ucanspeak - лёгкий способ заговорить на английском">
          <span :class="$style.mLine"><span :class="$style.brand">Ucanspeak</span> — лёгкий</span>
          <span :class="$style.mLine">способ заговорить</span>
          <span :class="$style.mLine">на английском</span>
        </h2>

        <!-- Плашка (перекрывает белый блок) -->
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

      <!-- Панель 1390×540 -->
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
                <path d="M1 10L11 1M11 1H4.5M11 1V7.5"
                      stroke="#B87EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </i>
          </a>
        </aside>

        <!-- Правый холст -->
        <div :class="$style.canvas">
          <img :src="talk"   alt="" :class="$style.cardImg" :style="{ left: '450px', top: '152px', zIndex: 1 }" />
          <img :src="school" alt="" :class="$style.cardImg" :style="{ left: '735px', top: '27px',  zIndex: 2 }" />
          <img :src="adult"  alt="" :class="$style.cardImg" :style="{ left: '980px', top: '198px', zIndex: 3 }" />
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
/* Секция */
.wrap{ padding:140px 0 0; }

/* Заголовок */
.head{ position:relative; text-align:center; margin-bottom:0; }
.title{
  margin:0 0 51px 0;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-0.05em;
  color:#2C2C2C;
}
/* переключатели версий заголовка */
.titleDesk{ display:block; }
.titleMob{ display:none; }

.brand{
  display:inline-block;
  background:#FFD249;
  padding:.1em .3em;
  border-radius:10px;
  transform: rotate(1.51deg);
}

/* Плашка под заголовком */
.note{
  position:relative;
  display:inline-block;
  width:555px; height:96px;
  background:#fff;
  border-radius:10px;
  box-shadow: 3px 4px 9px rgba(0,0,0,.25);
  transform: translateY(26px) rotate(5.26deg);
  padding:16px 24px 14px 24px;
  text-align:left;
  z-index:3;
}
.noteText{
  margin:0; font-family: Inter, sans-serif; font-weight:500;
  font-size:20px; line-height:1.3; letter-spacing:-0.03em; color:#2C2C2C;
}
.line2{ position:relative; display:inline-block; z-index:0; }
.lineText{ position:relative; z-index:1; }
.underline{
  position:absolute; left:0; top:0;
  transform: translateY(calc(-5% + var(--oy, 0px))) rotate(-6deg);
  transform-origin:left center;
  width:auto; height:auto; pointer-events:none; z-index:-1;
}

/* pin */
.pin{
  position:absolute; right:-22px; top:-28px;
  width:104px; height:104px;
  filter: drop-shadow(0 8px 14px rgba(0,0,0,.18));
  pointer-events:none;
}

/* Панель 1390×540 */
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
  overflow:visible; /* важно: даём вылезти последней карточке на мобилке */
}

/* Левая колонка */
.left{ width:340px; display:flex; flex-direction:column; gap:20px; }
.item{
  width:340px; background:#F7F9FE; border:2px solid #EAEEF7;
  border-radius:12px; padding:16px 18px; box-sizing:border-box;
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

/* Овалы */
.liRow{ position:relative; }
.tag{ position:relative; display:inline-block; z-index:0; }
.tagText{ position:relative; z-index:1; }
.tagUnderline{
  position:absolute; left:0; top:64%;
  transform: translate(calc(var(--dx, 0px)), calc(-50% + var(--oy, 0px)));
  transform-origin:left center;
  width:auto; height:auto; pointer-events:none; z-index:-1;
}

/* Кнопка */
.demoBtn{
  width:340px; height:46px; background:#B87EFF; color:#fff; text-decoration:none;
  border-radius:12px; display:flex; align-items:center; justify-content:space-between;
  padding:0 5px 0 16px; margin-top:0; box-shadow:0 8px 22px rgba(184,126,255,.25);
}
.demoBtn span{
  font-family: Inter, sans-serif; font-weight:600; font-size:16px;
  line-height:1.3; letter-spacing:-0.03em;
}
.demoBtn i{
  width:36px; height:36px; border-radius:10px; background:#fff;
  display:grid; place-items:center; flex:0 0 36px;
}

/* Холст картинок (ПК) */
.canvas{ position:absolute; inset:0; z-index:1; }
.cardImg{
  position:absolute; display:block; width:325px; height:auto;
  filter: drop-shadow(0 20px 36px rgba(16,24,40,.12));
  transform:none;
}

/* ========= АДАПТИВ ========= */

/* планшеты */
@media (max-width: 1200px){
  .title{ font-size:48px; }
  .panel{
    width:100%; height:auto; max-width:1040px;
    padding:24px; grid-template-columns: 1fr; row-gap:16px; margin:0 24px;
  }
  .left{ width:100%; }
  .item, .demoBtn{ width:100%; }
  /* картинки тут пока ещё оставим как абсолюты для ПК позиций */
  .note{
    width:auto; height:auto; transform: translateY(22px) rotate(4deg);
    padding:14px 18px;
  }
  .pin{ right:-10px; top:-20px; width:84px; height:84px; }
}

/* мобильные */
@media (max-width: 600px){
  .wrap{ padding:120px 0 0; }

  /* заголовки: прячем десктопную версию, показываем мобильную в 3 строки */
  .titleDesk{ display:none; }
  .titleMob{ display:block; }
  .titleMob{ 
    margin:0 0 24px 0;
    font-size:33px; line-height:1.02; letter-spacing:-0.04em; color:#2C2C2C;
  }
  .mLine{ display:block; } /* жёстко 3 строки */

  .brand{ border-radius:8px; }

  .head{ padding:0 16px; }
  .note{
    max-width:calc(100% - 32px);
    transform: translateY(12px) rotate(1.8deg);
    padding:12px 14px;
    box-shadow: 0 4px 10px rgba(0,0,0,.18);
  }
  .noteText{ font-size:16px; line-height:1.28; }
  .underline{ bottom:-12px; max-width:100%; height:auto; }
  .pin{ width:72px; height:72px; top:-14px; right:-12px; }

  .panel{
    width:100%;
    margin:0; padding:16px; border-radius:16px;
    box-shadow:0 8px 22px rgba(16,24,40,.06);
    height:auto;               /* высоту берём по контенту */
    overflow:visible;          /* даём вылезти последней карточке */
  }
  .left{ width:100%; gap:12px; }
  .item{ width:100%; padding:12px; border-radius:10px; }
  .itemTitle{ font-size:16px; margin-bottom:2px; }
  .itemText,.itemList{ font-size:14px; }
  .itemList li{ margin:.2em 0; }
  .demoBtn{ width:100%; height:44px; border-radius:10px; }
  .demoBtn i{ width:32px; height:32px; border-radius:8px; }

   .canvas{
    position:relative;
    height:360px;       /* рабочая зона */
    margin-top:8px;
  }

  /* фикс: карточки шириной 180 на мобилке */
  .canvas > img{
    left:50% !important;
    right:auto !important;
    transform:translateX(-50%);
    width:180px !important;   /* ← фикс ширины */
    height:auto !important;
  }

  /* вертикальный стек с лёгким наездом */
  .canvas > img:nth-child(1){ bottom:140px; top:auto !important; z-index:1; }
  .canvas > img:nth-child(2){ bottom:60px;  top:auto !important; z-index:2; }
  .canvas > img:nth-child(3){ bottom:-92px; top:auto !important; z-index:3; } /* уходит на 92px ниже белого */
}
</style>
