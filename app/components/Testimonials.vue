<template>
  <section :class="$style.wrap" id="review">
    <div class="container">
      <!-- Заголовок -->
      <header :class="$style.head">
        <h2 :class="$style.title">
          <span class="t1">UCANSPEAK</span><br />
          <span class="t2">доверяют уже более</span><br />
          <span class="t3"><span :class="$style.hl">50&nbsp;000 пользователей</span></span>
        </h2>

        <!-- Навигация -->
        <div :class="$style.nav">
          <button type="button" :class="$style.prev" @click="prev" aria-label="Предыдущий отзыв">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 19L8 12L15 5" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <button type="button" :class="$style.next" @click="next">
            <span>Следующий отзыв</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 5l7 7-7 7" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </header>

      <!-- Сетка -->
      <div :class="$style.grid">
        <article
          v-for="(t, i) in items"
          :key="i"
          :class="[$style.card, i !== active && $style.mobHidden]"
        >
          <div :class="$style.body">
            <!-- Аватар слева, имя/школа справа (gap 16) -->
            <div :class="$style.user">
              <img :src="t.avatar" :alt="t.name" :class="$style.avatar" />
              <div>
                <div :class="$style.name">{{ t.name }}</div>
                <div :class="$style.sub">{{ t.subtitle }}</div>
              </div>
            </div>

            <!-- Текст отзыва -->
            <p :class="$style.text">
              {{ t.text }}
            </p>

            <!-- Видеокружок 160×160 -->
            <div :class="$style.thumbRound">
              <img :src="t.photo" alt="" />
              <button type="button" :class="$style.thumbPlay" aria-label="Смотреть отзыв">
                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" aria-hidden="true">
                  <path d="M1 1v14l11-7L1 1z" fill="#fff"/>
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userPhoto  from '@/assets/img/testimonial-photo.png'
import userAvatar from '@/assets/img/testimonial-avatar.png'

type TItem = {
  photo: string
  avatar: string
  name: string
  subtitle: string
  text: string
}

const baseText =
  'Пользуюсь платформой уже несколько месяцев и очень довольна результатами! ' +
  'Уроки построены так, что материал легко усваивается, а задания мотивируют заниматься регулярно.'

const items: TItem[] = [
  { photo: userPhoto, avatar: userAvatar, name: 'Алена', subtitle: 'Ученица школы №46', text: baseText },
  { photo: userPhoto, avatar: userAvatar, name: 'Алена', subtitle: 'Ученица школы №46', text: baseText },
  { photo: userPhoto, avatar: userAvatar, name: 'Алена', subtitle: 'Ученица школы №46', text: baseText },
  { photo: userPhoto, avatar: userAvatar, name: 'Алена', subtitle: 'Ученица школы №46', text: baseText },
]

const active = ref(0)
const prev = () => { active.value = (active.value - 1 + items.length) % items.length }
const next = () => { active.value = (active.value + 1) % items.length }
</script>

<style module>
/* Секция */
.wrap{ padding-top:140px; }

/* Заголовок */
.head{ text-align:center; margin-bottom:32px; }
.title{
  margin:0;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-.05em;
  color:#101012;
}
.hl{ display:inline-block; background:#FFD249; border-radius:12px; padding:.06em .28em; }

/* Навигация */
.nav{ margin:20px auto 0; display:flex; align-items:center; justify-content:center; gap:5px; }
.prev{
  width:34px; height:34px; border-radius:5px; background:#fff; border:0;
  box-shadow:0 6px 16px rgba(16,24,40,.08); display:grid; place-items:center; cursor:pointer;
}
.next{
  display:inline-flex; align-items:center; gap:8px; height:34px; padding:0 12px; border-radius:5px;
  background:#fff; border:0; box-shadow:0 6px 16px rgba(16,24,40,.08); cursor:pointer;
  font:500 14px/1 Inter, sans-serif; letter-spacing:-.03em; color:#111;
}

/* ===== Сетка карточек ===== */
.grid{
  display:grid;
  grid-template-columns: repeat(4, 333px);
  gap:20px;
  max-width:1390px;
  margin:0 auto;
  justify-content:space-between;
}

/* Карточка — 333×460, паддинг 30 */
.card{
  width:333px; height:460px; min-height:460px;
  background:#fff; border-radius:20px; box-shadow:0 10px 26px rgba(16,24,40,.08);
  padding:30px; display:flex; flex-direction:column;
}
.body{ display:flex; flex-direction:column; align-items:flex-start; height:100%; }

/* Хедер пользователя: аватар слева, текст справа (gap 16) */
.user{
  display:flex; align-items:center; gap:16px;
}
.avatar{ width:44px; height:44px; border-radius:50%; object-fit:cover; }
.name{ font:500 18px/1.2 Inter, sans-serif; letter-spacing:-0.03em; color:#0F172A; }
.sub { font:500 14px/1.2 Inter, sans-serif; letter-spacing:-0.03em; color:#5B6472; }

/* Текст отзыва — под хедером, слева, снизу отступ 30 до кружка */
.text{
  margin:16px 0 30px 0;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:16px;
  line-height:1.3;            /* 130% */
  letter-spacing:-0.03em;      /* -3% */
  color:#808080;
  text-align:left;
}

/* Видеокружок 160×160, слева, от нижнего края карточки 0 (за счёт высоты) */
.thumbRound{
  position:relative;
  width:160px; height:160px;
  border-radius:50%;
  border:3px solid #EAEEF7;
  background:#fff;
  overflow:hidden;
  margin-top:auto;            /* прижимает круг к низу карточки */
}
.thumbRound img{
  width:100%; height:100%; object-fit:cover; border-radius:50%; display:block;
}
.thumbPlay{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:34px; height:34px; border-radius:50%; border:0; background:#B87EFF;
  display:grid; place-items:center; box-shadow:0 8px 18px rgba(184,126,255,.35); cursor:pointer;
}

/* ===== Адаптивы ===== */

/* 769–1200: по 2 карточки в ряд */
@media (max-width:1200px){
  .grid{ grid-template-columns: repeat(2, 333px); justify-content:center; }
}

/* мобилка ≤640: 1 карточка, 390×440, текст 14px */
@media (max-width:640px){
  .wrap{ padding:120px 0 0; }

  .title{ font-size:33px; line-height:1.02; letter-spacing:-0.04em; }
  .head{ margin-bottom:41px; }
  .hl{ border-radius:8px; }

  .mobHidden{ display:none; }
  .grid{ grid-template-columns:1fr; justify-content:stretch; }

  .card{
    width:390px; max-width:390px;
    height:440px; min-height:440px;
    padding:30px; border-radius:20px; margin:0 auto;
  }
  .avatar{ width:40px; height:40px; }
  .name{ font-size:18px; } .sub{ font-size:14px; }

  .text{ font-size:14px; margin:14px 0 30px; }

  .thumbRound{ width:160px; height:160px; } /* та же величина по ТЗ */
}
</style>
