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
              <svg width="21" height="21" viewBox="0 0 24 24" fill="#193B93">
                <path d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="#3232E9" stroke-width="1.8"
                  stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </i>
          </NuxtLink>
        </div>

        <img :src="man" :class="$style.man" alt="" />
      </article>

      <!-- ПРАВАЯ КАРТА 450×363 -->
      <article :class="$style.rightCard">
        <img :src="wave" :class="$style.wave" alt="" />
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
/* ===== ПК ===== */
.wrap{
  background:#E9EFF7;
  padding-top:140px;
}
.container{
  max-width:1390px;
  margin:0 auto;
  display:grid;
  grid-template-columns: 920px 450px;
  gap:20px;
  padding:0 0;
}
.leftCard{
  position:relative;
  width:920px; height:363px;
  border-radius:20px; background:#fff; overflow:hidden;
  box-shadow:0 10px 26px rgba(16,24,40,.08);
}
.leftCol{ position:relative; z-index:1; padding:40px 30px 45px; width:650px; }
.title{
  margin:0 0 16px;
  font-family:Inter, system-ui, sans-serif; font-weight:500; font-size:40px;
  line-height:1; letter-spacing:-0.05em; color:#2C2C2C;
}
.hl{ display:inline-block; background:#FFD249; padding:.06em .32em; border-radius:10px; transform:rotate(1.2deg); box-shadow:inset 0 -2px 0 rgba(0,0,0,.06); }
.lead{ margin:0 0 80px; font:500 18px/1.3 Inter, system-ui, sans-serif; letter-spacing:-.03em; color:#2C2C2C; }
.leadBold{ font-weight:700; letter-spacing:-.03em; }
.cta{
  display:inline-flex; align-items:center; gap:10px;
  height:44px;     padding: 0 5px 0 15px;
  background:#3232E9; color:#fff; text-decoration:none;
  border-radius:12px; font:600 16px Inter, system-ui, sans-serif; letter-spacing:-.03em;
}
.cta i{ width:36px; height:36px; border-radius:10px; background:#fff; display:grid; place-items:center; }

/* фото справа — крупнее, обрезается по низу на ПК */
.man{
  position:absolute; right:70px; bottom:0;
  width:auto; height:90%; max-height:none; object-fit:contain; pointer-events:none;
}

/* правая карта */
.rightCard{
  position:relative; width:450px; height:363px;
  border-radius:20px; background:#C8BDFF; box-shadow:0 10px 26px rgba(16,24,40,.08);
}
.wave{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; pointer-events:none; opacity:.55; }
.sticker{ position:absolute; right:18px; top:-73px; transform:rotate(6deg); z-index:2; }
.pin{ width:105px; height:auto; }

.rightCol{ position:relative; z-index:1; padding:30px; display:flex; flex-direction:column; gap:12px; }
.rTitle{
  margin:0; font-family:Inter, system-ui, sans-serif; font-weight:500; font-size:40px;
  line-height:1; letter-spacing:-.05em; color:#2C2C2C;
}
.rLead{ margin:0; font:500 16px/1.35 Inter, system-ui, sans-serif; letter-spacing:-.02em; color:#2C2C2C; }

/* ===== Планшеты ===== */
@media (max-width:1280px){
  .container{ grid-template-columns:1fr; gap:16px; max-width:880px; padding:0 15px; }
  .leftCard, .rightCard{ width:100%; height:auto; }
  .leftCol{ width:auto; }
  .man{ right:20px; height:100%; max-height:420px; }
}

@media (max-width:640px){
  .wrap {padding-top: 120px;}
  /* общие размеры контейнера */
  .container{
    width:390px; max-width:390px; margin:0 auto; display:block; padding:0;
  }

  /* Левая карточка: фикс. высота 544 */
  .leftCard{
    width:390px; height:544px;               /* ← по ТЗ */
    border-radius:16px;
    position:relative;
    box-shadow:0 8px 22px rgba(16,24,40,.06);
    overflow:hidden;
  }

  /* внутренние отступы: сверху/снизу 30; снизу даём запас под арт+кнопку */
  .leftCol{
    padding:30px 16px 320px 16px;            /* верх/бока = 30/16, низ с запасом */
    width:auto;
  }

  /* заголовок/описание поменьше */
  .title{ font-size:28px; line-height:1.05; letter-spacing:-.04em; margin:0 0 12px; }
  .lead{  margin:0; font-size:14px; line-height:1.3; }

  /* Кнопка: по центру, 30px от низа, левый внутренний паддинг 25px */
  .cta{
    position:absolute; left:50%; bottom:30px; transform:translateX(-50%);
    width:340px; height:48px; border-radius:12px;
    display:flex; align-items:center; justify-content:space-between;
    padding:0 12px 0 25px;                   /* ← левый 25px */
    font-size:14px; letter-spacing:-.03em;
  }
  .cta i{ width:36px; height:36px; border-radius:10px; }

  /* Картинка «стоит» на кнопке: центрируем и ставим прямо над кнопкой */
  .man{
    position:absolute; left:50%;
    bottom: calc(30px + 48px + 10px);        /* 30 снизу + 48 кнопка + 10 зазор */
    transform:translateX(-50%);
    height:260px; width:auto;                /* немного крупнее */
    object-fit:contain; pointer-events:none;
  }

  /* Правая карточка остаётся адаптированной как раньше */
  .rightCard{
    width:390px; height:auto; border-radius:16px; margin-top:16px;
  }
  .rightCol{ padding:18px 16px 16px; }
  .rTitle{ font-size:28px; line-height:1.05; letter-spacing:-.04em; }
  .rLead{  font-size:14px; line-height:1.3; }
  .sticker{ right:10px; top:-56px; } .pin{ width:84px; }
}

</style>
