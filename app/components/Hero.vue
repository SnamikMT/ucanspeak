<template>
  <section :class="$style.wrap">
    <div class="container">
      <div :class="$style.panel">
        <!-- ЛЕВО -->
        <div :class="$style.left">
          <h1 :class="$style.title">
            <span :class="$style.t1">Заговорите</span>
            <span :class="$style.t2"><span :class="$style.hl">на&nbsp;английском</span> уже</span>
            <span :class="$style.t3">сегодня с&nbsp;Ucanspeak</span>
          </h1>

          <p :class="$style.lead">
            Интерактивная платформа обучения английскому языку: выучите легко и быстро более 5000
            английских разговорных фраз, занимаясь всего 20 минут в день в любое удобное для вас время.
          </p>
        </div>

        <!-- ПРАВО: видео-кружок -->
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
          <span>Бесплатный демоурок без регистрации</span>
          <i aria-hidden="true"><img src="@/assets/img/hero-arrow.svg" alt="" /></i>
        </a>

        <!-- Табы -->
        <aside :class="$style.badge1">Для тех, кто готов заниматься самостоятельно</aside>
        <aside :class="$style.badge2">Для взрослых и детей<br/>с любым уровнем языка</aside>

        <!-- Фоны -->
        <img :class="$style.bgDesk" :src="waveDesk" alt="" aria-hidden="true" />
        <img :class="$style.bgMob"  :src="waveMob"  alt="" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import waveDesk from '@/assets/img/hero-wave.svg'
import waveMob  from '@/assets/img/hero-wave-mobile.svg'
</script>

<style module>
.wrap{ padding:12px 0 28px; background:#E9EFF7; }

/* ===== Desktop ===== */
.panel{
  position:relative;
  max-width:1390px; margin:0 auto;
  border-radius:20px; background:#fff; overflow:hidden; isolation:isolate;
  box-shadow:0 12px 40px rgba(0,0,0,.06);
  padding:36px 0 64px;
  min-height:640px;
}
.left{ padding-left:50px; display:flex; flex-direction:column; z-index:2; }

.title{
  margin:0 0 18px;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:65px;
  line-height:.95;
  letter-spacing:-0.06em;
  color:#141414;
}
.t1,.t2,.t3{ display:inline; } /* десктоп — в одну строку */
.hl{ display:inline-block; background:#FFD249; padding:.05em .28em; border-radius:.28em; transform: rotate(1.2deg); }

.lead{
  margin:0 0 24px;
  font-family: Inter, sans-serif; font-weight:500;
  font-size:18px; line-height:1.3; letter-spacing:-0.03em; color:#4B5563;
  max-width:594px;
}

/* badges */
.badgeBase{
  position:absolute; background:#EAEEF7; border-radius:10px; padding:16px 20px;
  font:500 16px/1.3 Inter,sans-serif; letter-spacing:-.03em;
  box-shadow:0 10px 24px rgba(17,24,39,.10); z-index:3;
}
.badge1{ composes: badgeBase; width:260px; height:74px; transform:rotate(5deg);  top:389px; left:148px; }
.badge2{ composes: badgeBase; width:241px; height:74px; transform:rotate(-5deg); top:403px; left:535px; }

/* right media (desktop) */
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

.cta{
  position:absolute; bottom:50px; left:50px;
  display:flex; align-items:center; justify-content:space-between;
  width:428px; height:64px; padding:0 10px 0 18px;
  background:#B87EFF; color:#fff; text-decoration:none; border-radius:14px;
  font:600 16px/1 Inter,sans-serif; box-shadow:0 12px 30px rgba(184,126,255,.35); z-index:2;
}
.cta i{ width:50px; height:50px; border-radius:10px; background:#fff; display:grid; place-items:center; }
.cta i img{ width:22px; height:16px; }

.bgDesk{ position:absolute; left:0; right:0; bottom:0; width:100%; height:auto; z-index:1; display:block; }
.bgMob{ display:none; }

/* ===== Mobile ===== */
@media (max-width:640px){
  .wrap{ padding:0px 15px 0; }

  .panel{
    padding:20px 0 0;
    height:660px;           /* фикс высота по ТЗ */
    min-height:660px;
  }

  .left{ padding-left:25px; padding-right:25px; }

  /* 3 строки заголовка */
  .title{
    font-size:33px; line-height:.95; letter-spacing:-.05em;
    text-align:left; margin-bottom:12px;
  }
  .t1,.t2,.t3{ display:block; }   /* каждая часть — своя строка */
  .hl{ border-radius:10px; transform: rotate(1.2deg); }

  .lead{ font-size:16px; margin-top:10px; max-width:none; text-align:left; }

  .bgDesk{ display:none; }
  .bgMob{ display:block; position:absolute; left:0; right:0; bottom:40px; width:100%; height:auto; z-index:1; }

  /* Круг 162×162, от правого края 15, как раньше */
  .mediaBox{
    width:162px; height:162px; border-radius:50%;
    right:15px; top:300px; left:auto; bottom:auto;
    border:3px solid #EAEEF7; overflow:hidden; background:#fff;
    box-shadow:0 14px 26px rgba(0,0,0,.10); z-index:3;
  }
  .mediaImg{ border-radius:50%; }
  .playBtn{
    width:34px; height:34px; border-radius:50%; background:#B87EFF;
    box-shadow:0 8px 18px rgba(184,126,255,.35);
  }

  /* табы слева от круга */
  .badge1, .badge2{
    left:25px; right:auto; width:254px; height:auto; padding:12px 14px;
    background:#EAEEF7; box-shadow:0 8px 18px rgba(17,24,39,.10);
    z-index: 2;
  }
  .badge1{ top:41%; transform:rotate(5deg); }
  .badge2{ top:63%; transform:rotate(-5deg); }

  /* CTA — снизу, отступы 25 по бокам и снизу */
  .cta{
    position:absolute; left:25px; right:25px; bottom:25px;
    width:auto; height:56px; margin:0;
  }

  .cta i{ width:36px; height:36px; }
}
</style>
