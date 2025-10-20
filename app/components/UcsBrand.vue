<template>
  <section :class="$style.wrap" id="about-brand">
    <div :class="$style.stage">
      <!-- Заголовок -->
      <header :class="$style.head">
        <!-- ПК -->
        <h2 :class="[$style.title, $style.titleDesk]">
          UCANSPEAK — это проверенный <br></br>бренд,
          <span :class="$style.hl">созданный профессионалами</span>
        </h2>

        <!-- Мобилка -->
        <h2 :class="[$style.title, $style.titleMob]">
          <span class="mline">UCANSPEAK&nbsp;–</span>
          <span class="mline">это&nbsp;проверенный</span>
          <span class="mline">бренд, созданный</span>
          <span class="mline" :class="$style.hlMob">профессионалами</span>
        </h2>
      </header>

      <!-- Ряд 1 -->
      <div :class="$style.row">
        <!-- A -->
        <article :class="[$style.card, $style.cardA]">
          <div :class="$style.cardBody">
            <p :class="$style.lead">
              Наш международный проект объединил преподавателей из России, Великобритании и США
              для создания онлайн-платформы и разговорного аудиотренажера для изучения английского языка.
            </p>
          </div>
          <div :class="$style.mediaBottom">
            <img :src="people" alt="" />
          </div>
        </article>

        <!-- B: 2017 -->
        <article :class="[$style.card, $style.cardB, $style.withYear]">
          <div :class="[$style.year, $style.yearBlue]"><span>2017 год</span></div>
          <div :class="$style.cardBody">
            <p :class="$style.lead">
              Мы выпустили 3 мобильных приложения, которые получили признание более чем у 30&nbsp;000 пользователей.
            </p>
          </div>
          <div :class="$style.media2017">
            <img :src="phone" alt="" :class="$style.phone" />
            <img :src="bird"  alt="" :class="$style.bird" />
          </div>
        </article>
      </div>

      <!-- Ряд 2 -->
      <div :class="$style.row">
        <!-- C: 2022 -->
        <article :class="[$style.card, $style.cardC, $style.withYear]">
          <div :class="[$style.year, $style.yearPurple]"><span>2022 год</span></div>
          <div :class="$style.cardBody">
            <p :class="$style.lead">
              Мы объединили аудиотренажеры из мобильных приложений с интерактивными уроками
              на обучающей онлайн-платформе.
            </p>
          </div>

          <div :class="$style.media2022">
            <img
              :src="screen1"
              alt=""
              class="s1"
              style="
                position:absolute; bottom:0;
                left: var(--s1-left);
                transform-origin:50% 100%;
                transform: translateX(var(--s1-tx)) translateY(var(--s1-ty));
                width:auto; height:auto; display:block; z-index:1;
                filter: drop-shadow(0 12px 24px rgba(16,24,40,.18));
              "
            />
            <img
              :src="screen2"
              alt=""
              class="s2"
              style="
                position:absolute; bottom:0;
                left: var(--s2-left);
                transform-origin:50% 100%;
                transform: translateX(var(--s2-tx)) translateY(var(--s2-ty));
                width:auto; height:auto; display:block; z-index:2;
                filter: drop-shadow(0 12px 24px rgba(16,24,40,.22));
              "
            />
          </div>
        </article>

        <!-- D -->
        <article :class="[$style.card, $style.cardD]">
          <div :class="$style.cardBody">
            <p :class="$style.lead">
              Курс разговорной практики одобрен и рекомендован национальной ассоциацией преподавателей
              английского языка НАПАЯз.
            </p>
          </div>
          <div :class="$style.certs">
            <img :src="cert1" alt="Сертификат" />
            <img :src="cert2" alt="Письмо" />
          </div>
          <a href="#" :class="$style.ctaBtn">
            <span>Перейти на платформу</span>
            <i aria-hidden="true">
              <img src="@/assets/img/hero-arrow-blue.svg" alt="" />
            </i>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import people  from '@/assets/img/people.png'
import bird    from '@/assets/img/teachers/teacher-feat-parrot2.png'
import phone   from '@/assets/img/teachers/teacher-phone.png'
import screen1 from '@/assets/img/teachers/teacher-screen-trainer.png'
import screen2 from '@/assets/img/teachers/teacher-screen-course.png'
import cert1   from '@/assets/img/teachers/teacher-cert-1.png'
import cert2   from '@/assets/img/teachers/teacher-cert-2.png'
</script>

<style module>
/* ===== ПК ===== */
.wrap{ background:#E9EFF7; padding-top:140px; }
.stage{ width:1390px; margin:0 auto; }
.head{ text-align:center; margin-bottom:70px; }
.title{ margin:0; font-family:Inter,sans-serif; font-weight:500; font-size:55px; line-height:.95; letter-spacing:-.05em; color:#2C2C2C; }
.titleDesk{ display:block; }
.titleMob{ display:none; }

/* плашка под текстом */
.hl{
  position:relative; display:inline-block; padding:.08em .3em; border-radius:10px; z-index:0;
}
.hl::before{
  content:""; position:absolute; inset:0; background:#FFD249; border-radius:10px; transform:rotate(.6deg); z-index:-1;
}

.row{ display:flex; gap:20px; }
.row + .row{ margin-top:20px; }

.card{ position:relative; background:#fff; border-radius:20px; box-shadow:0 8px 24px rgba(16,24,40,.08); overflow:hidden; }
.cardBody{ padding:40px 40px 0 40px; }
.lead{ margin:0; font:500 18px/1.3 Inter,sans-serif; letter-spacing:-.03em; color:#2C2C2C; max-width:80%; }

.cardA{ width:803px; height:400px; }
.cardB{ width:567px; height:400px; }
.cardC{ width:568px; height:400px; }
.cardD{ width:802px; height:400px; }

/* === КАРТИНКИ: без искажений === */
.mediaBottom{ position:absolute; left:50%; bottom:-6px; transform:translateX(-50%); }
.mediaBottom img{ width:auto; display:block; }

/* 2017 */
.media2017{ position:absolute; inset:0; }
.phone{ position:absolute; bottom:0; right:0; width:auto; height:330px; z-index:1; display:block; }
.bird { position:absolute; bottom:0; right:120px; width:230px; height:auto; z-index:2; display:block; }

/* 2022 */
.media2022{
  position:absolute; left:50%; bottom:-80px; transform:translateX(-50%);
  width:45%; height:280px; pointer-events:none;
  --s1-left: 35%; --s1-tx: -64%; --s1-ty: 5%;
  --s2-left: 83%; --s2-tx: -36%; --s2-ty: -11px;
}

/* Годы */
.withYear .cardBody{ padding-top:103px; }
.year{ position:absolute; left:40px; top:32px; font:500 36px/.95 Inter,sans-serif; letter-spacing:-0.05em; color:#ffffff; }
.year span{
  position:relative; z-index:2; display:flex; align-items:center; justify-content:center;
  width:173px; height:56px; border-radius:12px; padding:0;
}
.year::before{ content:""; position:absolute; left:0; top:0; width:173px; height:56px; border-radius:12px; transform:rotate(1.15deg); z-index:1; }
.yearBlue::before   { background:#41BCF8; }
.yearPurple::before { background:#B87EFF; }
.yearPurple span{ color:#fff; }

/* CTA и сертификаты */
.cardD .cardBody{ padding-right:420px; }
.certs{ position:absolute; right:16px; bottom:15%; display:flex; gap:12px; }
.certs img{ height:auto; width:203px; display:block; }
.ctaBtn{
  position:absolute; left:40px; bottom:40px;
  display:inline-flex; align-items:center; justify-content:space-between;
  width:260px; height:46px; padding:0 12px 0 16px;
  background:#41BCF8; color:#fff; border-radius:14px;
  font:600 16px/1 Inter,sans-serif; text-decoration:none; white-space:nowrap;
}
.ctaBtn i{ width:36px; height:36px; border-radius:10px; background:#fff; display:grid; place-items:center; }
.ctaBtn i img{ width:22px; height:16px; display:block; }

/* ===== Планшеты (старый фолбек) ===== */
@media (max-width: 1200px){
  .stage{ width:100%; max-width:1040px; margin:0 auto; }
  .row{ flex-direction:column; }
  .cardA,.cardB,.cardC,.cardD{ width:100%; }
  .lead{ max-width:100%; }
  .cardD .cardBody{ padding-right:300px; }
  .media2022{ width:52%; height:240px; bottom:-60px; }
}

/* ===== НОВОЕ: 601–1200 (ничего не обрезается, есть боковые поля) ===== */
@media (min-width:601px) and (max-width:1200px){
  .stage{
    width:min(96vw, 1200px);
    margin:0 auto;
    padding: 0 15px;
  }
  .head{ margin-bottom: clamp(40px, 5vw, 70px); }
  .title{ font-size: clamp(40px, 5vw, 55px); }

  .row{
    gap: clamp(14px, 2vw, 20px);
    flex-direction: column;
  }

  .card{
    border-radius:16px;
    height:auto;                /* не фиксируем высоту */
    overflow: visible;          /* чтобы медиа не обрезались */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cardBody{
    padding: clamp(26px, 3vw, 40px) clamp(20px, 3vw, 40px) 0 clamp(24px, 3vw, 40px);
  }
  .lead{
    font-size: clamp(16px, 1.9vw, 18px);
    max-width:89%;
  }

  /* Добавляем место снизу под медиа у карточек */
  .cardA .cardBody{ padding-bottom: clamp(123px, 81vw, 278px); }
  .cardB .cardBody{ padding-bottom: clamp(140px, 22vw, 240px); }
  .cardC .cardBody{ padding-bottom: clamp(140px, 22vw, 240px); }
  .cardD .cardBody{ padding-bottom: clamp(20px, 3vw, 40px); padding-right: clamp(180px, 28vw, 320px); }

  /* Общие масштабы медиа */
  .mediaBottom img{
    max-width: clamp(420px, 58vw, 640px);
    height:auto;
  }

  /* 2017 */
  .phone{ height: clamp(230px, 30vw, 320px); right: clamp(0px, 0vw, 10px); }

  /* 2022 — уменьшаем, ставим повыше */
  .media2022{
    width: clamp(173px, 26%, 516px);
    height: clamp(200px, 26vw, 260px);
    bottom: clamp(-20px, -2vw, -40px);
  }

  .withYear .cardBody{ padding-top: clamp(78px, 8vw, 103px); }
  .year{
    left: clamp(22px, 2.6vw, 40px);
    top: clamp(20px, 2.4vw, 32px);
    font-size: clamp(24px, 3.2vw, 36px);
  }
  .year span, .year::before{
    width: clamp(132px, 18vw, 173px);
    height: clamp(44px, 6vw, 56px);
  }

  /* Сертификаты и кнопка — не абсолютим на узких планшетах, чтобы не резались */
  .certs{
    position: static;
    display:flex;
    justify-content: center;
    padding: clamp(14px, 2.4vw, 20px) 15px;
  }
  .certs img{
    width: clamp(160px, 24vw, 200px);
    height:auto;
  }
  .ctaBtn{
    position: static;
    margin: 6px 0 clamp(16px, 2.6vw, 24px);
    height:46px;
  }
}

/* ===== Мобильные ===== */
@media (max-width: 600px){
  .wrap{ padding-top:120px; }
  .head{ margin-bottom:50px; }
  .titleDesk{ display:none; }
  .titleMob{
    display:block; font-family:Inter, system-ui, sans-serif; font-weight:500;
    font-size:33px; line-height:1.10; letter-spacing:-0.05em; color:#2C2C2C; margin:0;
  }
  .head :global(.mline){ display:block; }
  .hlMob{ position:relative; display:inline-block; isolation:isolate; }
  .hlMob::before{
    content:""; position:absolute; left:1.68em; right:-.32em; top:50%;
    transform:translateY(-50%) rotate(1.2deg); height:1.05em; background:#FFD249; border-radius:10px;
    box-shadow: inset 0 -2px 0 rgba(0,0,0,.06); z-index:-1; width:291px;
  }

  .stage {
    width: 390px;
    margin: 16px auto 0;
    grid-template-columns: 1fr;
    row-gap: 16px;
    padding: 0; /* важно: НЕ трогаем мобилку */
  }

  .row{ gap:14px; }
  .card{ border-radius:16px; }

  .cardBody{ padding:25px 16px 0px 30px; }
  .lead{ font-size:14px; letter-spacing:-0.03em; }

  .cardA,.cardB,.cardC,.cardD{ height:auto; }

  .mediaBottom{ position:relative; left:auto; bottom:auto; transform:none; margin-top:8px; }
  .mediaBottom img{ width:auto; }

  .media2017{ position:relative; inset:auto; height:220px; }
  .phone{ position:absolute; right:6px; bottom:0; height:242px; width:auto; }
  .bird { position:absolute; right:100px; bottom:0; height:173px; width:auto; }

  .media2022{
    position:relative; left:auto; bottom:auto; transform:none;
    height:200px; margin-top:8px; overflow:visible;
    --s1-left: 48%; --s1-tx: -40%; --s1-ty: 15%;
    --s2-left: 102%; --s2-tx: -20%; --s2-ty: 20%;
  }
  .cardC{ overflow:hidden; }

  .withYear .cardBody{ padding-top:86px; }
  .year{ left:16px; top:32px; font-size:24px; }
  .year span, .year::before{ width:132px; height:46px; }

  .cardD .cardBody{ padding-right:16px; }
  .certs{ position:relative; right:auto; bottom:auto; justify-content:center; padding:30px 0 30px; gap: 18px;}
  .certs img{ width:40%; height:auto; }

  .ctaBtn{
    position:relative; left:auto; bottom:auto; margin:0px auto 16px;
    width:226px; height:46px; border-radius:14px; display:flex; align-items:center; justify-content:space-between;
    padding:0 10px 0 14px; background:#41BCF8; color:#fff; text-decoration:none; font-size:14px;
  }
  .ctaBtn i{ width:36px; height:36px; flex:0 0 36px; border-radius:10px; background:#fff; display:grid; place-items:center; margin-left:8px; }
  .ctaBtn i img{ width:18px; height:18px; }
}
</style>
