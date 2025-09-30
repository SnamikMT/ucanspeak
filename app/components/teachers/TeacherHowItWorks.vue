<template>
  <section :class="$style.wrap">
    <div class="container">
      <header :class="$style.head">
        <h2 :class="$style.title">
          UCANSPEAK – незаменимый<br>помощник
          <span :class="$style.hl">в обучении говорению</span>
        </h2>
        <p :class="$style.lead">
          Внедрите методы UCANSPEAK и превзойдите конкурентов
        </p>
      </header>

      <div :class="$style.grid">
        <TeacherStepCard num="01" :class="$style.stepCard">
          Эффективная методика многократного повторения аудиошаблонов
        </TeacherStepCard>

        <!-- 02 + плашка -->
        <div :class="$style.withNote">
          <TeacherStepCard num="02" :class="$style.stepCard">
            Метод коммуникативной грамматики
          </TeacherStepCard>

          <div :class="$style.note" aria-hidden="true">
            <span :class="$style.txt">It works!</span>
            <img :src="pin" :class="$style.pin" alt="" />
          </div>
        </div>

        <TeacherStepCard num="03" :class="$style.stepCard">
          Освоение новой лексики в контексте
        </TeacherStepCard>

        <TeacherStepCard num="04" :class="$style.stepCard">
          Аудирование со зрительной опорой
        </TeacherStepCard>

        <TeacherStepCard num="05" :class="$style.stepCard">
          Интерактивный формат обучения
        </TeacherStepCard>

        <TeacherStepCard num="06" :class="$style.stepCard">
          Аудиотренажер по методу Пимслера
        </TeacherStepCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TeacherStepCard from './TeacherStepCard.vue'
import pin from '@/assets/img/pin2.svg'
</script>

<style module>
.wrap{ background:#E9EFF7; padding-top:140px; }

/* Заголовок */
.head{ text-align:center; margin-bottom:115px; }
.title{
  margin:0 0 30px;
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  font-weight:500; font-size:55px; line-height:.95; letter-spacing:-.05em; color:#2C2C2C;
}
.hl{
  display:inline-block; background:#FFD249; padding:.06em .34em; border-radius:10px;
  transform:rotate(1.5deg); /* вправо */
  box-shadow:inset 0 -2px 0 rgba(0,0,0,.06);
}
.lead{
  margin:0 auto; max-width:620px;
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  font-weight:500; font-size:18px; line-height:1.3; letter-spacing:-.03em; color:#2C2C2C;
}

/* Сетка */
.grid{
  display:grid; grid-template-columns:repeat(3,450px); grid-auto-rows:200px;
  gap:24px; justify-content:space-between; max-width:1390px; margin:0 auto;
}
.grid > *{ width:450px; height:200px; border-radius:20px; }

.withNote{ position:relative; }

/* Плашка */
.note{
  position:absolute; left:50%; top:-40px;
  transform:translateX(-50%) rotate(5.26deg);
  width:288px; height:80px;
  background:#fff; border-radius:12px;
  display:flex; align-items:center; justify-content:flex-start;
  box-shadow:3px 4px 9px rgba(0,0,0,.25);
  pointer-events:none; z-index:5;
  padding-left: 33px;
}
.txt{
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  font-weight:500; font-size:40px; line-height:1.15;
  letter-spacing:-0.05em; color:#111827;
  white-space:nowrap;
}
.pin{
  position:absolute; right:-15px; top:-45px;
  width:126px; height:126px;
  transform:rotate(-9deg);
  filter:drop-shadow(0 6px 12px rgba(0,0,0,.18));
  pointer-events:none;
}

/* Адаптив */
@media (max-width:1200px){
  .grid{ grid-template-columns:1fr; gap:20px; max-width:none; }
  .grid > *{ width:100%; height:auto; }
  .note{ top:-28px; }
}
@media (max-width:640px){
  .wrap{ padding-top:120px; }
  .title{ font-size:33px; line-height:1.02; letter-spacing:-0.04em; margin-bottom:14px; }
  .lead{ font-size:16px; }
  .note{ width:240px; height:72px; }
  .txt{ font-size:28px; }
  .pin{ width:44px; height:44px; right:-10px; top:-14px; }
}
</style>
