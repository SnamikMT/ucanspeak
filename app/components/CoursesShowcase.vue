<template>
  <section :class="$style.wrap">
    <div class="container">
      <!-- Заголовок -->
      <header :class="$style.head">
        <h2 :class="$style.title">
          <span :class="$style.brand">Ucanspeak</span>
          — лёгкий способ<br>заговорить на английском
        </h2>

        <!-- Плашка (перекрывает белый блок) -->
        <div :class="$style.note">
          <p :class="$style.noteText">
            Полноценная система разговорной практики:<br>
            <span :class="$style.line2">
              интерактивные уроки + аудиотренажер
              <!-- Обводка второй строки (натуральный размер, без поворота) -->
              <img :class="$style.underline" :src="underline" alt="" aria-hidden="true" />
            </span>
          </p>
          <img :class="$style.pin" :src="pin" alt="" aria-hidden="true" />
        </div>
      </header>

      <!-- Белый блок 1390x540 -->
      <div :class="$style.panel">
        <!-- Левая колонка: 340 ширина; отступы панели по 30; gap 20 -->
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
              <li><mark>Школьный курс</mark>: 400+ уроков, грамматика со 2 по 11 класс</li>
              <li><mark>Взрослый курс</mark>: 170+ уроков, 4 уровня</li>
              <li><mark>Туризм</mark>: 180+ уроков, 2 уровня</li>
            </ul>
          </div>

          <!-- Кнопка 340x46 -->
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

        <!-- Правый холст: позиции строго от панели 1390x540 -->
        <div :class="$style.canvas">
          <!-- 1-я картинка -->
          <img :src="talk" alt="" :class="$style.cardImg" :style="{ left: '438px', top: '152px', zIndex: 1 }" />
          <!-- место под индивидуальный SVG-оверлей 1-й (если появится): 
          <img :src="decorTalk" alt="" :class="$style.overlay" style="left:438px; top:152px; z-index:2"> -->

          <!-- 2-я картинка -->
          <img :src="school" alt="" :class="$style.cardImg" :style="{ left: '735px', top: '27px',  zIndex: 2 }" />
          <!-- место под индивидуальный SVG-оверлей 2-й:
          <img :src="decorSchool" alt="" :class="$style.overlay" style="left:735px; top:27px; z-index:3"> -->

          <!-- 3-я картинка (поверх второй) -->
          <img :src="adult" alt="" :class="$style.cardImg" :style="{ left: '980px', top: '198px', zIndex: 4 }" />
          <!-- место под индивидуальный SVG-оверлей 3-й:
          <img :src="decorAdult" alt="" :class="$style.overlay" style="left:980px; top:198px; z-index:5"> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import pin       from '@/assets/img/pin.svg'         // 104x104
import underline from '@/assets/img/underline.svg'   // подчёркивание второй строки (натуральный размер)
import talk      from '@/assets/img/course-talk.svg'
import school    from '@/assets/img/course-school.svg'
import adult     from '@/assets/img/course-adult.svg'

// Если появятся отдельные SVG-обводки для каждой картинки — раскомментируй:
// import decorTalk   from '@/assets/img/decor-talk.svg'
// import decorSchool from '@/assets/img/decor-school.svg'
// import decorAdult  from '@/assets/img/decor-adult.svg'
</script>

<style module>
/* Секция */
.wrap{ background:#E9EFF7; padding:36px 0 64px; }

/* Заголовок */
.head{ position:relative; text-align:center; margin-bottom:0; }
.title{
  margin:0 0 51px 0; /* как у тебя */
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-0.05em;
  color:#2C2C2C;
}
.brand{
  display:inline-block;
  background:#FFD249;
  padding:.1em .3em;
  border-radius:10px;
  transform: rotate(1.51deg); /* наклон highlight в другую сторону */
}

/* Плашка под заголовком — опущена ещё на 10px (с 16px до 26px) */
.note{
  position:relative;
  display:inline-block;
  width:555px; height:96px;
  background:#fff;
  border-radius:10px;
  box-shadow: 3px 4px 9px rgba(0,0,0,.25); /* #00000040 25%, x3 y4 blur9 */
  transform: translateY(26px) rotate(5.26deg); /* ↓ на 10px */
  padding:16px 24px 14px 24px;
  text-align:left;
  z-index:3; /* поверх панели и картинок */
}
.noteText{
  margin:0;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:20px;
  line-height:1.3;
  letter-spacing:-0.03em;
  color:#2C2C2C;
}
.line2{ position:relative; display:inline-block; }
.underline{
  position:absolute; left:0; bottom:-24px; /* чуть ниже и БЕЗ поворота */
  pointer-events:none;
}
.pin{
  position:absolute; right:-22px; top:-28px;
  width:104px; height:104px;
  filter: drop-shadow(0 8px 14px rgba(0,0,0,.18));
  pointer-events:none;
}

/* ПАНЕЛЬ 1390x540 — центрируем, внутренние отступы 30, gap 20 */
.panel{
  width:1390px; height:540px;
  margin:0 auto;                         /* центр */
  background:#fff;
  border-radius:20px;
  padding:30px;                          /* по краям 30px */
  box-shadow:0 12px 32px rgba(16,24,40,.08);
  position:relative;                     /* базис для абсолютных координат картинок */
  display:grid;
  grid-template-columns: 340px 1fr;      /* слева 340px колонка */
  column-gap:20px;                       /* между колонками 20px */
  align-items:start;
  z-index:1;                             /* ниже плашки */
}

/* Левая колонка: карточки 340 шириной, между собой 20, отступы 30 обеспечены паддингом панели */
.left{
  width:340px;
  display:flex; flex-direction:column; gap:20px;
}
.item{
  width:340px;
  background:#F7F9FE;
  border:2px solid #EAEEF7;
  border-radius:12px;
  padding:16px 18px;
  box-sizing:border-box;
}
.itemTitle{
  display:block; color:#2C2C2C;
  font-family: Inter, sans-serif;
  font-weight:600; font-size:18px;
  line-height:1.3; letter-spacing:-0.03em;
  margin-bottom:4px;
}
.itemText,
.itemList{
  font-family: Inter, sans-serif;
  font-weight:500; font-size:16px;
  line-height:1.3; letter-spacing:-0.03em;
  color:#2C2C2C;
}
.itemList{ margin:8px 0 0 0; padding:0; list-style:none; }
.itemList li{ margin:.25em 0; }
.item mark{
  background: linear-gradient(#fff 60%, #FFE58A 60% 88%, transparent 88%);
  border-radius:6px; padding:0 .22em; font-weight:500;
}

/* Кнопка 340x46 */
.demoBtn{
  width:340px; height:46px;
  background:#B87EFF; color:#fff; text-decoration:none;
  border-radius:12px; display:flex; align-items:center; justify-content:space-between;
  padding:0 5px 0 16px; margin-top:0;
  box-shadow:0 8px 22px rgba(184,126,255,.25);
}
.demoBtn span{
  font-family: Inter, sans-serif;
  font-weight:600; font-size:16px;
  line-height:1.3; letter-spacing:-0.03em;
}
.demoBtn i{
  width:36px; height:36px; border-radius:10px; background:#fff;
  display:grid; place-items:center; flex:0 0 36px;
}

/* Холст картинок: абсолютные координаты от .panel (1390x540), без поворотов; ПОД плашкой */
.canvas{
  position:absolute; inset:0;           /* совпадает с панелью */
  z-index:1;                            /* ниже плашки */
}
.cardImg{
  position:absolute; display:block;
  width:auto; height:auto;              /* натуральный размер SVG */
  filter: drop-shadow(0 20px 36px rgba(16,24,40,.12));
  transform: none;                      /* никаких поворотов */
}

/* Оверлеи (если будут индивидуальные SVG для карточек) */
.overlay{
  position:absolute; display:block; pointer-events:none;
  width:auto; height:auto;
}

/* Адаптив-заглушка (по макету фикс 1390x540) */
@media (max-width: 1500px){
  /* При необходимости можно включить масштабирование панели и координат картинок */
}
</style>
