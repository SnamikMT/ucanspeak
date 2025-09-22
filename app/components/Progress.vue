<template>
  <section :class="$style.wrap">
    <div class="container">
      <!-- Заголовок -->
      <header :class="$style.head">
        <h2 :class="$style.title">
          <span :class="$style.hl">Заметный прогресс:</span> от страха<br />
          перед официантами до споров с носителями
        </h2>
      </header>

      <!-- Контент -->
      <div :class="$style.grid">
        <!-- До занятий -->
        <div :class="$style.before">
          <h3 :class="$style.subhead">До занятий с Ucanspeak</h3>
          <ul :class="$style.issues">
            <li>Не понимаете, что говорят</li>
            <li>Путаетесь в грамматике</li>
            <li>Не хватает словарного запаса</li>
            <li>Неправильно произносите слова и стесняетесь говорить</li>
          </ul>
        </div>

        <!-- После занятий -->
        <div :class="$style.after">
          <h3 :class="$style.subhead">После занятий с Ucanspeak</h3>
          <div :class="$style.planeWrap">
            <img :src="plane" :class="$style.plane" alt="Ucanspeak plane" />
            <span :class="[$style.badge, $style.red]">Легко формулируете и высказываете свои мысли фразами на английском</span>
            <span :class="[$style.badge, $style.blue]">Быстро и грамотно строите предложения</span>
            <span :class="[$style.badge, $style.yellow]">Понимаете английскую речь даже в быстром темпе</span>
            <span :class="[$style.badge, $style.purple]">Выучили много новых слов и правильно используете их в контексте</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import plane from '@/assets/img/progress-plane.png'
</script>

<style module>
.wrap{
  background:#E9EFF7;
  padding-top:140px;
  padding-bottom:60px;
}

.head{ text-align:center; margin-bottom:60px; }
.title{
  margin:0;
  font-family: Inter, sans-serif;
  font-weight:500;
  font-size:55px;
  line-height:.95;           /* 95% */
  letter-spacing:-0.05em;    /* -5% */
  color:#101012;
}
.hl{
  display:inline-block;
  background:#FFD249;
  border-radius:12px;
  padding:.06em .28em;
}

.grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:40px;
}

/* Левая часть */
.before{
  background:#F1F6FF;
  border-radius:16px;
  padding:28px;
}
.subhead{
  margin:0 0 20px;
  font-family:Inter, sans-serif;
  font-weight:600;
  font-size:22px;
  line-height:1.3;
}
.issues{
  margin:0; padding:0; list-style:none;
  display:flex; flex-direction:column; gap:14px;
}
.issues li{
  background:#DCE6F9;
  border-radius:12px;
  padding:10px 14px;
  font-family:Inter,sans-serif;
  font-size:18px;
  font-weight:500;
  color:#101012;
}

/* Правая часть */
.after{
  background:#fff;
  border-radius:16px;
  padding:28px;
  position:relative;
}
.planeWrap{ position:relative; min-height:300px; }
.plane{
  display:block; max-width:100%; height:auto;
  margin:40px auto;
}
.badge{
  position:absolute;
  padding:10px 14px;
  border-radius:12px;
  font-family:Inter,sans-serif;
  font-size:16px;
  font-weight:500;
  line-height:1.3;
  max-width:220px;
  color:#101012;
}
.red{ background:#FF9B76; top:10px; left:40px; }
.blue{ background:#41BCF8; top:20px; right:40px; }
.yellow{ background:#FFD249; bottom:20px; right:20px; }
.purple{ background:#C8BDFF; bottom:30px; left:30px; }

/* адаптив */
@media (max-width: 1024px){
  .grid{ grid-template-columns:1fr; }
}
</style>
