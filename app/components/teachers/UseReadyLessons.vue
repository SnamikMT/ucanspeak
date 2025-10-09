<template>
  <section :class="$style.wrap">
    <div :class="$style.panel">
      <!-- волна -->
      <img :src="wave" :class="$style.wave" alt="" aria-hidden="true" />

      <!-- текст -->
      <div :class="$style.left">
        <!-- Desktop -->
        <h2 :class="[$style.title, $style.titleDesk]">
          <span :class="$style.bubble">
            Используйте готовые уроки или отдельные практики
          </span><br />
          для создания персонализированной программы<br />
          обучения английскому
        </h2>

        <!-- Mobile -->
        <h2 :class="[$style.title, $style.titleMob]">
          <span :class="$style.mline">Используйте</span>

          <!-- ОДНА ОБЩАЯ ПЛАШКА на 2 строки -->
          <span :class="$style.mBubbleBlock">
            <span :class="$style.mline">готовые уроки&nbsp;или</span>
            <span :class="$style.mline">отдельные практики</span>
          </span>

          <span :class="$style.mline">для создания</span>
          <span :class="$style.mline">персонализированной</span>
          <span :class="$style.mline">программы обучения</span>
          <span :class="$style.mline">английскому</span>
        </h2>
      </div>

      <!-- попугай -->
      <div :class="$style.artBox">
        <img :src="parrot" :class="$style.parrot" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import wave   from '@/assets/img/teachers/blue-wave.svg'
import parrot from '@/assets/img/teachers/parrot.png'
</script>

<style module>
.wrap {
  background:#E9EFF7;
}

/* ===== Desktop карточка ===== */
.panel {
  --pad-x: 30px;
  --art-right: 36px;
  --art-w: 360px;

  position:relative;
  max-width:1390px;
  margin:20px auto 0;
  height:244px;
  border-radius:20px;
  background:#00B0FF;
  overflow:hidden;
  box-shadow:0 10px 24px rgba(16,24,40,.08);
  padding:0 var(--pad-x);
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.wave {
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  pointer-events:none;
  z-index:0;
}

.left {
  position:relative;
  z-index:2;
  max-width:960px;
}

.title {
  margin:0;
  font-family:Inter, system-ui, sans-serif;
  font-weight:500;
  color:#fff;
}

.titleDesk {
  display:block;
  font-size:40px;
  line-height:1.15;
  letter-spacing:-0.05em;
}
.titleMob {
  display:none;
}

.bubble {
  display:inline;
  background:#fff;
  color:#2C2C2C;
  padding:.08em .32em;
  border-radius:12px;
  transform:rotate(1deg);
  box-shadow:0 2px 0 rgba(0,0,0,.06);
  white-space:nowrap;
  -webkit-box-decoration-break:clone;
  box-decoration-break:clone;
}

.artBox {
  position:absolute;
  right:var(--art-right);
  bottom:0;
  width:var(--art-w);
  height:100%;
  display:flex;
  align-items:flex-end;
  justify-content:center;
  z-index:1;
  pointer-events:none;
}

.parrot {
  position:relative;
  width:287px;
  height:auto;
  transform: translateY(6px);
  filter: drop-shadow(0 16px 28px rgba(0,0,0,.18));
}

/* ===== Tablet ===== */
@media (max-width:1024px) {
  .panel {
    --art-w:300px;
    --art-right:20px;
  }
  .titleDesk { font-size:34px; }
  .parrot { width:210px; }
}

/* ===== Mobile (390×690) ===== */
@media (max-width:640px) {
  .panel {
    width:390px;
    max-width:390px;
    height:690px;
    margin:16px auto 0;
    border-radius:20px;
    padding:40px 16px 16px;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
  }

  .titleDesk { display:none; }
  .titleMob {
    display:block;
    font-size:33px;
    line-height:1.10;
    letter-spacing:-0.05em;
    color:#fff;
  }
  .mline { display:block; }

  /* ЕДИНАЯ плашка на 2 строки */
  .mBubbleBlock{
    position:relative;
    display:inline-block;
    color:#2C2C2C;
    padding:.08em .28em;      /* внутренние отступы текста */
    border-radius:12px;       /* радиус самого блока */
    z-index:0;                /* для ::before ниже текста */
  }
  .mBubbleBlock::before{
    content:"";
    position:absolute;
    inset:-.10em -.18em;      /* чтобы фон выступал вокруг текста */
    background:#fff;
    border-radius:12px;
    transform:rotate(.6deg);  /* лёгкий наклон фона */
    box-shadow:0 2px 0 rgba(0,0,0,.06);
    z-index:-1;
  }

  /* попугай снизу по центру */
  .artBox {
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:auto;
    width:100%;
    height:auto;
    z-index:1;
    display:block;
  }
  .parrot {
    position:absolute;
    left:55%;
    bottom:0;
    transform:translateX(-50%);
    width:360px;
    filter: drop-shadow(0 12px 22px rgba(0,0,0,.16));
  }
}

/* страховка для узких экранов */
@media (max-width:400px) {
  .panel { width:calc(100vw - 24px); }
}
</style>
