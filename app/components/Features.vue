<template>
  <section :class="$style.band">
    <div class="container">
      <h2 :class="$style.srOnly">Преимущества</h2>

      <div :class="$style.grid">
        <!-- 1-я: моб. ширина 125 -->
        <FeatureCard
          num="01"
          title="Аудиотренажер<br>и интерактивные онлайн уроки"
          :img="phone"
          :artWidth="142"
          :artRight="-8"
          :artBottom="-10"
          :mobileArtWidth="125"
        />

        <!-- 2-я: видео с прозрачностью -->
        <FeatureCard
          num="02"
          title="Приоритет –<br>разговорная практика"
          :videoWebm="practiceWebm"
          :videoMp4="practiceMp4"
          :poster="practicePoster"
          :artWidth="180"
          :artRight="10"
          :artBottom="-18"
        />

        <!-- 3-я: моб. ширина 130 -->
        <FeatureCard
          num="03"
          title="Озвучено<br>носителями языка"
          :img="mic"
          :artWidth="168"
          :artRight="30"
          :artBottom="0"
          :pillRight="38"
          :pillBottom="54"
          :mobileArtWidth="130"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureCard from '@/components/FeatureCard.vue'
import phone from '@/assets/img/feat-phone.png'
import mic from '@/assets/img/feat-mic.png'

import practiceWebm from '@/assets/video/feat-practice-alpha.webm'
import practiceMp4  from '@/assets/video/feat-practice.mp4'
import practicePoster from '@/assets/img/feat-parrot.png'
</script>

<style module>
.band{ padding:16px 0 0; }

.srOnly{
  position:absolute !important; width:1px; height:1px; margin:-1px; padding:0;
  overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0;
}

/* 3 колонки, ширина контейнера как в макете */
.grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:20px;
  max-width:1390px;
  margin:0 auto;
}

/* планшеты */
@media (max-width:1024px){
  .grid{ grid-template-columns:1fr; }
}

/* мобилка: ровно 390px секция + грид */
@media (max-width:640px){
  .band{ padding:16px 0 0; } /* убираем лишние боковые отступы */
  :global(.container){
    width:390px;
    max-width:390px;
    margin:0 auto;
    padding:0;               /* чтобы не “распирало” */
    box-sizing:border-box;
  }
  .grid{
    grid-template-columns:1fr;
    width:390px;
    max-width:390px;
    margin:0 auto;
    gap:20px;
  }
}
</style>
