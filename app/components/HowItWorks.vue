<template>
  <section :class="$style.wrap" id="platform">
    <div :class="$style.container">
      <header :class="$style.head">
        <h2 :class="$style.title">
          Разбейте языковой<br />барьер
          <span :class="$style.hl">вдребезги</span>
        </h2>
        <p :class="$style.lead">
          Начните говорить уже на первом занятии<br />
          независимо от вашего уровня языка
        </p>
      </header>

      <div :class="$style.grid">
        <!-- 1. Герой -->
        <article :class="$style.hero">
          <img :src="wave" :class="$style.wave" alt="" aria-hidden="true" />
          <img :src="heroBg" :class="$style.heroBg" alt="" aria-hidden="true" />
          <h3 :class="$style.heroTitle">
            Как это<br />
            <span :class="$style.bubble">работает?</span>
          </h3>
          <img :class="$style.parrot" :src="parrot" alt="" aria-hidden="true" />
        </article>

        <!-- 2. Шаги -->
        <article :class="$style.step">
          <span :class="$style.num"><b>01</b></span>
          <p :class="$style.stepText">
            Вы слушаете, читаете и повторяете<br /> фразы, копируя произношение<br />
            и интонации носителей языка.
          </p>
        </article>

        <article :class="$style.step">
          <span :class="$style.num"><b>02</b></span>
          <p :class="$style.stepText">
            Вы смотрите видеофрагменты<br /> из фильмов и мультфильмов,<br /> переводите
            и повторяете фразы.
          </p>
        </article>

        <article :class="$style.step">
          <span :class="$style.num"><b>03</b></span>
          <p :class="$style.stepText">
            Вы переводите с&nbsp;русского<br /> на&nbsp;английский или с&nbsp;английского<br /> на&nbsp;русский,
            сверяясь с&nbsp;ответом.
          </p>
        </article>

        <article :class="$style.step">
          <span :class="$style.num"><b>04</b></span>
          <p :class="$style.stepText">
            Вы отрабатываете разговорные навыки до<br />
            автоматизма в аудиотренажере,совмещая<br />
            занятия английским с повседневными делами.
          </p>
        </article>

        <!-- CTA -->
        <article :class="[$style.ctaCard, $style.step]">
          <div :class="$style.rowText">
            <img :src="star" alt="" :class="$style.starIcon" />
            <p :class="$style.stepText">
              Видеоинструкции в демоуроках помогут сделать ваши занятия максимально эффективными.
            </p>
          </div>

          <a href="#" :class="$style.ctaBtn">
            <span>Бесплатный демоурок без регистрации</span>
            <i aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="#41BCF8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import parrot from '@/assets/img/feat-parrot2.png'
import wave from '@/assets/img/how-wave.svg'
import star from '@/assets/img/star.png'
import heroBg from '@/assets/img/how-hero-bg.png'
</script>

<style module>
.wrap { background:#E9EFF7; padding-top:140px; }

/* локальный контейнер */
.container{
  max-width:1390px;
  margin:0 auto;
  padding:0;
  box-sizing:border-box;
}

/* Заголовок */
.head{ text-align:center; margin-bottom:70px; }
.title{
  margin:0 0 30px;
  font-family:Inter, sans-serif; font-weight:500; font-size:55px;
  line-height:.95; letter-spacing:-.05em; color:#2C2C2C;
}
.hl{
  display:inline-block; border-radius:10px;
  box-shadow:inset 0 -2px 0 rgba(0,0,0,.06);
}

/* плашка только фоном */
.hl{
  position:relative;
  display:inline-block;
  padding:.06em .34em;
  border-radius:10px;
  z-index:0;
}
.hl::before{
  content:"";
  position:absolute;
  inset:0;
  background:#FFD249;
  border-radius:10px;
  transform:rotate(1.51deg);
  z-index:-1; /* фон под текстом */
}

.lead{
  margin:0 auto;
  font:500 18px/1.3 Inter, sans-serif; letter-spacing:-.03em; color:#2C2C2C;
  max-width:620px;
}

/* ===== Сетка ===== */
.grid{
  display:grid;
  grid-template-columns:repeat(3, 450px);
  grid-auto-rows:200px;
  gap:24px;
  justify-content:space-between;
  max-width:1390px;
  margin:0 auto;
}
.wrap *{ box-sizing: border-box; }

/* грид-айтемы не распирают трек */
.grid > *{
  width:100%;
  max-width:100%;
  min-width:0;
  box-sizing:border-box;
}

.hero, .step, .ctaCard{ box-sizing:border-box; }

/* Герой */
.hero{
  position:relative; overflow:hidden; background:#41BCF8;
  box-shadow:0 8px 22px rgba(16,24,40,.06); border-radius:20px;
  min-height:200px;
}
.wave{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
.heroBg{ position:absolute; left:26px; bottom:26px; height:88px; z-index:1; }
/* Заголовок — оба ряда по одному левому краю */
.heroTitle{
  position:absolute; left:30px; right:30px; bottom:40px; margin:0;
  display:flex; flex-direction:column; align-items:flex-start; /* общий левый край текста */
  text-align:left;
  font:500 40px/1.15 Inter, sans-serif;
  letter-spacing:-.05em; color:#fff; z-index:2;
}

/* Текст “работает?” — НЕ вращаем, задаём внутренние паддинги 13px */
.bubble{
  position:relative;
  display:inline-block;
  color:#2C2C2C; font-weight:500; line-height:1.1;
  text-align:left;                  /* текст по левому краю */
  z-index:0;                        /* поверх фона-псевдоэлемента */
}

/* Белая наклонённая плашка — отдельный слой, выдвигаем ЛЕВЕЕ текста */
.bubble::before{
  content:"";
  position:absolute;
  /* делаем фон шире текста: выступ слева и справа */
  left:-16px;                       /* ← выступ за левый край текста */
  right:-10px;                      /* можно подправить под макет */
  top:-6px; bottom:-6px;            /* вертикальные поля фона */
  background:#fff; border-radius:10px;
  box-shadow:0 6px 16px rgba(0,0,0,.12);
  transform:rotate(1.51deg);
  transform-origin:left center;     /* чтоб край вращался вокруг левого */
  z-index:-1;                       /* фон под текстом */
}

/* немного приблизим плашку к нижней строке, как в макете */
.bubble{ margin-top:4px; }


.parrot{ position:absolute; right:5px; bottom:0; width:200px; max-width:42%; }

/* Шаги */
.step{
  position:relative; background:#fff; border-radius:20px;
  box-shadow:0 8px 22px rgba(16,24,40,.06);
  padding:30px;                                  /* desktop */
  min-height:170px;
  display:flex; flex-direction:column; justify-content:flex-end; gap:18px;
}
.num{
  position:absolute; top:30px; left:30px;        /* desktop */
  width:32px; height:32px; border-radius:999px; display:grid; place-items:center;
  background:#41BCF8; color:#fff; box-shadow:0 4px 10px hsla(203, 100%, 75%, 0.35);
}
.num b{ font:600 14px/1.2 Inter, system-ui, sans-serif; letter-spacing:-.03em; font-variant-numeric:tabular-nums; }

.stepText{
  margin:0; color:#2C2C2C; text-align:left;
  font:500 16px Inter, sans-serif; letter-spacing:-.03em; line-height: 130%;
  word-break:break-word;
}

/* CTA */
.ctaCard{ background:#fff; padding:30px; display:flex; flex-direction:column; gap:30px; }
.rowText{ display:flex; gap:12px; }
.starIcon{ width:24px; height:25px; flex:0 0 24px; }

.ctaBtn{
  display:flex; justify-content:space-between; align-items:center;
  height:46px; padding:0 5px 0 16px; border-radius:10px;
  background:#41BCF8; color:#fff; font-weight:600; font-size:16px;
  white-space:nowrap; box-shadow:0 6px 16px rgba(65,188,248,.35); gap:12px;
  max-width:100%; width:100%; overflow:hidden;
  letter-spacing: -0.03em;
}
.ctaBtn span{
  display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.ctaBtn i{ display:inline-grid; place-items:center; width:36px; height:36px; border-radius:12px; background:#fff; }

/* ===== Адаптив ===== */
@media (max-width:1200px){
  .container{ padding:0 16px; max-width:1040px; }
  .grid{
    grid-template-columns:1fr;
    grid-auto-rows:auto;
    gap:20px;
    max-width:none;
    justify-content:initial;
  }
  .hero{ min-height:220px; }
  .heroBg{ left:20px; bottom:22px; height:72px; }
}

@media (max-width:640px){
  .wrap{ padding-top:120px; }

  .head{ margin-bottom:40px; }
  .title{ font-size:33px; line-height:1.02; letter-spacing:-.04em; margin-bottom:20px; }
  .lead{ font-size:16px; }

  .container{
    width:390px; max-width:390px; margin:0 auto; padding:0;
  }
  .grid{
    grid-template-columns: 1fr;
    grid-auto-rows:auto;
    gap:20px;
    width:390px; max-width:390px; margin:0 auto;
    justify-content:initial;
  }
  .grid > *{
    width:100%; max-width:100%; min-width:0;
  }

  /* карточки: 30/30 вертикаль, 25/25 горизонталь */
  .step{
    padding:30px 25px;
  }

  .stepText{
    font-size: 14px;
  }
  /* цифра: отступ 30/30 */
  .num{
    top:30px; left:25px;
  }

  .hero{ min-height:170px; }
    .heroTitle{ font-size:32px; bottom:32px; }
  .bubble::before{ left:-14px; right:-8px; top:-5px; bottom:-5px; }
  .heroBg{ left:16px; bottom:20px; height:64px; }
  .parrot{ width:170px; max-width:48%; }

  /* кнопка по макету: 340px ширина, 14px шрифт, паддинги 5/5/5/15 */
  .ctaBtn{
    width:340px; max-width:340px;
    align-self:flex-start;          /* чтобы не растягивалась на всю ширину */
    height:auto;                    /* высоту даст паддинг */
    padding:5px 5px 5px 15px;
    font-size:14px;
    gap:10px;
    line-height: 130%;
    letter-spacing: -.03em;
  }
  .ctaBtn i{
    width:36px; height:36px; border-radius:10px;
  }

  .stepText {
    max-width: 100%;
  }
}
</style>
