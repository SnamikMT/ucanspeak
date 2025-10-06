<template>
  <article :class="$style.card">
    <!-- бейдж с цифрой -->
    <span :class="$style.num"><b>{{ num }}</b></span>

    <!-- заголовок: прибит к нижней кромке плашки -->
    <h3 :class="$style.title" v-html="title"></h3>

    <!-- иллюстрация -->
    <img
      :class="$style.art"
      :src="img"
      alt=""
      aria-hidden="true"
      :style="{
        right: (artRight ?? 0) + 'px',
        bottom: (artBottom ?? 0) + 'px',
        ...(artWidth  ? { width:  artWidth  + 'px' } : {}),
        ...(artHeight ? { height: artHeight + 'px' } : {})
      }"
    />

    <!-- доп. плашка (если нужна) -->
    <span
      v-if="pill"
      :class="$style.pill"
      :style="{
        right: (pillRight ?? 42) + 'px',
        bottom: (pillBottom ?? 58) + 'px'
      }"
    >{{ pill }}</span>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  num: string
  title: string
  img: string
  pill?: string
  artWidth?: number
  artHeight?: number
  artRight?: number
  artBottom?: number
  pillRight?: number
  pillBottom?: number
}>()
</script>

<style module>
/* Карточка: строгие отступы слева/сверху/снизу по 30px */
.card{
  --pad-l: 30px;
  --pad-t: 30px;
  --pad-b: 30px;

  position:relative;
  width:450px; height:200px;
  background:#fff;
  border-radius:20px;
  padding: var(--pad-t) 24px var(--pad-b) var(--pad-l); /* right оставляем гибким из-за арта */
  overflow:hidden;
  box-shadow:0 6px 18px rgba(16,24,40,.06);
  isolation:isolate;
}

/* Бейдж-цифра: отступы по новой сетке (30/30) */
.num{
  position:absolute; top:var(--pad-t); left:var(--pad-l);
  width:32px; height:32px; border-radius:999px;
  display:grid; place-items:center;
  background:#B87EFF; color:#fff;
  box-shadow:0 4px 10px rgba(184,126,255,.35);
}
.num b{
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  font-weight:600; font-size:14px; line-height:1.3; letter-spacing:-.03em;
  font-variant-numeric:tabular-nums;
}

/* Заголовок: прибит к НИЗУ плашки с тем же левым отступом 30px */
.title{
  position:absolute;
  left:var(--pad-l);
  bottom:var(--pad-b);
  margin:0;
  max-width:260px; /* чтобы не залезать под арт; при желании увеличь */
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  font-weight:500; font-size:20px; line-height:1.2; letter-spacing:-.03em;
  color:#0F172A;
  text-align:left;
}

/* Иллюстрация — только из пропсов управляем шириной/высотой */
.art{
  position:absolute;
  right:0; bottom:0;
  display:block;
  max-width:none !important;
  max-height:none !important;
  object-fit:contain !important;
  pointer-events:none; user-select:none;
}

/* Доп. плашка (третья карточка) */
.pill{
  position:absolute; z-index:2;
  padding:8px 14px;
  background: linear-gradient(180deg, rgba(172,129,255,.18), rgba(172,129,255,.05));
  color:#7C5CFF;
  border:1px solid rgba(124,92,255,.35);
  border-radius:999px;
  font-size:14px; font-weight:600; letter-spacing:-.01em;
  backdrop-filter: blur(6px);
  white-space:nowrap;
  transform: rotate(-8deg);
  box-shadow:0 6px 14px rgba(124,92,255,.22);
}

/* Адаптив */
@media (max-width:1024px){
  .card{ width:100%; height:180px; }
  .title{ max-width:60%; font-size:18px; }
}
@media (max-width:560px){
  .card{
    --pad-l: 24px;
    --pad-t: 24px;
    --pad-b: 24px;
    height:168px;
    padding-right:16px; /* правый чуть меньше, чтобы арту было проще жить */
  }
  .num{ width:30px; height:30px; }
  .title{ font-size:16px; }
}
</style>
