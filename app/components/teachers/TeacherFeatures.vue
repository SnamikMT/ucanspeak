<!-- components/teachers/PlatformPlusIdeas.vue -->
<template>
  <section :class="$style.wrap">
    <div :class="$style.inner">
      <!-- ===== Header ===== -->
      <header :class="$style.head">
        <h2 :class="$style.title">
          <span :class="$style.tline">Наша платформа +</span>
          <span :class="$style.tline">Ваш опыт & идеи <span :class="$style.eq">= Успех</span></span>
        </h2>

        <p :class="$style.note">
        *Задания можно использовать для подготовки<br />
        к устной части ЕГЭ и ОГЭ по английскому языку
        </p>

        <!-- CTA -->
        <a href="#demo" :class="$style.cta">
        <span>Бесплатный демоурок без регистрации</span>
        <i aria-hidden="true">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
            <path d="M1 10L11 1M11 1H4.5M11 1V7.5"
                    stroke="#3232E9" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </i>
        </a>

        <!-- Бейджи слева (десктоп) -->
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

        <!-- Бейджи справа (десктоп) -->
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

        <!-- Мобильные бейджи -->
        <div :class="$style.mobBadges">
          <span :class="[$style.mbadge, $style.m1]"><img :src="icoDialog" :class="$style.micon" alt="" /><b>Диалог-расспрос*</b></span>
          <span :class="[$style.mbadge, $style.m2]"><img :src="icoAnswer" :class="$style.micon" alt="" /><b>Ответы на вопросы</b></span>
          <span :class="[$style.mbadge, $style.m3]"><img :src="icoCompare" :class="$style.micon" alt="" /><b>Сравнение двух фото*</b></span>
          <span :class="[$style.mbadge, $style.m4]"><img :src="icoQ" :class="$style.micon" alt="" /><b>Вопросы по ключевым словам*</b></span>
          <span :class="[$style.mbadge, $style.m5]"><img :src="icoMonolog" :class="$style.micon" alt="" /><b>Тематические монологи*</b></span>
          <span :class="[$style.mbadge, $style.m6]"><img :src="icoPhoto" :class="$style.micon" alt="" /><b>Описание фото</b></span>
          <span :class="[$style.mbadge, $style.m7]"><img :src="icoTalks" :class="$style.micon" alt="" /><b>Короткие беседы (Small Talks)</b></span>
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

<style module>
/* Белая «карточка»-секция */
.wrap{
  background:#FFF;
  border-radius:24px;
  overflow:hidden;
  margin-top:140px;
}
.inner{
  max-width:1390px;
  margin:0 auto;
  padding:158px 28px 28px;
}

/* Заголовок */
.head{ position:relative; text-align:center; }
.title{
  margin:0;
  font-family:Inter, system-ui, sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-.05em;
  color:#2C2C2C;
}
.tline{ display:block; }

/* Жёлтая плашка под “= Успех” (под текстом, но над фоном) */
.eq{ position:relative; display:inline-block; isolation:isolate; }
.eq::before{
  content:"";
  position:absolute;
  left:-.08em; right:-.38em;
  top:50%; transform:translateY(-50%) rotate(1.2deg);
  height:1.05em;
  background:#FFD24A;
  border-radius:12px;
  box-shadow: inset 0 -2px 0 rgba(0,0,0,.06);
  z-index:-1;
}

/* Сноска */
.note{
  margin:26px 0 26px;
  color:#2C2C2C;
  font:500 18px/1.3 Inter, system-ui, sans-serif;
  letter-spacing:-.03em;
  max-width: 680px;        /* ограничим ширину */
  margin-left:auto;
  margin-right:auto;
  text-align:center;

  display:-webkit-box;     /* делаем именно 2 строки */
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
}


/* CTA */
.cta{
  display:inline-flex; align-items:center; justify-content:space-between;
  gap:12px;
  height:50px; padding:0 16px 0 20px;
  background:#3232E9; color:#fff; text-decoration:none;
  border-radius:14px;
  font:600 16px/1.25 Inter, system-ui, sans-serif;
  box-shadow:0 10px 24px rgba(50,50,233,.28);
}
.cta i{
  width:40px; height:40px; border-radius:10px; background:#fff;
  display:grid; place-items:center;
}


/* Десктопные «наклейки» */
.leftBadges, .rightBadges{ position:absolute; top:0; width:360px; pointer-events:none; }
.leftBadges{ left:0; }
.rightBadges{ right:0; text-align:right; }

.badge{
  display:inline-flex; align-items:center; gap:8px;
  height:44px; padding:0 14px; border-radius:14px;
  margin:10px 12px; box-shadow:0 6px 18px rgba(16,24,40,.12);
}
.badgeIcon{ width:20px; height:20px; display:block; }
.badgeText{
  color:#1F2937; font:600 14px/1 Inter, system-ui, sans-serif; letter-spacing:-.02em;
}
.b1{ background:#C8BDFF; transform:rotate(7.3deg); }
.b2{ background:#FF9B76; }
.b3{ background:#FFD551; transform:rotate(-5.47deg); }
.b4{ background:#77D1FD; transform:rotate(-13.2deg); }
.b5{ background:#77D1FD; transform:rotate(-7.7deg); }
.b6{ background:#C8BDFF; transform:rotate(-.9deg); }
.b7{ background:#FF9B76; transform:rotate(4.5deg); }

/* Мобильные бейджи */
.mobBadges{ display:none; margin-top:18px; }
.mbadge{
  display:inline-flex; align-items:center; gap:8px;
  height:36px; padding:0 12px; border-radius:12px;
  box-shadow:0 6px 18px rgba(16,24,40,.12);
  font:600 14px/1 Inter, system-ui, sans-serif; letter-spacing:-.02em;
  margin:10px 0;
}
.micon{ width:18px; height:18px; }
.m1{ background:#77D1FD; transform:rotate(4deg);    display:block; width:max-content; margin:0 auto; }
.m2{ background:#C8BDFF; transform:rotate(-12deg);  display:block; width:max-content; margin-left:14px; }
.m3{ background:#FF9B76; transform:rotate(-6deg);   display:block; width:max-content; margin:0 18px 0 auto; }
.m4{ background:#FFD551; transform:rotate(-7deg);   display:block; width:max-content; margin-left:12px; }
.m5{ background:#C8BDFF; transform:rotate(7deg);    display:block; width:max-content; margin-left:6px; }
.m6{ background:#77D1FD; transform:rotate(-6deg);   display:block; width:max-content; margin:0 12px 0 auto; }
.m7{ background:#FF9B76; transform:rotate(3deg);    display:block; width:max-content; margin-left:22px; }

/* Сетка карточек */
.grid{
  margin-top:60px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap:39px;
}
.card{
  position:relative;
  background:#F7F9FE;
  border:2px solid #E6ECF6;
  border-radius:20px;
  height:210px;
  overflow:hidden;
}
.plus{
  position:absolute; left:30px; top:30px;
  width:28px; height:28px; border-radius:999px;
  display:grid; place-items:center;
  background:#B87EFF; color:#fff; font-weight:700; line-height:1;
  box-shadow:0 6px 14px rgba(184,126,255,.35);
  user-select:none;
}
.cardText{ position:absolute; left:30px; bottom:30px; max-width:58%; }
.cardTitle{
  margin:0;
  color:#1F2937;
  font:600 18px/1.3 Inter, system-ui, sans-serif;
  letter-spacing:-.03em;
  text-align:left;

  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
}

.cardImg{
  position:absolute; right:0; bottom:0; display:block; object-fit:contain; pointer-events:none;
}

/* Адаптив */
@media (max-width:1200px){
  .grid{ grid-template-columns:1fr; row-gap:28px; }
  .leftBadges, .rightBadges{ display:none; }
  .card{ height:220px; }
  .cardText{ right:24px; max-width:68%; }
}
@media (max-width:640px){
  .wrap{ margin-top:120px; }
  .inner{ padding:120px 15px 20px; }

  .title{ font-size:33px; line-height:1.02; letter-spacing:-.04em; }
  .note{ margin:18px 0; font-size:16px; }

  .cta{ height:48px; border-radius:12px; }
  .cta i{ width:36px; height:36px; border-radius:10px; }

  .mobBadges{ display:block; }

  .grid{
    margin-top:28px;
    grid-template-columns:1fr;
    row-gap:16px;
  }
  .card{ height:215px; border-radius:16px; }
  .plus{ left:20px; top:20px; width:26px; height:26px; }
  .cardText{ left:20px; right:20px; bottom:20px; max-width:70%; }
  .cardTitle{ font-size:16px; }
}
</style>
