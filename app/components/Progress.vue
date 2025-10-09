<template>
  <section :class="$style.wrap">
    <div :class="$style.stage">
      <!-- Заголовок секции -->
      <header :class="$style.head">
        <!-- Desktop -->
        <h2 :class="[$style.title, $style.titleDesk]">
          <span :class="$style.hl">Заметный прогресс:</span> от страха<br />
          перед официантами до споров<br />
          с носителем
        </h2>

        <!-- Mobile (4 строки) -->
        <h2 :class="[$style.title, $style.titleMob]" aria-hidden="false">
          <span :class="$style.mline">
            <span :class="$style.hlMob">Заметный прогресс:</span>
          </span>
          <span :class="$style.mline">от страха перед</span>
          <span :class="$style.mline">официантами до</span>
          <span :class="$style.mline">споров с носителями</span>
        </h2>
      </header>

      <!-- Карточки -->
      <div :class="$style.grid">
        <!-- Левая карточка (449×540) — фон-картинка + заголовок -->
        <div
          :class="$style.before"
          :style="{ backgroundImage: `url(${leftImg})` }"
        >
          <h3 :class="$style.cardHead">До занятий с Ucanspeak</h3>
        </div>

        <!-- Правая карточка (540 высота) -->
        <div :class="$style.after">
          <h3 :class="$style.cardHead">После занятий с Ucanspeak</h3>

          <div :class="$style.planeWrap">
            <!-- Самолёт по центру, родной размер -->
            <img :src="plane" :class="$style.plane" alt="Ucanspeak plane" />

            <!-- Плашки -->
            <span :class="[$style.badge, $style.b1]">
              Легко формулируете и высказываете свои мысли фразами на английском
            </span>

            <span :class="[$style.badge, $style.b2]">
              Быстро и грамотно строите предложения
            </span>

            <span :class="[$style.badge, $style.b3]">
              Выучили много новых слов и правильно используете их в контексте
            </span>

            <span :class="[$style.badge, $style.b4]">
              Понимаете английскую речь даже в быстром темпе
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import plane from '@/assets/img/progress-plane.png'
import leftCardImage from '@/assets/img/progress-left-card.png'
const leftImg = leftCardImage
</script>

<style module>
/* ===== ДЕСКТОП ===== */
.wrap{
  background:#E9EFF7;
  padding-top:140px;
  box-sizing:border-box;
}
.stage{
  width:1390px;
  margin:0 auto;
}
.head{ text-align:center; margin:0 0 24px; }

.title{
  margin:0;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-0.05em;
  color:#101012;
}
.titleDesk{ display:block; }
.titleMob{ display:none; }

.hl{
  position:relative; display:inline-block;
  border-radius:12px; padding:.06em .28em; z-index:0;
}
.hl::before{
  content:""; position:absolute; inset:0; background:#FFD249; border-radius:12px;
  transform:rotate(1.2deg); z-index:-1;
}

/* Две карточки */
.grid{
  margin-top:70px;
  display:grid;
  grid-template-columns: 449px 1fr;
  column-gap:20px;
  align-items:stretch;
}

/* Общие параметры карточек */
.before,
.after{
  height:540px;
  border-radius:20px;
  overflow:hidden;
  position:relative;
  box-sizing:border-box;
}

/* Левая карточка — картинка целиком по ширине */
.before{
  width:449px;
  background:#EEF3FF no-repeat top center / contain; /* картинка полностью, без обрезки */
}

/* Заголовки карточек */
.cardHead{
  margin:40px 0 0;
  text-align:center;
  color:#2C2C2C;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:36px;
  line-height:.95;
  letter-spacing:-0.05em;
}

/* Правая карточка */
.after{
  background:#FFFFFF;
  padding:0 20px 20px;
}

/* Самолёт */
.planeWrap{ position:relative; height:calc(100% - 40px); }
.plane{
  position:absolute; left:50%; top:45%; transform:translate(-50%,-50%);
  width:auto; height:auto; z-index:2; display:block;
  filter: drop-shadow(0 10px 24px rgba(16,24,40,.12));
}

/* Плашки */
.badge{
  position:absolute;
  padding:21px 16px 16px 21px;
  border-radius:12px;
  font-family:Inter,sans-serif;
  font-weight:600;
  font-size:16px;
  line-height:1.3;
  max-width:260px;
  color:#2C2C2C;
}
.b1{ background:#FF9B76; left:58px; top:50px; transform:rotate(-6.19deg); z-index:2; }
.b2{ background:#77D1FD; right:51px; top:50px; transform:rotate(5deg); z-index:1; }
.b3{ background:#C8BDFF; left:107px; bottom:80px; transform:rotate(8deg); z-index:3; }
.b4{ background:#FFD551; right:40px; bottom:83px; transform:rotate(7deg); z-index:2; }

/* ===== АДАПТИВ ===== */

/* планшеты */
@media (max-width:1024px){
  .stage{ width:auto; padding:0 16px; }
  .grid{ grid-template-columns:1fr; }
  .before{ width:100%; }
}

/* телефоны: фикс ширина контента 390 */
@media (max-width:640px){
  .wrap{
    padding-top:120px;
    /* убираем внутренние боковые, шириной рулит .stage */
    padding-left:0;
    padding-right:0;
  }

  /* ЖЁСТКО 390px, без внутренних паддингов */
  .stage{
    width:390px;
    max-width:390px;
    margin:0 auto;
    padding:0;
  }

  /* Заголовок: показываем мобильный, 4 строки */
  .titleDesk{ display:none; }
  .titleMob{
    display:block;
    margin:0;
    font-family: Inter, sans-serif;
    font-weight:500;
    font-size:33px;
    line-height:1.02;
    letter-spacing:-0.04em;
    color:#101012;
    text-align:center;
  }
  .mline{ display:block; }

  /* Плашка только фоном (текст не наклоняем) */
  .hlMob{
    position:relative; display:inline-block; padding:.06em .28em; border-radius:10px; z-index:0;
  }
  .hlMob::before{
    content:""; position:absolute; inset:0; background:#FFD249; border-radius:10px;
    transform:rotate(1.2deg); z-index:-1;
  }

  .grid{
    margin-top:32px;
    grid-template-columns:1fr;
    row-gap:20px;
  }

  .before{
    height:auto;
    aspect-ratio: 449 / 540; /* сохраняем пропорцию */
    border-radius:16px;
    background-position: top center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .after{
    height:700px;
    border-radius:16px;
  }

  .cardHead{
    margin-top:40px;
    font-size:26px;
    line-height:0.95;
    letter-spacing:-0.05em;
  }

  .head {
    margin: 0 0 40px;
  }

  .planeWrap{ height:calc(100% - 24px); }
  .plane{
    top:44%;
    filter: drop-shadow(0 8px 18px rgba(16,24,40,.12));
    max-width:82vw;
  }

  .badge{
    font-size:14px;
    max-width:260px;
    padding:16px 14px 14px 21px;
  }
  .b1{ left:1px; top:75px; }
  .b2{ right:22px; top:170px; }
  .b3{ left:-4px; bottom:185px; }
  .b4{ right:7px; bottom:103px; transform: rotate(-6deg);}
}
</style>
