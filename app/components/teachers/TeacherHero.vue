<template>
  <section :class="$style.wrap">
    <div :class="$style.panel">
      <!-- Вставленный Header -->
      <Header :inside-hero="true" />

      <!-- Левый столбец -->
      <div :class="$style.left">
        <h1 :class="$style.title">
          <span :class="$style.line">Интерактивная платформа</span>
          <span :class="$style.line">разговорной практики английского</span>
          <span :class="$style.line">
            языка<span :class="$style.highlight">для учителей и языковых школ</span>
          </span>
        </h1>

        <p :class="$style.lead">
          Уникальный функционал платформы поможет сделать уроки незабываемыми и реализовать ваш потенциал
        </p>
      </div>

      <!-- Правый столбец: медиа -->
      <div :class="$style.mediaBox">
        <img :class="$style.mediaImg" src="/hero-girl.jpg" alt="Ucanspeak" />
        <button type="button" :class="$style.playBtn" aria-label="Смотреть демо">
          <svg width="13" height="16" viewBox="0 0 13 16" fill="none" aria-hidden="true">
            <path d="M1 1v14l11-7L1 1z" fill="#fff"/>
          </svg>
        </button>
      </div>

      <!-- CTA -->
      <a href="#" :class="$style.cta">
        <span>Попробовать бесплатно 14 дней</span>
        <i aria-hidden="true"><img src="@/assets/img/teachers/teachers-hero-arrow.svg" alt="" /></i>
      </a>

      <!-- Бэйджи -->
      <aside :class="$style.badge1">Интерактивные уроки <br/>по английской грамматике <br/>для взрослых и детей</aside>
      <aside :class="$style.badge2">Видео и аудио материалы, <br/>озвученные носителями языка</aside>
      <aside :class="$style.badge3">Аудиотренажер с тестами</aside>

      <!-- Фоны -->
      <img :class="$style.bgDesk" :src="waveDesk" alt="" aria-hidden="true" />
      <img :class="$style.bgMob"  :src="waveMob"  alt="" aria-hidden="true" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Header  from '@/components/Header.vue'
import waveDesk from '@/assets/img/teachers/teachers-hero-wave.svg'
import waveMob  from '@/assets/img/teachers/teachers-hero-wave-mobile.svg'
</script>

<style module>
/* фон страницы */
.wrap{
  padding: 25px 0 0;
  background:#E9EFF7;
}

/* белая панель героя */
.panel{
  position:relative;
  max-width:1390px;
  margin:0 auto;
  border-radius:20px;
  background:#fff;
  overflow:hidden;
  isolation:isolate;
  box-shadow:0 12px 40px rgba(0,0,0,.06);
  min-height:800px;
  padding:0 0 64px;
}

/* Контент слева */
.left{
  padding-left:50px; padding-right:30px;
  display:flex; flex-direction:column; z-index:2;
}

/* === ТИПОГРАФИКА ПО ФИГМЕ === */
.title{
  margin:10px 0 18px;
  font-family: Inter, sans-serif;
  font-weight:500;                 /* Medium */
  font-size:50px;
  line-height:.95;                 /* 95% */
  letter-spacing:-0.06em;          /* -6% */
  color:#2C2C2C;
}
.line{ display:block; }
.highlight{
  display:inline-block;
  background:#FFD551;              /* плашка */
  padding:.05em .35em;
  border-radius:10px;
  transform: rotate(1deg);
}

.lead{
  margin:0 0 24px;
  font-family: Inter, sans-serif;
  font-weight:500;                 /* Medium */
  font-size:18px;
  line-height:1.3;                 /* 130% */
  letter-spacing:-0.03em;          /* -3% */
  color:#2C2C2C;
  max-width:594px;
}

/* Бэйджи */
.badgeBase{
  position:absolute; background:#EAEEF7; border-radius:10px; padding:16px 20px;
  font:500 16px/1.3 Inter,sans-serif; letter-spacing:-.03em;
  box-shadow:0 10px 24px rgba(17,24,39,.10); z-index:3;
}
.badge1{ composes: badgeBase; width:260px; height:103px; transform:rotate(5deg);  top:439px; left:50px; }
.badge2{ composes: badgeBase; width:283px; height:82px;  transform:rotate(-5deg); top:453px; left:375px; }
.badge3{ composes: badgeBase; width:239px; height:61px;  transform:rotate(5deg);  top:430px; left:695px; }

/* Правый медиа-бокс */
.mediaBox{
  position:absolute; bottom:50px; right:50px;
  width:320px; height:500px; border-radius:20px; overflow:hidden;
  background:#fff; box-shadow:0 18px 44px rgba(0,0,0,.10); z-index:2;
}
.mediaImg{ width:100%; height:100%; object-fit:cover; border-radius:20px; }
.playBtn{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:94px; height:50px; border:0; border-radius:12px; background:#B87EFF; color:#fff;
  display:grid; place-items:center; box-shadow:0 10px 28px rgba(184,126,255,.45); cursor:pointer;
}

/* CTA */
.cta{
  position:absolute; bottom:50px; left:50px;
  display:flex; align-items:center; justify-content:space-between;
  width:364px; height:64px; padding:0 10px 0 18px;
  background:#3232E9; color:#fff; text-decoration:none; border-radius:14px;
  font:600 16px/1 Inter,sans-serif; z-index:2;
}
.cta i{ width:50px; height:50px; border-radius:10px; background:#fff; display:grid; place-items:center; }
.cta i img{ width:22px; height:16px; }

/* Фоны */
.bgDesk{ position:absolute; left:0; right:0; bottom:0; width:100%; height:auto; z-index:1; display:block; pointer-events:none; }
.bgMob{ display:none; pointer-events:none; }

/* Адаптив (сохранил как было) */
@media (max-width:1390px){
  .panel{ margin:0 15px; }
}
@media (max-width:768px){
  .nav, .primary{ display:none; }
  .menuBtn{ display:flex; }
}
@media (max-width:640px){
  .panel{ height:824px; min-height:824px; }
  .left{ padding-left:25px; padding-right:25px; }

  .title{
    font-size:33px;
    line-height:.95;
    letter-spacing:-.05em;
    margin-bottom:12px;
  }
  .highlight{ border-radius:6px; }

  .lead{
    font-size:14px;
    margin-top:10px;
    max-width:none;
  }

  .bgDesk{ display:none; }
  .bgMob{ display:block; position:absolute; left:0; right:0; bottom:40px; width:100%; height:auto; z-index:1; }

  .mediaBox{
    width:162px; height:162px; border-radius:50%;
    right:15px; top:447px; left:auto; bottom:auto;
    border:3px solid #EAEEF7; overflow:hidden; background:#fff;
    box-shadow:0 14px 26px rgba(0,0,0,.10); z-index:3;
  }
  .mediaImg{ border-radius:50%; }
  .playBtn{
    width:34px; height:34px; border-radius:50%; background:#B87EFF;
    box-shadow:0 8px 18px rgba(184,126,255,.35);
  }

  .cta{
    position:absolute; left:25px; right:25px; bottom:25px;
    width:auto; height:56px; margin:0;
  }
  .cta i{ width:36px; height:36px; }

  .badgeBase{
  position:absolute; background:#EAEEF7; border-radius:10px; padding:14px 14px;
  font:500 14px/1.3 Inter,sans-serif; letter-spacing:-.03em;
  box-shadow:0 10px 24px rgba(17,24,39,.10); z-index:3;
}
.badge1{ composes: badgeBase; width:250px; height:78px;  transform:rotate(5deg);  top:464px; left:12px; z-index: 2; }
.badge2{ composes: badgeBase; width:238px; height:60px;  transform:rotate(-5deg); top:570px; left:12px; z-index: 2; }
.badge3{ composes: badgeBase; width:207px; height:42px;  transform:rotate(5deg);  top:650px; left:168px; }
}
</style>
