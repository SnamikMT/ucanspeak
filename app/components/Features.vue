<template>
  <section :class="$style.band">
    <div class="container">
      <h2 :class="$style.srOnly">Преимущества</h2>

      <div :class="$style.grid">
        <FeatureCard
          num="01"
          title="Аудиотренажер<br>и интерактивные онлайн уроки"
          :img="phone"
          :artWidth="188" 
          :artRight="-8"
          :artBottom="-10"
        />
        <!-- 02: попугай — выше и левее -->
        <FeatureCard
        num="02"
        title="Приоритет –<br>разговорная практика"
        :img="parrot"
        :artRight="24" 
        :artBottom="8"  
        />

        <!-- 03: микрофон — чуть левее -->
        <FeatureCard
        num="03"
        title="Озвучено<br>носителями языка"
        pill="Native speakers"
        :img="mic"
        :artRight="18" 
        :artBottom="-6"
        :pillRight="38"
        :pillBottom="54"
        />

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureCard from '@/components/FeatureCard.vue'
import phone from '@/assets/img/feat-phone.png'
import parrot from '@/assets/img/feat-parrot.png'
import mic   from '@/assets/img/feat-mic.png'
</script>

<style module>
.band{ padding:16px 0 0; }

.srOnly{
  position:absolute !important; width:1px; height:1px; margin:-1px; padding:0;
  overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0;
}

/* 3 колонки по 450px, строго как в макете */
.grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:24px;
  max-width:1390px;   /* ← фикс ширины на пк */
  margin:0 auto;      /* центрируем */
}


@media (max-width: 1024px){
  .grid{ grid-template-columns:1fr; }
}

@media (max-width:640px){
  .band{ padding:16px 15px 0; }
}
</style>
