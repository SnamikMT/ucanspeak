<template>
  <section :class="$style.wrap" aria-labelledby="faqTitle" id="faq">
    <div :class="$style.inner">
      <!-- Заголовок -->
      <header :class="$style.head">
        <!-- Desktop -->
        <h2 id="faqTitle" :class="[$style.title, $style.titleDesk]">
          Отвечаем на волнующие<br />
          <span :class="$style.hl">вопросы</span>
        </h2>

        <!-- Mobile (3 строки) -->
        <h2 :class="[$style.title, $style.titleMob]" aria-label="Отвечаем на волнующие вопросы">
          <span :class="$style.mLine">Отвечаем</span>
          <span :class="$style.mLine">на волнующие</span>
          <span :class="[$style.mLine, $style.mHL]">вопросы</span>
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
            :aria-expanded="openIndex === i"
            :aria-controls="`faq-panel-${i}`"
            :id="`faq-button-${i}`"
          >
            <span :class="$style.text">{{ item.q }}</span>

            <!-- Плюс -->
            <span :class="$style.plus" :data-open="openIndex === i" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="6" y="1" width="2" height="12" rx="1" fill="white"/>
                <rect x="1" y="6" width="12" height="2" rx="1" fill="white"/>
              </svg>
            </span>
          </button>

          <!-- Ответ -->
          <transition
            name="faq"
            @enter="onEnter"
            @after-enter="onAfterEnter"
            @leave="onLeave"
            @before-leave="onBeforeLeave"
          >
            <div
              v-show="openIndex === i"
              :id="`faq-panel-${i}`"
              role="region"
              :aria-labelledby="`faq-button-${i}`"
              :class="$style.answerOuter"
              ref="answerRefs"
            >
              <div :class="$style.answerInner">
                {{ item.a }}
              </div>
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
  { q: 'Не уверен, что мне подойдет платформа. Как быть?', a: 'У нас есть бесплатный пробный период, чтобы вы могли понять подходит ли вам обучение.' },
  { q: 'UCANSPEAK лучше репетитора?', a: 'В платформе вы получаете системный подход, гибкий график и доступ к интерактивным материалам.' },
  { q: 'Как часто нужно заниматься?', a: 'Мы рекомендуем 3-4 раза в неделю по 20-30 минут для стабильного прогресса.' },
  { q: 'Какой минимальный уровень нужен для старта?', a: 'Можно начинать с нуля — есть базовые курсы и поддержка.' },
  { q: 'Справится ли ребенок с обучением английскому на платформе самостоятельно?', a: 'Да, у нас есть адаптированные материалы для детей и простая структура уроков.' }
]

// refs для панелей (v-show не размонтирует, так что хранить безопасно)
const answerRefs = ref<HTMLDivElement[] | null>(null)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}

/* ===== Плавные хуки для height ===== */
const EASING = 'cubic-bezier(.22,.61,.36,1)'

function setTransition(el: HTMLElement) {
  el.style.transition = `height .28s ${EASING}, opacity .28s ${EASING}, transform .28s ${EASING}`
  el.style.willChange = 'height, opacity, transform'
}

function clearTransition(el: HTMLElement) {
  el.style.transition = ''
  el.style.willChange = ''
}

function onEnter(el: Element) {
  const elh = el as HTMLElement
  setTransition(elh)
  elh.style.height = '0px'
  elh.style.opacity = '0'
  elh.style.transform = 'translateY(-4px)'
  requestAnimationFrame(() => {
    const h = elh.scrollHeight
    elh.style.height = h + 'px'
    elh.style.opacity = '1'
    elh.style.transform = 'translateY(0)'
  })
}

function onAfterEnter(el: Element) {
  const elh = el as HTMLElement
  elh.style.height = 'auto'
  elh.style.opacity = '1'
  elh.style.transform = 'translateY(0)'
  clearTransition(elh)
}

function onBeforeLeave(el: Element) {
  const elh = el as HTMLElement
  elh.style.height = elh.scrollHeight + 'px'
  elh.style.opacity = '1'
  elh.style.transform = 'translateY(0)'
  requestAnimationFrame(() => {
    setTransition(elh)
    elh.style.height = '0px'
    elh.style.opacity = '0'
    elh.style.transform = 'translateY(-4px)'
  })
}

function onLeave(el: Element) {
  const elh = el as HTMLElement
  elh.addEventListener('transitionend', () => {
    clearTransition(elh)
  }, { once: true })
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
.head{ text-align:center; margin-bottom:30px; }
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

/* Desktop / Mobile заголовки */
.titleDesk{ display:block; }
.titleMob{ display:none; }

.mLine{ display:block; }
.mHL{
  position:relative; display:inline-block; padding:.06em .28em; border-radius:10px;
}
.mHL::before{
  content:""; position:absolute; inset:0; background:#FFD249; border-radius:10px;
  transform:rotate(1.2deg); z-index:-1;
}

/* Спан для десктопного хайлайта (если нужен ровный фон) */
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

/* Типографика вопроса — Inter Medium 20 / 120% / -3% */
.text{
  flex:1 1 auto; min-width:0;
  font-family:Inter,sans-serif;
  font-weight:500;
  font-size:20px;
  line-height:1.2;
  letter-spacing:-0.03em;
  color:#111827;
}

/* Плюс */
.plus{
  flex:0 0 32px;
  width:32px; height:32px;
  background:#B87EFF; border-radius:999px;
  display:grid; place-items:center; user-select:none;
  transition: transform .18s ease, background-color .18s ease;
  transform-origin:center;
}
.plus[data-open="true"]{
  background:#9A5DDB;
  transform: rotate(45deg);
}

/* ===== Ответ ===== */
.answerOuter{
  overflow:hidden;
  height:0;
  opacity:0;
  transform:translateY(-4px);
  will-change:height, opacity, transform;
}
.answerInner{
  padding:16px 20px;
  background:#fff;
  border-radius:16px;
  box-shadow:0 4px 12px rgba(0,0,0,.06);
  font-family:Inter,sans-serif; font-size:16px; line-height:1.4; color:#374151;
}

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
  .wrap{ padding:120px 0 0; }

  .grid {gap: 10px;}

  /* мобильный заголовок: 3 строки */
  .titleDesk{ display:none; }
  .titleMob{
    display:block;
    font-size:33px;
    line-height:1.02;
    letter-spacing:-0.04em;
    margin:0;
  }

  /* вопросы — 16px и больше расстояние до плюса */
  .text{
    font-size:16px;
    line-height:1.3;
  }
  .item{
    min-height:76px;
    padding:0 16px 0 16px;      /* симметричнее */
    gap:30px;                   /* ← больше зазор между текстом и плюсом */
    border-radius:10px;
  }
  .plus{ width:30px; height:30px; flex:0 0 30px; }

  .answerInner{ font-size:16px; line-height:1.35; }

  .cta{ min-height:84px; }
  .ctaText{ font-size:18px; }
}
</style>
