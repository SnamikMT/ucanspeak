<template>
  <section :class="$style.wrap">
    <div :class="$style.inner">
      <!-- ================= Заголовок ================= -->
      <header :class="$style.head">
        <!-- Desktop: 2 строки -->
        <h2 :class="[$style.title, $style.titleDesk]"
            aria-label="Готовы добавить в свои занятия эксклюзивности?">
          <span :class="$style.twrap">
            <span class="l1">Готовы&nbsp;добавить&nbsp;в&nbsp;свои</span><br />
            <span class="l2">
              занятия
              <span :class="$style.hl">эксклюзивности?</span>
            </span>
          </span>
        </h2>

        <!-- Mobile: 3 строки -->
        <h2 :class="[$style.title, $style.titleMob]"
            aria-label="Готовы добавить в свои занятия эксклюзивности?">
          <span class="m1">Готовы&nbsp;добавить</span><br />
          <span class="m2">в&nbsp;свои&nbsp;занятия</span><br />
          <span class="m3" :class="$style.hl">эксклюзивности?</span>
        </h2>
      </header>

      <!-- ================= Стикер ================= -->
      <div :class="$style.note">
        <span :class="$style.noteText">
          <span :class="$style.noteL1">Забирайте&nbsp;наши</span>
          <span :class="$style.noteSpace">&nbsp;</span>
          <span :class="$style.uWrap">
            уникальные&nbsp;фишки
            <img :src="underlineSticker" :class="$style.underline" alt="" aria-hidden="true" />
          </span>
        </span>
        <img :src="pin" :class="$style.pin" alt="" aria-hidden="true" />
      </div>

      <!-- ================= Блок 1 ================= -->
      <article :class="$style.board">
        <div :class="[$style.mobNote, $style.mobNotePurple]">
          <span :class="$style.mobL1">Проводите&nbsp;занятия&nbsp;на</span>
          <span :class="$style.mobL2">
            платформе&nbsp;онлайн&nbsp;или&nbsp;офлайн
            <img :src="underlinePlatform" :class="$style.mobUnderline" alt="" aria-hidden="true" />
          </span>
        </div>

        <h3 :class="$style.boardTitle">На интерактивной платформе</h3>
        <p :class="$style.boardLead">
          Видео из фильмов и мультфильмов есть на многих ресурсах, но мы разработали систему упражнений
          для аудирования и работы с видеофрагментами, в&nbsp;которой:
        </p>

        <span :class="[$style.pill, $style.pillTop]">
          Проводите&nbsp;занятия&nbsp;на&nbsp;платформе&nbsp;онлайн&nbsp;или&nbsp;офлайн
        </span>

        <ul :class="$style.row">
          <li v-for="(it,i) in row1" :key="`r1-${i}`" :class="$style.card">
            <span :class="$style.dot"><b>{{ it.n }}</b></span>
            <p :class="$style.txt">{{ it.t }}</p>
          </li>
        </ul>
      </article>

      <!-- ================= Блок 2 ================= -->
      <article :class="$style.board">
        <div :class="[$style.mobNote, $style.mobNoteBlue]">
          <span :class="$style.mobL1">Используйте&nbsp;аудиотренажер</span>
          <span :class="$style.mobL2">
            для&nbsp;домашних&nbsp;заданий&nbsp;и&nbsp;тестирования
            <img :src="underlineTrainer" :class="$style.mobUnderline" alt="" aria-hidden="true" />
          </span>
        </div>

        <h3 :class="$style.boardTitle">В разговорном тренажере</h3>
        <p :class="$style.boardLead">
          Метод доктора Пимслера «слушаю-повторяю-говорю» работает на&nbsp;100%, но мы усовершенствовали эту методику
          и&nbsp;создали мега удобный аудиотренажер, в&nbsp;котором:
        </p>

        <span :class="[$style.pill, $style.pillBottom]">
          Используйте&nbsp;аудиотренажер&nbsp;для&nbsp;домашних&nbsp;заданий&nbsp;и&nbsp;тестирования
        </span>

        <ul :class="$style.row">
          <li v-for="(it,i) in row2" :key="`r2-${i}`" :class="$style.card">
            <span :class="$style.dot"><b>{{ it.n }}</b></span>
            <p :class="$style.txt">{{ it.t }}</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import pin                from '@/assets/img/pin2.svg'
import underlineSticker   from '@/assets/img/teachers/underline-video.svg'
import underlinePlatform  from '@/assets/img/teachers/underline-platform.svg'
import underlineTrainer   from '@/assets/img/teachers/underline-trainer.svg'

const row1 = [
  { n:'01', t:'Фразы из фильмов и\u00A0мультфильмов подобраны по грамматическим темам' },
  { n:'02', t:'Возможность просмотра видео без\u00A0субтитров и\u00A0с\u00A0субтитрами' },
  { n:'03', t:'Возможность многократно прослушивать отдельную фразу до\u00A0полного понимания' },
  { n:'04', t:'Английские субтитры с\u00A0русским переводом' },
  { n:'05', t:'Задания на\u00A0перевод с\u00A0русского на\u00A0английский' },
]
const row2 = [
  { n:'01', t:'Курсы по\u00A0грамматике и\u00A0туризму' },
  { n:'02', t:'Курсы для\u00A0детей и\u00A0взрослых' },
  { n:'03', t:'Обобщающие уроки и\u00A0интерактивные тесты' },
  { n:'04', t:'Уроки по\u00A0грамматическим и\u00A0разговорным темам' },
  { n:'05', t:'Примеры утверждений и\u00A0вопросов на\u00A0каждую грамматическую структуру' },
]
</script>

<style module>
/* секция/контейнер */
.wrap{ background:#E9EFF7; padding-top:140px; }
.inner{ max-width:1390px; margin:0 auto; }

/* ===== Заголовок ===== */
.head{ text-align:center; margin-bottom:115px; }
.title{
  position:relative; margin:0;
  font-family:Inter, system-ui, sans-serif;
  font-weight:500; font-size:55px; line-height:.95; letter-spacing:-.05em; color:#2C2C2C;
}
.twrap{
  position:relative;
  z-index:0; /* стек заголовка — плашка уходит ниже всех строк */
}
.titleDesk{ display:block; }
.titleDesk .l1,
.titleDesk .l2{ display:block; white-space:nowrap; }
.titleMob{ display:none; }

/* Плашка под словом (высокая, но всегда под всем текстом заголовка) */
.hl{ position:relative; display:inline-block; }
.hl::before{
  content:"";
  position:absolute;
  left:-.15em; right:-.36em;
  top:58%;
  transform: translateY(-50%) rotate(1.15deg);
  height:1.25em;
  background:#FFDD62;
  border-radius:10px;
  box-shadow: inset 0 -2px 0 rgba(0,0,0,.06);
  z-index:-1; /* ниже всех строк заголовка */
}

/* ===== Стикер ===== */
.note{
  position:relative; z-index:5;
  width:486px; margin:-20px auto -40px;
  transform:rotate(2.26deg);
  filter: drop-shadow(3px 4px 9px rgba(0,0,0,.25));
}
.noteText{
  position:relative;
  z-index:0; /* создаём отдельный stacking context */
  display:block;
  background:#fff; color:#2C2C2C;
  font:500 18px/1.3 Inter, system-ui, sans-serif; letter-spacing:-.02em;
  padding:16px 20px 14px; border-radius:12px;
}
/* Ключ: весь текст (все спаны) выше underline */
.noteText *:not(img){
  position:relative;
}
/* underline под ЛЮБЫМ текстом, но над белым фоном стикера */
.uWrap{ position:relative; } /* без z-index */
.underline{
  position:absolute; left:-16px; bottom:-16px; max-width:125%;
  transform:rotate(-5.26deg);
  pointer-events:none;
  z-index:-1;
}

.noteL1{ display:inline; }
.noteSpace{ display:inline; }
.pin{ position:absolute; right:0; top:-52px; z-index:6; pointer-events:none; }

/* ===== Доски ===== */
.board{
  position:relative; z-index:1;
  background:#fff; border-radius:20px;
  box-shadow:0 10px 26px rgba(16,24,40,.06);
  padding:40px 30px; margin-top:20px;
}
.boardTitle{
  margin:0 0 15px; color:#2C2C2C;
  font-family:Inter, system-ui, sans-serif; font-weight:500; font-size:35px; line-height:.95; letter-spacing:-.05em;
}
.boardLead{
  margin:0 0 30px; color:#2C2C2C;
  font-family:Inter, system-ui, sans-serif; font-weight:500; font-size:16px; line-height:1.2; letter-spacing:-.03em;
  max-width:476px;
}

/* desktop pills */
.pill{
  position:absolute; right:30px; top:40px;
  display:inline-flex; align-items:center; height:40px;
  border-radius:40px; padding:0 14px;
  font:600 14px/1 Inter, system-ui, sans-serif; letter-spacing:-.02em;
  box-shadow:0 8px 20px rgba(16,24,40,.10);
}
.pillTop{ background:#B87EFF; color:#fff; }
.pillBottom{ background:#00B0FF; color:#fff; }

/* ===== Карточки ===== — текст строго по низу */
.row{
  list-style:none; padding:0; margin:18px 0 0;
  display:grid; grid-template-columns:repeat(5,253px);
  column-gap:16px; row-gap:16px; justify-content:center;
}

/* Единый отступ между кружком и текстом по умолчанию 20px */
.card{
  --gap: 20px;

  width:253px; height:149px;
  background:#F7F9FE; border:1px solid #EAEEF7; border-radius:10px;
  padding:20px;

  /* ВАЖНО: flex-колонка + "прибить" текст вниз */
  display:flex; flex-direction:column;
}
.dot{
  width:36px; height:36px; border-radius:999px;
  display:grid; place-items:center;
  background:#C8A9FF; color:#fff;
  box-shadow:0 6px 14px rgba(124,92,255,.25);
}
/* равный зазор сверху/снизу — даём тексту auto-push и фиксированный gap */
.txt{
  margin-top:auto;              /* толкаем текст к низу */
  margin-bottom:0;

  color:#2C2C2C; text-align:left;
  font-family:Inter, system-ui, sans-serif; font-weight:500; font-size:16px; line-height:1.2; letter-spacing:-.03em;

  display:-webkit-box;
  -webkit-line-clamp:3;
  -webkit-box-orient:vertical;
  width: 110%;

}
.board:nth-of-type(2) .dot{ background:#00B0FF; box-shadow:0 6px 14px rgba(0,176,255,.25); }
.dot b{ font:600 14px/1.2 Inter, system-ui, sans-serif; letter-spacing:-.02em; font-variant-numeric:tabular-nums; }

/* mobile-only подписи над h3 */
.mobNote{ display:none; margin:0 0 40px; }
.mobL1{
  display:block; font:500 14px/1.2 Inter, system-ui, sans-serif;
  letter-spacing:-.02em; color:#2C2C2C;
}
.mobL2{
  position:relative; display:inline-block; margin-top:2px;
  font:600 14px/1.2 Inter, system-ui, sans-serif; letter-spacing:-.02em; color:#2C2C2C;
}
.mobUnderline{
  position:absolute; left:-14px; bottom:-6px; max-width:115%;
  pointer-events:none; z-index:-1; transform:rotate(-2deg);
}
.mobNotePurple .mobUnderline{ transform:rotate(-0.5deg); }
.mobNoteBlue   .mobUnderline{ transform:rotate(0deg); }

/* ===== Адаптивы ===== */
@media (max-width:1390px){ .inner{ margin:0 17px; } }
@media (max-width:1220px){
  .row{ grid-template-columns:repeat(3,253px); }
}
@media (max-width:820px){
  .title{ font-size:46px; }
  .row{ grid-template-columns:repeat(2,253px); }
  .txt {
    padding-top: 20px;
    width: 105%;
  }
}

/* Мобилка: заголовок в 3 строки + карточки по низу */
@media (max-width:640px){
  .wrap{ padding-top:120px; }

  .titleDesk{ display:none; }
  .titleMob{
    display:block;
    font-size:33px;
    line-height:1.02;
    letter-spacing:-.04em;
    position:relative;
    z-index:0; /* плашка .hl — под всеми строками */
  }
  .titleMob .m1, .titleMob .m2, .titleMob .m3{ display:block; }

  .head{ margin-bottom:90px; }

  .pin { max-width:100px; right:-17px; top:-30px; }

  .note{ width:245px; margin:-14px auto -28px; transform: rotate(5.26deg); }
  .noteText{ text-align:left; padding:12px 14px 12px; }
  .noteL1{ display:block; }
  .noteSpace{ display:none; }
  .uWrap{ display:block; }
  .underline{
    left:-10px; bottom:-12px; max-width:85%;
    transform:rotate(-4deg); z-index:0; /* всё ещё под текстом */
  }

  .board{ padding:25px; }
  .boardTitle { font-size:24px; }
  .boardLead  { font-size:14px; }

  .pill{ display:none; }
  .mobNote{ display:block; }

  .row{ grid-template-columns:1fr; }
  .card{
    width:100%; height:auto;
    padding:18px;
    --gap:18px;                 /* компактнее равный зазор на мобилке */
  }
}
</style>
