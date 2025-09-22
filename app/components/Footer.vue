<template>
  <footer :class="$style.wrap" id="site-footer">
    <!-- верхняя полоса -->
    <div :class="$style.top">
      <img src="/assets/img/footer-logo-top.svg" alt="ucanspeak" :class="$style.topLogo" />
      <button :class="$style.upBtn" type="button" @click="scrollTop" aria-label="Наверх">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M10 15V5M10 5L5 10M10 5l5 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- контент -->
    <div :class="$style.inner">
      <div :class="$style.grid">
        <nav :class="$style.col">
          <h4 :class="$style.head">НАВИГАЦИЯ</h4>
          <ul :class="$style.list">
            <li v-for="(i,idx) in nav" :key="'n'+idx"><a :href="i.href">{{ i.label }}</a></li>
          </ul>
        </nav>

        <nav :class="$style.col">
          <h4 :class="$style.head">ДОКУМЕНТАЦИЯ</h4>
          <ul :class="$style.list">
            <li v-for="(i,idx) in docs" :key="'d'+idx"><a :href="i.href">{{ i.label }}</a></li>
          </ul>
        </nav>

        <div :class="$style.col">
          <h4 :class="$style.head">СВЯЗАТЬСЯ С НАМИ</h4>
          <a :class="$style.phone" href="tel:+79031731066">+7 (903) 173-10-66</a>

          <h4 :class="$style.head" style="margin-top:22px">КОНТАКТЫ</h4>
          <ul :class="$style.list">
            <li><a href="#" rel="nofollow">Telegram</a></li>
            <li><a href="#" rel="nofollow">Whatsapp</a></li>
            <li><a href="#" rel="nofollow">Вконтакте</a></li>
            <li><a href="mailto:info@ucanspeak.ru">info@ucanspeak.ru</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- волна снизу -->
    <img :class="$style.wave" src="/assets/img/footer-wave.svg" alt="" aria-hidden="true" />
    <!-- большой логотип снизу -->
    <img :class="$style.logoMark" src="/assets/img/footer-logo.svg" alt="ucanspeak" aria-hidden="true" />
  </footer>
</template>

<script setup lang="ts">
const nav = [
  { href: '#', label: 'Что включено в платформу' },
  { href: '#', label: 'Аудиотренажер' },
  { href: '#', label: 'Интерактивные уроки' },
  { href: '#', label: 'О бренде' },
  { href: '#', label: 'Тарифы' },
  { href: '#', label: 'Часто задаваемые вопросы' },
  { href: '#', label: 'Отзывы' },
  { href: '#', label: 'Преподавателям' }
]

const docs = [
  { href: '#', label: 'Публичная оферта' },
  { href: '#', label: 'Политика конфиденциальности' },
  { href: '#', label: 'Согласие на обработку персональных данных' },
  { href: '#', label: 'Пользовательское соглашение' },
  { href: '#', label: 'Сведения об образовательной организации' },
  { href: '#', label: 'Согласие на получение рассылки рекламного характера' }
]

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style module>
/* общий блок */
.wrap{
  margin-top:140px;              /* внешний отступ сверху */
  position:relative;
  background:#fff;
  border-radius:16px;
  overflow:hidden;
  height:800px;
}

/* шапка футера */
.top{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:50px 32px 53px;        /* 50 сверху, 53 снизу как просили */
}
.topLogo{ height:26px; width:auto; display:block; }
.upBtn{
  position:relative;             /* справа в той же строке */
  width:40px; height:40px;
  border-radius:12px;
  border:0; cursor:pointer;
  background:linear-gradient(180deg,#B07EFF,#7B5BFF);
  box-shadow:0 6px 14px rgba(123,91,255,.25);
  display:flex; align-items:center; justify-content:center;
}

/* контент */
.inner{ position:relative; z-index:2; padding:0 32px; }
.grid{ display:grid; grid-template-columns:1.1fr 1.1fr 1fr; gap:48px; }
.col{ min-width:0; }

/* заголовки колонок */
.head{
  margin:0 0 20px;               /* отступ снизу 20 */
  color:#B7C6E4;                 /* цвет по макету */
  font:700 12px/1 Inter, sans-serif;
  letter-spacing:.08em;
  text-transform:none;
}

/* списки */
.list{ list-style:none; margin:0; padding:0; }
.list li + li{ margin-top:12px; }   /* расстояние 12 между пунктами */
.list a{
  color:#3A4559;
  text-decoration:none;
  font:500 14px/1.45 Inter, sans-serif;
}
.list a:hover{ color:#1F56FF; }

/* телефон */
.phone{
  display:inline-block;
  color:#2C2C2C;
  text-decoration:none;
  font:700 18px/1.2 Inter, sans-serif;
}

/* волна снизу */
.wave{
  position:absolute;
  bottom:0; left:0;
  width:100%; height:auto;
  z-index:1;
  pointer-events:none;
}

/* большой svg-логотип на самом дне */
.logoMark{
  position:absolute;
  bottom:0; left:0;
  width:100%;
  height:auto;
  z-index:2;
  pointer-events:none;
}

@media (max-width:1100px){
  .grid{ grid-template-columns:1fr 1fr; gap:32px; }
}
@media (max-width:720px){
  .top{ padding:40px 16px 40px; }
  .inner{ padding:0 16px; }
  .grid{ grid-template-columns:1fr; gap:24px; }
  .phone{ font-size:16px; }
}
</style>
