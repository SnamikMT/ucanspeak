<template>
  <section :class="$style.wrap" id="audio-trainer">
    <div :class="$style.container">
      <!-- Верхний белый блок -->
      <div :class="$style.top">
        <!-- Заголовок + описание -->
        <header :class="$style.head">
          <h2 :class="$style.title">
            <span :class="$style.hl">Аудиотренажер</span> Ucanspeak
          </h2>
          <p :class="$style.kicker">
            <span :class="$style.kStart">Слушаю → Повторяю →</span>
            <span :class="$style.kRest"> Говорю — работает на 100%</span>
          </p>
        </header>

        <!-- Карточки/видео -->
        <div :class="$style.grid">
          <!-- Лево: видео-постер -->
          <div :class="$style.video">
            <img :src="poster" alt="Демо аудиотренажера" :class="$style.poster" />

            <!-- Play -->
            <button type="button" :class="$style.play" aria-label="Смотреть видео">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8 5v14l11-7-11-7z" fill="#fff"/>
              </svg>
            </button>

            <!-- Наклейка -->
            <div :class="$style.sticky">
              <span :class="$style.stickyText">
                <span :class="$style.tv">
                  Смотрите видео
                  <img :src="underlineVideo" :class="$style.underTv" alt="" aria-hidden="true" />
                </span>, как
                <span :class="$style.stLine">заниматься на аудиотренажере</span>
              </span>
              <img :class="$style.pin" :src="pin" alt="" aria-hidden="true" />
            </div>
          </div>

          <!-- Право: две карточки -->
          <div :class="$style.right">
            <article :class="$style.info">
              <h3>Это удобно</h3>
              <p>
                Говорите по-английски, занимаясь спортом, за рулем автомобиля
                или прогуливаясь в парке.
              </p>
            </article>
            <article :class="$style.info">
              <h3>Это эффективно</h3>
              <p>
                Просто повторяйте фразы за диктором, и сами не заметите,
                как легко начнете понимать английскую речь и уверенно говорить.
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
/* ===== БАЗА (ПК и мобилка — как в макете) ===== */
.wrap{ padding:140px 0 0; }
.container{ max-width:1390px; margin:0 auto; }

.top{
  background:#fff; border-radius:20px;
  box-shadow:0 12px 32px rgba(16,24,40,.08);
  padding:0 24px 0; overflow:hidden;
}

.head{ text-align:center; padding-top:58px; }
.title{
  margin:0; font-family:Inter,sans-serif; font-weight:500;
  font-size:55px; line-height:.95; letter-spacing:-0.05em; color:#2C2C2C;
}
.hl{ position:relative; display:inline-block; padding:.06em .28em; border-radius:10px; z-index:0; }
.hl::before{ content:""; position:absolute; inset:0; background:#FFD249; border-radius:10px; transform:rotate(1.51deg); z-index:-1; }

.kicker{ margin-top:31px; margin-bottom:0; font:500 18px/1.3 Inter, sans-serif; letter-spacing:-.03em; color:#2C2C2C; }

/* ПК-сетка */
.grid{
  margin-top:50px; display:grid;
  grid-template-columns:654px 318px 318px; gap:20px; justify-content:center;
}

/* Видео слева */
.video{ position:relative; width:654px; height:330px; }
.poster{ width:100%; height:100%; object-fit:cover; border-radius:20px; display:block; }
.play{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:94px; height:50px; border:0; border-radius:14px;
  background:#FF8D6B; display:grid; place-items:center;
  box-shadow:0 10px 28px rgba(255,141,107,.35); cursor:pointer;
}

/* Наклейка */
.sticky{
  position:absolute; left:70px; top:-12px;
  width:390px; height:82px; background:#fff; border-radius:12px;
  padding:12px 16px; box-shadow:3px 4px 9px rgba(0,0,0,.25);
  transform: rotate(5.26deg);
}
.stickyText{ position:relative; font:500 16px/20px Inter, sans-serif; letter-spacing:-0.02em; color:#2C2C2C; }
.tv{ position:relative; z-index:0; display:inline; vertical-align:baseline; }
.stLine{ display:block; line-height:20px; margin-top:0; }
.underTv{ position:absolute; left:0; right:0; bottom:-11px; pointer-events:none; z-index:-1; transform:rotate(-3deg); }
.pin{ position:absolute; right:-18px; top:-58px; pointer-events:none; }

/* Две карточки справа */
.right{ display:grid; grid-template-columns:318px 318px; gap:20px; }
.info{
  width:318px; height:330px; background:#E8F0FF; border-radius:20px;
  padding:30px 24px 24px 30px; color:#2C2C2C; display:flex; flex-direction:column;
}
.info h3{ margin:0; font-weight:500; font-size:30px; line-height:.95; }
.info p{ margin-top:20px; font-size:16px; line-height:1.3; }

/* CTA */
.ctaRow{ display:flex; justify-content:center; padding:40px 0; }
.cta{
  width:370px; height:46px; background:#FFD249; color:#2C2C2C; text-decoration:none; border-radius:12px;
  display:flex; align-items:center; justify-content:space-between; padding:0 5px 0 16px;
  box-shadow:0 8px 22px rgba(255,210,73,.25); font:600 16px/1.3 Inter, sans-serif; letter-spacing:-0.03em;
}
.cta i{ width:36px; height:36px; border-radius:10px; background:#fff; display:grid; place-items:center; flex:0 0 36px; }
.cta i img{ width:22px; height:16px; }

/* Нижние карточки */
.features{ margin-top:20px; display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.feature{
  position:relative; background:#fff; border-radius:12px; box-shadow:0 10px 26px rgba(16,24,40,0.06);
  color:#2C2C2C; padding:30px; display:flex; flex-direction:column; justify-content:flex-end; height:215px;
}
.ficon{ position:absolute; top:30px; left:30px; }
.feature h4{ margin:0 0 8px; font-weight:600; font-size:18px; line-height:1.3; }
.feature p{ margin:0; font-weight:500; font-size:16px; line-height:1.3; }

/* ===== УЗКИЕ планшеты (как было) — перезапишем ниже 641–900 ===== */
@media (max-width:1024px){
  .grid{ grid-template-columns:1fr; }
  .right{ grid-template-columns:1fr; }
  .video{ width:100%; height:auto; }
  .poster{ height:auto; }
}

/* ===== Мобилка — фикс 390 ===== */
@media (max-width:640px){
  .wrap{ padding:120px 0 0; }
  .container{ width:390px; max-width:390px; margin:0 auto; }
  .top{ border-radius:16px; padding:0 25px 0; }

  .title{ font-size:33px; line-height:1.02; letter-spacing:-0.04em; }
  .kicker{ font-size:16px; line-height:1.3; letter-spacing:-0.03em; margin-top:20px; }
  .kStart{ display:block; } .kRest{ display:block; }

  .grid{ grid-template-columns:1fr; gap:16px; margin-top:70px; }
  .video{ width:100%; } .poster{ width:100%; height:180px; border-radius:14px; }

  .sticky{ left:16px; top:-30px; width:300px; padding:10px 12px; height:62px; transform:rotate(5.26deg); }
  .stickyText{ font-size:14px; line-height:18px; }
  .stLine{ line-height:18px; }
  .underTv{ bottom:-14px; }
  .pin{ right:-6px; top:-36px; transform:scale(.72); transform-origin:top right; }

  .info{ width:100%; height:157px; border-radius:14px; padding:30px 10px 30px 30px; justify-content:center; }
  .info h3{ font-size:22px; } .info p{ font-size:14px; width:90%; }

  .ctaRow{ padding:20px 0 50px; }
  .cta{ width:340px; height:auto; padding:5px 5px 5px 15px; font-size:14px; gap:10px; line-height:130%; letter-spacing:-.03em; }

  .features{ grid-template-columns:1fr; gap:12px; margin-top:16px; }
  .feature{ border-radius:14px; padding:30px 18px 30px 30px; height:auto; min-height:180px; }
  .ficon{ top:30px; left:30px; width:38px; }
  .feature h4{ font-size:16px; }
  .feature p{ font-size:14px; }
}

/* ===== ПРОМЕЖУТОЧНЫЕ: 901–1200px — карточки ПОД видео, столбиком ===== */
@media (min-width:901px) and (max-width:1200px){
  .container{ width:min(96vw, 1200px); margin:0 auto; }
  .top{ border-radius: clamp(16px, 1.6vw, 20px); padding: 0 clamp(16px, 2vw, 24px) 0; }
  .head{ padding-top: clamp(36px, 5vw, 58px); }
  .title{ font-size: clamp(40px, 5vw, 55px); }
  .kicker{ margin-top: clamp(18px, 2.4vw, 31px); font-size: clamp(16px, 1.8vw, 18px); }

  /* Одна колонка: видео сверху, затем две карточки под ним */
  .grid{
    margin-top: clamp(30px, 4vw, 50px);
    gap: clamp(16px, 2vw, 20px);
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: start;
  }

  .video{ width: 100%; height: auto; aspect-ratio: 654 / 330; }
  .poster{ width: 100%; height: 100%; border-radius: clamp(16px, 1.6vw, 20px); object-fit: cover; }

  .sticky{
    left: clamp(20px, 6vw, 70px);
    top: clamp(-20px, -1.5vw, -8px);
    width: clamp(280px, 36vw, 390px);
    height: auto;
    padding: clamp(10px, 1.2vw, 12px) clamp(12px, 1.4vw, 16px);
    transform: rotate(5.26deg);
  }
  .stickyText{ font-size: clamp(14px, 1.6vw, 16px); line-height: clamp(18px, 2vw, 20px); }
  .underTv{ bottom: clamp(-14px, -1.2vw, -10px); }
  .pin{
    right: clamp(-10px, -1.5vw, -18px);
    top: clamp(-46px, -4vw, -58px);
    transform: scale(clamp(.8, 1.1vw, 1));
    transform-origin: top right;
  }

  /* ПРАВЫЕ карточки — теперь ПОД видео, в одну колонку */
  .right{
    grid-template-columns: 1fr;
    gap: clamp(14px, 2vw, 20px);
  }
  .info{
    width: 100%;
    height: auto; /* не фиксируем высоту, чтобы не обрезались */
    min-height: clamp(200px, 26vw, 330px);
    border-radius: clamp(14px, 1.6vw, 20px);
    padding: clamp(20px, 2.2vw, 30px) clamp(16px, 1.8vw, 24px);
    display:flex; flex-direction:column; justify-content:center;
  }
  .info h3{ font-size: clamp(22px, 2.6vw, 28px); }
  .info p{ font-size: clamp(14px, 1.6vw, 16px); }

  /* CTA — без переноса, с автодлиной */
  .ctaRow{ padding: clamp(24px, 4vw, 40px) 0; }
  .cta{
    height: 46px;
    white-space: nowrap;
    width: auto;
    padding: 0 12px 0 16px;
  }

  /* Нижние фичи — 3 в ряд как на ПК */
  .features{
    grid-template-columns: repeat(3, minmax(260px, 1fr));
    gap: clamp(14px, 2vw, 20px);
    margin-top: clamp(16px, 2vw, 20px);
  }
  .feature{
    border-radius: clamp(12px, 1.4vw, 12px);
    height: clamp(190px, 22vw, 215px);
    padding: clamp(22px, 2vw, 30px);
  }
  .ficon{ top: clamp(20px, 2vw, 30px); left: clamp(20px, 2vw, 30px); }
}

/* ===== ПРОМЕЖУТОЧНЫЕ: 641–900px — видео сверху, карточки рядом (как было) ===== */
@media (min-width:641px) and (max-width:900px){
  .container{ width:min(96vw, 900px); margin:0 auto; }
  .top{ border-radius:18px; padding:0 20px 0; }
  .head{ padding-top:42px; }
  .title{ font-size:46px; }
  .kicker{ margin-top:22px; font-size:16px; }

  .grid{ grid-template-columns:1fr; gap:18px; margin-top:34px; }
  .video{ width:100%; height:auto; aspect-ratio: 654 / 330; }
  .poster{ width:100%; height:100%; border-radius:18px; object-fit:cover; }

  .sticky{ left:24px; top:-18px; width:min(56vw, 360px); height:auto; padding:10px 14px; }
  .stickyText{ font-size:15px; line-height:19px; }
  .underTv{ bottom:-12px; }
  .pin{ right:-12px; top:-44px; transform:scale(.88); transform-origin:top right; }

  .right{ grid-template-columns: repeat(2, minmax(280px, 1fr)); gap:18px; }
  .info{ width:auto; height: clamp(220px, 36vw, 290px); border-radius:16px; padding:22px 18px 22px 24px; }
  .info h3{ font-size:24px; }
  .info p{ font-size:15px; }

  .ctaRow{ padding:28px 0; }
  .cta{ height:46px; white-space:nowrap; padding:0 12px 0 16px; }

  .features{ grid-template-columns: 1fr; gap:18px; margin-top:18px; }
  .feature{ height:auto; min-height:200px; border-radius:14px; padding:26px; }
  .ficon{ top:26px; left:26px; }
}
</style>
