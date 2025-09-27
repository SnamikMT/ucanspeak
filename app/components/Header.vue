<template>
  <header :class="$style.wrap">
    <div class="container">
      <div :class="$style.bar">
        <!-- Логотип -->
        <a href="/" :class="$style.logo">ucanspeak</a>

        <!-- Навигация (десктоп) -->
        <nav :class="$style.nav">
          <a href="#" class="btn btn--ghost" :class="$style.navBtn">Тарифы</a>
          <a href="#" class="btn btn--ghost" :class="$style.navBtn">Преподавателям</a>
          <a href="#" class="btn btn--ghost" :class="$style.navBtn">Контакты</a>
        </nav>

        <!-- CTA десктоп -->
        <a href="#" class="btn btn--primary" :class="$style.primary">Перейти на платформу</a>

        <!-- Кнопка меню (мобилка) -->
        <button type="button" :class="$style.menuBtn" aria-label="Открыть меню">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style module>
.wrap{ padding:18px 0; }

.bar{
  display:flex; align-items:center; justify-content:space-between;
  padding:14px 80px;
}

.logo{
  font-weight:800;
  font-size:22px;
  letter-spacing:.2px;
  text-decoration:none;
  color:#4363f5;
}

/* Навигация (desktop) */
.nav{ display:flex; gap:10px; }
.navBtn{ padding:10px 14px; border-radius:12px; font-weight:500; }
.primary{ padding:12px 16px; border-radius:12px; }

/* Кнопка меню (mobile only) */
.menuBtn{
  display:none;
  flex-direction:column; justify-content:center; gap:5px;
  width:44px; height:36px;
  border:1px solid rgba(44,44,44,0.3); /* #2C2C2C4D */
  border-radius:8px;
  background:transparent;
  cursor:pointer;
}
.menuBtn span{
  display:block;
  height:2px; width:20px;
  background:#2C2C2C;
  border-radius:2px;
  margin:0 auto;
}

/* ===== Адаптив ===== */
@media (max-width:768px){
  .bar{ padding:14px 20px; }
  .nav, .primary{ display:none; }
  .menuBtn{ display:flex; }
}
</style>
