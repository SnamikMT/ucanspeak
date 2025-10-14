<template>
  <section :class="$style.wrap" id="review">
    <div class="container">
      <!-- Заголовок -->
      <header :class="$style.head">
        <!-- Desktop: 2 строки -->
        <h2 :class="[$style.title, $style.titleDesk]" aria-label="Преподаватели английского о своей работе на UCANSPEAK">
          <span class="l1"><span :class="$style.hl">Преподаватели&nbsp;английского</span></span><br />
          <span class="l2">о своей работе на UCANSPEAK</span>
        </h2>

        <!-- Mobile: 3 строки (плашка только на «Преподаватели») -->
        <h2 :class="[$style.title, $style.titleMob]" aria-label="Преподаватели английского о своей работе на UCANSPEAK">
          <span class="m1"><span :class="$style.hl">Преподаватели</span></span>
          <span class="m2">английского&nbsp;о&nbsp;своей</span><br />
          <span class="m3">работе&nbsp;на&nbsp;UCANSPEAK</span>
        </h2>

         <!-- Навигация (оставили) -->
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
            <!-- Аватар сверху, имя/школа под ним -->
            <div :class="$style.user">
              <img :src="t.avatar" :alt="t.name" :class="$style.avatar" />
              <div :class="$style.userText">
                <div :class="$style.name">{{ t.name }}</div>
                <div :class="$style.sub">{{ t.subtitle }}</div>
              </div>
            </div>

            <!-- Видеокружок (если есть видео) -->
            <div v-if="t.showThumb" :class="$style.thumbRound">
              <img :src="t.photo" alt="" />
              <button type="button" :class="$style.thumbPlay" aria-label="Смотреть отзыв">
                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" aria-hidden="true">
                  <path d="M1 1v14l11-7L1 1z" fill="#fff"/>
                </svg>
              </button>
            </div>

            <!-- Текст (только когда нет видео) -->
            <p v-else :class="$style.text">
              {{ t.text }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userPhoto from '@/assets/img/testimonial-photo.png'
import userAvatar from '@/assets/img/testimonial-avatar.png'

type TItem = {
  photo: string
  avatar: string
  name: string
  subtitle: string
  text: string
  showThumb?: boolean
}

const items: TItem[] = [
  {
    photo: userPhoto, avatar: userAvatar, name: 'Алена', subtitle: 'Ученица школы №46',
    showThumb: true, text: ''
  },
  {
    photo: userPhoto, avatar: userAvatar, name: 'Алена', subtitle: 'Ученица школы №46',
    showThumb: false,
    text: 'Пользуюсь платформой уже несколько месяцев и очень довольна результатами! Уроки построены так, что материал легко усваивается, а задания мотивируют заниматься регулярно.'
  },
  {
    photo: userPhoto, avatar: userAvatar, name: 'Алена', subtitle: 'Ученица школы №46',
    showThumb: true, text: ''
  },
  {
    photo: userPhoto, avatar: userAvatar, name: 'Алена', subtitle: 'Ученица школы №46',
    showThumb: false,
    text: 'Пользуюсь платформой уже несколько месяцев и очень довольна результатами! Уроки построены так, что материал легко усваивается, а задания мотивируют заниматься регулярно.'
  }
]

const active = ref(0)
const prev = () => { active.value = (active.value - 1 + items.length) % items.length }
const next = () => { active.value = (active.value + 1) % items.length }
</script>

<style module>
/* Секция */
.wrap{ padding-top:140px; }

 /* Переключаем версии заголовка */
  .titleDesk{ display:none; }
  .titleMob{
    display:block;
    font-size:33px;
    line-height:1.02;
    letter-spacing:-0.04em;
  }
  .titleMob .m1,
  .titleMob .m2,
  .titleMob .m3{ display:block; }
  .titleMob .m1{ white-space:nowrap; } /* «Преподаватели» в одну строку */

/* Заголовок */
.head{ text-align:center; margin-bottom:32px; }
.title{
  margin:0; font-family:Inter, sans-serif; font-weight:500; font-size:55px;
  line-height:.95; letter-spacing:-.05em; color:#101012;
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
  display:grid; grid-template-columns: repeat(4, 333px); gap:20px;
  max-width:1390px; margin:0 auto; justify-content:space-between;
}

/* Карточка — 333×460, паддинг 30 */
.card{
  width:333px; height:460px; min-height:460px;
  background:#fff; border-radius:20px; box-shadow:0 10px 26px rgba(16,24,40,.08);
  padding:30px; display:flex; flex-direction:column;
}
.body{ display:flex; flex-direction:column; align-items:flex-start; height:100%; }

/* Аватар сверху, под ним имя/школа слева; отступ 16 */
.user{ display:flex; flex-direction:column; align-items:flex-start; }
.avatar{ width:44px; height:44px; border-radius:50%; object-fit:cover; }
.userText{ margin-top:16px; }
.name{ font:500 18px/1.2 Inter, sans-serif; letter-spacing:-0.03em; color:#0F172A; }
.sub { margin-top:4px; font:500 14px/1.2 Inter, sans-serif; letter-spacing:-0.03em; color:#5B6472; }

/* Видеокружок — снизу, по центру; play #B87EFF */
.thumbRound{
  position:relative; width:220px; height:220px; border-radius:50%;
  border:3px solid #EAEEF7; background:#fff; overflow:hidden;
  margin-top:auto; margin-left:auto; margin-right:auto;
}
.thumbRound img{ width:100%; height:100%; object-fit:cover; border-radius:50%; display:block; }
.thumbPlay{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:40px; height:40px; border-radius:50%; border:0; background:#B87EFF;
  display:grid; place-items:center; box-shadow:0 8px 18px rgba(184,126,255,.35); cursor:pointer;
}

/* Текст — снизу; типографика по ТЗ */
.text{
  margin-top:auto;
  font-family:Inter, sans-serif; font-weight:500; font-size:16px;
  line-height:1.3; letter-spacing:-0.03em; color:#808080; text-align:left;
}

/* ===== Адаптивы ===== */

/* планшеты/ноуты 769–1200: 2 колонки, центрируем */
@media (max-width:1200px){
  .grid{ grid-template-columns: repeat(2, 333px); justify-content:center; }
}

/* мобилка ≤640: одна колонка, карточка 390×440, текст 14px */
@media (max-width:640px){
  .wrap{ padding:120px 0 0; }
  .title{ font-size:33px; line-height:1.02; letter-spacing:-0.04em; }
  .head{ margin-bottom:41px; }
  .hl{ border-radius:8px; }

  .mobHidden{ display:none; }
  .grid{ grid-template-columns:1fr; justify-content:stretch; }

  .card{
    width:390px; max-width:390px; height:440px; min-height:440px;
    padding:30px; border-radius:20px; margin:0 auto;
  }
  .avatar{ width:40px; height:40px; }
  .thumbRound{ width:230px; height:230px; }
  .thumbPlay{ width:34px; height:34px; background:#B87EFF; }

  .text{ font-size:14px; }
}
</style>
