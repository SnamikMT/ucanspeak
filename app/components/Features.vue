<template>
  <section :class="$style.band">
    <div class="container">
      <h2 :class="$style.srOnly">Преимущества</h2>

      <div :class="$style.grid">
        <FeatureCard
          num="01"
          title="Аудиотренажер<br>и интерактивные онлайн уроки"
          :img="phone"
          :artWidth="142"
          :artRight="-8"
          :artBottom="-10"
        />

        <FeatureCard
          num="02"
          title="Приоритет –<br>разговорная практика"
          :img="parrot"
          :artWidth="105"
          :artRight="50"
          :artBottom="11"
        />

        <FeatureCard
          num="03"
          title="Озвучено<br>носителями языка"
          :img="mic"
          :artRight="30"
          :artWidth="168"
          :artBottom="0"
          :pillRight="38"
          :pillBottom="54"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureCard from '@/components/FeatureCard.vue'
import phone  from '@/assets/img/feat-phone.png'
import parrot from '@/assets/img/feat-parrot.png'
import mic    from '@/assets/img/feat-mic.png'
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

@media (max-width:1024px){
  .grid{ grid-template-columns:1fr; }
}

@media (max-width:640px){
  .band{ padding:16px 15px 0; }
}
</style>
