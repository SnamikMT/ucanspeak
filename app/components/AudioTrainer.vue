<template>
  <section :class="$style.wrap">
    <div class="container">
      <!-- Верхний белый блок -->
      <div :class="$style.top">
        <!-- Заголовок + описание внутри белого блока -->
        <header :class="$style.head">
          <h2 :class="$style.title">
            <span :class="$style.hl">Аудиотренажер</span> Ucanspeak
          </h2>
          <p :class="$style.kicker">Слушаю → Повторяю → Говорю — работает на 100%</p>
        </header>

        <!-- Карточки/видео (отступ сверху 50px от описания) -->
        <div :class="$style.grid">
          <!-- Лево: постер 330 -->
          <div :class="$style.video">
            <img :src="poster" alt="Демо аудиотренажера" :class="$style.poster" />
            <!-- Play 94×50 по центру -->
            <button type="button" :class="$style.play" aria-label="Смотреть видео">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7-11-7z" fill="white"/>
              </svg>
            </button>

            <!-- Наклейка 390×82, rotate +5.26° -->
            <div :class="$style.sticky">
              <span :class="$style.stickyText">
                Смотрите видео, как<br>заниматься на аудиотренажере
              </span>
              <img :class="$style.pin" :src="pin" alt="" aria-hidden="true" />
            </div>
          </div>

          <!-- Право: две карточки 330 -->
          <div :class="$style.right">
            <article :class="$style.info">
              <h3>Это удобно</h3>
              <p>
                Говорите по-английски, занимаясь спортом, за рулём автомобиля
                или прогуливаясь в парке.
              </p>
            </article>
            <article :class="$style.info">
              <h3>Это эффективно</h3>
              <p>
                Просто повторяйте фразы за диктором — и сами не заметите,
                как легко начнёте понимать английскую речь и уверенно говорить.
              </p>
            </article>
          </div>
        </div>

        <!-- CTA внутри белого блока -->
        <div :class="$style.ctaRow">
          <a href="#" :class="$style.cta">
            <span>Бесплатный демоурок без регистрации</span>
            <i aria-hidden="true">
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                <path d="M1 10L11 1M11 1H4.5M11 1V7.5"
                      stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </i>
          </a>
        </div>
      </div>

      <!-- Нижние 3 карточки (каждая со своим SVG) -->
      <div :class="$style.features">
        <div :class="$style.feature">
          <img :src="iconGrammar" alt="" :class="$style.ficon" />
          <h4>Аудиоуроки из раздела «Грамматика»</h4>
          <p>Научат использовать основные грамматические конструкции в речи.</p>
        </div>

        <div :class="$style.feature">
          <img :src="iconTravel" alt="" :class="$style.ficon" />
          <h4>Аудиоуроки из раздела «Туризм»</h4>
          <p>Помогут запомнить самые нужные фразы для путешествий.</p>
        </div>

        <div :class="$style.feature">
          <img :src="iconTime" alt="" :class="$style.ficon" />
          <h4>Каждый урок длится не более 15 минут</h4>
          <p>Состоит из аудиоуроков и интерактивного теста для самоконтроля.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* подставь финальные файлы */
import poster      from '@/assets/img/audio-poster.png'
import pin         from '@/assets/img/pin.svg'
import iconGrammar from '@/assets/img/feature-grammar.svg'
import iconTravel  from '@/assets/img/feature-travel.svg'
import iconTime    from '@/assets/img/feature-time.svg'
</script>

<style module>
/* Секция */
.wrap{ background:#EEF2F7; padding:0 0 36px; }

/* Верхний белый блок */
.top{
  background:#fff;
  border-radius:20px;
  box-shadow:0 12px 32px rgba(16,24,40,.08);
  padding:0 24px 0; /* вертикали дадим через head/grid/ctaRow */
}

/* Заголовок и описание ВНУТРИ блока */
.head{
  text-align:center;
  padding-top:58px; /* сверху 58 */
}
.title{
  margin:0;
  font-family: Inter, sans-serif;
  font-weight:500;               /* Medium */
  font-size:55px;
  line-height:.95;               /* 95% */
  letter-spacing:-0.05em;        /* -5% */
  color:#2C2C2C;
}
.hl{
  display:inline-block; background:#FFD249; padding:.06em .28em; border-radius:10px;
  transform: rotate(1.51deg);
}
.kicker{
  margin-top:35px;               /* 35 между h2 и описанием */
  margin-bottom:0;
  font-family:Inter, sans-serif; font-weight:500;
  font-size:16px; line-height:1.3; letter-spacing:-0.01em; color:#2C2C2C;
}

/* Карточки-ряд: от описания 50px */
.grid{
  margin-top:50px;               /* 50 от описания до карточек/постера */
  display:grid; grid-template-columns: minmax(540px, 680px) 1fr; gap:24px; align-items:start;
}

/* Видео */
.video{ position:relative; }
.poster{
  width:100%; height:330px; object-fit:cover; display:block; border-radius:14px;
}
/* Play 94×50 по центру */
.play{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:94px; height:50px; border:0; border-radius:14px; cursor:pointer;
  background:#FF8D6B; display:grid; place-items:center;
  box-shadow:0 10px 28px rgba(255,141,107,.35);
}

/* Наклейка 390×82, rotate +5.26° */
.sticky{
  position:absolute; left:70px; top:-12px;
  width:390px; height:82px; background:#fff; border-radius:12px;
  padding:12px 16px; box-shadow:3px 4px 9px rgba(0,0,0,.25);
  transform: rotate(5.26deg);
}
.stickyText{
  font-family:Inter, sans-serif; font-weight:500;
  font-size:16px; line-height:1.3; letter-spacing:-0.02em; color:#2C2C2C;
}
.pin{
  position:absolute; right:-18px; top:-26px; width:84px; height:84px;
  pointer-events:none; filter: drop-shadow(0 8px 14px rgba(0,0,0,.18));
}

/* Правые карточки */
.right{ display:grid; grid-template-columns: 1fr 1fr; gap:20px; }
.info{
  height:330px; background:#E8F0FF; border-radius:10px;
  padding:30px 24px 24px 30px; color:#2C2C2C; display:flex; flex-direction:column;
}
.info h3{
  margin:0;
  font-family:Inter, sans-serif; font-weight:600;   /* Semi Bold 18/130%/−3% */
  font-size:18px; line-height:1.3; letter-spacing:-0.03em;
}
.info p{
  margin-top:20px;
  font-family:Inter, sans-serif; font-weight:500;   /* Medium 16/130%/−3% */
  font-size:16px; line-height:1.3; letter-spacing:-0.03em;
}

/* CTA внутри белого блока */
.ctaRow{
  display:flex; justify-content:center;
  padding:40px 0;  /* сверху/снизу по 40px */
}
.cta{
  width:370px; height:46px;               /* 370×46 */
  background:#FFD249; color:#2C2C2C; text-decoration:none;
  border-radius:12px;
  display:flex; align-items:center; justify-content:space-between;
  padding:0 5px 0 16px; box-shadow:0 8px 22px rgba(255,210,73,.25);
  font-family:Inter, sans-serif; font-weight:600; font-size:16px; line-height:1.3; letter-spacing:-0.03em;
}
.cta i{
  width:36px; height:36px;              /* белый квадрат 36×36, радиус 10 */
  border-radius:10px; background:#fff;
  display:grid; place-items:center; flex:0 0 36px;
}

/* Нижние 3 карточки — без общего фона */
.features{
  margin-top:20px;
  display:grid; grid-template-columns: repeat(3, 1fr); gap:20px;
}
.feature{
  background:#fff; border-radius:12px; box-shadow:0 10px 26px rgba(16,24,40,.06);
  padding:30px; color:#2C2C2C; display:flex; flex-direction:column; gap:12px; align-items:flex-start;
}
.ficon{ display:block; width:auto; height:auto; }  /* свои SVG, нативные размеры */
.feature h4{
  margin:0;
  font-family:Inter, sans-serif; font-weight:600;  /* Semi Bold 18/130%/−3% */
  font-size:18px; line-height:1.3; letter-spacing:-0.03em;
}
.feature p{
  margin:0;
  font-family:Inter, sans-serif; font-weight:500;  /* Medium 16/130%/−3% */
  font-size:16px; line-height:1.3; letter-spacing:-0.03em;
}

/* Адаптив */
@media (max-width: 1180px){
  .grid{ grid-template-columns:1fr; }
  .right{ grid-template-columns:1fr; }
  .features{ grid-template-columns:1fr; }
}
</style>
