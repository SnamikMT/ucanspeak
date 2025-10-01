<template>
  <section :class="$style.wrap">
    <div :class="$style.panel">
      <!-- фон-волна -->
      <img :src="bgWave" :class="$style.wave" alt="" aria-hidden="true" />

      <!-- арт -->
      <div :class="$style.artBox">
        <img :src="art" :class="$style.art" alt="" />
      </div>

      <!-- текст + кнопка -->
      <div :class="$style.content">
        <!-- Заголовок (ПК: 2 строки; мобилка: 4 строки) -->
        <h2 :class="$style.title">
          <!-- Desktop -->
          <span :class="$style.deskOnly">
            <span :class="$style.titleBg">Достаточно&nbsp;1&nbsp;демоурока,</span><br />
            чтобы&nbsp;оценить&nbsp;как&nbsp;это&nbsp;работает
          </span>

          <!-- Mobile -->
          <span :class="$style.mobOnlyBlock">
            <span :class="$style.mobOnly">Достаточно</span><br class="mobOnly" />
            <span :class="$style.titleBg">1&nbsp;демоурока,</span><br class="mobOnly" />
            <span :class="$style.mobOnly">чтобы&nbsp;оценить</span><br class="mobOnly" />
            как&nbsp;это&nbsp;работает
          </span>
        </h2>

        <NuxtLink to="/signup-teacher" :class="$style.cta">
          <span>Бесплатный демоурок без регистрации</span>
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

/* ===== Карточка (ПК) ===== */
.panel{
  /* отступы */
  --pad-l: 30px;
  --pad-t: 40px;
  --pad-b: 40px;

  /* арт справа */
  --art-right: 136px;     /* от правого края */
  --art-w: 420px;         /* зарезервированная ширина под арт */
  --art-scale: 1.22;      /* масштаб png */
  --art-bottom: -90px;    /* уводим НИЖЕ низа карточки → обрезка снизу */

  position:relative;
  max-width:1390px;
  margin:24px auto;
  height:259px;
  border-radius:20px;
  background:#C8BDFF;
  overflow:hidden;
  box-shadow:0 10px 24px rgba(16,24,40,.08);

  /* резерв справа, чтобы текст не наезжал на арт */
  padding: var(--pad-t) calc(var(--art-right) + var(--art-w)) var(--pad-b) var(--pad-l);
}

/* фон-волна */
.wave{
  position:absolute; inset:0;
  width:100%; height:100%;
  object-fit:cover;
  pointer-events:none;
  z-index:0;
}

/* контейнер для арта: привязываем к НИЖНЕМУ краю */
.artBox{
  position:absolute;
  right: var(--art-right);
  bottom: 0;                /* ключ: ориентируемся по низу */
  width: var(--art-w);
  height: 100%;
  z-index:1;
  pointer-events:none;
}

/* сам арт: стоит на «дне», торчит вниз и обрезается снизу */
.art{
  position:absolute;
  right: 0;
  bottom: -150px;      /* отрицательное значение → торчит ниже */
  width:374px;
  max-width:none; max-height:none;
  transform: scale(var(--art-scale));
  transform-origin: bottom right;
  object-fit:contain;
  display:block;
  filter: drop-shadow(0 10px 18px rgba(16,24,40,.15));
}

.content{ position:relative; z-index:2; }

/* ===== Заголовок ===== */
.title{
  margin:0 0 45px;
  font-family: Inter, system-ui, sans-serif;
  font-weight:500;
  font-size:40px;
  line-height:1.1;
  letter-spacing:-0.05em;
  color:#1A1A1A;
  max-width:820px;
}

/* ПК-блок и моб-блок переключаем медиазапросом */
.deskOnly{ display:inline; }
.mobOnlyBlock{ display:none; }

/* белая плашка под строкой */
.titleBg{
  display:inline-block;
  background:#fff;
  padding:.08em .28em;
  border-radius:10px;
  transform: rotate(1deg);
  box-shadow: 0 2px 0 rgba(0,0,0,.04);
}

/* кнопка */
.cta{
  display:inline-flex; align-items:center; gap:12px;
  height:40px; padding:0 12px 0 16px;
  background:#FFD249; color:#2C2C2C;
  text-decoration:none; border-radius:10px;
  font:600 16px/1.3 Inter, system-ui, sans-serif;
  letter-spacing:-0.03em;
}
.cta i{
  width:28px; height:28px; border-radius:8px; background:#fff;
  display:grid; place-items:center; flex:0 0 28px;
}

/* ====== Mobile ====== */
@media (max-width: 640px){
  .panel{
    width:390px;
    height:690px;
    margin:16px auto;
    border-radius:20px;
    padding:24px 16px 16px;

    /* арт-параметры для мобилки */
    --art-right: 0px;
    --art-w: 390px;
    --art-scale: 1;
    --art-bottom: 0px;
  }

  /* сцена под арт внизу, 54% высоты */
  .artBox{
    position:absolute;
    left:0; right:0;
    bottom:0; top:auto;
    width:100%;
    height:54%;
    z-index:1;
  }
  .art{
    position:absolute;
    right:-6px;
    bottom:-6px;     /* тоже немного уводим вниз */
    width:480px;
    height:auto;
    transform:none;
    filter:none;
  }

  .content{ z-index:2; }

  .title{
    font-size:28px;
    line-height:1.08;
    letter-spacing:-.04em;
    margin:0 0 20px;
    max-width:none;
  }

  /* показываем мобильный вариант заголовка в 4 строки */
  .deskOnly{ display:none; }
  .mobOnlyBlock{ display:inline; }
  .mobOnly{ display:inline; }
  br.mobOnly{ display:inline; }

  .titleBg{
    border-radius:10px;
    transform: rotate(1deg);
    padding:.1em .3em;
  }

  .cta{
    height:48px;
    font-size:15px;
    border-radius:12px;
  }
  .cta i{ width:32px; height:32px; }
}

/* На очень узких экранах (<400px) */
@media (max-width: 400px){
  .panel{ width: calc(100vw - 24px); }
}
</style>
