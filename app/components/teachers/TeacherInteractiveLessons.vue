<template>
  <section :class="$style.wrap">
    <div :class="$style.inner">
      <!-- Заголовок -->
      <header :class="$style.head">
        <!-- Desktop title (как было) -->
        <h2 :class="[$style.title, $style.titleDesk]">
          <span class="line">
            UCANSPEAK&nbsp;–&nbsp;<span :class="$style.hl">легкий&nbsp;способ</span>
          </span><br />
          <span class="line">заговорить&nbsp;на&nbsp;английском</span>
        </h2>

        <!-- Mobile title (3 строки, подсвечено «на английском») -->
        <h2 :class="[$style.title, $style.titleMob]">
          <span class="line">UCANSPEAK&nbsp;–&nbsp;легкий</span><br />
          <span class="line">способ&nbsp;заговорить</span><br />
          <span class="line"><span :class="$style.hl">на&nbsp;английском</span></span>
        </h2>

        <p :class="$style.lead">
          Эффективные задания для аудирования и развития навыков устной речи
        </p>
      </header>

      <!-- Карточки -->
      <ul :class="$style.grid">
        <li v-for="(f, i) in feats" :key="i" :class="$style.card">
          <div :class="$style.shotWrap">
            <img :src="f.shot" :alt="f.alt" :class="$style.shot" />
          </div>

          <div :class="$style.text">
            <div :class="$style.metric">{{ f.metric }}</div>
            <div :class="$style.label">{{ f.label }}</div>
            <p :class="$style.desc">{{ f.desc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import shotVideo   from '@/assets/img/teachers/top-video-shot.png'
import shotDialogs from '@/assets/img/teachers/top-dialogs-shot.png'
import shotGrammar from '@/assets/img/teachers/top-grammar-shot.png'
import shotAudio   from '@/assets/img/teachers/top-audio-shot.png'

type Feat = { shot: string; alt: string; metric: string; label: string; desc: string }

const feats: Feat[] = [
  {
    shot: shotVideo,
    alt: 'Видеофрагменты',
    metric: '3 000+',
    label: 'Видеофрагментов',
    desc: 'Видеофрагменты для иллюстрации употребления конкретной грамматической конструкции в речи',
  },
  {
    shot: shotDialogs,
    alt: 'Диалоги',
    metric: '150+',
    label: 'Диалогов для путешествий',
    desc: 'Интерактивные диалоги для снятия языкового барьера',
  },
  {
    shot: shotGrammar,
    alt: 'Грамматика',
    metric: '150+',
    label: 'Уроков по грамматике',
    desc: 'Готовые уроки по отдельным темам для освоения грамматики',
  },
  {
    shot: shotAudio,
    alt: 'Аудиоуроки',
    metric: '750+',
    label: 'Аудиоуроков',
    desc: 'Аудиотренажер и тесты для повторения и закрепления изученного материала',
  },
]
</script>

<style module>
/* Фон секции */
.wrap{
  background:#E9EFF7;
  padding:140px 0 0;
}

/* Контейнер */
.inner{
  max-width:1390px;
  margin:0 auto;
  box-sizing:border-box;
  padding:0;                 /* на ПК без боковых паддингов */
}

/* Заголовок */
.head{ text-align:center; margin:0 0 24px; }
.title{
  position:relative;
  margin:0 0 30px;
  font-family: Inter, system-ui, sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-.05em;
  color:#2C2C2C;
}
.line{ display:inline-block; }

.hl{
  position:relative;
  display:inline;
  isolation:isolate;
  z-index:0;
}
.hl::before{
  content:"";
  position:absolute;
  inset:-.38em -.38em;
  top:50%;
  transform:translateY(-50%) rotate(1.2deg);
  background:#FFD249;
  border-radius:10px;
  box-shadow: inset 0 -2px 0 rgba(0,0,0,.06);
  z-index:-1;
}

.lead{
  margin:0;
  font:500 18px/1.3 Inter, system-ui, sans-serif;
  letter-spacing:-.03em;
  color:#2C2C2C;
}

/* ===== Карточки ===== */

/* По умолчанию (ПК ≥ 1390): сетка жёстко на 1390px */
.grid{
  list-style:none;
  margin:50px auto 0;
  padding:0;

  width:1390px;                         /* ровно 1390 */
  display:grid;
  gap:20px;

  /* 4 колонки, ширина карточек вычислена так, чтобы с 3 промежутками по 20 вышло ровно 1390 */
  grid-template-columns: repeat(4, calc((1390px - 3 * 20px) / 4));
}
.card{
  background:#FFFFFF;
  border-radius:20px;
  box-shadow:0 10px 26px rgba(16,24,40,.08);
  height:420px;
  position:relative;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  padding:0 24px 24px;
}

/* скрин сверху */
.shotWrap{
  position:relative;
  height:185px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:14px;
}
.shot{
  max-width:100%;
  height:auto;
}

/* текст */
.text{ margin-top:40px; }
.metric{
  font-family: Inter, system-ui, sans-serif;
  font-weight:700;
  font-size:36px;
  line-height:1.1;
  letter-spacing:-.03em;
  color:#2C2C2C;
  margin:0 0 6px;
}
.label{
  font:600 20px/1.2 Inter, system-ui, sans-serif;
  letter-spacing:-.03em;
  color:#2C2C2C;
  margin:0 0 12px;
}
.desc{
  margin:0;
  font:500 14px/1.35 Inter, system-ui, sans-serif;
  letter-spacing:-.02em;
  color:#4B5563;
}

/* по умолчанию показываем десктопную версию заголовка */
.titleDesk{ display:block; }
.titleMob{ display:none; }
/* ===== Адаптив ===== */

/* Чуть уже десктопа — возвращаем мягкие поля и делаем флюидную сетку */
@media (max-width: 1410px){
  .inner{ padding:0 15px; }
  .grid{
    width:100%;
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Планшеты: 2 колонки */
@media (max-width: 1200px){
  .title{ font-size:48px; }
  .grid{ grid-template-columns: repeat(2, 1fr); }
}

/* Мобилка: одна колонка, ширина блока 390 */
@media (max-width: 640px){
  .wrap{ padding:120px 0 0; }
  .title{ font-size:33px; letter-spacing:-.04em; }
  .lead{ font-size:16px; }

  .titleDesk{ display:none; }
  .titleMob{ display:block; }
  .titleMob{
    font-size:33px;          /* у вас уже стоит, дублирую для явности */
    line-height:1.02;
    letter-spacing:-.04em;
  }
  /* чтобы плашка красиво легла на короткую строку */
  .hl::before{
    inset: -0.001em -.32em;
    border-radius: 8px;
    transform: translateY(0%) rotate(1.2deg);
  }

  .inner{ max-width:390px; padding:0; }   /* фиксируем 390 */

  .grid{
    width:100%;
    grid-template-columns:1fr;
    gap:16px;
  }
  .card{
    height:auto;
    border-radius:16px;
    padding:0 18px 20px;
  }
  .shotWrap{ height:170px; }
  .shot{ max-width:92%; }
  .metric{ font-size:30px; }
  .label{ font-size:18px; }
  .desc{ font-size:14px; }
}
</style>
