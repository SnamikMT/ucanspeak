<template>
  <section :class="$style.wrap">
    <div :class="$style.inner">
      <!-- Заголовок -->
      <header :class="$style.head">
        <h2 :class="$style.title">
          Наслаждайтесь<br />
          процессом <span :class="$style.hl">и&nbsp;результатом</span>
        </h2>
      </header>

      <!-- Слой с заметкой и «доской» -->
      <div :class="$style.stack">
        <!-- Наклонная плашка со штифтом -->
        <div :class="$style.note">
          <span :class="$style.noteText">
            Ничто так не мотивирует ученика
            <br />
            продолжать занятия,
            <span :class="$style.uWrap">
              как ощущение прогресса
              <img :src="underline" :class="$style.underline" alt="" aria-hidden="true" />
            </span>
          </span>
          <img :src="pin" :class="$style.pin" alt="" aria-hidden="true" />
        </div>

        <!-- Белая «доска» -->
        <div :class="$style.board">
          <!-- бейджи -->
          <span :class="[$style.badge, $style.bGreen]">
            <img :src="iconGreen" alt="" class="icon" />
            Вы сокращаете время подготовки к урокам
          </span>

          <span :class="[$style.badge, $style.bPurple]">
            <img :src="iconPurple" alt="" class="icon" />
            Вы получаете заметный и быстрый результат
          </span>

          <span :class="[$style.badge, $style.bBlue]">
            <img :src="iconBlue" alt="" class="icon" />
            Вы бережёте свои голосовые связки
          </span>

          <span :class="[$style.badge, $style.bPink]">
            <img :src="iconPink" alt="" class="icon" />
            Вы повышаете эффективность занятий
          </span>

          <span :class="[$style.badge, $style.bYellow]">
            <img :src="iconYellow" alt="" class="icon" />
            Вы расширяете возможности обучения говорению
          </span>

          <h3 :class="$style.sub">
            Ваши новые возможности<br />в преподавании с&nbsp;UCANSPEAK:
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import pin       from '@/assets/img/pin2.svg'
import underline from '@/assets/img/teachers/underline-video.svg'

import iconGreen  from '@/assets/img/teachers/green.png'
import iconPurple from '@/assets/img/teachers/purple.png'
import iconBlue   from '@/assets/img/teachers/blue.png'
import iconPink   from '@/assets/img/teachers/pink.png'
import iconYellow from '@/assets/img/teachers/yellow.png'
</script>

<style module>
/* фон секции */
.wrap{
  background:#E9EFF7;
  padding-top:140px;
}

/* контейнер 1390 */
.inner{
  max-width:1390px;
  margin:0 auto;
}

/* заголовок */
.head{
  position:relative;         /* чтобы z-index работал */
  text-align:center;
  margin:0;
  z-index:3;                 /* <- выше стикера и доски */
}
.title{
  margin:0;
  font-family:Inter, system-ui, sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;
  letter-spacing:-.05em;
  color:#2C2C2C;
}
.hl{
  display:inline-block;
  background:#FFDD62;
  padding:.06em .32em;
  border-radius:10px;
  transform:rotate(1.2deg);
  box-shadow: inset 0 -2px 0 rgba(0,0,0,.06);
}

/* отступ между заголовком и контейнером: 135 */
.stack{
  position:relative;
  margin-top:135px;
}

/* заметка: центр по верхнему краю board, наезжает на 1/2 своей высоты */
.note{
  position:absolute;
  left:50%; top:0;
  transform: translate(-50%, -50%) rotate(5.26deg);
  filter: drop-shadow(3px 4px 9px rgba(0,0,0,.25));
  z-index:2;                 /* <- между заголовком и доской */
  pointer-events:none;
}
.noteText{
  position:relative;
  display:block;
  background:#fff;
  color:#2C2C2C;
  font:500 18px/1.3 Inter, system-ui, sans-serif;
  letter-spacing:-.02em;
  padding:16px 20px 14px;
  border-radius:12px;
}

/* обводка только под фразой — в своём stacking context ниже текста */
.uWrap{
  position:relative;
  display:inline-block;
  z-index:0;                 /* текст / содержимое */
}
.underline{
  position:absolute;
  left:-10px; bottom:-20px;
  max-width:110%;
  pointer-events:none;
  transform: rotate(-5.26deg);
  z-index:-1;                /* <- под текстом uWrap */
}

/* пин */
.pin{
  position:absolute; right:-22px; top:-66px;
  height:auto;
}

/* белая доска */
.board{
  position:relative;
  background:#fff;
  border-radius:20px;
  box-shadow:0 10px 26px rgba(16,24,40,.06);
  min-height:448px;
  padding:64px 16px 64px;
  z-index:1;                 /* <- самый нижний из трёх */
}

/* бейджи */
.badge{
  position:absolute;
  display:inline-flex; align-items:center; gap:8px;
  height:44px; padding:0 14px; border-radius:12px;
  font:600 16px/1 Inter, system-ui, sans-serif;
  letter-spacing:-.02em; color:#1F2937;
  box-shadow:0 6px 18px rgba(16,24,40,.12);
}
.badge img{
  width:24px; height:24px; flex:0 0 24px;
}

/* позиции бейджей */
.bGreen { background:#CFF3C9; left:329px; top:80px;}
.bPurple{ background:#D7CCFF; right:40px; top:106px;}
.bBlue  { background:#CFE6FF; left:40px;  top:194px;}
.bPink  { background:#FFD3EA; left:249px; bottom:50px;}
.bYellow{ background:#FFD86A; right:110px; bottom:90px;}

/* центральный подзаголовок */
.sub{
  position:absolute; left:50%; top:50%;
  transform:translate(-50%,-50%);
  margin:0;
  text-align:center;
  font-family:Inter, system-ui, sans-serif;
  font-weight:700;
  font-size:36px;
  line-height:1.12;
  letter-spacing:-.03em;
  color:#2C2C2C;
}

/* адаптив */
@media (max-width:1390px){
  .inner{ margin:0 15px; }
}
@media (max-width:1024px){
  .title{ font-size:46px; }
  .sub{ font-size:28px; transform:translate(-50%,-22%); }
}
@media (max-width:640px){
  .wrap{ padding-top:120px; }
  .title{ font-size:33px; line-height:1.02; letter-spacing:-.04em; }
  .stack{ margin-top:110px; }
  .noteText{ font-size:16px; }
  .board{ padding:60px 12px; min-height:520px; }
  .sub{ font-size:22px; transform:translate(-50%,-14%); }

  .badge{ height:38px; font-size:14px; border-radius:10px; }
  .bGreen { left:16px; right:16px; top:20px; transform:none; }
  .bPurple{ left:16px; right:16px; top:auto; bottom:220px; transform:none; }
  .bBlue  { left:16px; right:16px; top:110px; transform:none; }
  .bPink  { left:16px; right:16px; bottom:168px; transform:none; }
  .bYellow{ left:16px; right:16px; bottom:22px; transform:none; }
}
</style>
