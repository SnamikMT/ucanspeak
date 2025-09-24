<template>
  <section :class="$style.wrap">
    <div :class="$style.stage">
      <!-- Заголовок -->
      <header :class="$style.head">
        <h2 :class="$style.title">
          UCANSPEAK — это проверенный бренд,
          <span :class="$style.hl">созданный профессионалами</span>
        </h2>
      </header>

      <!-- Ряд 1 -->
      <div :class="$style.row">
        <!-- 1) 803×400 -->
        <article :class="[$style.card, $style.cardA]">
          <div :class="$style.cardBody">
            <p :class="$style.lead">
              Наш международный проект объединил преподавателей из России, Великобритании и США
              для создания онлайн-платформы и разговорного аудиотренажёра для изучения английского языка.
            </p>
          </div>
          <!-- по центру снизу -->
          <div :class="$style.mediaBottom">
            <img :src="people" alt="" />
          </div>
        </article>

        <!-- 2) 567×400, 2017 -->
        <article :class="[$style.card, $style.cardB, $style.withYear]">
          <div :class="[$style.year, $style.yearBlue]"><span>2017 год</span></div>
          <div :class="$style.cardBody">
            <p :class="$style.lead">
              Мы выпустили 3 мобильных приложения, которые получили признание более чем у 30&nbsp;000 пользователей.
            </p>
          </div>
          <!-- ПОРЯДОК ПОМЕНЯН МЕСТАМИ: теперь сначала попугай, потом телефон -->
          <div :class="$style.mediaBottom">
            <img :src="bird"  alt="" class="bird" />
            <img :src="phone" alt="" class="phone" />
          </div>
        </article>
      </div>

      <!-- Ряд 2 -->
      <div :class="$style.row">
        <!-- 3) 568×400 — 2022 (белым) -->
        <article :class="[$style.card, $style.cardC, $style.withYear]">
          <div :class="[$style.year, $style.yearPurple]"><span>2022 год</span></div>
          <div :class="$style.cardBody">
            <p :class="$style.lead">
              Мы объединили аудиотренажёры из мобильных приложений с интерактивными уроками
              на обучающей онлайн-платформе.
            </p>
          </div>
          <!-- родные размеры, по центру снизу; прилично обрезаем по низу -->
          <div :class="$style.mediaBottomC">
            <img :src="screen1" alt="" class="s1" />
            <img :src="screen2" alt="" class="s2" />
          </div>
        </article>

        <!-- 4) 802×400 — сертификаты + кнопка -->
        <article :class="[$style.card, $style.cardD]">
          <div :class="$style.cardBody">
            <p :class="$style.lead">
              Курс разговорной практики одобрен и рекомендован национальной ассоциацией преподавателей
              английского языка НАТАЯ.
            </p>
          </div>

          <a href="#" :class="$style.ctaBtn">
            Перейти на платформу
            <i aria-hidden="true">
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                <path d="M1 10L11 1M11 1H4.5M11 1V7.5"
                      stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </i>
          </a>

          <div :class="$style.certs">
            <img :src="cert1" alt="Сертификат" />
            <img :src="cert2" alt="Письмо" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* свои пути */
import people  from '@/assets/img/people.png'
import bird    from '@/assets/img/feat-parrot2.png'
import phone   from '@/assets/img/phone.png'
import screen1 from '@/assets/img/screen-trainer.png'
import screen2 from '@/assets/img/screen-course.png'
import cert1   from '@/assets/img/cert-1.png'
import cert2   from '@/assets/img/cert-2.png'
</script>

<style module>
/* ===== СЕКЦИЯ / ЗАГОЛОВОК ===== */
.wrap{ background:#E9EFF7; padding-top:140px; }
.stage{ width:1390px; margin:0 auto; }

.head{ text-align:center; margin-bottom:70px; }
.title{
  margin:0;
  font-family: Inter, system-ui, sans-serif;
  font-weight:700; font-size:52px; line-height:1.02; letter-spacing:-0.02em;
  color:#1F2937;
}
.hl{
  display:inline-block; background:#FFD249; padding:.08em .3em; border-radius:10px;
  transform: rotate(1.3deg);
}

/* ===== РЯДЫ ===== */
.row{ display:flex; gap:20px; align-items:stretch; }
.row + .row{ margin-top:20px; }

/* ===== КАРТОЧКИ — ОБЩЕЕ ===== */
.card{
  position:relative; background:#fff; border-radius:20px; /* радиус 20 везде */
  box-shadow:0 8px 24px rgba(16,24,40,.08); overflow:hidden;
}
.cardBody{ padding:40px 40px 0 40px; }
.lead{
  margin:0; font-family:Inter, sans-serif; font-weight:500; font-size:18px;
  line-height:1.3; letter-spacing:-0.03em; color:#2C2C2C;
}

/* ===== ТОЧНЫЕ РАЗМЕРЫ ===== */
.cardA{ width:803px; height:400px; }
.cardB{ width:567px; height:400px; }
.cardC{ width:568px; height:400px; } /* 3-я точно 400 */
.cardD{ width:802px; height:400px; }

/* ===== МЕДИА ПО НИЗУ (общий контейнер) ===== */
.mediaBottom{
  position:absolute; left:50%; bottom:-6px;          /* слегка обрезаем снизу */
  transform:translateX(-50%);
  display:flex; align-items:flex-end; gap:12px; pointer-events:none;
}
.cardA .mediaBottom img{
  max-height:220px; width:auto; height:auto; display:block;
}

/* 2-я: порядок заменён — сначала .bird, потом .phone */
.cardB .mediaBottom .bird{
  height:180px; width:auto; display:block;
  margin-right:-24px; z-index:2;           /* лёгкий наезд на телефон */
}
.cardB .mediaBottom .phone{
  height:220px; width:auto; display:block;
}

/* 3-я: РОДНЫЕ размеры, сильное обрезание снизу карточкой */
.mediaBottomC{
  position:absolute; left:50%; bottom:-40px;         /* «прилично» режем по низу */
  transform:translateX(-50%);
  display:flex; align-items:flex-end; gap:12px; pointer-events:none;
}
.mediaBottomC img{ width:auto; height:auto; display:block; }

/* ===== ГОД + ПЛАШКА 173×56 ===== */
.withYear .cardBody{ padding-top:116px; }  /* текст ниже таба */
.year{
  position:absolute; left:40px; top:32px;
  font-family:Inter, sans-serif; font-weight:500; font-size:36px;
  line-height:.95; letter-spacing:-0.05em; color:#1F2937;
}
.year span{ position:relative; z-index:2; display:inline-block; padding:10px 14px; }
.year::before{
  content:""; position:absolute; left:0; top:0; width:173px; height:56px;
  border-radius:12px; transform: rotate(1.3deg); z-index:1;
}
.yearBlue::before   { background:#77D1FD; }
.yearPurple::before { background:#B87EFF; }
.yearPurple span{ color:#fff; }            /* 2022 белым */

/* ===== КНОПКА (тёмная) + ПРАВАЯ ЗОНА В D ===== */
.ctaBtn{
  position:absolute; left:40px; bottom:40px;
  display:inline-flex; align-items:center; gap:10px;
  height:44px; padding:0 16px;
  background:#0B63E5; color:#fff; text-decoration:none;
  border-radius:12px; font:700 15px/1 Inter, sans-serif;
}
.ctaBtn i{
  width:32px; height:32px; border-radius:10px; background:#0A4DB2;
  display:grid; place-items:center;
}

.cardD .cardBody{ padding-right:420px; }   /* резерв справа под картинки */
.certs{
  position:absolute; right:16px; bottom:16px;
  display:flex; align-items:flex-end; gap:12px; pointer-events:none;
}
.certs img{ height:240px; width:auto; display:block; }
</style>
