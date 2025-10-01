<!-- components/teachers/TeachersSteps.vue -->
<template>
  <section :class="$style.wrap">
    <div :class="$style.inner">
      <!-- Заголовок + лид (если нужно — оставляй) -->
      <header :class="$style.head">
        <h2 :class="$style.title">
          <span :class="$style.twrap">
            <span>UCANSPEAK&nbsp;–</span><br />
            <span>незаменимый&nbsp;помощник</span><br />
            <span :class="$style.hl">в&nbsp;обучении&nbsp;говорению</span>
          </span>
        </h2>
        <p :class="$style.lead">
          Внедрите методы UCANSPEAK и превзойдите конкурентов
        </p>
      </header>

      <!-- Обёртка сетки, чтобы стикер висел над всем блоком, а не над карточкой -->
      <div :class="$style.gridWrap">
        <!-- Стикер It works! (НЕ привязан ни к одной карточке) -->
        <div :class="$style.note" aria-hidden="true">
          <span :class="$style.txt">It works!</span>
          <img :src="pin" :class="$style.pin" alt="" />
        </div>

        <!-- Сетка карточек -->
        <div :class="$style.grid">
          <TeacherStepCard num="01">
            Эффективная методика многократного повторения аудиошаблонов
          </TeacherStepCard>

          <TeacherStepCard num="02">
            Метод коммуникативной грамматики
          </TeacherStepCard>

          <TeacherStepCard num="03">
            Освоение новой лексики в контексте
          </TeacherStepCard>

          <TeacherStepCard num="04">
            Аудирование со зрительной опорой
          </TeacherStepCard>

          <TeacherStepCard num="05">
            Интерактивный формат обучения
          </TeacherStepCard>

          <TeacherStepCard num="06">
            Аудиотренажер по методу Пимслера
          </TeacherStepCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TeacherStepCard from '@/components/teachers/TeacherStepCard.vue'
import pin from '@/assets/img/pin2.svg'
</script>

<style module>
/* Секция */
.wrap{ background:#E9EFF7; padding-top:140px; }
.inner{ max-width:1390px; margin:0 auto; }

/* Заголовок */
.head{ text-align:center; margin-bottom:90px; } /* 90 вместо 115 */
.title{
  position:relative;            /* ← локальный стек */
  z-index:1;
  margin:0 0 30px;
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  font-weight:500; font-size:55px; line-height:.95; letter-spacing:-.05em; color:#2C2C2C;
}
/* добавь это правило (его не было) */
.twrap{
  position:relative;            /* ← именно эта обёртка держит текст выше подложки */
  z-index:3;
}
.hl{
  position:relative; display:inline-block;
}
/* жёлтая подложка под третьей строкой — под всем текстом */
.hl::before{
  content:"";
  position:absolute;
  left:-.38em; right:-.38em;
  top:50%; transform:translateY(-50%) rotate(1.2deg);
  height:1.05em;
  background:#FFD249;
  border-radius:10px;
  box-shadow: inset 0 -2px 0 rgba(0,0,0,.06);
  z-index:-1;                   /* ← теперь видно */
}
.lead{
  margin:0 auto; max-width:620px;
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  font-weight:500; font-size:18px; line-height:1.3; letter-spacing:-.03em; color:#2C2C2C;
}

/* Обёртка сетки — якорь для стикера */
.gridWrap{
  position:relative;
  max-width:1390px;
  margin:0 auto;
}

/* Стикер — центрируем над блоком, не привязан к карточкам */
.note{
  position:absolute; left:50%; top:-34px;             /* немного выступает над блоком */
  transform:translateX(-50%) rotate(5.26deg);
  width:288px; height:80px;
  background:#fff; border-radius:12px;
  display:flex; align-items:center; padding-left:33px;
  box-shadow:3px 4px 9px rgba(0,0,0,.25);
  z-index:5; pointer-events:none;
}
.txt{
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  font-weight:500; font-size:40px; line-height:1.15; letter-spacing:-0.05em; color:#111827;
  white-space:nowrap;
}
.pin{
  position:absolute; right:-15px; top:-45px;
  width:126px; height:126px;
  transform:rotate(-9deg);
  filter:drop-shadow(0 6px 12px rgba(0,0,0,.18));
  pointer-events:none;
}

/* Сетка карточек на ПК: три колонки по 390, между — 24 */
.grid{
  display:grid;
  grid-template-columns: repeat(3, 450px);
  grid-auto-rows: 200px;               /* высота на ПК */
  gap:20px;
  justify-content:space-between;
}

/* ===== Адаптив ===== */
@media (max-width:1390px){
  .inner{ margin:0 15px; }
  .gridWrap{ margin:0 15px; }
}
@media (max-width:1200px){
  /* На планшете: две колонки по 390, центрируем; одинаковые отступы */
  .grid{
    grid-template-columns: repeat(2, 390px);
    justify-content:center;
    gap:24px;
  }
}
@media (max-width:820px){
  /* На узких планшетах/широких мобилках можно оставить 1 колонку по 390 */
  .grid{
    grid-template-columns: 390px;
    justify-content:center;
    gap:16px;
  }
}
@media (max-width:640px){
  .wrap{ padding-top:120px; }
  .title{ font-size:33px; line-height:1.02; letter-spacing:-0.04em; }
  .head{ margin-bottom:64px; }

  /* Мобилка: одна колонка, карточки 390×158, между — 16 */
  .grid{
    grid-template-columns: 390px;
    grid-auto-rows: 158px;   /* фикс высота на мобилке */
    justify-content:center;
    gap:16px;
  }

  /* Стикер компактнее, но всё ещё над блоком */
  .note{
    top:-24px;
    width:245px; height:72px;
    padding-left:18px;
  }
  .txt{ font-size:28px; }
  .pin{ width:44px; height:44px; right:-10px; top:-14px; }
}
</style>
