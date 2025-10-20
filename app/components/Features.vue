<template>
  <section :class="$style.band">
    <!-- ширина и отступы полностью синхронны геро-панели -->
    <div :class="$style.stage">
      <h2 :class="$style.srOnly">Преимущества</h2>

      <div :class="$style.grid">
        <!-- 1 -->
        <FeatureCard
          num="01"
          title="Аудиотренажер<br>и интерактивные онлайн уроки"
          :img="phone"
          :artWidth="142"
          :artRight="-8"
          :artBottom="-10"
          :mobileArtWidth="125"
        />

        <!-- 2: видео -->
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

        <!-- 3 -->
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

/* обёртка с шириной/отступами как у геро-панели */
.stage{
  max-width:1390px;      /* как .panel у героя */
  margin:0 auto;
}

/* при ширине окна меньше «desktop» — такие же боковые поля 15px */
@media (max-width:1390px){
  .stage{ margin:0 15px; }
}

/* мобилка: фикс 390px по центру — впритык к макету героя */
@media (max-width:640px){
  .stage{
    width:390px;
    max-width:390px;
    margin:0 auto;
  }
}

/* скрытый заголовок */
.srOnly{
  position:absolute !important; width:1px; height:1px; margin:-1px; padding:0;
  overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0;
}

/* ===== СЕТКА КАРТОЧЕК =====
   ПК: 3 колонки (резиновые), на «планшетах» — 2, на узких — 1,
   при этом ширина блока следует .stage. */
.grid{
  display:grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap:20px;
  align-items:stretch;
}

/* широкие планшеты / ноутбуки */
@media (max-width:1180px){
  .grid{
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
}

/* узкие планшеты (но ещё не мобилка) */
@media (max-width:820px){
  .grid{
    grid-template-columns: 1fr;
  }
}

/* мобилка — одна колонка (ширина блока задаётся .stage = 390px) */
@media (max-width:640px){
  .grid{ gap:20px; }
}
</style>
