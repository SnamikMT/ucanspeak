<template>
  <section :class="$style.wrap" id="interactive">
    <div :class="$style.container">
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
            <!-- мобильные var-позиции -->
            <img
              :src="shotVideo"
              :class="$style.topTileShot"
              alt="Видеофрагменты"
              :style="{
                '--m-shot-left':'50%',
                '--m-shot-top':'6px',
                '--m-shot-scale':'1'
              }"
            />
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
            <img
              :src="shotDialogs"
              :class="$style.topTileShot"
              alt="Диалоги"
              :style="{
                '--m-shot-left':'52%',
                '--m-shot-top':'8px',
                '--m-shot-scale':'1'
              }"
            />
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
            <img
              :src="shotGrammar"
              :class="$style.topTileShot"
              alt="Грамматика"
              :style="{
                '--m-shot-left':'50%',
                '--m-shot-top':'10px',
                '--m-shot-scale':'1'
              }"
            />
          </div>
          <footer :class="$style.topTileBar">
            <div :class="$style.metric">150+</div>
            <div :class="$style.label">Уроков по грамматике</div>
          </footer>
        </div>
      </div>

      <!-- BOTTOM: четыре карточки -->
      <div :class="$style.bottomGrid">
        <!-- 01 -->
        <div :class="$style.bottomCard">
          <span :class="$style.num"><b>01</b></span>
          <p :class="$style.bottomText">
            Вы осваиваете грамматику, слушая и повторяя английские фразы
          </p>
          <img
            :src="b1"
            :class="[$style.bottomArt, $style.art1]"
            alt=""
            :style="{
              '--m-left':'50%',
              '--m-bottom':'0px',
              '--m-translateX':'-50%',
              '--m-scale':'1'
            }"
          />
        </div>

        <!-- 02 -->
        <div :class="$style.bottomCard">
          <span :class="$style.num"><b>02</b></span>
          <p :class="$style.bottomText">
            Вы тренируете восприятие на слух, прослушивая каждую фразу столько раз, сколько нужно
          </p>
          <img
            :src="b2"
            :class="[$style.bottomArt, $style.art2]"
            alt=""
            :style="{
              '--m-left':'42%',
              '--m-bottom':'0px',
              '--m-translateX':'-50%',
              '--m-scale':'1'
            }"
          />
        </div>

        <!-- 03: ПОПУГАЙ — ВИДЕО -->
        <div :class="$style.bottomCard">
          <span :class="$style.num"><b>03</b></span>
          <p :class="$style.bottomText">
            Вы улучшаете произношение, повторяя фразы, копируя произношение и интонации
          </p>
          <video
            :class="[$style.bottomArt, $style.art3]"
            :poster="parrotPoster"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
            preload="metadata"
            controls="false"
            controlslist="nodownload noplaybackrate noremoteplayback nofullscreen"
            disablepictureinpicture
            disableremoteplayback
            :oncontextmenu="() => false"
            :style="{
              '--m-left':'50%',
              '--m-bottom':'0px',
              '--m-translateX':'-50%',
              '--m-scale':'1'
            }"
          >
            <!-- если есть webm с альфой — оставьте; иначе можно удалить -->
            <source v-if="parrotWebm" :src="parrotWebm" type="video/webm" />
            <source :src="parrotMp4"  type="video/mp4" />
          </video>
        </div>

        <!-- 04 -->
        <div :class="$style.bottomCard">
          <span :class="$style.num"><b>04</b></span>
          <p :class="$style.bottomText">
            Вы расширяете словарный запас, запоминая разговорные фразы целиком в реальном контексте
          </p>
          <img
            :src="b4"
            :class="[$style.bottomArt, $style.art4]"
            alt=""
            :style="{
              '--m-left':'50%',
              '--m-bottom':'-25px',
              '--m-translateX':'-50%',
              '--m-scale':'1'
            }"
          />
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

/* попугай — видео */
import parrotPoster from '@/assets/img/interactive/bottom-parrot.png'
/* Если у вас нет webm — оставьте только mp4 и удалите импорт/тег webm */
import parrotWebm   from '@/assets/video/parrot.webm'   /* при наличии */
import parrotMp4    from '@/assets/video/parrot.mp4'

import b4 from '@/assets/img/interactive/bottom-book.png'
</script>

<style module>
/* секция */
.wrap{ padding:140px 0 0; }

.head{ text-align:center; margin:0 0 50px; }
.title{
  margin:0;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-0.05em;
  color:#2C2C2C;
}

/* плашка только фоном */
.hl{
  position:relative;
  display:inline-block;
  padding:.06em .28em;
  border-radius:10px;
  z-index:0;
}
.hl::before{
  content:"";
  position:absolute;
  inset:0;
  background:#FFD249;
  border-radius:10px;
  transform:rotate(1.51deg);
  z-index:-1;
}

/* описание */
.lead{
  margin-top:30px;
  font-family:Inter, sans-serif; font-weight:500;
  font-size:18px; line-height:1.3; letter-spacing:-0.03em; color:#2C2C2C;
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
  display:block; width:auto; height:auto; max-width:100%; object-fit:contain;
  filter: drop-shadow(0 8px 22px rgba(16,24,40,.18));
}
.topTileBar{
  position:absolute; left:0; right:0; bottom:0;
  height:115px; background: var(--bg);
  border-radius: 20px;
  padding:30px; display:flex; flex-direction:column; justify-content:center;
}
.metric{ font:600 36px/1.3 Inter, sans-serif; letter-spacing:-.03em; margin:0; }
.label{  font:500 20px/1.3 Inter, sans-serif; letter-spacing:-.03em; }

/* первый тайл — светлый текст */
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
  position:absolute; top:30px; left:30px;
  width:32px; height:32px; border-radius:50%; display:grid; place-items:center;
  background:#B87EFF; color:#fff;
}
.num b{ font:600 14px/1.3 Inter, sans-serif; letter-spacing:-.03em; text-align:center; }
.bottomText{
  position:absolute; left:30px; bottom:30px; margin:0;
  font:500 20px/1.2 Inter, sans-serif; letter-spacing:-.03em; color:#0F172A; text-align:left;
  max-width:50%;
}

/* Общие правила для артов (и IMG, и VIDEO) — ВСЕГДА видимы по умолчанию */
.bottomArt{
  position:absolute;
  object-fit:contain;
  pointer-events:none;
  width:auto; height:auto;
  max-width:280px; max-height:230px;
}

/* Desktop-позиции (как было) */
.art1{ right:50px;  bottom:0;    }
.art2{ right:5px;   bottom:0;    }
.art3{ right:90px;  bottom:0;    }  /* видео наследует позицию */
.art4{ right:-20px; bottom:-20px; }

/* убрать контролы webkit у видео */
.bottomArt::-webkit-media-controls,
.bottomArt::-webkit-media-controls-enclosure{ display:none !important; }

/* ====== Адаптив ====== */
@media (max-width: 1280px){
  .topGrid{ grid-template-columns:1fr; }
  .bottomGrid{ grid-template-columns:1fr; }
  .topTile, .bottomCard{ width:100%; }
}

/* ===== ПРОМЕЖУТОЧНЫЕ 641–1280px: аккуратная «резина» ===== */
@media (min-width:641px) and (max-width:1280px){

  .container{ width:min(96vw, 1200px); margin:0 auto; }

  /* Заголовок и подзаголовок чуть компактнее */
  .title{
    font-size: clamp(36px, 4.2vw, 48px);
    line-height: .98;
  }
  .lead{
    font-size: clamp(16px, 1.8vw, 18px);
    margin-top: clamp(18px, 2.2vw, 30px);
  }

  /* ===== ВЕРХНИЕ 3 КАРТОЧКИ =====
     Вместо жёстких 450px — «резина» с безопасными пределами */
  .topGrid{
    grid-template-columns: repeat(3, minmax(260px, 1fr));
    gap: clamp(14px, 2vw, 20px);
    justify-content: center;
  }
  .topTile{
    width: 100%;
    height: clamp(320px, 30vw, 408px);
    border-radius: clamp(14px, 1.6vw, 20px);
  }
  .topTileBody{ padding-bottom: clamp(80px, 8.2vw, 105px); }
  .topTileBar{
    height: clamp(88px, 8.8vw, 115px);
    padding: clamp(18px, 2.2vw, 30px);
    border-radius: clamp(14px, 1.6vw, 20px);
  }
  .metric{ font-size: clamp(22px, 3.2vw, 32px); }
  .label { font-size: clamp(14px, 2vw, 18px); }

  /* Скрин внутри тайла не «раздувается» */
  .topTileShot{
    left:50%;
    top: clamp(0px, .8vw, 8px);
    transform: translateX(-50%) scale(1);
    max-width: min(88%, 520px);
    height: auto;
  }

  /* ===== НИЖНИЕ 4 КАРТОЧКИ =====
     На планшетах — 2 колонки «резиновые» */
  .bottomGrid{
    grid-template-columns: repeat(2, minmax(360px, 1fr));
    gap: clamp(16px, 2vw, 24px);
    justify-content: center;
  }
  .bottomCard{
    width: 100%;
    height: clamp(220px, 26vw, 280px);
    border-radius: clamp(14px, 1.6vw, 20px);
  }

  /* Номера и текст не уползают */
  .num{
    top: clamp(16px, 2vw, 24px);
    left: clamp(16px, 2vw, 24px);
    width: clamp(28px, 3.2vw, 32px);
    height: clamp(28px, 3.2vw, 32px);
  }
  .num b{ font-size: clamp(12px, 1.5vw, 14px); }

  .bottomText{
    left: clamp(16px, 2vw, 30px);
    bottom: clamp(16px, 2vw, 30px);
    max-width: 58%;
    font-size: clamp(16px, 1.9vw, 18px);
    line-height: 1.22;
  }

  /* Арты (img+video) ограничены и «дышат» */
  .bottomArt{
    max-width: clamp(200px, 22vw, 280px);
    max-height: clamp(160px, 18vw, 230px);
  }
  /* Сдвиги для конкретных артов под «средние» ширины */
  .art1{ right: clamp(22px, 3vw, 40px);  bottom: 0; }
  .art2{ right: clamp(0px, 2vw, 10px);   bottom: 0; }
  .art3{ right: clamp(40px, 6vw, 90px);  bottom: 0; }
  .art4{ right: clamp(-12px, 2vw, -4px); bottom: clamp(-12px, 2vw, -4px); }

}


@media (max-width: 640px){
  .wrap{ padding:120px 0 0; }

  .title { font-size: 33px; letter-spacing:-0.04em; }
  .lead  { font-size: 16px; }
  .metric{ font-size: 24px; }
  .label { font-size: 16px; }

  /* Моб. позиционирование скриншотов ТОП-карточек через CSS-переменные */
  .topTileShot{
    left: var(--m-shot-left, 50%);
    top:  var(--m-shot-top, 6px);
    transform: translateX(-50%) scale(var(--m-shot-scale, 1));
  }

  .bottomGrid{ gap:16px; }
  .bottomCard{
    height:358px;
    border-radius:16px;
    padding:30px 25px;
    display:flex; flex-direction:column; align-items:flex-start;
  }

  .num{
    position:static; margin:0; width:32px; height:32px; border-radius:50%;
  }
  .bottomText{
    position:static; margin-top:30px; max-width:100%;
    font-size:16px; line-height:1.25; text-align:left;
  }

  /* Моб. позиционирование артов НИЖНИХ карточек (и img, и video) через переменные */
  .bottomArt{
    left: var(--m-left, 50%);
    right: auto;
    bottom: var(--m-bottom, 0px);
    transform: translateX(var(--m-translateX, -50%)) scale(var(--m-scale, 1));
    max-width: 311px;
    max-height: 211px;
  }
}
</style>
