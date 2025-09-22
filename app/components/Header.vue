<template>
  <header :class="$style.wrap">
    <div class="container">
      <div :class="$style.bar" class="module">
        <a href="/" :class="$style.logo">ucanspeak</a>

        <nav :class="$style.nav">
          <a href="#" class="btn btn--ghost" :class="$style.navBtn">Тарифы</a>
          <a href="#" class="btn btn--ghost" :class="$style.navBtn">Преподавателям</a>
          <a href="#" class="btn btn--ghost" :class="$style.navBtn">Контакты</a>
        </nav>

        <a href="#" class="btn btn--primary" :class="$style.primary">Перейти на платформу</a>
      </div>
    </div>
  </header>
</template>

<style module>
.wrap{ padding: 18px 0; }
.bar{
  display:flex; align-items:center; justify-content:space-between;
  padding: 14px;
}
.logo{
  font-weight: 800;
  font-size: 22px;
  letter-spacing: .2px;
  text-decoration: none;
  color: #4363f5; /* близко к макету */
}
.nav{ display:flex; gap: 10px; }
.navBtn{ padding: 10px 14px; border-radius: 12px; font-weight: 500; }
.primary{ padding: 12px 16px; border-radius: 12px; }
</style>
