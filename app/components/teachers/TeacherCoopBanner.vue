<template>
  <section :class="$style.wrap">
    <div :class="$style.container">
      <!-- ЛЕВАЯ КАРТА 920×363 -->
      <article :class="$style.leftCard">
        <div :class="$style.leftCol">
          <h3 :class="$style.title">
            <span class="_l1">Приглашаем к сотрудничеству</span><br />
            <span :class="$style.hl">языковые школы</span>
          </h3>

          <p :class="$style.lead">
            Приобретайте доступ для своих преподавателей и учеников, оформив подписку сразу на всю
            школу <span :class="$style.leadBold">по выгодным тарифам!</span>
          </p>

          <NuxtLink to="/pricing" :class="$style.cta">
            <span>Перейти к тарифам</span>
            <i aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="#3232E9" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </i>
          </NuxtLink>
        </div>

        <!-- фото — больше и режется по низу -->
        <img :src="man" :class="$style.man" alt="" />
      </article>

      <!-- ПРАВАЯ КАРТА 450×363 -->
      <article :class="$style.rightCard">
        <img :src="wave" :class="$style.wave" alt="" aria-hidden="true" />
        <div :class="$style.sticker"><img :src="pin" :class="$style.pin" alt="" /></div>

        <div :class="$style.rightCol">
          <h4 :class="$style.rTitle">Учителям<br>и языковым школам</h4>
          <p :class="$style.rLead">
            Мы предоставляем бесплатное обучение и методические рекомендации
            по использованию материалов платформы.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import man  from '@/assets/img/teachers/coop-man.png'
import wave from '@/assets/img/teachers/coop-wave.svg'
import pin  from '@/assets/img/pin3.svg'
</script>

<style module>
/* секция */
.wrap{
  background:#E9EFF7;
  padding-top:140px; /* отступ сверху */
}

/* ===== Контейнер 1390 ===== */
.container{
  max-width:1390px;
  margin:0 auto;
  display:grid;
  grid-template-columns: 920px 450px; /* фикс как в ТЗ */
  gap:20px;                            /* между картами */
  padding:0 0;                         /* без боковых отступов */
}

/* ===== Левая карта ===== */
.leftCard{
  position:relative;
  width:920px; height:363px;
  border-radius:20px;
  background:#fff;
  overflow:hidden;
  box-shadow:0 10px 26px rgba(16,24,40,.08);
}
.leftCol{
  position:relative; z-index:1;
  padding:40px 30px 45px 30px; /* отступы из ТЗ */
  width:650px;                 /* столбец текста на ПК */
}
.title{
  margin:0 0 16px;
  font-family:Inter, system-ui, sans-serif;
  font-weight:500;           /* Medium */
  font-size:40px;
  line-height:1.0;           /* 100% */
  letter-spacing:-0.05em;    /* -5% */
  color:#2C2C2C;
}
.hl{
  display:inline-block;
  background:#FFD249;
  padding:.06em .32em;
  border-radius:10px;
  transform: rotate(1.2deg);
  box-shadow: inset 0 -2px 0 rgba(0,0,0,.06);
}
.lead{
  margin:0 0 80px;
  font-family:Inter, system-ui, sans-serif;
  font-weight:500;
  font-size:18px;
  line-height:1.3;           /* 130% */
  letter-spacing:-0.03em;    /* -3% */
  color:#2C2C2C;
}
.leadBold{
  font-weight:700;
  letter-spacing:-0.03em;
}
.cta{
  display:inline-flex; align-items:center; gap:10px;
  height:44px; padding:0 10px 0 16px;
  background:#3232E9; color:#FFFFFF; text-decoration:none;
  border-radius:12px;
  font-family:Inter, system-ui, sans-serif; font-weight:600; font-size:16px; line-height:1.3; letter-spacing:-.03em;
}
.cta i{
  width:36px; height:36px; border-radius:10px; background:#fff; display:grid; place-items:center;
}

/* фото справа — крупнее, обрезается по низу */
.man{
  position:absolute; right:70px; bottom:0;
  width:auto; height:90%;                /* сделаем побольше */
  max-height:none; object-fit:contain; pointer-events:none;
}

/* ===== Правая карта ===== */
.rightCard{
  position:relative;
  width:450px; height:363px;
  border-radius:20px;
  background:#C8BDFF; /* из ТЗ */
  box-shadow:0 10px 26px rgba(16,24,40,.08);
}
.wave{
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover; pointer-events:none; opacity:.55;
}
.sticker{ position:absolute; right:18px; top:-73px; transform:rotate(6deg); z-index:2; }
.pin{ width:105px; height:auto; }

.rightCol{
  position:relative; z-index:1;
  padding:30px;
  display:flex; flex-direction:column; gap:12px;
}
.rTitle{
  margin:0;
  font-family:Inter, system-ui, sans-serif;
  font-weight:500;                 /* Medium */
  font-size:40px;
  line-height:1.0;                 /* 100% */
  letter-spacing:-0.05em;          /* -5% */
  color:#2C2C2C;
}
.rLead{
  margin:0;
  font-family:Inter, system-ui, sans-serif;
  font-weight:500;
  font-size:16px;
  line-height:1.35;
  letter-spacing:-.02em;
  color:#2C2C2C;
}

/* ===== Адаптив ===== */
@media (max-width:1400px){
  .container{ padding:0 15px; } /* мягкие поля, когда места меньше */
}
@media (max-width:1280px){
  .container{
    grid-template-columns: 1fr;
    gap:16px;
    max-width:880px;
  }
  .leftCard, .rightCard{ width:100%; height:auto; }
  .leftCol{ width:auto; }
  .man{ right:20px; height:100%; max-height:420px; }
}
@media (max-width:640px){
  .title, .rTitle{ font-size:28px; line-height:1.05; }
  .lead{ font-size:14px; }
  .rightCol{ padding:20px; }
}
</style>
