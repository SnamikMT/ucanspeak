<template>
  <section :class="$style.wrap">
    <div :class="$style.stage">
      <!-- Заголовок секции -->
      <header :class="$style.head">
        <h2 :class="$style.title">
          <span :class="$style.hl">Заметный прогресс:</span> от страха<br />
          перед официантами до споров<br />
          с носителем
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
/* ===== ДЕСКТОП (как было) ===== */
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
.hl{
  display:inline-block;
  background:#FFD249;
  border-radius:12px;
  padding:.06em .28em;
}

/* Две карточки: отступ сверху 70 */
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
  /* было: background:#EEF3FF no-repeat center/cover; */
  background:#EEF3FF no-repeat top center / contain; /* картинка полностью, без обрезки */
}

/* Заголовки карточек (обеих) */
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

/* Самолёт: центр родного размера */
.planeWrap{
  position:relative;
  height:calc(100% - 40px);
}
.plane{
  position:absolute;
  left:50%; top:45%;
  transform:translate(-50%,-50%);
  width:auto; height:auto;
  z-index:2;
  display:block;
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

/* 1) Оранжевая — #FF9B76, влево -6.19°, 58 слева / 115 сверху */
.b1{
  background:#FF9B76;
  left:58px; top:50px;
  transform:rotate(-6.19deg);
  z-index:2;
}

/* 2) Голубая — #77D1FD, вправо 5°, 51 справа / 113 сверху — ПОД самолётом */
.b2{
  background:#77D1FD;
  right:51px; top:50px;
  transform:rotate(5deg);
  z-index:1; /* ниже самолёта */
}

/* 3) Фиолетовая — #C8BDFF, вправо 8°,
   107 слева / 48 снизу → поднято до 80 снизу — НАД самолётом */
.b3{
  background:#C8BDFF;
  left:107px; bottom:80px;
  transform:rotate(8deg);
  z-index:3; /* выше самолёта */
}

/* 4) Жёлтая — #FFD551, вправо 7°, 40 справа / 83 снизу */
.b4{
  background:#FFD551;
  right:40px; bottom:83px;
  transform:rotate(7deg);
  z-index:2;
}

/* ===== АДАПТИВ ===== */

/* планшеты */
@media (max-width: 1024px){
  .stage{ width:auto; padding:0 16px; }
  .grid{ grid-template-columns:1fr; }
  .before{ width:100%; }
  .after{ margin-top:20px; }
}

/* телефоны (основная ширина 390, поля ~15) */
@media (max-width: 640px){
  .wrap{ padding:120px 15px 0; }
  .stage{ width:auto; margin:0; padding:0 15px; }

  .title{
    font-size:33px;
    line-height:1.02;
    letter-spacing:-0.04em;
  }

  .grid{
    margin-top:32px;
    grid-template-columns:1fr;
    row-gap:16px;
  }

  .after{
    height:700px;           /* как было */
    border-radius:16px;
  }

  .cardHead{
    margin-top:20px;
    font-size:22px;
    line-height:1.02;
    letter-spacing:-0.04em;
  }

  .before{
    height:auto;            /* убираем фикс 700px */
    aspect-ratio: 449 / 540;/* та же пропорция, что на десктопе */
    border-radius:16px;

    /* фон без обрезания, во всю ширину */
    background-position: top center;
    background-size: contain;
    background-repeat: no-repeat;
  }


  .planeWrap{ height:calc(100% - 24px); }
  .plane{
    top:44%;
    filter: drop-shadow(0 8px 18px rgba(16,24,40,.12));
    max-width: 82vw;
  }

  .badge{
    font-size:14px;
    max-width:280px;
    padding:16px 14px 14px 21px;
  }

  .b1{ left:1px; top:60px; }
  .b2{ right:22px; top:170px; }
  .b3{ left:-4px; bottom:158px; }
  .b4{ right:7px; bottom:42px; }
}
</style>
