<template>
  <section :class="$style.wrap" aria-labelledby="faqTitle">
    <div :class="$style.inner">
      <!-- Заголовок -->
      <header :class="$style.head">
        <h2 id="faqTitle" :class="$style.title">
          Отвечаем на волнующие<br />
          <span :class="$style.hl">вопросы</span>
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
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
  { q: 'Не уверен, что мне подойдёт платформа. Как быть?', a: 'У нас есть бесплатный пробный период, чтобы вы могли понять подходит ли вам обучение.' },
  { q: 'UCANSPEAK лучше репетитора?', a: 'В платформе вы получаете системный подход, гибкий график и доступ к интерактивным материалам.' },
  { q: 'Как часто нужно заниматься?', a: 'Мы рекомендуем 3-4 раза в неделю по 20-30 минут для стабильного прогресса.' },
  { q: 'Какой минимальный уровень нужен для старта?', a: 'Можно начинать с нуля — есть базовые курсы и поддержка.' },
  { q: 'Справится ли ребёнок с обучением английскому на платформе самостоятельно?', a: 'Да, у нас есть адаптированные материалы для детей и простая структура уроков.' }
]

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<style module>
/* секция */
.wrap{ padding:140px 0 0; }

/* фикс ширина 1390 */
.inner{
  max-width:1390px;
  margin:0 auto;
}

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

/* Спан для мобильного хайлайта */
.hl{ display:inline; background:none; }

/* сетка */
.grid{
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap:20px;
  align-items:start;
}

/* обертка вопрос+ответ */
.itemWrap{ display:flex; flex-direction:column; gap:12px; }

/* вопрос */
.item{
  width:100%;
  min-height:84px;
  background:#fff;
  border-radius:20px;
  display:flex; align-items:center;
  gap:14px;
  padding:0 16px 0 22px;
  border:none;
  cursor:pointer;
  text-align:left;
  box-shadow:0 10px 22px rgba(16,24,40,.06);
}
.text{
  flex:1 1 auto; min-width:0;
  font-family:Inter,sans-serif;
  font-weight:500; font-size:20px; line-height:1.2; letter-spacing:-0.03em; color:#111827;
}
.plus{
  flex:0 0 32px;
  width:32px; height:32px;
  background:#B87EFF; border-radius:999px;
  display:grid; place-items:center; user-select:none;
}
.plus[data-open="true"]{ background:#9A5DDB; }

/* ответ */
.answer{
  padding:16px 20px; background:#fff; border-radius:16px;
  box-shadow:0 4px 12px rgba(0,0,0,.06);
  font-family:Inter,sans-serif; font-size:16px; line-height:1.4; color:#374151;
}

/* анимация */
.faq-enter-active, .faq-leave-active{ transition: all .25s ease; }
.faq-enter-from, .faq-leave-to{ opacity:0; transform:translateY(-6px); }

/* CTA */
.cta{
  background:#3232E9; color:#fff;
  justify-content:space-between;
  padding-left:22px; padding-right:25px;
  text-decoration:none;
}
.ctaText{
  font-family:Inter,sans-serif; font-weight:600; font-size:20px; line-height:1.2; letter-spacing:-0.03em;
}
.ctaSquare{
  flex:0 0 46px; width:46px; height:46px; background:#fff; border-radius:10px; display:grid; place-items:center;
}

/* адаптив */
@media (max-width:1280px){
  .grid{ grid-template-columns:1fr; }
}

/* мобильный */
@media (max-width:640px){
  .wrap{ padding:120px 15px 0; }

  .title{
    font-size:33px; line-height:1.02; letter-spacing:-0.04em;
  }

  /* Хайлайт только на мобилке */
  .hl{
    display:inline-block;
    background:#FFD249;
    border-radius:10px;
    padding:.06em .28em;
    transform:rotate(1.2deg);
    box-shadow: inset 0 -2px 0 rgba(0,0,0,.06);
  }

  .text{ font-size:18px; line-height:1.25; }
  .item{ min-height:76px; padding:0 14px 0 16px; border-radius:16px; }
  .plus{ width:30px; height:30px; flex:0 0 30px; }
  .answer{ font-size:16px; line-height:1.35; }
  .cta{ min-height:84px; }
  .ctaText{ font-size:18px; }
}
</style>
