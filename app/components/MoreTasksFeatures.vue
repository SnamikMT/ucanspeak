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

        <!-- floating badges: left -->
        <div :class="$style.leftBadges">
          <span :class="$style.badge" :style="{background:'#CFE0FF', transform:'rotate(-8deg)'}">
            <i :class="$style.badgeIcon">👤</i><span :class="$style.badgeText">Тематические монологи*</span>
          </span>
          <span :class="$style.badge" :style="{background:'#FFB38A', transform:'rotate(-4deg)'}">
            <i :class="$style.badgeIcon">🔗</i><span :class="$style.badgeText">Сравнение двух фото*</span>
          </span>
          <span :class="$style.badge" :style="{ background:'#FFD96A', transform:'rotate(-2deg)' }">
            <i :class="$style.badgeIcon">❓</i><span :class="$style.badgeText">Вопросы по ключевым словам*</span>
          </span>
          <span :class="$style.badge" :style="{background:'#88C5FF', transform:'rotate(-8deg)'}">
            <i :class="$style.badgeIcon">🗣️</i><span :class="$style.badgeText">Диалог-расспрос*</span>
          </span>
        </div>

        <!-- floating badges: right -->
        <div :class="$style.rightBadges">
          <span :class="$style.badge" :style="{background:'#8FD6FF', transform:'rotate(-8deg)'}">
            <i :class="$style.badgeIcon">🖼️</i><span :class="$style.badgeText">Описание фото</span>
          </span>
          <span :class="$style.badge" :style="{background:'#BFAAFF', transform:'rotate(-4deg)'}">
            <i :class="$style.badgeIcon">📝</i><span :class="$style.badgeText">Ответы на вопросы</span>
          </span>
          <span :class="$style.badge" :style="{background:'#FFA48D', transform:'rotate(-6deg)'}">
            <i :class="$style.badgeIcon">💬</i><span :class="$style.badgeText">Короткие беседы (Small Talks)</span>
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
</script>

<style module>
/* ===== Белый фон блока ===== */
.wrap{
  background:#FFFFFF;
  min-height:666px;           /* фикс нижнего обрезания не будет */
  border-radius:24px;
  overflow:hidden;
}

/* внутренние поля: сверху 158, слева/справа 28, снизу 28 */
.inner{ padding:158px 28px 28px; }

/* ===== Заголовок и сноска ===== */
.head{ position:relative; text-align:center; }

.title{
  margin:0;
  font-family: Inter, system-ui, sans-serif;
  font-weight:500;            /* Medium */
  font-size:55px;
  line-height:.95;            /* 95% */
  letter-spacing:-0.05em;     /* -5% */
  color:#2C2C2C;
  text-align:center;
}
.tline{ display:block; }

/* Плашка ТОЛЬКО под «и полезных фишек», не влияя на line-height */
.hl{
  position:relative;
  display:inline;             /* не создаём отдельный line box */
  z-index:0;
}
.hl::before{
  content:"";
  position:absolute;
  left:-.14em; right:-.14em;
  top:50%;
  height:1.05em;
  background:#FFD24A;
  border-radius:12px;
  transform: translateY(-50%) rotate(1.2deg);
  z-index:-1;                 /* под текстом */
  box-shadow: inset 0 -2px 0 rgba(0,0,0,.06);
}

/* Текст под заголовком: отступ 50 */
.note{
  margin-top:50px;
  color:#475569;
  font-family: Inter, system-ui, sans-serif;
  font-weight:500;
  font-size:14px;
  line-height:1.35;
  letter-spacing:-0.01em;
}

/* ===== Летающие бейджи (можно выключить, если не влезают) ===== */
.leftBadges, .rightBadges{
  position:absolute; top:0; width:360px; pointer-events:none;
}
.leftBadges{ left:0; }
.rightBadges{ right:0; text-align:right; }
.badge{
  display:inline-flex; align-items:center; gap:8px;
  padding:10px 14px; border-radius:14px;
  margin:10px 12px;
  box-shadow:0 6px 18px rgba(16,24,40,.12);
}
.badgeIcon{ font-style:normal; font-size:18px; }
.badgeText{
  color:#1f2937;
  font-family: Inter, system-ui, sans-serif;
  font-weight:600; font-size:14px; line-height:1.2;
  letter-spacing:-.02em;
}

/* ===== Сетка карточек ===== */
/* От текста до карточек — 100 */
.grid{
  margin-top:100px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap:39px;            /* между карточками 39 */
}

/* Карточка: от боков блок держит 28px через .inner */
.card{
  position:relative;
  background:#FFFFFF;
  border:2px solid #E6ECF6;
  border-radius:20px;
  height:210px;
  padding:20px 22px;
  overflow:hidden;
  display:flex; align-items:flex-end;
}
.plus{
  position:absolute; left:16px; top:16px;
  width:28px; height:28px; border-radius:999px;
  display:grid; place-items:center;
  background:#B87EFF; color:#fff; font-weight:700; line-height:1;
  box-shadow:0 6px 14px rgba(184,126,255,.35);
  user-select:none;
}
.cardText{ max-width:58%; padding:0 0 8px 8px; }
.cardTitle{
  margin:0;
  color:#1F2937;
  font-family: Inter, system-ui, sans-serif;
  font-weight:600; font-size:18px; line-height:1.3;
  letter-spacing:-0.03em;
  text-align:left;
}
.cardImg{
  position:absolute; right:12px; bottom:0;
  display:block; width:auto; height:auto;
  object-fit:contain; pointer-events:none;
}

/* ===== Адаптив ===== */
@media (max-width: 1200px){
  .wrap{ min-height:auto; }
  .leftBadges, .rightBadges{ display:none; }
  .grid{ grid-template-columns:1fr; row-gap:28px; }
  .card{ height:220px; }
  .cardText{ max-width:68%; }
}
</style>
