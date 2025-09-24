<template>
  <section :class="$style.wrap">
    <div class="container">
      <div :class="$style.panel">
        <div :class="$style.grid">
          <!-- ЛЕВО: верх = верх картинки, низ = низ картинки -->
          <div :class="$style.left">
            <h1 :class="$style.title" aria-label="Заговорите на английском — уже сегодня с Ucanspeak">
              Заговорите <span :class="$style.hl">на&nbsp;английском</span><br />
              уже сегодня с&nbsp;Ucanspeak
            </h1>

            <p :class="$style.lead">
              Интерактивная платформа обучения английскому языку: выучите легко и быстро более 5000
              английских разговорных фраз, занимаясь всего 20 минут в день в любое удобное для вас время.
            </p>

            <!-- CTA прижат к нижнему краю картинки -->
            <a href="#" :class="$style.cta">
              <span>Бесплатный демоурок без регистрации</span>
              <i aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H9M17 7V15"
                        stroke="#0B63E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </i>
            </a>
          </div>

          <!-- ПРАВО: картинка 320x500 + отступы 50 справа/снизу -->
          <div :class="$style.right">
            <div :class="$style.mediaBox">
              <img :class="$style.mediaImg" src="/hero-girl.jpg" alt="Ucanspeak" />
              <!-- Play по центру 94x50 -->
              <button type="button" :class="$style.playBtn" aria-label="Смотреть демо">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7-11-7z" fill="#fff"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Фоновая волна (import) -->
        <img :class="$style.bg" :src="wave" alt="" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import wave from '@/assets/img/hero-wave.svg'
</script>

<style module>
/* Секция */
.wrap{ padding:12px 0 28px; background:#E9EFF7; }

/* Панель */
.panel{
  position:relative;
  border-radius:20px;
  background:#fff;
  overflow:hidden;
  isolation:isolate;
  box-shadow:0 12px 40px rgba(0,0,0,.06);
  padding:36px 28px 64px;
}

/* Сетка: выравниваем ПО ВЕРХУ */
.grid{
  position:relative; 
  z-index:2;
  display:grid;
  grid-template-columns: 1.2fr .8fr;
  gap:48px;
  align-items:stretch;   /* ВАЖНО: теперь левая колонка = по высоте правой */
}


/* Левый столбец:
   - слева отступ 50
   - высота = высоте картинки (500)
   - внизу добавляем 50, чтобы CTA совпал с нижним краем картинки */
.left{
  padding-left:50px;
  padding-bottom:50px;
  display:flex;
  flex-direction:column;
}

/* Заголовок — Inter 500, 65px, 95%, -6%, две строки */
.title{
  margin:0 0 18px;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif;
  font-weight:500;
  font-size:65px;
  line-height:.95;                   /* 95% */
  letter-spacing:-0.06em;            /* -6% */
  color:#141414;
}

/* Оранжевая наклейка */
.hl{
  display:inline-block;
  background:#FFD249;
  padding:.05em .28em;
  border-radius:.28em;
  transform: rotate(1.2deg);
}

/* Подзаголовок — Inter 500 18px 130% -3% */
.lead{
  margin:0 0 24px;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif;
  font-weight:500;
  font-size:18px;
  line-height:1.3;                   /* 130% */
  letter-spacing:-0.03em;            /* -3% */
  color:#4B5563;
  max-width:760px;
}

/* CTA 428x64 #B87EFF; стрелка 50x50 белая r=10; прижата вниз */
.cta{
  margin-top:auto;                   /* ← уводит кнопку к низу левой колонки */
  display:inline-flex; align-items:center; justify-content:space-between;
  width:428px; height:64px; padding:0 8px 0 18px;
  background:#B87EFF; color:#fff; text-decoration:none;
  border-radius:14px;
  font:600 16px/1 Inter, sans-serif;
  box-shadow:0 12px 30px rgba(184,126,255,.35);
  gap:14px;
}
.cta i{
  width:50px; height:50px; border-radius:10px; background:#fff;
  display:grid; place-items:center; flex:0 0 50px;
}

/* Правый столбец: даём нужные отступы 50 справа/снизу,
   чтобы верх картинки совпал с верхом левой колонки */
.right{
  display:flex; justify-content:flex-end; align-items:flex-start;
  padding-right:50px; padding-bottom:50px;
}

/* Картинка 320x500, без позиционирования, чтобы участвовать в выравнивании */
.mediaBox{
  width:320px; height:500px;
  border-radius:20px; overflow:hidden;
  background:#fff;
  box-shadow:0 18px 44px rgba(0,0,0,.10);
  position:relative;
}
.mediaImg{
  width:320px; height:500px;         /* родной размер */
  object-fit:cover; display:block; border-radius:20px;
}

/* Play по центру 94x50 */
.playBtn{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:94px; height:50px;
  border:0; border-radius:12px; background:#B87EFF; color:#fff; cursor:pointer;
  display:grid; place-items:center;
  box-shadow:0 10px 28px rgba(184,126,255,.45);
}

/* Волна: прибита к низу, во всю ширину панели */
.bg{
  position:absolute;
  left:0; right:0; bottom:0;
  width:100%; height:auto;
  display:block;
  z-index:1;
  /* если нужно — можно добавить лёгкий наклон:
  transform: rotate(-6deg); transform-origin:center bottom;
  */
}

/* Адаптив минимум */
@media (max-width: 1200px){
  .grid{ grid-template-columns:1fr; gap:28px; }
  .right{ padding-right:50px; padding-bottom:0; } /* картинку поставим после текста */
  .mediaBox{ margin-left:50px; }
  .left{ min-height:auto; padding-bottom:0; }
}
@media (max-width: 640px){
  .panel{ padding:28px 18px 58px; }
  .left{ padding-left:24px; }
  .title{ font-size:40px; }
  .mediaBox{ margin-left:24px; }
  .cta{ width:100%; max-width:428px; }
}
</style>
