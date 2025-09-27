<template>
  <section :class="$style.wrap">
    <div :class="$style.inner">
      <!-- ===== Title ===== -->
      <header :class="$style.head">
        <h2 :class="$style.title">
          <span :class="$style.tline">Ещё больше интерактивных</span>
          заданий <span :class="$style.hl">и полезных фишек</span>
        </h2>

        <p :class="$style.note">
          *Задания можно использовать для подготовки
          <br />
          к устной части ЕГЭ и ОГЭ по английскому языку
        </p>

        <!-- floating badges: left (1–4) — только десктоп -->
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

        <!-- floating badges: right (5–7) — только десктоп -->
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

        <!-- Мобильные табы (как на макете) -->
        <div :class="$style.mobBadges">
          <span :class="[$style.mbadge, $style.m1]">
            <img :src="icoDialog" :class="$style.micon" alt="" />
            <b>Диалог-расспрос*</b>
          </span>

          <span :class="[$style.mbadge, $style.m2]">
            <img :src="icoAnswer" :class="$style.micon" alt="" />
            <b>Ответы на вопросы</b>
          </span>

          <span :class="[$style.mbadge, $style.m3]">
            <img :src="icoCompare" :class="$style.micon" alt="" />
            <b>Сравнение двух фото*</b>
          </span>

          <span :class="[$style.mbadge, $style.m4]">
            <img :src="icoQ" :class="$style.micon" alt="" />
            <b>Вопросы по ключевым словам*</b>
          </span>

          <span :class="[$style.mbadge, $style.m5]">
            <img :src="icoMonolog" :class="$style.micon" alt="" />
            <b>Тематические монологи*</b>
          </span>

          <span :class="[$style.mbadge, $style.m6]">
            <img :src="icoPhoto" :class="$style.micon" alt="" />
            <b>Описание фото</b>
          </span>

          <span :class="[$style.mbadge, $style.m7]">
            <img :src="icoTalks" :class="$style.micon" alt="" />
            <b>Короткие беседы (Small Talks)</b>
          </span>
        </div>
      </header>

      <!-- ===== Cards row ===== -->
      <div :class="$style.grid">
        <div :class="$style.card">
          <span :class="$style.plus">＋</span>
          <div :class="$style.cardText">
            <h3 :class="$style.cardTitle">
              Аудио словарь с функцией
              <br />переключения языков
            </h3>
          </div>
          <img :src="imgPhone" :class="$style.cardImg" alt="">
        </div>

        <div :class="$style.card">
          <span :class="$style.plus">＋</span>
          <div :class="$style.cardText">
            <h3 :class="$style.cardTitle">
              Встроенный
              <br />онлайн переводчик
            </h3>
          </div>
          <img :src="imgTranslate" :class="$style.cardImg" alt="" style="right:-60px;">
        </div>

        <div :class="$style.card">
          <span :class="$style.plus">＋</span>
          <div :class="$style.cardText">
            <h3 :class="$style.cardTitle">
              Грамматические
              <br />таблицы по английскому
            </h3>
          </div>
          <img :src="imgTables" :class="$style.cardImg" alt="" style="right:-40px;">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import imgPhone     from '@/assets/img/extras-phone.png'
import imgTranslate from '@/assets/img/extras-translate.png'
import imgTables    from '@/assets/img/extras-tables.png'

/* SVG-иконки для верхних плашек */
import icoMonolog from '@/assets/img/extras-ico-monolog.svg'  // 1
import icoCompare from '@/assets/img/extras-ico-compare.svg'  // 2
import icoQ       from '@/assets/img/extras-ico-q.svg'        // 3
import icoDialog  from '@/assets/img/extras-ico-dialog.svg'   // 4
import icoPhoto   from '@/assets/img/extras-ico-photo.svg'    // 5
import icoAnswer  from '@/assets/img/extras-ico-answer.svg'   // 6
import icoTalks   from '@/assets/img/extras-ico-talks.svg'    // 7
</script>

<style module>
/* ===== Белый фон блока ===== */
.wrap{
  background:#FFFFFF;
  border-radius:24px;
  overflow:hidden;
  margin-top:140px;
}

/* ВНУТРЕННИЙ контейнер — ПК макс 1390, по центру */
.inner{
  padding:158px 28px 28px;
  max-width:1390px;
  margin:0 auto;
}

/* ===== Заголовок и сноска ===== */
.head{ position:relative; text-align:center; }

.title{
  position: relative;
  z-index: 0;
  margin:0;
  font-family: Inter, system-ui, sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-0.05em;
  color:#2C2C2C;
  text-align:center;
}

.hl{
  position:relative;
  z-index:0;
  display:inline-block;
}
.hl::before{
  content:"";
  position:absolute;
  left:50%; top:50%;
  width:497px; height:72px;   /* desktop */
  background:#FFD24A;
  border-radius:12px;
  transform: translate(-50%,-50%) rotate(1.2deg);
  z-index:-1;
  box-shadow: inset 0 -2px 0 rgba(0,0,0,.06);
}
.tline{ display:block; }

.note{
  margin-top:50px;
  color:#2C2C2C;
  font-family: Inter, system-ui, sans-serif;
  font-weight:500;
  font-size:18px;
  line-height:1.3;
  letter-spacing:-0.03em;
  text-align:center;
}

/* ===== Десктопные «летающие» бейджи ===== */
.leftBadges, .rightBadges{
  position:absolute; top:0; width:360px; pointer-events:none;
}
.leftBadges{ left:0; }
.rightBadges{ right:0; text-align:right; }

.badge{
  display:inline-flex; align-items:center; gap:8px;
  height:44px; padding:0 14px; border-radius:14px;
  margin:10px 12px; box-shadow:0 6px 18px rgba(16,24,40,.12);
}
.badgeIcon{ width:20px; height:20px; display:block; }
.badgeText{
  color:#1f2937; font-family: Inter, system-ui, sans-serif;
  font-weight:600; font-size:14px; line-height:1; letter-spacing:-.02em;
}
.b1{ background:#C8BDFF; transform:rotate(7.3deg); }
.b2{ background:#FF9B76; transform:none; }
.b3{ background:#FFD551; transform:rotate(-5.47deg); }
.b4{ background:#77D1FD; transform:rotate(-13.2deg); }
.b5{ background:#77D1FD; transform:rotate(-7.7deg); }
.b6{ background:#C8BDFF; transform:rotate(-0.9deg); }
.b7{ background:#FF9B76; transform:rotate(4.5deg); }

/* ===== Сетка карточек ===== */
.grid{
  margin-top:100px;
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

.cardText{ position:absolute; left:30px; right:200px; bottom:30px; max-width:58%; }
.cardTitle{
  margin:0; color:#1F2937; font-family: Inter, system-ui, sans-serif;
  font-weight:600; font-size:18px; line-height:1.3; letter-spacing:-0.03em; text-align:left;
}
.cardImg{
  position:absolute; right:12px; bottom:0; display:block; width:auto; height:auto;
  object-fit:contain; pointer-events:none;
}

/* ===== МОБИЛЬНЫЕ бэйджи ===== */
.mobBadges{ display:none; margin-top:24px; }
.mbadge{
  display:inline-flex; align-items:center; gap:8px;
  height:36px; padding:0 12px; border-radius:12px;
  box-shadow:0 6px 18px rgba(16,24,40,.12);
  font-family:Inter, system-ui, sans-serif; font-weight:600; font-size:14px; letter-spacing:-.02em;
  margin:10px 0;
}
.micon{ width:18px; height:18px; }

/* индивидуальные цвета/наклоны/сдвиги как на макете */
.m1{ background:#77D1FD; transform:rotate(4deg);    display:block; width:max-content; margin-left:auto; margin-right:auto; }
.m2{ background:#C8BDFF; transform:rotate(-12deg);  display:block; width:max-content; margin-left:14px; }
.m3{ background:#FF9B76; transform:rotate(-6deg);   display:block; width:max-content; margin-left:auto; margin-right:18px; }
.m4{ background:#FFD551; transform:rotate(-7deg);   display:block; width:max-content; margin-left:12px; }
.m5{ background:#C8BDFF; transform:rotate(7deg);    display:block; width:max-content; margin-left:6px; }
.m6{ background:#77D1FD; transform:rotate(-6deg);   display:block; width:max-content; margin-left:auto; margin-right:12px; }
.m7{ background:#FF9B76; transform:rotate(3deg);    display:block; width:max-content; margin-left:22px; }

/* ===== Адаптив ===== */
@media (max-width: 1200px){
  .leftBadges, .rightBadges{ display:none; }
  .grid{ grid-template-columns:1fr; row-gap:28px; }
  .card{ height:220px; }
  .cardText{ right:24px; max-width:68%; }
}

/* телефоны ~390, секции как на макете */
@media (max-width: 640px){
  .wrap{ margin-top:120px; }
  .inner{ padding:120px 15px 20px; }

  .title{
    font-size:33px; line-height:1.02; letter-spacing:-0.04em;
  }
  .note{ margin-top:20px; font-size:16px; line-height:1.3; }

  /* уменьшенная жёлтая подложка */
  .hl::before{
    width: calc(100% - 12px);
    height: 48px;
    transform: translate(-50%,-50%) rotate(1.2deg);
  }

  /* мобильные табы показать */
  .mobBadges{ display:block; }

  /* сетка карточек — один столбец */
  .grid{
    margin-top:36px;
    grid-template-columns:1fr;
    column-gap:0; row-gap:16px;
  }
  .card{ height:215px; border-radius:16px; }
  .plus{ left:20px; top:20px; width:26px; height:26px; }
  .cardText{ left:20px; right:20px; bottom:20px; max-width:70%; }
  .cardTitle{ font-size:16px; }
  .cardImg{ right:8px; bottom:0; max-height:78%; max-width:52%; }
}
</style>
