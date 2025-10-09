<template>
  <section :class="$style.wrap" id="review">
    <div class="container">
      <!-- Заголовок -->
      <header :class="$style.head">
        <h2 :class="$style.title">
          <span class="t1">UCANSPEAK</span><br />
          <span class="t2">доверяют уже более</span><br />
          <span class="t3">
            <span :class="$style.hl">50&nbsp;000 пользователей</span>
          </span>
        </h2>

        <!-- Навигация (мобилка) -->
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

      <!-- Сетка отзывов -->
      <div :class="$style.grid">
        <article
          v-for="(t, i) in items"
          :key="i"
          :class="[$style.card, i !== active && $style.mobHidden]"
        >
          <!-- левая картинка (ПК / планшет) -->
          <div :class="$style.media">
            <img :src="t.photo" alt="" />
            <button type="button" :class="$style.play" aria-label="Смотреть отзыв">
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
                <path d="M16.2 9.134a1 1 0 0 1 0 1.732l-12 6.928A1 1 0 0 1 3 16.928V3.072a1 1 0 0 1 1.2-.866l12 6.928Z" fill="white"/>
              </svg>
            </button>
          </div>

          <!-- правая колонка -->
          <div :class="$style.body">
            <div :class="$style.user">
              <img :src="t.avatar" :alt="t.name" :class="$style.avatar" />
              <div>
                <div :class="$style.name">{{ t.name }}</div>
                <div :class="$style.sub">{{ t.subtitle }}</div>
              </div>
            </div>

            <!-- Группа тегов -->
            <div :class="$style.tagsWrap">
              <div :class="$style.tags">
                <span :class="$style.tagYellow">Результат</span>
                <span :class="$style.tagGray">Цель учебы</span>
              </div>
            </div>

            <p :class="$style.text">
              {{ t.text }}
            </p>

            <!-- КРУГЛОЕ превью (только мобилка) -->
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
import userPhoto from '@/assets/img/testimonial-photo.png'
import userAvatar from '@/assets/img/testimonial-avatar.png'

type TItem = {
  photo: string
  avatar: string
  name: string
  subtitle: string
  text: string
}

const items: TItem[] = [
  { photo: userPhoto, avatar: userAvatar, name: 'Алена', subtitle: 'Экзамены в университете на отлично',
    text: 'Пользуюсь платформой уже несколько месяцев и очень довольна результатами! Уроки построены так, что материал легко усваивается, а задания мотивируют заниматься регулярно. Особенно нравится возможность отрабатывать разговорную речь с носителями языка — это помогает не только улучшить произношение, но и чувствовать себя увереннее в общении. Интерфейс простой и понятный, а аудио- и видеоматериалы делают процесс обучения интересным.' },
  { photo: userPhoto, avatar: userAvatar, name: 'Антон', subtitle: 'Повысил уровень разговорного',
    text: 'За пару месяцев стал свободнее общаться на работе с иностранными коллегами. Очень выручают тренажёры и короткие ежедневные занятия.' },
  { photo: userPhoto, avatar: userAvatar, name: 'Марина', subtitle: 'Подготовка к поездке',
    text: 'Диалоги по темам путешествий — супер! Разобралась со всеми фразами в аэропорту и отеле.' },
  { photo: userPhoto, avatar: userAvatar, name: 'Игорь', subtitle: 'Сдал собеседование',
    text: 'Системные занятия помогли структурировать речь и убрать страх говорить. Рекомендую.' },
]

const active = ref(0)
const prev = () => { active.value = (active.value - 1 + items.length) % items.length }
const next = () => { active.value = (active.value + 1) % items.length }
</script>

<style module>
/* Секция */
.wrap{ padding-top:140px; }

/* Заголовок */
.head{ text-align:center; margin-bottom:60px; }
.title{
  margin:0;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-0.05em;
  color:#101012;
}
.hl{ display:inline-block; background:#FFD249; border-radius:12px; padding:.06em .28em; }

/* Навигация (скрыта на ПК) */
.nav{ display:none; }

/* Сетка карточек (ПК) */
.grid{
  display:grid;
  grid-template-columns: repeat(2, 685px);
  gap:20px;
  justify-content:center;
}

/* Карточка (ПК) */
.card{
  width:685px;
  height:410px;
  background:#fff;
  border-radius:16px;
  display:grid;
  grid-template-columns:204px 1fr;
  gap:20px;
  padding:30px;
  box-shadow:0 10px 26px rgba(16,24,40,.08);
}

/* Левая картинка */
.media{
  position:relative;
  width:204px; height:350px;
  border-radius:12px; overflow:hidden; background:#F1F5F9;
}
.media img{ width:100%; height:100%; object-fit:cover; display:block; }
.play{
  position:absolute; left:16px; bottom:16px;
  width:70px; height:43px; border-radius:12px; background:#7B61FF; border:none;
  display:grid; place-items:center; cursor:pointer;
}

/* Контент */
.body{ display:flex; flex-direction:column; }
.user{ display:flex; align-items:center; gap:12px; }
.avatar{ width:44px; height:44px; border-radius:50%; object-fit:cover; }
.name{ font:500 26px/1.2 Inter, sans-serif; letter-spacing:-0.03em; color:#0F172A; }
.sub { font:500 18px/1.2 Inter, sans-serif; letter-spacing:-0.03em; color:#5B6472; }

.tagsWrap{ margin-top:14px; }
.tags{ display:inline-flex; gap:8px; background:#EAEEF7; border-radius:999px; padding:4px 8px; }
.tagYellow{ background:#FFD84D; border-radius:999px; padding:6px 12px; font:600 13px/1 Inter, sans-serif; letter-spacing:-0.01em; color:#111; }
.tagGray  { padding:6px 12px; font:600 13px/1 Inter, sans-serif; letter-spacing:-0.01em; color:#111; }

.text{
  margin-top:18px;
  font:500 16px/1.3 Inter, sans-serif; letter-spacing:-0.03em; color:#808080;
}

/* КРУГЛОЕ превью — скрыто на ПК */
.thumbRound{ display:none; }

/* ====== Адаптив ====== */
@media (max-width: 1200px){
  .grid{ grid-template-columns: 1fr; justify-content:stretch; }
  .card{ width:100%; }
}

/* Мобилка — карусель */
@media (max-width: 640px){
  .wrap{ padding:120px 0 0; }

  .title{
    font-size:33px; line-height:1.02; letter-spacing:-0.04em;
  }
  .head{ margin-bottom:41px; }
  .hl{ border-radius:8px; }

  .nav{
    margin:16px auto 0;
    display:flex; align-items:center; justify-content:center; gap:5px;
  }
  .prev{
    width:34px; height:34px; border-radius:5px;   /* скругление 5px */
    background:#fff; border:0; box-shadow:0 6px 16px rgba(16,24,40,.08);
    display:grid; place-items:center; cursor:pointer;
  }
  .next{
    display:inline-flex; align-items:center; gap:8px;
    height:34px; padding:0 12px; border-radius:5px; /* скругление 5px */
    background:#fff; border:0; box-shadow:0 6px 16px rgba(16,24,40,.08);
    cursor:pointer;
    font-family:Inter, sans-serif; font-weight:500; font-size:14px;
    line-height:1; letter-spacing:-0.03em; color:#111;
  }

  /* показываем только активную карточку */
  .mobHidden{ display:none; }

  .card{
    height:auto; grid-template-columns:1fr; gap:12px; padding:16px; border-radius:14px;
  }
  .media{ display:none; }

  .user{ gap:10px; }
  .avatar{ width:40px; height:40px; }
  .name{ font-size:18px; }
  .sub{ font-size:14px; }

  .tagsWrap{ margin-top:10px; }
  .tags{ padding:3px 6px; gap:6px; }
  .tagYellow, .tagGray{ padding:6px 10px; font-size:12px; }

  .text{ font-size:14.5px; margin-top:12px; }

  .thumbRound{
    display:block; position:relative; width:162px; height:162px; border-radius:50%;
    border:3px solid #EAEEF7; background:#fff; overflow:hidden; margin-top:14px;
  }
  .thumbRound img{ width:100%; height:100%; object-fit:cover; border-radius:50%; display:block; }
  .thumbPlay{
    position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
    width:34px; height:34px; border-radius:50%; border:0; background:#7B61FF;
    display:grid; place-items:center; box-shadow:0 8px 18px rgba(123,97,255,.35); cursor:pointer;
  }
}
</style>
