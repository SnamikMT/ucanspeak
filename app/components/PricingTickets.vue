<template>
  <section :class="$style.wrap" aria-labelledby="pricingTitle">
    <div class="container">
      <!-- Заголовок -->
      <header :class="$style.head">
        <h2 id="pricingTitle" :class="$style.title">
          Доступ <span :class="$style.hl">на месяц дешевле</span><br />
          1 занятия с преподавателем
        </h2>
        <p :class="$style.lead">
          Получите доступ к демо или полной версии обучающей<br />
          платформы на срок от 1 до 12 месяцев
        </p>
      </header>

      <!-- Карточки -->
      <div :class="$style.grid">
        <article
          v-for="(card, i) in cards"
          :key="i"
          :class="[$style.ticket, $style[card.cls], card.dark ? $style.darkText : null]"
          :style="{ '--accent': card.color, '--rot': card.rot }"
        >
          <h3 :class="$style.tTitle">{{ card.title }}</h3>
          <p :class="$style.tText">{{ card.text }}</p>

          <div :class="$style.price">{{ card.price }}</div>

          <!-- SVG-перфорация во всю ширину -->
          <div :class="$style.cutWrap">
            <img :src="cut" alt="" :class="$style.cut" />
          </div>

          <a href="#" :class="$style.btn">
            <span>Приобрести доступ</span>
            <i :class="$style.btnSquare">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="white" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </i>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import cut from '@/assets/img/ticketCut.svg'

/** важно: cls = ключ CSS-модуля, а не '$style.xxx' */
const cards = [
  {
    title: 'Демо',
    text: 'Вас ждут бесплатные задания: десятки упражнений на лексику, грамматику, произношение',
    price: 'от 600 ₽/мес',
    color: '#3232E9',
    cls: 'blue',
    rot: '0deg',
    dark: false
  },
  {
    title: 'Старт',
    text: 'Индивидуальная программа для обучения от 20 минут занятий в день, ничего лишнего, сможете настроить всё под себя',
    price: 'от 600 ₽/мес',
    color: '#B87EFF',
    cls: 'violet',
    rot: '-8deg',
    dark: false
  },
  {
    title: 'Эксперт',
    text: 'Максимальный доступ ко всем упражнениям и материалам на сайте, занимайтесь сколько хотите',
    price: 'от 600 ₽/мес',
    color: '#FF9B76',
    cls: 'peach',
    rot: '4deg',
    dark: false
  },
  {
    title: 'Максимум',
    text: 'Доступ к платформе НАВСЕГДА и уроки с персональным преподавателем в подарок. Для тех, кто хочет достичь вершины мастерства в английском',
    price: 'от 600 ₽/мес',
    color: '#FFD551',
    cls: 'yellow',
    rot: '0deg',
    dark: true
  }
]
</script>

<style module>
.wrap{ background:#E9EFF7; padding-top:140px; }

/* Заголовок/лид */
.head{ text-align:center; margin-bottom:87px; }
.title{
  font-family:Inter, sans-serif; font-weight:500; font-size:55px;
  line-height:.95; letter-spacing:-.05em; color:#111;
}
.hl{ background:#FFD249; border-radius:12px; padding:.02em .28em; }
.lead{
  margin-top:22px; font-family:Inter,sans-serif; font-weight:500;
  font-size:18px; line-height:1.3; letter-spacing:-.03em; color:#2C2C2C;
}

/* Сетка карточек */
.grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:24px; }

/* Карточка */
.ticket{
  --rot: 0deg;
  transform: rotate(var(--rot));
  border-radius:20px; padding:26px; min-height:460px;
  display:flex; flex-direction:column; position:relative;
  box-shadow:0 18px 40px rgba(16,24,40,.16); overflow:visible;
}

/* Цветовые темы */
.blue{ background:#3232E9; color:#fff; }
.violet{ background:#B87EFF; color:#fff; }
.peach{ background:#FF9B76; color:#fff; }
.yellow{ background:#FFD551; }
.darkText .tTitle,.darkText .tText,.darkText .price{ color:#111; }

/* Типографика внутри карточки */
.tTitle{
  margin:0 0 10px; font-family:Inter,sans-serif; font-weight:600;
  font-size:36px; line-height:1.3; letter-spacing:-.03em;
}
.tText{
  margin:0 0 auto; font-family:Inter,sans-serif; font-weight:500;
  font-size:18px; line-height:1.3; letter-spacing:-.03em;
}
.price{
  margin:16px 0; font-family:Inter,sans-serif; font-weight:600;
  font-size:36px; line-height:1.3; letter-spacing:-.03em;
}

/* SVG-перфорация (растягиваем до краёв) */
.cutWrap{ margin:0 -26px; }
.cut{ display:block; width:100%; height:auto; pointer-events:none; }

/* Кнопка по центру */
.btn{
  margin:20px auto 0; width:218px; height:46px; border-radius:10px;
  background:#fff; display:flex; align-items:center; justify-content:space-between;
  padding:0 10px 0 14px; color:#111; text-decoration:none;
  font-family:Inter,sans-serif; font-weight:600; font-size:16px; line-height:1.3; letter-spacing:-.03em;
}
.btnSquare{
  width:36px; height:36px; border-radius:10px; display:grid; place-items:center;
  background: var(--accent);
}

/* Адаптив */
@media (max-width:1200px){ .grid{ grid-template-columns:repeat(2,1fr); } }
@media (max-width:640px){
  .grid{ grid-template-columns:1fr; }
  .ticket{ transform:none; }
}
</style>
