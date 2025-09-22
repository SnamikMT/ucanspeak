<template>
  <section :class="$style.wrap" aria-labelledby="faqTitle">
    <div class="container">
      <!-- Заголовок -->
      <header :class="$style.head">
        <h2 id="faqTitle" :class="$style.title">
          Отвечаем на волнующие<br />вопросы
        </h2>
      </header>

      <!-- Сетка -->
      <div :class="$style.grid">
        <!-- Вопросы -->
        <div
          v-for="(item, i) in faqs"
          :key="i"
          :class="$style.itemWrap"
        >
          <button
            type="button"
            :class="$style.item"
            @click="toggle(i)"
          >
            <span :class="$style.text">{{ item.q }}</span>
            <span :class="$style.plus" :data-open="openIndex === i">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="6" y="1" width="2" height="12" rx="1" fill="white"/>
                <rect
                  v-if="openIndex !== i"
                  x="1"
                  y="6"
                  width="12"
                  height="2"
                  rx="1"
                  fill="white"
                />
              </svg>
            </span>
          </button>

          <transition name="faq">
            <div v-if="openIndex === i" :class="$style.answer">
              {{ item.a }}
            </div>
          </transition>
        </div>

        <!-- CTA -->
        <a :class="[$style.item, $style.cta]" href="#">
          <span :class="$style.ctaText">Задать другой вопрос</span>
          <span :class="$style.ctaSquare" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="#3232E9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref<number|null>(null)

const faqs = [
  {
    q: 'Не уверен, что мне подойдёт платформа. Как быть?',
    a: 'У нас есть бесплатный пробный период, чтобы вы могли понять подходит ли вам обучение.'
  },
  {
    q: 'UCANSPEAK лучше репетитора?',
    a: 'В платформе вы получаете системный подход, гибкий график и доступ к интерактивным материалам.'
  },
  {
    q: 'Как часто нужно заниматься?',
    a: 'Мы рекомендуем 3-4 раза в неделю по 20-30 минут для стабильного прогресса.'
  },
  {
    q: 'Какой минимальный уровень нужен для старта?',
    a: 'Можно начинать с нуля — есть базовые курсы и поддержка.'
  },
  {
    q: 'Справится ли ребёнок с обучением английскому на платформе самостоятельно?',
    a: 'Да, у нас есть адаптированные материалы для детей и простая структура уроков.'
  }
]

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<style module>
/* секция */
.wrap{ background:#E9EFF7; padding:140px 0 72px; }

/* Заголовок */
.head{ text-align:center; margin-bottom:60px; }
.title{
  margin:0;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-0.05em;
  color:#1C1C1C;
  text-align:center;
}

/* сетка */
.grid{
  display:grid;
  grid-template-columns: repeat(2, 685px);
  gap:20px;
  justify-content:space-between;
}

/* обертка для вопроса+ответа */
.itemWrap{ display:flex; flex-direction:column; }

/* вопрос */
.item{
  width:685px; height:84px;
  background:#fff;
  border-radius:20px;
  display:flex; align-items:center; justify-content:space-between;
  padding:0 16px 0 22px;
  border:none;
  cursor:pointer;
  text-align:left;
  box-shadow:0 10px 22px rgba(16,24,40,.06);
}
.text{
  font-family:Inter,sans-serif;
  font-weight:500;
  font-size:20px;
  line-height:1.2;
  letter-spacing:-0.03em;
  color:#111827;
}
.plus{
  width:32px; height:32px;
  background:#B87EFF;
  border-radius:999px;
  display:grid; place-items:center;
}
.plus[data-open="true"]{ background:#9A5DDB; }

/* ответ */
.answer{
  margin-top:12px;
  padding:16px 20px;
  background:#fff;
  border-radius:16px;
  box-shadow:0 4px 12px rgba(0,0,0,.06);
  font-family:Inter,sans-serif;
  font-size:16px;
  line-height:1.4;
  color:#374151;
}

/* анимация раскрытия */
.faq-enter-active, .faq-leave-active{ transition: all .25s ease; }
.faq-enter-from, .faq-leave-to{ opacity:0; transform:translateY(-6px); }

/* CTA */
.cta{
  background:#3232E9;
  color:#fff;
  justify-content:space-between;
  padding-left:22px; padding-right:25px;
}
.ctaText{
  font-family:Inter,sans-serif;
  font-weight:600;
  font-size:20px;
  line-height:1.2;
  letter-spacing:-0.03em;
}
.ctaSquare{
  width:46px; height:46px;
  background:#fff;
  border-radius:10px;
  display:grid; place-items:center;
  flex:0 0 46px;
}

/* адаптив */
@media (max-width:1280px){
  .grid{ grid-template-columns:1fr; }
  .item, .cta{ width:100%; }
}
</style>
