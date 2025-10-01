<!-- components/teachers/UseReadyLessons.vue -->
<template>
  <section :class="$style.wrap">
    <div :class="$style.panel">
      <!-- фоновая волна -->
      <img :src="wave" :class="$style.wave" alt="" aria-hidden="true" />

      <!-- текст -->
      <div :class="$style.left">
        <h2 :class="$style.title">
          <span :class="$style.bubble">
            Используйте готовые уроки или отдельные практики
          </span>
          <br />
          для создания персонализированной программы<br />
          обучения английскому
        </h2>
      </div>

      <!-- попугай справа -->
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
.wrap{ background:#E9EFF7; }

/* панель */
.panel{
  --pad-x: 30px;
  --pad-t: 32px;
  --pad-b: 32px;

  --art-right: 36px;
  --art-w: 360px;
  --art-scale: 1;
  --art-bottom: 0px;

  position:relative;
  max-width:1390px;
  margin-top:20px;
  height:244px;
  border-radius:20px;
  background:#00B0FF;
  overflow:hidden;
  box-shadow:0 10px 24px rgba(16,24,40,.08);

  padding: var(--pad-t) calc(var(--art-right) + var(--art-w)) var(--pad-b) var(--pad-x);
}

/* волна */
.wave{
  position:absolute; inset:0;
  width:100%; height:100%;
  object-fit:cover;
  pointer-events:none;
  z-index:0;
}

/* текст */
.left{ position:relative; z-index:2; }
.title{
  margin:0;
  font-family: Inter, system-ui, sans-serif;
  font-weight:500;            /* Medium */
  font-size:40px;
  line-height:1.15;           /* 115% */
  letter-spacing:-0.05em;     /* -5% */
  color:#FFFFFF;
  max-width: 960px;
}

/* белая подложка только под первую строку */
.bubble{
  display:inline-block;
  background:#fff;
  color:#2C2C2C;
  padding:.08em .32em;
  border-radius:12px;
  transform: rotate(1deg);
  box-shadow: 0 2px 0 rgba(0,0,0,.06);
  white-space: nowrap;        /* ← на ПК держим одной строкой */
}

/* правый арт */
.artBox{
  position:absolute;
  right: var(--art-right);
  bottom: 0;
  width: var(--art-w);
  height:100%;
  display:flex;
  align-items:flex-end;
  justify-content:center;
  z-index:1;
  pointer-events:none;
}

.parrot{
  position:relative;
  width: 240px;
  height:auto;
  transform: translateY(6px) scale(var(--art-scale));
  filter: drop-shadow(0 16px 28px rgba(0,0,0,.18));
}

/* ===== адаптив ===== */
@media (max-width: 1024px){
  .panel{ --art-w: 300px; --art-right: 20px; }
  .title{ font-size:34px; }
  .parrot{ width:210px; }
}

@media (max-width: 768px){
  .panel{
    padding: 18px 16px 18px;
    height:auto;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
  }
  .title{
    font-size:28px;
    line-height:1.08;
    letter-spacing:-.04em;
  }
  .artBox{
    position:static;
    width:100%;
    margin-top:10px;
    height: 200px;
    display:flex; align-items:flex-end; justify-content:center;
    pointer-events:none;
  }
  .parrot{ width:200px; }
}
</style>
