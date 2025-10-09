<template>
  <footer :class="$style.wrap" id="contact">
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
            <li><a href="#" rel="nofollow">MAX</a></li>
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
  { href: '#platform', label: 'Что включено в платформу' },
  { href: '/students#audio-trainer', label: 'Аудиотренажер' },
  { href: '#interactive', label: 'Интерактивные уроки' },
  { href: '#about-brand', label: 'О бренде' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#faq', label: 'Часто задаваемые вопросы' },
  { href: '#review', label: 'Отзывы' },
  { href: '/teachers', label: 'Преподавателям' }
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
  margin-top:140px;
  position:relative;
  background:#fff;
  border-radius:16px;
  overflow:hidden;
  height:800px;
}

/* верхняя полоса */
.top{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:50px 32px 0;   /* сверху 50 */
  padding-left:50px;     /* слева 50 */
}
.topLogo{ height:26px; width:auto; display:block; }
.upBtn{
  width:40px; height:40px;
  border-radius:12px; border:0; cursor:pointer;
  background:linear-gradient(180deg,#B07EFF,#7B5BFF);
  box-shadow:0 6px 14px rgba(123,91,255,.25);
  display:flex; align-items:center; justify-content:center;
}

/* контентная часть */
.inner{
  position:relative; z-index:2;
  padding:53px 32px 0;   /* от логотипа сверху 53 */
  padding-left:50px;     /* слева 50 */
}
.grid{ display:grid; grid-template-columns:1.1fr 1.1fr 1fr; gap:48px; }
.col{ min-width:0; }

/* заголовки колонок */
.head{
  margin:0 0 20px;
  color:#B7C6E4;
  font-family: Inter, sans-serif;
  font-weight:600;
  font-size:14px;
  line-height:1.3;
  letter-spacing:-0.03em;
}

/* списки */
.list{ list-style:none; margin:0; padding:0; }
.list li + li{ margin-top:12px; }
.list a{
  color:#808080;
  text-decoration:none;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:14px;
  line-height:1.3;
  letter-spacing:-0.03em;
}
.list a:hover{ color:#1F56FF; }

/* телефон */
.phone{
  display:inline-block;
  color:#808080;
  text-decoration:none;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:26px;
  line-height:1.1;
  letter-spacing:-0.04em;
}

/* волна снизу */
.wave{
  position:absolute; bottom:0; left:0;
  width:100%; height:auto; z-index:1; pointer-events:none;
}

/* большой svg-логотип */
.logoMark{
  position:absolute; bottom:0; left:0;
  width:100%; height:auto; z-index:2; pointer-events:none;
}

@media (max-width:1100px){
  .grid{ grid-template-columns:1fr 1fr; gap:32px; }
}
@media (max-width:720px){
  .top{ padding:40px 16px 0; padding-left:16px; }
  .inner{ padding:32px 16px 0; }
  .grid{ grid-template-columns:1fr; gap:24px; }
  .phone{ font-size:20px; }
}

@media (max-width: 640px){
  /* сверху 120 как всегда */
  .wrap{ margin:120px 0 0; height: 1232px;}
  .grid{ grid-template-columns:1fr; gap:53px; }
}

</style>
