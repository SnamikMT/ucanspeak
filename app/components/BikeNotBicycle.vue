<template>
  <section :class="$style.wrap">
    <div class="container" :class="$style.inner">
      <!-- Левый текст -->
      <div :class="$style.text">
        <h2 :class="$style.title" aria-label="Английский — это не велосипед">
          Английский —
          <br />
          это <span :class="$style.hl">не велосипед</span>
        </h2>

        <p :class="$style.lead">
          Получив однажды знания и навыки по иностранному языку, можно всё
          забыть и разучиться говорить, если не практиковаться.
        </p>
      </div>

      <!-- Бирка справа (верстка, не картинка) -->
      <aside :class="$style.note" aria-label="Карточка заметки Ucanspeak">
        <span :class="$style.pinDot" aria-hidden="true"></span>
        <strong :class="$style.noteLogo">ucanspeak</strong>
        <p :class="$style.noteText">
          UCANSPEAK — это простой и удобный способ поддерживать
          свой английский язык на уровне!
        </p>
      </aside>
    </div>

    <!-- Волна + велосипед одним SVG, прибита к низу -->
    <img :class="$style.bg" :src="bikeWave" alt="" aria-hidden="true" />
  </section>
</template>

<script setup lang="ts">
import bikeWave from '@/assets/img/bike-wave.png' // волна+велосипед в одном SVG
</script>

<style module>
/* ===== Секция ===== */
.wrap{
  margin-top:140px;                 /* общий отступ от верха секции */
  position:relative;
  background:#fff;                  /* белый фон по ТЗ */
  border-radius:20px;
  overflow:hidden;
  height:550px;                     /* фиксированная высота блока на ПК */
}

/* Внутренний слой поверх SVG */
.inner{
  height:100%;
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  padding:56px 60px;                /* внутренние отступы для текста/бирки */
  position:relative;
  z-index:2;
}

/* Текст слева */
.text{ max-width: 520px; }

.title{
  margin:0 0 18px;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif;
  font-weight:500;                  /* Medium */
  font-size:55px;
  line-height:0.95;                 /* 95% */
  letter-spacing:-0.05em;           /* -5% */
  color:#1A1A1A;
}

.hl{
  background:#FFD249;
  padding:.06em .28em;
  border-radius:10px;
  display:inline-block;
  transform: rotate(1.1deg);        /* лёгкая «наклейка» как в макетах */
}

.lead{
  margin:14px 0 0;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif;
  font-weight:500;                  /* Medium */
  font-size:18px;
  line-height:1.3;                  /* 130% */
  letter-spacing:-0.03em;           /* -3% */
  color:#2C2C2C;
  max-width: 420px;
}

/* Бирка справа */
.note{
  position:relative;
  max-width: 320px;
  background:#F7F9FE;               /* фон по ТЗ */
  border:3px solid #EAEEF7;         /* бордер 3px по ТЗ */
  border-radius:14px;
  padding:20px 22px;
  transform: rotate(-6deg);
  box-shadow: 0 10px 24px rgba(16,24,40,.12);
}

/* Кружок 19x19 в правом верхнем углу внутри бирки */
.pinDot{
  position:absolute; top:10px; right:10px;
  width:19px; height:19px; border-radius:50%;
  background:#DED7FF;
}

.noteLogo{
  display:block;
  margin:0 0 8px;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif;
  font-weight:700;
  letter-spacing:-0.01em;
  color:#1A44AA;
  font-size:20px;
}

.noteText{
  margin:0;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif;
  font-weight:500;
  font-size:15px;
  line-height:1.3;
  letter-spacing:-0.01em;
  color:#1F2937;
}

/* Волна+велосипед: растягиваем на всю ширину, прибиваем к низу */
.bg{
  position:absolute;
  left:0; right:0; bottom:0;
  width:100%;
  height:auto;
  display:block;
  z-index:1;
}

/* Мини-адаптация на планшете */
@media (max-width: 1024px){
  .inner{ padding:40px 36px; }
  .title{ font-size:46px; }
  .note{ transform: rotate(-4deg); }
}

/* Мобильная подстраховка: бирку уводим ниже текста */
@media (max-width: 760px){
  .wrap{ height:auto; padding-bottom:220px; } /* даём место под svg */
  .inner{
    flex-direction:column;
    gap:18px;
  }
  .note{ align-self:flex-start; }
}
</style>
