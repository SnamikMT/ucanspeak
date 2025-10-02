<template>
  <section :class="$style.wrap">
    <div :class="$style.inner">
      <!-- ===== Header box (на мобилке отдельный белый блок) ===== -->
      <header :class="$style.head">
        <!-- Desktop title (2 строки) -->
        <h2 :class="[$style.title, $style.titleDesk]">
          <span :class="$style.tline">Еще больше интерактивных </span>
          <span :class="$style.tline">
            заданий <span :class="$style.eq">и полезных фишек</span>
          </span>
        </h2>

        <!-- Mobile title (3 строки) -->
        <h2 :class="[$style.title, $style.titleMob]" aria-hidden="false">
          <span :class="$style.mline">Еще больше </span>
          <span :class="$style.mline">интерактивных</span>
          <span :class="$style.mline">заданий</span>
          <span :class="[$style.mline, $style.mEq]">и полезных фишек</span>
        </h2>

        <!-- Desktop note -->
        <p :class="[$style.note, $style.noteDesk]">
          *Задания можно использовать для подготовки к устной части ЕГЭ и ОГЭ по английскому языку
        </p>

        <!-- Mobile note (3 строки) -->
        <p :class="[$style.note, $style.noteMob]">
          *Задания можно использовать<br />
          для подготовки к устной части ЕГЭ<br />
          и ОГЭ по английскому языку
        </p>

        <!-- CTA -->
        <!-- <a href="#demo" :class="$style.cta">
          <span :class="$style.ctaText">Бесплатный демоурок без регистрации</span>
          <i aria-hidden="true">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
              <path d="M1 10L11 1M11 1H4.5M11 1V7.5"
                    stroke="#3232E9" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </i>
        </a> -->

        <!-- Desktop badges -->
        <div :class="$style.leftBadges">
          <span :class="[$style.badge, $style.b1]">
            <img :src="icoMonolog" :class="$style.badgeIcon" alt="" />
            <span :class="$style.badgeText">Тематические монологи*</span>
          </span>
          <span :class="[$style.badge, $style.b2]">
            <img :src="icoCompare" :class="$style.badgeIcon" alt="" />
            <span :class="$style.badgeText">Сравнение двух фото*</span>
          </span>
          <span :class="[$style.badge, $style.b3]">
            <img :src="icoQ" :class="$style.badgeIcon" alt="" />
            <span :class="$style.badgeText">Вопросы по ключевым словам*</span>
          </span>
          <span :class="[$style.badge, $style.b4]">
            <img :src="icoDialog" :class="$style.badgeIcon" alt="" />
            <span :class="$style.badgeText">Диалог-расспрос*</span>
          </span>
        </div>

        <div :class="$style.rightBadges">
          <span :class="[$style.badge, $style.b5]">
            <img :src="icoPhoto" :class="$style.badgeIcon" alt="" />
            <span :class="$style.badgeText">Описание фото</span>
          </span>
          <span :class="[$style.badge, $style.b6]">
            <img :src="icoAnswer" :class="$style.badgeIcon" alt="" />
            <span :class="$style.badgeText">Ответы на вопросы</span>
          </span>
          <span :class="[$style.badge, $style.b7]">
            <img :src="icoTalks" :class="$style.badgeIcon" alt="" />
            <span :class="$style.badgeText">Короткие беседы (Small Talks)</span>
          </span>
        </div>

        <!-- Mobile badges (теперь абсолюты с координатами --x / --y) -->
        <div :class="$style.mobBadges">
          <span :class="[$style.mbadge, $style.m1]" style="--x: 81px;  --y:  71px;">
            <img :src="icoDialog" :class="$style.micon" alt="" /><b>Диалог-расспрос*</b>
          </span>
          <span :class="[$style.mbadge, $style.m2]" style="--x: -19px; --y:  93px;">
            <img :src="icoAnswer" :class="$style.micon" alt="" /><b>Ответы на вопросы</b>
          </span>
          <span :class="[$style.mbadge, $style.m3]" style="--x: 159px; --y: 112px;">
            <img :src="icoCompare" :class="$style.micon" alt="" /><b>Сравнение двух фото*</b>
          </span>
          <span :class="[$style.mbadge, $style.m4]" style="--x: 11px;  --y: 165px;">
            <img :src="icoQ" :class="$style.micon" alt="" /><b>Вопросы по ключевым словам*</b>
          </span>
          <span :class="[$style.mbadge, $style.m5]" style="--x: 2px;  --y: 224px;">
            <img :src="icoMonolog" :class="$style.micon" alt="" /><b>Тематические монологи*</b>
          </span>
          <span :class="[$style.mbadge, $style.m6]" style="--x: 206px; --y: 181px;">
            <img :src="icoPhoto" :class="$style.micon" alt="" /><b>Описание фото</b>
          </span>
          <span :class="[$style.mbadge, $style.m7]" style="--x: 66px;  --y: 266px;">
            <img :src="icoTalks" :class="$style.micon" alt="" /><b>Короткие беседы (Small Talks)</b>
          </span>
        </div>
      </header>

      <!-- ===== Cards row ===== -->
      <div :class="$style.grid">
        <div :class="$style.card">
          <span :class="$style.plus">＋</span>
          <div :class="$style.cardText">
            <h3 :class="$style.cardTitle">Аудио словарь с функцией<br/>переключения языков</h3>
          </div>
          <img :src="imgPhone2x" :class="$style.cardImg" alt=""
               :style="{ width: imgSize.phone.w + 'px', height: imgSize.phone.h + 'px' }">
        </div>

        <div :class="$style.card">
          <span :class="$style.plus">＋</span>
          <div :class="$style.cardText">
            <h3 :class="$style.cardTitle">Встроенный<br/>онлайн переводчик</h3>
          </div>
          <img :src="imgTranslate2x" :class="$style.cardImg" alt=""
               :style="{ width: imgSize.translate.w + 'px', height: imgSize.translate.h + 'px' }">
        </div>

        <div :class="$style.card">
          <span :class="$style.plus">＋</span>
          <div :class="$style.cardText">
            <h3 :class="$style.cardTitle">Грамматические<br/>таблицы по английскому</h3>
          </div>
          <img :src="imgTables2x" :class="$style.cardImg" alt=""
               :style="{ width: imgSize.tables.w + 'px', height: imgSize.tables.h + 'px' }">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import imgPhone2x     from '@/assets/img/extras-phone.png'
import imgTranslate2x from '@/assets/img/extras-translate.png'
import imgTables2x    from '@/assets/img/extras-tables.png'

import icoMonolog from '@/assets/img/extras-ico-monolog.svg'
import icoCompare from '@/assets/img/extras-ico-compare.svg'
import icoQ       from '@/assets/img/extras-ico-q.svg'
import icoDialog  from '@/assets/img/extras-ico-dialog.svg'
import icoPhoto   from '@/assets/img/extras-ico-photo.svg'
import icoAnswer  from '@/assets/img/extras-ico-answer.svg'
import icoTalks   from '@/assets/img/extras-ico-talks.svg'

const imgSize = {
  phone:     { w: 115, h: 142 },
  translate: { w: 178, h: 142 },
  tables:    { w: 128, h: 153 },
}
</script>

<!-- components/teachers/PlatformPlusIdeas.vue -->
<style module>
/* ========= DESKTOP (единый белый блок) ========= */
.wrap{
  background:#FFF;                /* общий белый фон на ПК */
  border-radius:24px;
  overflow:hidden;
  margin-top:140px;
}
.inner{
  max-width:1390px;
  margin:0 auto;
  padding:150px 30px 30px;
}

/* Заголовок (без собственного белого фона на ПК) */
.head{ position:relative; text-align:center; background:transparent; padding:0; }

.title{
  margin:0;
  font-family:Inter, system-ui, sans-serif;
  font-weight:500; font-size:55px; line-height:.95; letter-spacing:-.05em; color:#2C2C2C;
}
.tline{ display:block; }
.titleDesk{ display:block; }
.titleMob{ display:none; }

/* Жёлтая плашка под “= Успех” */
.eq{ position:relative; display:inline-block; isolation:isolate; }
.eq::before{
  content:""; position:absolute; left:-.08em; right:-.38em; top:50%;
  transform:translateY(-50%) rotate(1.2deg);
  height:1.05em; background:#FFD24A; border-radius:12px;
  box-shadow: inset 0 -2px 0 rgba(0,0,0,.06); z-index:-1;
}

/* Сноска */
.note{
  color:#2C2C2C; font:500 18px/1.3 Inter, system-ui, sans-serif; letter-spacing:-.03em; text-align:center;
}
.noteDesk{
  margin:26px auto; max-width:680px;
  display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;
}
.noteMob{ display:none; margin:18px 0; }

/* CTA */
.cta{
  display:inline-flex; align-items:center; justify-content:space-between; gap:12px;
  height:50px; padding:0 16px 0 20px;
  background:#3232E9; color:#fff; text-decoration:none; border-radius:14px;
  font:600 16px/1.25 Inter, system-ui, sans-serif;
  box-shadow:0 10px 24px rgba(50,50,233,.28);
}
.ctaText{ white-space:nowrap; }
.cta i{
  width:36px; height:36px; border-radius:10px; background:#fff;
  display:grid; place-items:center;
}

/* Desktop badges */
.leftBadges, .rightBadges{ position:absolute; top:0; width:360px; pointer-events:none; }
.leftBadges{ left:0; }
.rightBadges{ right:0; text-align:right; }
.badge{
  display:inline-flex; align-items:center; gap:8px; height:44px; padding:0 14px; border-radius:14px;
  margin:10px 12px; box-shadow:0 6px 18px rgba(16,24,40,.12);
}
.badgeIcon{ width:20px; height:20px; display:block; }
.badgeText{ color:#1F2937; font:600 14px/1 Inter, system-ui, sans-serif; letter-spacing:-.02em; }
.b1{ background:#C8BDFF; transform:rotate(7.3deg); }
.b2{ background:#FF9B76; }
.b3{ background:#FFD551; transform:rotate(-5.47deg); }
.b4{ background:#77D1FD; transform:rotate(-13.2deg); }
.b5{ background:#77D1FD; transform:rotate(-7.7deg); }
.b6{ background:#C8BDFF; transform:rotate(-.9deg); }
.b7{ background:#FF9B76; transform:rotate(4.5deg); }

/* по умолчанию (ПК/планшет) мобильные бейджи скрыты */
.mobBadges{ display:none;}

/* сам бейдж можно оставить оформленным – он будет виден,
   только когда контейнер .mobBadges включится на мобилке */
.mbadge{
  display:flex; align-items:center; gap:8px;
  height:36px; padding:0 12px; border-radius:12px;
  box-shadow:0 6px 18px rgba(16,24,40,.12);
  font:600 14px/1 Inter, system-ui, sans-serif; letter-spacing:-.02em;
  white-space:nowrap; max-width:320px; overflow:hidden; text-overflow:ellipsis;
}
/* по умолчанию (ПК/планшет) мобильные бейджи скрыты */
.mobBadges{ display:none; }

/* сам бейдж можно оставить оформленным – он будет виден,
   только когда контейнер .mobBadges включится на мобилке */
.mbadge{
  display:flex; align-items:center; gap:8px;
  height:36px; padding:0 12px; border-radius:12px;
  box-shadow:0 6px 18px rgba(16,24,40,.12);
  font:600 14px/1 Inter, system-ui, sans-serif; letter-spacing:-.02em;
  white-space:nowrap; max-width:320px; overflow:hidden; text-overflow:ellipsis;
}


/* Сетка карточек */
.grid{
  margin-top:100px; display:grid; grid-template-columns: repeat(3, 1fr); column-gap:39px;
}
.card{
  position:relative; background:#FFF; border:2px solid #E6ECF6; border-radius:20px; height:210px; overflow:hidden;
}
.plus{
  position:absolute; left:30px; top:30px; width:28px; height:28px; border-radius:999px;
  display:grid; place-items:center; background:#B87EFF; color:#fff; font-weight:700; line-height:1;
  box-shadow:0 6px 14px rgba(184,126,255,.35); user-select:none;
}
.cardText{ position:absolute; left:30px; bottom:30px; max-width:58%; }
.cardTitle{
  margin:0; color:#1F2937; font:600 18px/1.3 Inter, system-ui, sans-serif; letter-spacing:-.03em; text-align:left;
  display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;
}
.cardImg{ position:absolute; right:0; bottom:0; display:block; object-fit:contain; pointer-events:none; }

/* ========= TABLET ========= */
@media (max-width:1200px){
  .grid{ grid-template-columns:1fr; row-gap:28px; }
  .leftBadges, .rightBadges{ display:none; }
  .card{ height:220px; }
  .cardText{ right:24px; max-width:68%; }

  /* по умолчанию (ПК/планшет) мобильные бейджи скрыты */
.mobBadges{ display:none; }

/* сам бейдж можно оставить оформленным – он будет виден,
   только когда контейнер .mobBadges включится на мобилке */
.mbadge{
  display:flex; align-items:center; gap:8px;
  height:36px; padding:0 12px; border-radius:12px;
  box-shadow:0 6px 18px rgba(16,24,40,.12);
  font:600 14px/1 Inter, system-ui, sans-serif; letter-spacing:-.02em;
  white-space:nowrap; max-width:320px; overflow:hidden; text-overflow:ellipsis;
}

}

/* ========= MOBILE (отдельные белые блоки, ширина 390) ========= */
@media (max-width:640px){
  /* фон страницы снова голубой; белый «общий» блок убираем */
  .wrap{
    background:#E9EFF7;
    border-radius:0;
    overflow:visible;
    margin-top:120px;
  }
  .inner{ width:390px; max-width:390px; margin:0 auto; padding:0px 0 20px; }

  /* хедер становится самостоятельной белой карточкой */
  .head{
    width:390px; margin:0 auto; padding:20px 16px 18px;
    background:#fff; border-radius:20px; box-shadow:0 8px 22px rgba(16,24,40,.06);
  }

  .titleDesk{ display:none; }
  .titleMob{ display:block; font-size:33px; line-height:1.02; letter-spacing:-.04em; color:#2C2C2C; margin:0; }
  .mline{ display:block; }
  .mEq{ position:relative; display:inline-block; isolation:isolate; }
  .mEq::before{
    content:""; position:absolute; left:-.38em; right:-.38em; top:50%;
    transform:translateY(-50%) rotate(1.2deg); height:1.05em; background:#FFD24A; border-radius:12px;
    box-shadow: inset 0 -2px 0 rgba(0,0,0,.06); z-index:-1;
  }

  .noteDesk{ display:none; }
  .noteMob{ display:block; font-size:16px; line-height:1.3; letter-spacing:-.03em; margin:14px 0 16px; }

  .cta{ width:340px; height:48px; margin:0 auto 10px; border-radius:12px; }
  .ctaText{ font:600 14px/1.3 Inter, system-ui, sans-serif; letter-spacing:-.03em; white-space:nowrap; }
  .cta i{ width:36px; height:36px; }

  /* контейнер для абсолютных табов */
  .mobBadges{
    display:block; position:relative; width:100%; height:310px;
    margin-top:6px;
  }
  /* иконка слева, текст справа, ровная строка */
  .mbadge{
    position:absolute;
    left:var(--x,0); top:var(--y,0);
    display:flex; align-items:center; gap:8px;
    height:36px; padding:0 12px; border-radius:12px;
    box-shadow:0 6px 18px rgba(16,24,40,.12);
    font:500 14px Inter, system-ui, sans-serif; letter-spacing:-.02em;
    white-space:nowrap; max-width:320px; overflow:hidden; text-overflow:ellipsis;
  }
  .micon{ width:18px; height:18px; flex:0 0 18px; }
  .m1{ background:#77D1FD; transform:rotate(5deg); }
  .m2{ background:#C8BDFF; transform:rotate(25deg); }
  .m3{ background:#FF9B76; transform:rotate(-6deg); }
  .m4{ background:#FFD551; transform:rotate(-8deg); }
  .m5{ background:#C8BDFF; transform:rotate(3deg); }
  .m6{ background:#77D1FD; transform:rotate(-11deg); }
  .m7{ background:#FF9B76; transform:rotate(0deg); }

  /* карточки — отдельные белые блоки */
  .grid{
    width:390px; margin:16px auto 0; grid-template-columns:1fr; row-gap:16px;
  }
  .card{ height:215px; border-radius:16px; }
  .plus{ left:20px; top:20px; width:26px; height:26px; }
  .cardText{ left:20px; right:20px; bottom:20px; max-width:70%; }
  .cardTitle{ font-size:16px; }
}
</style>
