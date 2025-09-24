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
  margin:0 0 51px 0;
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
  position:absolute; left:0; bottom:-24px;
  pointer-events:none;
}
.pin{
  position:absolute; right:-22px; top:-28px;
  width:104px; height:104px;
  filter: drop-shadow(0 8px 14px rgba(0,0,0,.18));
  pointer-events:none;
}

/* ПАНЕЛЬ (десктоп 1390x540) */
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
}

/* Левая колонка */
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

/* Кнопка */
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

/* Холст картинок (десктоп) */
.canvas{
  position:absolute; inset:0;
  z-index:1;
}
.cardImg{
  position:absolute; display:block;
  width:auto; height:auto;
  filter: drop-shadow(0 20px 36px rgba(16,24,40,.12));
  transform:none;
}

/* Оверлеи */
.overlay{
  position:absolute; display:block; pointer-events:none;
  width:auto; height:auto;
}

/* =========================
   А Д А П Т И В
   ========================= */

/* Лэптопы/планшеты (≤1200px) — панель резиновая, без фиксированных размеров */
@media (max-width: 1200px){
  .title{ font-size:48px; }
  .note{
    width:520px; height:auto;
    transform: translateY(22px) rotate(4deg);
  }
  .underline{ bottom:-20px; }
  .pin{ right:-10px; top:-20px; width:84px; height:84px; }

  .panel{
    width:100%; height:auto;
    max-width:1040px;
    padding:24px;
    grid-template-columns: 320px 1fr;
    margin:0 24px;            /* поля внутри контейнера */
  }
  .left{ width:100%; }
  .item{ width:100%; }
  .demoBtn{ width:100%; }
  /* картинкам дадим “подложку”, но остаёмся в абсолюте до следующего брейкпоинта */
  .canvas{ position:relative; height:520px; border-radius:16px; }
}

/* Планшеты/большие телефоны (≤992px) — одна колонка, картинки уходят в сетку */
@media (max-width: 992px){
  .title{ font-size:40px; }
  .note{
    width:min(640px, 92vw);
    transform: translateY(18px) rotate(2.5deg);
    padding:14px 18px;
  }
  .noteText{ font-size:18px; }
  .underline{ bottom:-16px; }
  .pin{ display:none; } /* убираем значок-гвоздик, чтобы не мешал */

  .panel{
    max-width:780px;
    margin:0 auto;
    padding:20px;
    grid-template-columns: 1fr;      /* одна колонка */
    row-gap:16px;
  }
  .left{
    width:100%;
    gap:14px;
  }
  .item{ padding:14px 16px; }
  .itemTitle{ font-size:17px; }
  .itemText,.itemList{ font-size:15px; }

  /* Холст перестаёт быть абсолютным: делаем простой грид */
  .canvas{
    position:relative;
    inset:auto;
    height:auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:12px;
  }
  .cardImg{
    position:static;
    width:100%;
    height:auto;
    filter: drop-shadow(0 10px 20px rgba(16,24,40,.12));
  }

  .demoBtn{
    height:48px;
    padding:0 8px 0 16px;
  }
  .demoBtn span{ font-size:15px; }
}

/* Мобилки (≤600px) — компактная типографика, картинки в один столбец */
@media (max-width: 600px){
  .wrap{ padding:28px 0 44px; }

  .title{
    font-size:28px;
    line-height:1.02;
    margin:0 0 32px 0;
    letter-spacing:-0.04em;
  }
  .brand{ border-radius:8px; }

  .note{
    width:auto;
    max-width:calc(100% - 32px); /* визуальные поля */
    transform: translateY(12px) rotate(1.2deg);
    padding:12px 14px 12px 14px;
    box-shadow: 0 4px 10px rgba(0,0,0,.18);
  }
  .noteText{ font-size:16px; line-height:1.28; }
  .underline{ bottom:-12px; max-width:100%; height:auto; }

  .panel{
    margin:0 16px;
    padding:16px;
    border-radius:16px;
    box-shadow:0 8px 22px rgba(16,24,40,.06);
    row-gap:14px;
  }
  .left{ gap:12px; }
  .item{ padding:12px 12px; border-radius:10px; }
  .itemTitle{ font-size:16px; margin-bottom:2px; }
  .itemText,.itemList{ font-size:14px; }
  .itemList li{ margin:.2em 0; }

  .demoBtn{
    width:100%; height:44px; border-radius:10px;
  }
  .demoBtn i{ width:32px; height:32px; border-radius:8px; }

  /* Картинки — в один столбец */
  .canvas{
    grid-template-columns: 1fr;
    gap:10px;
  }
}

/* Очень узкие (≤360px) — ещё чуть компактнее */
@media (max-width: 360px){
  .title{ font-size:24px; }
  .noteText{ font-size:15px; }
  .panel{ padding:14px; }
  .itemTitle{ font-size:15px; }
  .itemText,.itemList{ font-size:13.5px; }
}

/* Адаптив-заглушка (по макету фикс 1390x540) */
@media (max-width: 1500px){
  /* масштабирование панели и координат картинок больше не требуется,
     т.к. ниже 1200px переходим на резиновую/мобильную компоновку */
}
</style>