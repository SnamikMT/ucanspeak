<template>
  <section :class="$style.wrap">
    <div class="container">
      <!-- Заголовок -->
      <header :class="$style.head">
        <h2 :class="$style.title">
          <span :class="$style.hl">Интерактивные уроки</span><br />
          Ucanspeak
        </h2>
        <p :class="$style.lead">
          Видео, диалоги, уроки по грамматике создают<br />
          эффект погружения в языковую среду
        </p>
      </header>

      <!-- TOP: три карточки -->
      <div :class="$style.topGrid">
        <!-- 1 -->
        <div :class="$style.topTile" style="--bg:#41BCF8">
          <div :class="$style.topTileBody">
            <img :src="bgVideo"   :class="$style.topTileBG"   alt="" />
            <img :src="shotVideo" :class="$style.topTileShot" alt="Видеофрагменты" />
          </div>
          <footer :class="$style.topTileBar">
            <div :class="$style.metric">3 000+</div>
            <div :class="$style.label">Видеофрагментов</div>
          </footer>
        </div>

        <!-- 2 -->
        <div :class="$style.topTile" style="--bg:#FFDE76">
          <div :class="$style.topTileBody">
            <img :src="bgDialogs"   :class="$style.topTileBG"   alt="" />
            <img :src="shotDialogs" :class="$style.topTileShot" alt="Диалоги" />
          </div>
          <footer :class="$style.topTileBar">
            <div :class="$style.metric">150+</div>
            <div :class="$style.label">Диалогов для путешествий</div>
          </footer>
        </div>

        <!-- 3 -->
        <div :class="$style.topTile" style="--bg:#C8BDFF">
          <div :class="$style.topTileBody">
            <img :src="bgGrammar"   :class="$style.topTileBG"   alt="" />
            <img :src="shotGrammar" :class="$style.topTileShot" alt="Грамматика" />
          </div>
          <footer :class="$style.topTileBar">
            <div :class="$style.metric">150+</div>
            <div :class="$style.label">Уроков по грамматике</div>
          </footer>
        </div>
      </div>

      <!-- BOTTOM: четыре карточки -->
      <div :class="$style.bottomGrid">
        <div :class="$style.bottomCard">
          <span :class="$style.num"><b>01</b></span>
          <p :class="$style.bottomText">
            Вы осваиваете грамматику, слушая и повторяя английские фразы
          </p>
          <img :src="b1" :class="$style.bottomArt" alt="" />
        </div>

        <div :class="$style.bottomCard">
          <span :class="$style.num"><b>02</b></span>
          <p :class="$style.bottomText">
            Вы тренируете восприятие на слух, прослушивая каждую фразу столько раз, сколько нужно
          </p>
          <img :src="b2" :class="$style.bottomArt" alt="" />
        </div>

        <div :class="$style.bottomCard">
          <span :class="$style.num"><b>03</b></span>
          <p :class="$style.bottomText">
            Вы улучшаете произношение, повторяя фразы, копируя произношение и интонации
          </p>
          <img :src="b3" :class="$style.bottomArt" alt="" />
        </div>

        <div :class="$style.bottomCard">
          <span :class="$style.num"><b>04</b></span>
          <p :class="$style.bottomText">
            Вы расширяете словарный запас, запоминая разговорные фразы целиком в реальном контексте
          </p>
          <img :src="b4" :class="$style.bottomArt" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* верх: волны + скрины */
import bgVideo   from '@/assets/img/interactive/top-video-bg.svg'
import bgDialogs from '@/assets/img/interactive/top-dialogs-bg.svg'
import bgGrammar from '@/assets/img/interactive/top-grammar-bg.svg'

import shotVideo   from '@/assets/img/interactive/top-video-shot.png'
import shotDialogs from '@/assets/img/interactive/top-dialogs-shot.png'
import shotGrammar from '@/assets/img/interactive/top-grammar-shot.png'

/* низ: иллюстрации */
import b1 from '@/assets/img/interactive/bottom-grammar.png'
import b2 from '@/assets/img/interactive/bottom-headphones.png'
import b3 from '@/assets/img/interactive/bottom-parrot.png'
import b4 from '@/assets/img/interactive/bottom-book.png'
</script>

<style module>
/* секция */
.wrap{ padding:140px 0 0; }

.head{ text-align:center; margin:0 0 50px; } /* 50 до карточек */
.title{
  margin:0;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-0.05em; /* ← латинское em */
  color:#2C2C2C;
}
.hl{ display:inline-block; background:#FFD249; padding:.06em .28em; border-radius:10px; transform:rotate(1.2deg); }

/* описание */
.lead{
  margin-top:30px;
  font-family:Inter, sans-serif;
  font-weight:500;
  font-size:18px;
  line-height:1.3;
  letter-spacing:-0.03em;
  color:#2C2C2C;
}

/* ===== верхние карточки ===== */
.topGrid{
  display:grid; grid-template-columns: repeat(3, 450px);
  gap:20px; justify-content:space-between;
}
.topTile{
  width:450px; height:408px;
  position:relative; border-radius:20px; overflow:hidden;
  background: var(--bg);
}
.topTileBody{ position:relative; height:100%; padding-bottom:105px; }
.topTileBG{
  position:absolute; left:0; right:0; bottom:0;
  width:100%; height:auto; display:block; object-fit:cover; pointer-events:none;
}
.topTileShot{
  position:absolute; left:50%; top:2px; transform:translateX(-50%);
  display:block; width:auto; height:auto; max-width:92%; object-fit:contain;
  filter: drop-shadow(0 8px 22px rgba(16,24,40,.18));
}
.topTileBar{
  position:absolute; left:0; right:0; bottom:0;
  height:115px; background: var(--bg);
  border-radius: 20px;
  padding:30px; display:flex; flex-direction:column; justify-content:center;
}
.metric{
  font-family: Inter, sans-serif; font-weight:600; font-size:36px;
  line-height:1.3; letter-spacing:-0.03em; margin:0;
}
.label{
  font-family: Inter, sans-serif; font-weight:500; font-size:20px;
  line-height:1.3; letter-spacing:-0.03em;
}
/* белый текст только у первой карточки */
.topGrid > :nth-child(1) .metric,
.topGrid > :nth-child(1) .label{ color:#fff; }
/* остальные — тёмный */
.topGrid > :nth-child(2) .metric,
.topGrid > :nth-child(2) .label,
.topGrid > :nth-child(3) .metric,
.topGrid > :nth-child(3) .label{ color:#2C2C2C; }

/* ===== нижние карточки ===== */
.bottomGrid{
  margin-top:24px;
  display:grid; grid-template-columns: repeat(2, 685px);
  gap:24px; justify-content:space-between;
}
.bottomCard{
  position:relative; width:685px; height:250px; background:#fff;
  border-radius:20px; box-shadow:0 10px 26px rgba(16,24,40,.06);
  overflow:hidden;
}
.num{
  position:absolute; top:16px; left:16px;
  width:32px; height:32px; border-radius:50%; display:grid; place-items:center;
  background:#B87EFF; color:#fff;
}
.num b{
  font-family:Inter, sans-serif; font-weight:600; font-size:14px;
  line-height:1.3; letter-spacing:-0.03em; text-align:center;
}
.bottomText{
  position:absolute; left:30px; bottom:30px;
  margin:0;
  font-family:Inter, sans-serif; font-weight:500; font-size:20px;
  line-height:1.2; letter-spacing:-0.03em; color:#0F172A; text-align:left;
  max-width:50%;
}
.bottomArt{
  position:absolute; right:50px; bottom:-6px;
  width:auto; height:auto; object-fit:contain; pointer-events:none;
  max-width:280px; max-height:230px;
}

/* ====== Адаптив ====== */

/* Планшеты — стекаем блоки в одну колонку */
@media (max-width: 1280px){
  .topGrid{ grid-template-columns:1fr; }
  .bottomGrid{ grid-template-columns:1fr; }
  .topTile, .bottomCard{ width:100%; }
}

/* Мобилка: ТОЛЬКО нижние карточки — без изменений контейнера/секций */
@media (max-width: 640px){
  .bottomGrid{ gap:16px; }
  .bottomCard{
    height:358px;
    border-radius:16px;
    padding-top:25px;
    padding-left:25px;
    padding-right:25px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
  }

  .wrap{ padding:120px 15px 0; }

  .title {
    font-size: 33px;
    letter-spacing:-0.04em; /* ← тоже явно латинское em */
  }

  .lead {
    font-size: 16px;
  }

  .num{
    position:static;
    margin:0;
    width:32px; height:32px;           /* остаётся кругом */
    border-radius:50%;
  }
  .bottomText{
    position:static;
    margin-top:30px;                   /* между цифрой и текстом 30 */
    max-width:100%;
    font-size:16px;
    line-height:1.25;
    text-align:left;
  }
  .bottomArt{
    position:absolute;
    left:50%; bottom:0;                /* упирается в низ, по центру */
    right:auto;
    transform:translateX(-50%);
    max-width:220px; max-height:190px;
    width:auto; height:auto;
  }
}
</style>
