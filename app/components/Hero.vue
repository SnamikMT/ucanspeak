Теперь только тут осталось поправить для мобилки код 

Чтобы текст кнопки весь умещался в кнопку и он стрелки справа был 36 на 36 почти прибит к краю кнопки с отступом 5 справа 

Слово Ucanspeak на мобилке должно бы в третьей строке 

<template>
  <section :class="$style.wrap">
    <div :class="$style.panel">
      <!-- ВСТАВЛЕННАЯ ШАПКА -->
      <Header :inside-hero="true" />

      <!-- ===== Левый столбец: заголовок + лид ===== -->
      <div :class="$style.left">
        <h1 :class="$style.title">
          <span :class="$style.line1">
            Заговорите <span :class="$style.hl">на&nbsp;английском уже</span>
          </span>
          <span :class="$style.line2">сегодня с Ucanspeak</span>
        </h1>

        <p :class="$style.lead">
          Интерактивная платформа обучения английскому языку: выучите легко и быстро более 5000
          английских разговорных фраз, занимаясь всего 20 минут в день в любое удобное для вас время.
        </p>
      </div>

      <!-- ===== Правый столбец: медиа ===== -->
      <div :class="$style.mediaBox">
        <img :class="$style.mediaImg" src="/hero-girl.jpg" alt="Ucanspeak" />
        <button type="button" :class="$style.playBtn" aria-label="Смотреть демо">
          <svg width="13" height="16" viewBox="0 0 13 16" fill="none" aria-hidden="true">
            <path d="M1 1v14l11-7L1 1z" fill="#fff"/>
          </svg>
        </button>
      </div>

      <!-- ===== CTA ===== -->
      <a href="#" :class="$style.cta">
        <span>Бесплатный демоурок без регистрации</span>
        <i aria-hidden="true"><img src="@/assets/img/hero-arrow.svg" alt="" /></i>
      </a>

      <!-- ===== Бэйджи ===== -->
      <aside :class="$style.badge1">Для тех, кто готов<br/> заниматься самостоятельно</aside>
      <aside :class="$style.badge2">Для взрослых и детей<br/>с любым уровнем языка</aside>

      <!-- ===== Фоновые волны ===== -->
      <img :class="$style.bgDesk" :src="waveDesk" alt="" aria-hidden="true" />
      <img :class="$style.bgMob"  :src="waveMob"  alt="" aria-hidden="true" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import waveDesk from '@/assets/img/hero-wave.svg'
import waveMob  from '@/assets/img/hero-wave-mobile.svg'
</script>

<style module>
/* фон страницы */
.wrap{
  padding: 25px 0 28px;
  background:#E9EFF7;
}

/* белая панель героя: внутри — и шапка, и контент */
.panel{
  position:relative;
  max-width:1390px;
  margin:0 auto;
  border-radius:20px;
  background:#fff;
  overflow:hidden;
  isolation:isolate;
  box-shadow:0 12px 40px rgba(0,0,0,.06);
  min-height:700px;
  /* вертикальные паддинги под контент, верх закрывает header-бар */
  padding:0 0 64px;
}

/* ===== Встроенный header-бар ===== */
.bar{
  display:flex; align-items:center; justify-content:space-between;
  padding: 25px 50px 66px 50px;
}

.logo{
  font-weight:800;
  font-size:22px;
  letter-spacing:.2px;
  text-decoration:none;
  color:#4363f5;
}

.nav{ display:flex; gap:10px; }
.navBtn{ padding:10px 14px; border-radius:12px; font-weight:500; }
.primary{ padding:12px 16px; border-radius:12px; }

/* бургер только на мобилке */
.menuBtn{
  display:none;
  flex-direction:column; justify-content:center; gap:5px;
  width:44px; height:36px;
  border:1px solid rgba(44,44,44,0.3);
  border-radius:8px;
  background:transparent;
  cursor:pointer;
}
.menuBtn span{
  display:block; height:2px; width:20px;
  background:#2C2C2C; border-radius:2px; margin:0 auto;
}

/* ===== Контент слева ===== */
.left{
  padding-left:50px; padding-right:30px;
  display:flex; flex-direction:column; z-index:2;
}

.title{
  margin:10px 0 18px;      /* небольшой отступ от шапки */
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:65px;
  line-height:.95;
  letter-spacing:-0.06em;
  color:#141414;
}
.line1, .line2{ display:block; }
.hl{
  display:inline-block;
  background:#FFD249;
  padding:.05em .28em;
  border-radius:.28em;
  transform: rotate(1.2deg);
}

.lead{
  margin:0 0 24px;
  font-family: Inter, sans-serif; font-weight:500;
  font-size:18px; line-height:1.3; letter-spacing:-0.03em; color:#4B5563;
  max-width:594px;
}

/* ===== Бэйджи (desktop) ===== */
.badgeBase{
  position:absolute; background:#EAEEF7; border-radius:10px; padding:16px 20px;
  font:500 16px/1.3 Inter,sans-serif; letter-spacing:-.03em;
  box-shadow:0 10px 24px rgba(17,24,39,.10); z-index:3;
}
.badge1{ composes: badgeBase; width:260px; height:74px; transform:rotate(5deg);  top:389px; left:148px; }
.badge2{ composes: badgeBase; width:241px; height:74px; transform:rotate(-5deg); top:403px; left:535px; }

/* ===== Правый медиа-бокс ===== */
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

/* CTA внутри панели */
.cta{
  position:absolute; bottom:50px; left:50px;
  display:flex; align-items:center; justify-content:space-between;
  width:428px; height:64px; padding:0 10px 0 18px;
  background:#B87EFF; color:#fff; text-decoration:none; border-radius:14px;
  font:600 16px/1 Inter,sans-serif; box-shadow:0 12px 30px rgba(184,126,255,.35); z-index:2;
}
.cta i{ width:50px; height:50px; border-radius:10px; background:#fff; display:grid; place-items:center; }
.cta i img{ width:22px; height:16px; }

/* Фоны */
.bgDesk{ position:absolute; left:0; right:0; bottom:0; width:100%; height:auto; z-index:1; display:block; pointer-events:none;}
.bgMob{ display:none; pointer-events:none;}

/* ===== Адаптив ===== */
@media (max-width:1390px){
  .panel{ margin:0 15px; } /* мягкие поля по краям при сужении */
}

@media (max-width:768px){
  .nav, .primary{ display:none; }
  .menuBtn{ display:flex; }
}

@media (max-width:640px){
  .panel{ height:680px; min-height:680px; }
  .bar{ padding:16px 18px; }  /* компактнее шапка */
  .left{ padding-left:25px; padding-right:25px; }

  .title{
    font-size:33px; line-height:.95; letter-spacing:-.05em;
    text-align:left; margin-bottom:20px;
  }
  .hl{ border-radius:10px; transform: rotate(1.2deg); }

  .lead{ font-size:14px; max-width:none; text-align:left; }

  .bgDesk{ display:none; }
  .bgMob{ display:block; position:absolute; left:0; right:0; bottom:40px; width:100%; height:auto; z-index:1; }

  .mediaBox{
    width:162px; height:162px; border-radius:50%;
    right:15px; top:345px; left:auto; bottom:auto;
    border:3px solid #EAEEF7; overflow:hidden; background:#fff;
    box-shadow:0 14px 26px rgba(0,0,0,.10); z-index:3;
  }
  .mediaImg{ border-radius:50%; }
  .playBtn{
    width:34px; height:34px; border-radius:50%; background:#B87EFF;
    box-shadow:0 8px 18px rgba(184,126,255,.35);
  }

  .badge1, .badge2{
    left:25px; right:auto; width:254px; height:auto; padding:12px 14px;
    background:#EAEEF7; box-shadow:0 8px 18px rgba(17,24,39,.10);
    z-index: 2;
    font-size: 14px;
  }
  .badge1{ top:53%; transform:rotate(5deg); }
  .badge2{ top:65%; transform:rotate(-5deg); }

  .cta{
    position:absolute; left:25px; right:25px; bottom:25px;
    width:auto; height:56px; margin:0;
  }
  .cta i{ width:36px; height:36px; }
}
</style>
