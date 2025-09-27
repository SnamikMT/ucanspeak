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

      <!-- Бирка -->
      <aside :class="$style.note" aria-label="Карточка заметки Ucanspeak">
        <span :class="$style.pinDot" aria-hidden="true"></span>
        <strong :class="$style.noteLogo">ucanspeak</strong>
        <p :class="$style.noteText">
          UCANSPEAK — это простой и удобный способ поддерживать
          свой английский язык на уровне!
        </p>
      </aside>

      <!-- Фон: десктоп/мобайл через <picture> -->
      <picture>
        <source media="(max-width: 640px)" :srcset="bikeWaveMobile" />
        <img :class="$style.bg" :src="bikeWave" alt="" aria-hidden="true" />
      </picture>
    </div>
  </section>
</template>

<script setup lang="ts">
import bikeWave from '@/assets/img/bike-wave.png'
import bikeWaveMobile from '@/assets/img/bike-wave-mobile.png' // мобильная версия фона/волны/байка
</script>

<style module>
/* ===== Секция ===== */
.wrap{
  margin-top:140px;
  position:relative;
  background:transparent;
}

/* ===== Белая карточка (до 1390) ===== */
.inner{
  position:relative;
  max-width:1390px;
  margin:0 auto;
  height:550px;                 /* ПК */
  background:#fff;
  border-radius:20px;
  overflow:hidden;
  z-index:1;

  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  padding:56px 60px;
}

/* Текст слева */
.text{ max-width:520px; }
.title{
  margin:0 0 18px;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-0.05em;
  color:#1A1A1A;
}
.hl{
  background:#FFD249;
  padding:.06em .28em;
  border-radius:10px;
  display:inline-block;
  transform: rotate(1.1deg);
}
.lead{
  margin:14px 0 0;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif;
  font-weight:500;
  font-size:18px;
  line-height:1.3;
  letter-spacing:-0.03em;
  color:#2C2C2C;
  max-width:420px;
}

/* Бирка справа (ПК) / снизу (моб.) */
.note{
  position:absolute;
  top:80px;
  right:116px;
  width:380px;
  height:200px;
  background:#F7F9FE;
  border:3px solid #EAEEF7;
  border-radius:14px;
  transform: rotate(10deg);
  box-shadow: 0 10px 24px rgba(16,24,40,.12);
  z-index:3;

  display:flex;
  flex-direction:column;
  justify-content:flex-end;
}
.noteLogo{
  position:absolute; top:20px; left:20px;
  width:170px; height:30px;
  display:flex; align-items:center;
  font-family: Inter, sans-serif;
  font-weight:700; font-size:20px; letter-spacing:-0.01em; color:#1A44AA;
}
.noteText{
  margin:0;
  font-family: Inter, sans-serif;
  font-weight:500; font-size:20px; line-height:1.3; letter-spacing:-0.03em; color:#1F2937;
  padding-left:20px; padding-bottom:20px;
}
/* Пин-точка */
.pinDot{
  position:absolute; top:10px; right:10px;
  width:19px; height:19px; border-radius:50%;
  background:#DED7FF;            /* ПК */
}

/* Фон по умолчанию — снизу */
.bg{
  position:absolute;
  left:0; right:0; bottom:0;
  width:100%;
  height:auto;
  display:block;
  z-index:1;
}

/* Планшет */
@media (max-width: 1024px){
  .inner{ padding:40px 36px; height:auto; }
  .title{ font-size:46px; }
}

/* Мобильный */
@media (max-width: 640px){
  .wrap{ padding:120px 15px 0; margin-top: 0;}

  .inner{
    /* карточка 690 высотой по ТЗ */
    height:690px;
    max-width:390px;
    padding:24px 16px;          /* без лишнего нижнего паддинга — фон по центру */
    border-radius:20px;
    display:block;
  }

  .title{
    font-size:33px;
    line-height:.95;
    letter-spacing:-0.05em;
    text-align:center;
    margin-bottom:14px;
  }
  .hl{ border-radius:10px; transform:rotate(1.1deg); }

  .lead{
    font-size:16px;
    line-height:1.3;
    max-width:none;
    text-align:center;
    margin:18px auto 0;
  }

  /* Бирка снизу, повёрнута вправо на 10° */
  .note{
    left:50px; right:auto;
    bottom:66px; top:auto;
    width:290px; height:140px;
    transform: rotate(10deg);
    padding:0;
    display:flex; justify-content:flex-end;
  }
  .noteLogo{ top:14px; left:14px; font-size:18px; width:auto; height:auto; }
  .noteText{ font-size:14px; line-height:1.3; padding-left:14px; padding-bottom:14px; }

  /* Кружок — белый с бордером 3px #EAEEF7 */
  .pinDot{
    top:8px; right:8px; width:18px; height:18px;
    background:#FFFFFF;
    border:3px solid #EAEEF7;
  }

  /* Фон: по центру и на всю ширину (используется mobile-изображение) */
  .bg{
    top:50%;
    bottom:auto;
    transform:translateY(-68%);  /* центр по вертикали */
    width:100%;
  }
}
</style>
