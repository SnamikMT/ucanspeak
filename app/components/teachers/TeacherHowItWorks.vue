<!-- components/teachers/TeachersSteps.vue -->
<template>
  <section :class="$style.wrap" id="platform">
    <div :class="$style.inner">
      <!-- Заголовок -->
      <header :class="$style.head">
        <h2 :class="$style.title">
          <span :class="$style.twrap">
            <span>UCANSPEAK&nbsp;– незаменимый&nbsp;помощник</span><br />
            <span :class="$style.hl">в&nbsp;обучении&nbsp;говорению</span>
          </span>
        </h2>
        <p :class="$style.lead">
          Внедрите методы UCANSPEAK<br></br> и превзойдите конкурентов
        </p>
      </header>

      <!-- Сетка карточек -->
      <div :class="$style.gridWrap">
        <!-- Стикер -->
        <div :class="$style.note" aria-hidden="true">
          <span :class="$style.txt">It works!</span>
          <img :src="pin" :class="$style.pin" alt="" />
        </div>

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
/* ===== Секция ===== */
.wrap {
  background:#E9EFF7;
  padding-top:140px;
}
.inner {
  max-width:1390px;
  margin:0 auto;
}

/* ===== Заголовок ===== */
.head {
  text-align:center;
  margin-bottom:90px;
}
.title {
  position:relative;
  z-index:1;
  margin:0 0 30px;
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-.05em;
  color:#2C2C2C;
}
.twrap {
  position:relative;
  z-index:3;
}
.hl {
  position:relative;
  display:inline-block;
  isolation:isolate;
}
.hl::before {
  content:"";
  position:absolute;
  left:-.38em;
  right:-.38em;
  top:62%;
  transform:translateY(-50%) rotate(1.5deg); /* теперь наклон вправо! */
  height:1.25em;
  background:#FFD249;
  border-radius:10px;
  box-shadow:inset 0 -2px 0 rgba(0,0,0,.06);
  z-index:-1;
}
.lead {
  margin:0 auto;
  max-width:620px;
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  font-weight:500;
  font-size:18px;
  line-height:1.3;
  letter-spacing:-.03em;
  color:#2C2C2C;
}

/* ===== Сетка стикера и карточек ===== */
.gridWrap {
  position:relative;
  max-width:1390px;
  margin:0 auto;
}

/* Стикер */
.note {
  position:absolute;
  left:50%;
  top:-34px;
  transform:translateX(-50%) rotate(5.26deg);
  width:288px;
  height:80px;
  background:#fff;
  border-radius:12px;
  display:flex;
  align-items:center;
  padding-left:33px;
  box-shadow:3px 4px 9px rgba(0,0,0,.25);
  z-index:5;
  pointer-events:none;
}
.txt {
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  font-weight:500;
  font-size:40px;
  line-height:1.15;
  letter-spacing:-0.05em;
  color:#2C2C2C;
  white-space:nowrap;
}
.pin {
  position:absolute;
  right:-15px;
  top:-45px;
  width:126px;
  height:126px;
  transform:rotate(-9deg);
  filter:drop-shadow(0 6px 12px rgba(0,0,0,.18));
  pointer-events:none;
}

/* ===== Сетка карточек ===== */
.grid {
  display:grid;
  grid-template-columns:repeat(3,450px);
  grid-auto-rows:200px;
  gap:20px;
  justify-content:space-between;
}

/* ===== ТЕКСТ В ПЛАШКАХ ===== */
.grid :deep(p),
.grid :deep(.text),
.grid :deep(.desc),
.grid :deep(.body),
.grid :deep(.content) {
  font-size:20px !important;
  line-height:1.3;
  letter-spacing:-.02em;
  color:#2C2C2C;
}

/* ===== Адаптив ===== */
@media (max-width:1390px) {
  .inner { margin:0 15px; }
  .gridWrap { margin:0 15px; }
}

@media (max-width:1200px) {
  .grid {
    grid-template-columns:repeat(2,390px);
    justify-content:center;
    gap:24px;
  }
}

@media (max-width:820px) {
  .grid {
    grid-template-columns:390px;
    justify-content:center;
    gap:16px;
  }
}

@media (max-width:640px) {
  .wrap { padding-top:120px; }
  .title { font-size:33px; line-height:1.02; letter-spacing:-0.04em; }
  .head { margin-bottom:64px; }

  .grid {
    grid-template-columns:390px;
    grid-auto-rows:137px;
    justify-content:center;
    gap:20px;
  }

  .note {
    top:-24px;
    width:196px;
    height:72px;
    padding-left:40px;
  }
  .txt { font-size:26px; }
  .pin { width:90px; height:90px; right:-20px; top:-20px; }
}
</style>
