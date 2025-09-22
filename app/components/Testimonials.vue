<template>
  <section :class="$style.wrap">
    <div class="container">
      <!-- Заголовок -->
      <header :class="$style.head">
        <h2 :class="$style.title">
          UCANSPEAK доверяют уже<br />
          более <span :class="$style.hl">50&nbsp;000 пользователей</span>
        </h2>
      </header>

      <!-- Сетка отзывов -->
      <div :class="$style.grid">
        <article v-for="(t, i) in items" :key="i" :class="$style.card">
          <!-- левая картинка -->
          <div :class="$style.media">
            <img :src="t.photo" alt="" />
            <button type="button" :class="$style.play" aria-label="Смотреть отзыв">
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                <path
                  d="M16.2 9.134a1 1 0 0 1 0 1.732l-12 6.928A1 1 0 0 1 3 16.928V3.072a1 1 0 0 1 1.2-.866l12 6.928Z"
                  fill="white"
                />
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
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
  {
    photo: userPhoto,
    avatar: userAvatar,
    name: 'Алена',
    subtitle: 'Экзамены в университете на отлично',
    text:
      'Пользуюсь платформой уже несколько месяцев и очень довольна результатами! Уроки построены так, что материал легко усваивается, а задания мотивируют заниматься регулярно. Особенно нравится возможность отрабатывать разговорную речь с носителями языка — это помогает не только улучшить произношение, но и чувствовать себя увереннее в общении. Интерфейс простой и понятный, а аудио- и видеоматериалы делают процесс обучения интересным.',
  },
  {
    photo: userPhoto,
    avatar: userAvatar,
    name: 'Алена',
    subtitle: 'Экзамены в университете на отлично',
    text:
      'Пользуюсь платформой уже несколько месяцев и очень довольна результатами! Уроки построены так, что материал легко усваивается, а задания мотивируют заниматься регулярно. Особенно нравится возможность отрабатывать разговорную речь с носителями языка — это помогает не только улучшить произношение, но и чувствовать себя увереннее в общении. Интерфейс простой и понятный, а аудио- и видеоматериалы делают процесс обучения интересным.',
  },
  {
    photo: userPhoto,
    avatar: userAvatar,
    name: 'Алена',
    subtitle: 'Экзамены в университете на отлично',
    text:
      'Пользуюсь платформой уже несколько месяцев и очень довольна результатами! Уроки построены так, что материал легко усваивается, а задания мотивируют заниматься регулярно. Особенно нравится возможность отрабатывать разговорную речь с носителями языка — это помогает не только улучшить произношение, но и чувствовать себя увереннее в общении. Интерфейс простой и понятный, а аудио- и видеоматериалы делают процесс обучения интересным.',
  },
  {
    photo: userPhoto,
    avatar: userAvatar,
    name: 'Алена',
    subtitle: 'Экзамены в университете на отлично',
    text:
      'Пользуюсь платформой уже несколько месяцев и очень довольна результатами! Уроки построены так, что материал легко усваивается, а задания мотивируют заниматься регулярно. Особенно нравится возможность отрабатывать разговорную речь с носителями языка — это помогает не только улучшить произношение, но и чувствовать себя увереннее в общении. Интерфейс простой и понятный, а аудио- и видеоматериалы делают процесс обучения интересным.',
  },
]
</script>

<style module>
/* Секция */
.wrap{
  background:#E9EFF7;
  padding-top:140px; /* общий верхний отступ секции */
  padding-bottom:52px;
}

/* Заголовок */
.head{ text-align:center; margin-bottom:60px; } /* просили 60px снизу */
.title{
  margin:0;
  font-family: Inter, sans-serif;
  font-weight:500;           /* Medium */
  font-style:normal;
  font-size:55px;
  line-height:.95;           /* 95% */
  letter-spacing:-0.05em;    /* -5% */
  color:#101012;
}
.hl{
  display:inline-block;
  background:#FFD249;
  border-radius:12px;
  padding:.06em .28em;
}

/* Сетка карточек */
.grid{
  display:grid;
  grid-template-columns: repeat(2, 685px);
  gap:20px;                                /* между карточками 20 */
  justify-content:center;
}

/* Карточка */
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
  width:204px;
  height:350px;
  border-radius:12px;
  overflow:hidden;
  background:#F1F5F9;
}
.media img{ width:100%; height:100%; object-fit:cover; display:block; }

/* Кнопка play 70x43 */
.play{
  position:absolute; left:16px; bottom:16px;
  width:70px; height:43px;
  border-radius:12px;
  background:#7B61FF;
  border:none; display:grid; place-items:center;
  cursor:pointer;
}

/* Контент справа */
.body{ display:flex; flex-direction:column; }

/* Пользователь */
.user{ display:flex; align-items:center; gap:12px; }
.avatar{ width:44px; height:44px; border-radius:50%; object-fit:cover; }

/* Имя — 26 Medium, -3% letter-spacing */
.name{
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:26px;
  line-height:1.2;
  letter-spacing:-0.03em;
  color:#0F172A;
}

/* Под именем — 18 Medium */
.sub{
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:18px;
  line-height:1.2;
  letter-spacing:-0.03em;
  color:#5B6472;
}

/* Теги */
.tagsWrap{ margin-top:14px; }
.tags{
  display:inline-flex; gap:8px;
  background:#EAEEF7;            /* общий круглый фон */
  border-radius:999px;
  padding:4px 8px;
}
.tagYellow{
  background:#FFD84D;
  border-radius:999px;
  padding:6px 12px;
  font-family:Inter, sans-serif; font-weight:600; font-size:13px;
  letter-spacing:-0.01em; color:#111;
}
.tagGray{
  padding:6px 12px;
  font-family:Inter, sans-serif; font-weight:600; font-size:13px;
  letter-spacing:-0.01em; color:#111;
}

/* Текст — 16 Medium, 130%, -3%, #808080 */
.text{
  margin-top:18px;
  font-family:Inter, sans-serif;
  font-weight:500;
  font-size:16px;
  line-height:1.3;             /* 130% */
  letter-spacing:-0.03em;      /* -3% */
  color:#808080;
}
</style>
