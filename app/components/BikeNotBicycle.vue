<template>
  <section :class="$style.wrap">
    <div class="container" :class="$style.inner">
      <!-- Левый текст -->
      <div :class="$style.text">
        <h2 :class="$style.title" aria-label="Английский — это не велосипед">
          Английский —<br />
          это <span :class="$style.hl">не велосипед</span>
        </h2>

        <p :class="$style.lead">
          Получив однажды знания и навыки по иностранному языку, можно все
          забыть и разучиться говорить, если не практиковаться.
        </p>
      </div>

      <!-- Бирка -->
      <aside :class="$style.note" aria-label="Карточка заметки Ucanspeak">
        <span :class="$style.pinDot" aria-hidden="true"></span>
        <img :src="logo" :class="$style.noteLogo" alt="UCANSPEAK" />
        <p :class="$style.noteText">
          UCANSPEAK — это простой и удобный способ поддерживать
          свой английский язык на уровне!
        </p>
      </aside>

      <!-- Фон -->
      <picture>
        <source media="(max-width: 640px)" :srcset="bikeWaveMobile" />
        <img :class="$style.bg" :src="bikeWave" alt="" aria-hidden="true" />
      </picture>
    </div>
  </section>
</template>

<script setup lang="ts">
import bikeWave from '@/assets/img/bike-wave.png'
import bikeWaveMobile from '@/assets/img/bike-wave-mobile.png'
import logo from '@/assets/img/logo.svg'
</script>

<style module>
/* ===== Секция ===== */
.wrap{
  margin-top:140px;
  position:relative;
  background:transparent;
}

/* ===== Белая карточка (ПК) ===== */
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
  color:#2C2C2C;
}

/* плашка только фоном */
.hl{
  position:relative;
  display:inline-block;
  padding:.06em .28em;
  border-radius:10px;
  z-index:0;
}
.hl::before{
  content:"";
  position:absolute;
  inset:0;
  background:#FFD249;
  border-radius:10px;
  transform: rotate(1.1deg);
  z-index:-1;
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

/* Бирка справа (ПК) */
.note{
  position:absolute;
  top:80px;
  right:105px;
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
  display:block;
  width:170px;
  height:30px;
  object-fit:contain;
}

.noteText{
  margin:0;
  font-family: Inter, sans-serif;
  font-weight:500; font-size:20px; line-height:1.3; letter-spacing:-0.03em; color:#1F2937;
  padding-left:20px;
  padding-right:26px;
  padding-bottom:20px;
}

.pinDot{
  position:absolute; top:10px; right:10px;
  width:19px; height:19px; border-radius:50%;
  background:#DED7FF;
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

/* ===== ПРОМЕЖУТОЧНЫЕ (641–1200): боковые отступы, масштаб, воздух под фоном ===== */
@media (min-width:641px) and (max-width:1200px){
  .inner{
    /* делаем карточку резиновой и добавляем поля */
    max-width:1200px;
    width:min(96vw, 1200px);
    margin:0 auto;
    height:450px;         
    padding:
      clamp(36px, 5vw, 56px)
      clamp(18px, 3.2vw, 60px)
      clamp(140px, 18vw, 220px);/* низ — запас под волну */
    border-radius: clamp(16px, 1.6vw, 20px);

    display:block;              /* отключаем жёсткий флекс-ряд */
  }

  .text{
    max-width: clamp(520px, 64vw, 720px);
  }
  .title{
    font-size: clamp(40px, 5vw, 55px);
    margin-bottom: clamp(12px, 1.6vw, 18px);
  }
  .lead{
    font-size: clamp(16px, 1.8vw, 18px);
    max-width: clamp(420px, 58vw, 640px);
  }

  /* Бирка — меньше поворот, резиновые размеры и отступ от краёв */
  .note{
    top: clamp(45px, 38vw, 210px);
    right: clamp(16px, 4vw, 42px);
    width: clamp(300px, 34vw, 380px);
    height: clamp(150px, 18vw, 200px);
    transform: rotate(7deg); /* помягче, чтобы не уезжала */
    border-width: 2px;
    border-radius: clamp(12px, 1.4vw, 14px);
  }
  .noteLogo{
    top: clamp(14px, 1.8vw, 20px);
    left: clamp(14px, 1.8vw, 20px);
    width: clamp(132px, 16vw, 170px);
    height: clamp(24px, 3vw, 30px);
  }
  .noteText{
    font-size: clamp(16px, 1.8vw, 20px);
    padding-left: clamp(14px, 2vw, 20px);
    padding-right: clamp(16px, 2.2vw, 26px);
    padding-bottom: clamp(12px, 1.8vw, 20px);
  }
  .pinDot{
    top: clamp(8px, 1.4vw, 10px);
    right: clamp(8px, 1.4vw, 10px);
    width: clamp(16px, 1.8vw, 19px);
    height: clamp(16px, 1.8vw, 19px);
    background:#DED7FF;
    border: none;
  }

  /* Волна — ограничиваем высоту и не даём «давить» контент */
  .bg{
    bottom:0;
    top:auto;
    transform:none;
    width:100%;
  }
}

/* ===== Планшет узкий (до 1024) — чуть компактнее текста */
@media (max-width:1024px){
  .title{ font-size:46px; }
}

/* ===== Мобильный ===== */
@media (max-width: 640px){
  .wrap{ padding:120px 0 0; margin-top: 0; }

  .inner{
    height:690px;
    max-width:390px;
    padding:40px 25px;
    border-radius:20px;
    display:block;
  }

  .text{ max-width:none; }
  .title{
    font-size:33px;
    line-height:.95;
    letter-spacing:-0.05em;
    text-align:center;
    margin-bottom:14px;
  }
  .hl{ border-radius:10px; }

  .lead{
    font-size:16px;
    line-height:1.3;
    max-width:none;
    text-align:center;
    margin:18px auto 0;
  }

  /* Бирка снизу */
  .note{
    left:50px; right:auto;
    bottom:66px; top:auto;
    width:290px; height:140px;
    transform: rotate(10deg);
    padding:0;
    display:flex; justify-content:flex-end;
  }
  .noteLogo{
    top:14px; left:14px;
    width:132px; height:24px;
  }
  .noteText{
    font-size:14px; line-height:1.3;
    padding-left:14px;
    padding-right:18px;
    padding-bottom:14px;
  }
  .pinDot{
    top:8px; right:8px; width:18px; height:18px;
    background:#FFFFFF;
    border:3px solid #EAEEF7;
  }

  /* Фон: по центру для мобилки */
  .bg{
    top:50%;
    bottom:auto;
    transform:translateY(-68%);
    width:100%;
  }
}
</style>
