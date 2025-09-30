<template>
  <section :class="$style.wrap">
    <div :class="$style.panel">
      <!-- фон-волна -->
      <img :src="bgWave" :class="$style.wave" alt="" aria-hidden="true" />

      <!-- крупный арт справа, обрезается нижним краем карточки -->
      <div :class="$style.artBox">
        <img :src="art" :class="$style.art" alt="" />
      </div>

      <!-- текст + кнопка -->
      <div :class="$style.left">
        <h2 :class="$style.title">
          <span :class="$style.titleBg">Достаточно 1 демоурока,</span><br />
          чтобы оценить как это работает
        </h2>

        <NuxtLink to="/signup-teacher" :class="$style.cta">
          <span>Бесплатный демодоступ на 14 дней</span>
          <i aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="#2C2C2C" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import art    from '@/assets/img/teachers/cta-art.png'
import bgWave from '@/assets/img/teachers/cta-wave.svg'
</script>

<style module>
.wrap{ background:#E9EFF7; }

/* карточка */
.panel{
  /* базовые параметры */
  --pad-l: 30px;
  --pad-t: 40px;
  --pad-b: 40px;

  /* позиционирование арта */
  --art-right: 136px;  /* от правого края до арта */
  --art-w: 420px;      /* зона-резерв под арт */
  --art-scale: 1.22;   /* во сколько раз увеличить картинку */
  --art-bottom: -18px; /* опустить ниже низа, чтобы резалось */

  position:relative;
  max-width:1390px;
  margin:24px auto;
  height:259px;
  border-radius:20px;
  background:#C8BDFF;
  overflow:hidden; /* важно для обрезки по радиусу */
  box-shadow:0 10px 24px rgba(16,24,40,.08);

  /* резерв справа под арт, чтобы текст/кнопка не наехали */
  padding: var(--pad-t) calc(var(--art-right) + var(--art-w)) var(--pad-b) var(--pad-l);
}

/* волна */
.wave{
  position:absolute; inset:0;
  width:100%; height:100%;
  object-fit:cover;
  pointer-events:none;
  user-select:none;
  z-index:0;
}

/* контейнер арта (абсолютный, не влияет на поток) */
.artBox{
  position:absolute;
  right: var(--art-right);
  bottom: -250px;
  top: 0;
  width: var(--art-w);
  z-index:1;              /* над волной, под текстом */
  pointer-events:none;    /* не перехватывает клики */
}

/* сам арт: крупный, привязан к правому-нижнему краю, обрезается .panel */
.art{
  position:absolute;
  right: 0;
  bottom: var(--art-bottom);
  width:474px; height:474px;
  max-width:none; max-height:none;   /* не ограничиваем «родными» рамками */
  transform: scale(var(--art-scale));
  transform-origin: bottom right;    /* масштабируем от угла */
  object-fit:contain;
  display:block;
  filter: drop-shadow(0 10px 18px rgba(16,24,40,.15));
}

/* контент поверх */
.left{ position:relative; z-index:2; }

/* заголовок */
.title{
  margin:0 0 45px;
  font-family: Inter, system-ui, sans-serif;
  font-weight:500;
  font-size:40px;
  line-height:1.10;
  letter-spacing:-0.05em;
  color:#1A1A1A;
  max-width: 820px;
}

/* белая подложка только под первую строку — радиус 10, наклон 1° */
.titleBg{
  display:inline-block;
  background:#fff;
  padding:.08em .28em;
  border-radius:10px;
  transform: rotate(1deg);
  box-shadow: 0 2px 0 rgba(0,0,0,.04);
}

/* кнопка: Inter 600 / 16px / 130% / letter-spacing -3% */
.cta{
  display:inline-flex; align-items:center; gap:12px;
  height:40px; padding:0 12px 0 16px;
  background:#FFD249; color:#2C2C2C;
  text-decoration:none; border-radius:10px;
  font-family: Inter, system-ui, sans-serif;
  font-weight:600;
  font-size:16px;
  line-height:1.3;
  letter-spacing:-0.03em;
  box-shadow:0 8px 18px rgba(255,210,73,.30);
}
.cta i{
  width:28px; height:28px; border-radius:8px; background:#fff;
  display:grid; place-items:center; flex:0 0 28px;
}

/* адаптив */
@media (max-width: 768px){
  .panel{
    --art-w: 0px;
    --art-right: 0px;
    --art-scale: 1;         /* на мобилке без увеличения */
    --art-bottom: 0px;
    padding: 24px 16px;
    height:auto;
  }
  .artBox{
    position:static; width:auto; height:auto;
    pointer-events:none;
    margin-bottom:12px;
  }
  .art{ position:static; max-width:100%; height:auto; transform:none; filter:none; }
  .title{ font-size:28px; line-height:1.08; letter-spacing:-.04em; margin-bottom:14px; }
  .cta{ height:44px; font-size:15px; }
}
</style>
