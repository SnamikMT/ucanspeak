<!-- components/teachers/TeacherStepCard.vue -->
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
/* ПК: фикс 390×200 */
.card{
  position: relative;
  box-sizing: border-box;
  width: 450px;
  height: 200px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 8px 22px rgba(16,24,40,.06);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* текст у нижней кромки */
  overflow: hidden;          /* ничего не распирает */
}

/* Кружок 32×32 вверху слева */
.num{
  position: absolute; top: 30px; left: 30px;
  width: 32px; height: 32px; border-radius: 999px;
  display: grid; place-items: center;
  background: #B87EFF; color:#fff;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  font-weight:600; font-size:14px; line-height:1.3; letter-spacing:-.03em;
}
.num b{ font-variant-numeric: tabular-nums; transform: translateY(.3px); }

/* Текст: ровно под кружком, одинаковая типографика, обрезка до 3 строк */
.text{
  margin: 0;
  color: #2C2C2C;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;       /* по ТЗ 120% */
  letter-spacing: -0.03em;

  /* контроль строк, чтобы высоты совпадали */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

/* Планшеты: сетка контролирует ширину, карточка по центру */
@media (max-width:1200px){
  .card{ margin: 0 auto; }
}

/* Мобилка: строго 390×158, между карточками зазоры делает grid-gap */
@media (max-width:640px){
  .card{
    width: 390px;
    height: 158px;
    border-radius: 16px;
    padding: 24px 24px 24px; /* равномерные отступы */
    margin: 0 auto;
  }
  .num{ top: 24px; left: 24px; }
  .text{
    /* можно оставить 3 строки; при меньшей высоте — сжимать текст */
    -webkit-line-clamp: 3;
  }
}
</style>
