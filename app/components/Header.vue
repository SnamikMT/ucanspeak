<template>
  <!-- сам бар -->
  <div :class="[$style.bar, insideHero ? $style.inHero : '']">
    <!-- Лого -->
    <NuxtLink to="/" :class="$style.logo">ucanspeak</NuxtLink>

    <!-- Навигация (desktop) -->
    <nav :class="$style.nav">
      <NuxtLink to="/pricing" class="btn btn--ghost" :class="$style.navBtn">Тарифы</NuxtLink>

      <!-- Переключалка по текущему роуту -->
      <NuxtLink
        :to="isTeachers ? '/students' : '/teachers'"
        class="btn btn--ghost"
        :class="[$style.navBtn, $style.link, $style.switch]"
      >
        {{ isTeachers ? 'Взрослым & Детям' : 'Преподавателям' }}
      </NuxtLink>

      <NuxtLink to="/contacts" class="btn btn--ghost" :class="$style.navBtn">Контакты</NuxtLink>
    </nav>

    <!-- CTA (desktop) -->
    <NuxtLink to="/platform" class="btn btn--primary" :class="$style.primary">Перейти на платформу</NuxtLink>

    <!-- Бургер (mobile) -->
    <button type="button" :class="$style.menuBtn" aria-label="Открыть меню">
      <span></span><span></span><span></span>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ insideHero?: boolean }>()
const route = useRoute()
const isTeachers = computed(() => route.path.startsWith('/teachers'))
</script>

<style module>
/* ширина панели + центрирование */
.bar{
  display:flex; align-items:center; justify-content:space-between;
  max-width:1390px; margin:0 auto;
  padding:14px 0; /* базовый вертикальный отступ, когда НЕ внутри hero */
}

/* режим "внутри героя": нужны боковые поля и отступ вниз 66 */
.inHero{
  padding:25px 50px 0 50px; /* верх/бока */
  margin-bottom:66px;        /* зазор под хедером внутри панели */
}

.logo{
  font-weight:800; font-size:22px; letter-spacing:.2px;
  text-decoration:none; color:#4363f5;
}

/* Навигация (desktop) */
.nav{ display:flex; gap:10px; }
.navBtn{ padding:10px 14px; border-radius:12px; font-weight:500; }
.primary{ padding:12px 16px; border-radius:12px; }

/* Аккуратная подсветка переключалки */
.link{ transition: background .2s ease; }
.switch{
  background:#E9EFF7;
}

/* Бургер (mobile) */
.menuBtn{
  display:none; flex-direction:column; justify-content:center; gap:5px;
  width:44px; height:36px; border:1px solid rgba(44,44,44,0.3);
  border-radius:8px; background:transparent; cursor:pointer;
}
.menuBtn span{
  display:block; height:2px; width:20px; background:#2C2C2C; border-radius:2px; margin:0 auto;
}

/* адаптив */
@media (max-width:1390px){
  .bar{ padding-left:20px; padding-right:20px; }
  .inHero{ padding-left:20px; padding-right:20px; }
}
@media (max-width:768px){
  .nav, .primary{ display:none; }
  .menuBtn{ display:flex; }
}
</style>
