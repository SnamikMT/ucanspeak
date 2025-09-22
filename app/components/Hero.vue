<template>
  <section :class="$style.wrap">
    <div class="container">
      <div class="module" :class="$style.panel">
        <div :class="$style.grid">
          <!-- Лево -->
          <div :class="$style.left">
          <h1 :class="$style.title">
            Заговорите
            <span :class="$style.highlight">на&nbsp;английском</span>
            уже сегодня с&nbsp;Ucanspeak
          </h1>

            <p :class="$style.lead">
              Интерактивная платформа обучения английскому языку: выучите легко и быстро более 5000
              английских разговорных фраз, занимаясь всего 20 минут в день в любое удобное для вас время.
            </p>

            <div :class="$style.ribbon">
              <div :class="$style.badge" style="--rot:-6deg">
                Для тех, кто готов заниматься самостоятельно
              </div>
              <div :class="$style.badge" style="--rot:5deg">
                Для взрослых и детей с любым уровнем языка
              </div>
            </div>

          <a href="#" class="btn btn--primary" :class="$style.cta">
            Бесплатный демоурок без регистрации
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          </div>

          <!-- Право -->
          <div :class="$style.right">
            <div :class="$style.videoCard">
              <img :class="$style.videoImg" src="/hero-girl.jpg" alt="Ucanspeak" />
              <button type="button" :class="$style.playBtn" aria-label="Смотреть демо">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7-11-7z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style module>
.wrap{ padding: 12px 0 28px; }
.panel{
  position:relative; overflow:hidden; isolation:isolate;
  padding: 32px 28px 56px;
  border-radius: 16px;
  background: var(--panel, #fff);
  box-shadow: var(--shadow-xl, 0 12px 40px rgba(0,0,0,.06));
}

/* волна-картинка */
.panel::after{
  content:'';
  position:absolute;
  left:50%; transform:translateX(-50%) rotate(-6deg);
  bottom:-120px;
  width:min(1660px,140vw);
  height:230px;
  background-image:url('/img/hero-wave.svg'); /* <- твоя картинка */
  background-repeat:no-repeat;
  background-size:cover; /* чтобы тянулась как в макете */
  background-position:center;
  border-radius: 999px;
  filter: drop-shadow(0 10px 40px rgba(58,42,227,.35));
  z-index:-1;
}

.grid{
  display:grid;
  grid-template-columns: 1.18fr .82fr; /* ближе к макету */
  gap:48px; align-items:center;
}
.right{ display:flex; justify-content:flex-end; }

/* 65px десктоп */
.title{
  margin:0 0 18px;
  font-weight:800;
  line-height:1.08;
  font-size: clamp(34px, 4.2vw, 65px);
  letter-spacing:-.02em;
}

/* жёлтый маркер */
.highlight{
  display:inline-block;
  background: #FFE062; /* близко к макету */
  padding:.08em .32em;
  border-radius:.28em;
  margin:0 .12em .08em;
  box-shadow: inset 0 -2px 0 rgba(0,0,0,.06);
}

.lead{
  margin:0 0 26px;
  color:var(--muted, #6B7280);
  font-weight:500;
  font-size: clamp(16px, 1.3vw, 18px);
  line-height:1.6;
  max-width: 740px;
}


.ribbon{
  position:relative; height:120px;
  margin:22px 0 28px;
  display:grid; place-items:center;
}
.ribbon::before{
  content:''; position:absolute; inset:0;
  transform:rotate(-6deg);
  border-radius:100px;
  height:70px; top:26px;
  background: linear-gradient(90deg, #5C79FF, #7B3BFF 55%, #5C79FF);
}
.badge{
  position:absolute; top:4px; left:10%;
  transform: rotate(var(--rot, -6deg));
  background:#fff; color:#111827; padding:14px 18px; border-radius:14px;
  box-shadow: 0 8px 24px rgba(17,24,39,.08);
  font-size:14px; max-width:280px; font-weight:500;
}
.badge:nth-of-type(2){ left:auto; right:12%; top:24px; }


.cta{ margin-top:6px; }

.videoCard{
  position:relative;
  width:min(520px,100%);
  aspect-ratio: 3 / 4;
  border-radius: 22px;
  overflow:hidden;
  background:#fff;
  box-shadow: 0 18px 44px rgba(0,0,0,.10);
}
.videoImg{ width:100%; height:100%; object-fit:cover; display:block; }

/* фиолетовая кнопка play как на макете */
.playBtn{
  position:absolute; left:24px; bottom:24px;
  width:68px; height:48px;
  border:0; cursor:pointer; border-radius:14px;
  background:#8F6BFF; display:grid; place-items:center;
  box-shadow:0 10px 28px rgba(143,107,255,.48);
  transition: transform .14s ease, box-shadow .14s ease;
}
.playBtn:hover{ transform:translateY(-1px); box-shadow:0 12px 32px rgba(143,107,255,.58); }
.playBtn svg{ display:block; }

@media (max-width: 1200px){
  .grid{ grid-template-columns:1fr; gap:28px; }
  .panel::after{ bottom:-140px; height:210px; }
  .badge{ font-size:13px; }
}
@media (max-width: 640px){
  .ribbon{ height:110px; }
  .ribbon::before{ height:62px; top:28px; }
  .badge{ max-width:240px; padding:12px 14px; }
  .playBtn{ width:56px; height:44px; left:16px; bottom:16px; border-radius:12px; }
}

</style>
