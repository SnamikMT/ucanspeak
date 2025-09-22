<template>
  <section :class="$style.wrap">
    <div class="container">
      <header :class="$style.head">
        <h2 :class="$style.title">
          Разбейте языковой<br>барьер
          <span :class="$style.hl">вдребезги</span>
        </h2>
        <p :class="$style.lead">
          Начните говорить уже на первом занятии<br>
          независимо от вашего уровня языка
        </p>
      </header>

      <div :class="$style.grid">
        <!-- 1) Герой-карточка -->
        <article :class="$style.hero" :style="{ '--wave': `url(${wave})` }">
          <h3 :class="$style.heroTitle">
            Как это<br>
            <span :class="$style.bubble">работает?</span>
          </h3>
          <img :class="$style.parrot" :src="parrot" alt="" aria-hidden="true" />
        </article>

        <!-- 2–5) Шаги -->
        <StepCard num="01">
          Вы слушаете, читаете и повторяете фразы, копируя произношение
          и интонации носителей языка.
        </StepCard>

        <StepCard num="02">
          Вы смотрите видеофрагменты из фильмов и мультфильмов, переводите
          и повторяете фразы.
        </StepCard>

        <StepCard num="03">
          Вы переводите с русского на английский или с английского на русский,
          сверяясь с ответом.
        </StepCard>

        <StepCard num="04">
          Вы отрабатываете разговорные навыки до автоматизма в аудиотренажёре,
          совмещая занятия английским с повседневными делами.
        </StepCard>

        <!-- 6) Карточка с текстом и большой кнопкой -->
        <article :class="$style.ctaCard">
          <div :class="$style.ctaText">
            Видеоинструкции в демоуроках помогут сделать ваши занятия
            максимально эффективными.
          </div>

          <a href="#" :class="$style.ctaBtn">
            <span>Бесплатный демоурок без регистрации</span>
            <i aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="#41BCF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </i>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import StepCard from './StepCard.vue'
import parrot from '@/assets/img/feat-parrot2.png'
import wave from '@/assets/img/how-wave.svg'  // ваш фоновый SVG
</script>

<style module>
/* фон секции */
.wrap{ background:#E9EFF7; padding:36px 0 52px; }

/* Заголовок и описание (по Figma) */
.head{ text-align:center; margin-bottom:24px; }
.title{
  margin:0 0 12px;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  font-weight:500; font-size:55px; line-height:.95; letter-spacing:-.05em; color:#2C2C2C;
}
.hl{
  display:inline-block; background:#FFD249; padding:.06em .34em; border-radius:10px;
  transform:rotate(-1.51deg); box-shadow:inset 0 -2px 0 rgba(0,0,0,.06);
}
.lead{
  margin:0; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  font-weight:500; font-size:18px; line-height:1.3; letter-spacing:-.03em; color:#2C2C2C;
}

/* ===== Сетка: 3 колонки по 450px, 2 ряда по 200px ===== */
.grid{
  display:grid;
  grid-template-columns: repeat(3, 450px);
  grid-auto-rows: 200px;
  gap:24px;
  justify-content:space-between;
}
.grid > *{ width:450px; height:200px; }

/* ===== Герой-карточка ===== */
.hero{
  position:relative; border-radius:20px; overflow:hidden;
  background:#41BCF8; box-shadow:0 8px 22px rgba(16,24,40,.06);
  padding:30px;
}
/* приклеиваем SVG-фон к карточке */
.hero::before{
  content:""; position:absolute; inset:0; background-image: var(--wave);
  background-repeat:no-repeat; background-size:cover; background-position:center;
  opacity:1; pointer-events:none;
}
.heroTitle{
  position:relative; z-index:1;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  font-weight:800; font-size:32px; line-height:1.05; letter-spacing:-.02em; color:#fff;
}
.bubble{
  display:inline-block; background:#fff; color:#2C2C2C;
  padding:.16em .6em; border-radius:10px; transform:rotate(-1.51deg); margin-left:.25rem;
  box-shadow:0 6px 16px rgba(0,0,0,.12);
}
/* попугай ограничен по размерам, чтобы не вылезал из 200px */
.parrot{
  position:absolute; right:22px; bottom:12px;
  width:200px; max-width:42%; height:auto; object-fit:contain; pointer-events:none;
}

/* ===== CTA-карточка (последняя) ===== */
.ctaCard{
  position:relative; border-radius:20px; background:#fff; box-shadow:0 8px 22px rgba(16,24,40,.06);
  padding:30px; display:flex; flex-direction:column; justify-content:flex-end; gap:18px; overflow:hidden;
}
.ctaText{
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  font-weight:500; font-size:18px; line-height:1.3; letter-spacing:-.03em; color:#2C2C2C;
}
.ctaBtn{
  display:flex; align-items:center; justify-content:space-between;
  width:100%; height:56px; padding:0 12px 0 18px; border-radius:16px;
  background:#41BCF8; color:#fff; text-decoration:none; font-weight:700;
  box-shadow:0 6px 16px rgba(65,188,248,.35);
}
.ctaBtn i{
  display:inline-grid; place-items:center; width:40px; height:40px; border-radius:12px;
  background:#fff; margin-left:12px;
}
.ctaBtn span{ flex:1; }

/* адаптив */
@media (max-width: 1200px){
  .grid{ grid-template-columns:1fr; justify-content:initial; }
  .grid > *{ width:100%; height:auto; }
  .hero{ height:220px; }
}
</style>
