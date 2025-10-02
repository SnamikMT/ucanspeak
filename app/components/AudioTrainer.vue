<template>
  <section :class="$style.wrap">
    <div :class="$style.container">
      <!-- Верхний белый блок -->
      <div :class="$style.top">
        <!-- Заголовок + описание -->
        <header :class="$style.head">
          <h2 :class="$style.title">
            <span :class="$style.hl">Аудиотренажер</span> Ucanspeak
          </h2>
          <p :class="$style.kicker">
            <span :class="$style.kStart">Слушаю → Повторяю →</span
            ><span :class="$style.kRest"> Говорю — работает на 100%</span>
          </p>
        </header>

        <!-- Карточки/видео -->
        <div :class="$style.grid">
          <!-- Лево: видео-постер -->
          <div :class="$style.video">
            <img :src="poster" alt="Демо аудиотренажера" :class="$style.poster" />

            <!-- Play 94×50, треугольник белый 26×26 -->
            <button type="button" :class="$style.play" aria-label="Смотреть видео">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8 5v14l11-7-11-7z" fill="#fff"/>
              </svg>
            </button>

            <!-- Наклейка, rotate +5.26° -->
            <div :class="$style.sticky">
              <span :class="$style.stickyText">
                <span :class="$style.tv">
                  Смотрите <b>видео</b>
                  <img :src="underlineVideo" :class="$style.underTv" alt="" aria-hidden="true" />
                </span>, как<br>заниматься на аудиотренажере
              </span>
              <img :class="$style.pin" :src="pin" alt="" aria-hidden="true" />
            </div>
          </div>

          <!-- Право: две карточки -->
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

        <!-- CTA -->
        <div :class="$style.ctaRow">
          <a href="#" :class="$style.cta">
            <span>Бесплатный демоурок без регистрации</span>
            <i aria-hidden="true">
              <img :src="arrowSvg" alt="" />
            </i>
          </a>
        </div>
      </div>

      <!-- Нижние 3 карточки -->
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
import poster         from '@/assets/img/audio-poster.png'
import pin            from '@/assets/img/pin2.svg'
import underlineVideo from '@/assets/img/underline-video.svg'
import arrowSvg       from '@/assets/img/hero-arrow-audio.svg'

import iconGrammar    from '@/assets/img/feature-grammar.svg'
import iconTravel     from '@/assets/img/feature-travel.svg'
import iconTime       from '@/assets/img/feature-time.svg'
</script>

<style module>
/* Секция */
.wrap{ padding:140px 0 0; }

/* Локальный контейнер */
.container{
  max-width:1390px;
  margin:0 auto;
}

/* Верхний белый блок */
.top{
  background:#fff;
  border-radius:20px;
  box-shadow:0 12px 32px rgba(16,24,40,.08);
  padding:0 24px 0;
  overflow:hidden; /* чтобы ничего не вылезало за края */
}

/* Заголовок */
.head{ text-align:center; padding-top:58px; }
.title{
  margin:0;
  font-family: Inter, sans-serif;
  font-weight:500; font-size:55px; line-height:.95; letter-spacing:-0.05em; color:#2C2C2C;
}
.hl{
  display:inline-block; background:#FFD249; padding:.06em .28em; border-radius:10px;
  transform: rotate(1.51deg);
}
.kicker{
  margin-top:35px; margin-bottom:0;
  font-family:Inter, sans-serif; font-weight:500;
  font-size:16px; line-height:1.3; letter-spacing:-0.01em; color:#2C2C2C;
}
.kStart{ display:inline; }
.kRest{ display:inline; }

/* Сетка блока (desktop) */
.grid{
  margin-top:50px;
  display:grid;
  grid-template-columns: 654px 318px 318px; /* фикс из макета */
  gap:20px;
  justify-content:center;
}

/* Лево: видео */
.video{ position:relative; width:654px; height:330px; }
.poster{
  width:100%; height:100%;
  object-fit:cover; display:block; border-radius:20px;
}

/* Правые карточки */
.right{
  display:grid;
  grid-template-columns: 318px 318px;
  gap:20px;
}
.info{
  width:318px; height:330px;
  background:#E8F0FF; border-radius:20px;
  padding:30px 24px 24px 30px; color:#2C2C2C;
  display:flex; flex-direction:column;
}

/* Play */
.play{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:94px; height:50px; border:0; border-radius:14px; cursor:pointer;
  background:#FF8D6B; display:grid; place-items:center;
  box-shadow:0 10px 28px rgba(255,141,107,.35);
}

/* Наклейка */
.sticky{
  position:absolute; left:70px; top:-12px;
  width:390px; height:82px; background:#fff; border-radius:12px;
  padding:12px 16px; box-shadow:3px 4px 9px rgba(0,0,0,.25);
  transform: rotate(5.26deg);
}
.stickyText{
  position:relative;
  font-family:Inter, sans-serif; font-weight:500;
  font-size:16px; line-height:1.3; letter-spacing:-0.02em; color:#2C2C2C;
}
.tv{ position:relative; z-index:0; display:inline-block; }
.underTv{
  position:absolute; left:0; right:0; bottom:-10px;
  pointer-events:none; z-index:-1;
}

/* Пин */
.pin{ position:absolute; right:-18px; top:-58px; pointer-events:none; }

/* Текст карточек */
.info h3{
  margin:0; font-family:Inter, sans-serif; font-weight:500; font-size:30px; line-height:.95;
}
.info p{
  margin-top:20px; font-family:Inter, sans-serif; font-weight:500; font-size:16px; line-height:1.3; letter-spacing:-0.03em;
}

/* CTA */
.ctaRow{ display:flex; justify-content:center; padding:40px 0; }
.cta{
  width:370px; height:46px; background:#FFD249; color:#2C2C2C; text-decoration:none;
  border-radius:12px; display:flex; align-items:center; justify-content:space-between;
  padding:0 5px 0 16px; box-shadow:0 8px 22px rgba(255,210,73,.25);
  font-family:Inter, sans-serif; font-weight:600; font-size:16px; line-height:1.3; letter-spacing:-0.03em;
}
.cta i{
  width:36px; height:36px; border-radius:10px; background:#fff; display:grid; place-items:center; flex:0 0 36px;
}
.cta i img{ width:22px; height:16px; display:block; }

/* Нижние 3 карточки */
.features{
  margin-top:20px;
  display:grid; grid-template-columns: repeat(3, 1fr); gap:20px;
}
.feature{
  background:#fff; border-radius:12px; box-shadow:0 10px 26px rgba(16,24,40,.06);
  padding:30px; color:#2C2C2C; display:flex; flex-direction:column; gap:12px; align-items:flex-start;
  height:215px;
}
.ficon{ display:block; width:auto; height:auto; }
.feature h4{
  margin:0; font-family:Inter, sans-serif; font-weight:600; font-size:18px; line-height:1.3; letter-spacing:-0.03em;
}
.feature p{
  margin:0; font-family:Inter, sans-serif; font-weight:500; font-size:16px; line-height:1.3; letter-spacing:-0.03em;
}

/* ===== Адаптив ===== */

/* Схлопываем сетку пораньше, чтобы не было горизонтального скролла */
@media (max-width: 1024px){
  .grid{ grid-template-columns:1fr; }
  .right{ grid-template-columns:1fr; }
  .video{ width:100%; height:auto; }
  .poster{ height:auto; }
}

/* Мобилка: фикс контейнера 390px */
@media (max-width: 640px){
  .wrap{ padding:120px 0 0; }

  .container{
    width:390px;
    max-width:390px;
    margin:0 auto;
    padding:0 0;  /* без боковых отступов, ровно 390 */
    box-sizing:border-box;
  }

  .top{
    border-radius:16px;
    padding:0 16px 0;
  }

  .title{ font-size:33px; line-height:1.02; letter-spacing:-0.04em; }
  .kicker{ font-size:16px; }
  .kStart{ display:inline; }
  .kRest{ display:block; } /* перенос на вторую строку */

  /* Сетка в одну колонку */
  .grid{
    grid-template-columns:1fr;
    gap:16px;
    margin-top:24px;
  }

  /* Видео: ширина по контейнеру, фикс высота */
  .video{ width:100%; height:auto; }
  .poster{
    width:100%;
    height:260px;
    border-radius:14px;
  }

  /* Стикер и пин — внутри и не выходят за края */
  .sticky{
    left:16px; top:-6px;
    width:300px; height:auto;
    padding:10px 12px;
    transform: rotate(5.26deg);
  }
  .stickyText{ font-size:14px; line-height:1.3; letter-spacing:-.02em; }
  .underTv{ bottom:-8px; }
  .pin{ right:-6px; top:-36px; transform:scale(.72); transform-origin:top right; }

  /* Правые карточки — в столбик и компактнее */
  .info{
    width:100%; height:157px;
    border-radius:14px;
    padding:18px 16px 16px 18px;
  }
  .info h3{ font-size:22px; line-height:1; }
  .info p{ font-size:14px; }

  /* CTA — центр и ширина по контейнеру-минус-отступы */
  .ctaRow{ padding:28px 0; }
  .cta{
    width:100%;
    max-width:358px; /* 390 - 16 - 16 */
    height:46px; border-radius:12px;
  }

  /* Нижние карточки в столбик, ширина 390 */
  .features{
    grid-template-columns:1fr;
    gap:12px;
    margin-top:16px;
  }
  .feature{
    border-radius:14px;
    padding:18px;
    height:auto;
  }
}
</style>
