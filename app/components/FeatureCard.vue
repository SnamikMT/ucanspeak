<template>
  <article :class="$style.card">
    <!-- Кружок 32x32 -->
    <span :class="$style.num"><b>{{ num }}</b></span>

    <!-- Текст строго под кружком и левым краем -->
    <h3 :class="$style.title" v-html="title"></h3>

    <!-- Иллюстрация: никогда не превышает карточку, обрезка регулируется оффсетами -->
    <img
      :class="$style.art"
      :src="img"
      alt=""
      aria-hidden="true"
      :style="{
        right: (artRight ?? 10) + 'px',
        bottom: (artBottom ?? -6) + 'px'
      }"
    />

    <!-- Плашка на третьей карточке -->
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
  artRight?: number
  artBottom?: number
  pillRight?: number
  pillBottom?: number
}>()
</script>

<style module>
/* ---- Карточка: 450x200 ровно на ПК ---- */
.card{
  position:relative;
  width:450px; height:200px;            /* ключевое требование */
  background:#fff;
  border-radius:20px;
  padding:20px 24px;                    /* контентная зона */
  overflow:hidden;                      /* аккуратная микро-обрезка арта */
  box-shadow:0 6px 18px rgba(16,24,40,.06);
  isolation:isolate;
}

/* ---- Бейдж с цифрой: 32x32, #B87EFF ---- */
.num{
  position:absolute; top:16px; left:16px;
  width:32px; height:32px; border-radius:999px;
  display:grid; place-items:center;
  background:#B87EFF;
  color:#fff;
  box-shadow:0 4px 10px rgba(184,126,255,.35);
}
.num b{
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Liberation Sans", sans-serif;
  font-weight:600;                      /* Semi Bold */
  font-size:14px;
  line-height:1.3;                      /* 130% */
  letter-spacing:-0.03em;               /* -3% */
  font-variant-numeric: tabular-nums;
}

/* ---- Заголовок по Figma ---- */
.title{
  position:relative; z-index:1;
  margin: 56px 0 0;                     /* строго под кружком */
  max-width: 260px;                      /* чтобы не влезать под иллюстрацию */
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Liberation Sans", sans-serif;
  font-weight:500;                       /* Medium */
  font-size:20px;
  line-height:1.2;                       /* 120% */
  letter-spacing:-0.03em;                /* -3% */
  color:#0F172A;
  text-align:left;                       /* по левому краю */
}

/* ---- Иллюстрация справа ----
   Защита от глобальных стилей: max-width/height сброшены */
.art{
  position:absolute;
  right:10px; bottom:-6px;
  display:block;
  width:auto; height:auto;              /* управляем только через inline width */
  max-width:none !important;
  max-height:none !important;
  object-fit:contain !important;
  pointer-events:none; user-select:none;

  /* Внутренние ограничения, чтобы никогда не «залезть» выше карточки */
  /* по высоте картинка не должна превышать высоту карточки */
  /* (с учётом возможного отрицательного bottom мы всё равно в пределах overflow:hidden) */
}

/* ---- Плашка на 3-й карточке ---- */
.pill{
  position:absolute; z-index:2;
  padding:8px 14px;
  background: linear-gradient(180deg, rgba(172,129,255,.18), rgba(172,129,255,.05));
  color:#7C5CFF;
  border:1px solid rgba(124,92,255,.35);
  border-radius:999px;
  font-size:14px; font-weight:600;
  letter-spacing:-0.01em;
  backdrop-filter: blur(6px);
  white-space:nowrap;
  transform: rotate(-8deg);
  box-shadow:0 6px 14px rgba(124,92,255,.22);
}

/* ---- Мобилка: ширина 100%, высота помягче ---- */
@media (max-width: 1024px){
  .card{ width:100%; height:180px; }
  .title{ max-width:60%; font-size:18px; }
}
@media (max-width:560px){
  .card{ height:168px; padding:18px 16px; }
  .num{ top:12px; left:12px; }
  .title{ margin-top:48px; font-size:16px; }
}
</style>
