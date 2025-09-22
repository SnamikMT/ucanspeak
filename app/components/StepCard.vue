<template>
  <article :class="$style.card">
    <span :class="$style.num"><b>{{ num }}</b></span>
    <p :class="$style.text"><slot /></p>
  </article>
</template>

<script setup lang="ts">
defineProps<{ num: string }>()
</script>

<style module>
.card{
  position:relative; width:450px; height:200px;
  border-radius:20px; background:#fff; box-shadow:0 8px 22px rgba(16,24,40,.06);
  /* ключ: текст у нижней кромки, с отступом 30px */
  display:flex; flex-direction:column; justify-content:flex-end;
  padding:30px;
  overflow:hidden;
}

/* Кружок 32×32, отступы 30px от левого/верхнего края */
.num{
  position:absolute; top:30px; left:30px;
  width:32px; height:32px; border-radius:999px;
  display:grid; place-items:center;
  background:#41BCF8; color:#fff;
  box-shadow:0 2px 6px rgba(65,188,248,.35);
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  font-weight:600; font-size:14px; line-height:1.3; letter-spacing:-.03em;
}
.num b{ font-variant-numeric:tabular-nums; transform:translateY(.3px); }

/* Текст по Figma, снизу 30px за счёт padding контейнера */
.text{
  margin:0;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  font-weight:500; font-size:16px; line-height:1.3; letter-spacing:-.03em;
  color:#2C2C2C;
}
</style>
