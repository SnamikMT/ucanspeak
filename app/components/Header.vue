<template>
  <!-- Top bar -->
  <div :class="[$style.bar, insideHero ? $style.inHero : '']">
    <!-- Лого (SVG) -->
    <NuxtLink to="/" :class="$style.logo" aria-label="UCANSPEAK — на главную">
      <img :src="logo" alt="" />
    </NuxtLink>

    <!-- Навигация (desktop) -->
    <nav :class="$style.nav">
      <NuxtLink to="#pricing" class="btn btn--ghost" :class="$style.navBtn">Тарифы</NuxtLink>
      <NuxtLink
        :to="isTeachers ? '/students' : '/teachers'"
        class="btn btn--ghost"
        :class="[$style.navBtn, $style.link, $style.switch]"
      >
        {{ isTeachers ? 'Взрослым & Детям' : 'Преподавателям' }}
      </NuxtLink>
      <NuxtLink to="#contact" class="btn btn--ghost" :class="$style.navBtn">Контакты</NuxtLink>
    </nav>

    <!-- CTA (desktop) -->
    <NuxtLink to="/platform" class="btn btn--primary" :class="$style.primary">Перейти на платформу</NuxtLink>

    <!-- Кнопка «Меню» (mobile) -->
    <button
      type="button"
      :class="$style.menuBtn"
      aria-label="Открыть меню"
      :aria-expanded="isOpen ? 'true' : 'false'"
      aria-controls="mobile-menu"
      @click="toggle()"
    >
      Меню
    </button>
  </div>

  <!-- ===== Mobile Menu Overlay & Panel ===== -->
  <transition name="fade">
    <div
      v-if="isOpen"
      :class="$style.overlay"
      role="presentation"
      @click.self="close()"
    />
  </transition>

  <transition name="slideDown">
    <aside
      v-if="isOpen"
      id="mobile-menu"
      :class="$style.sheet"
      role="dialog"
      aria-modal="true"
    >
      <header :class="$style.sheetHead">
        <span :class="$style.sheetLogo" aria-label="UCANSPEAK">
          <img :src="logo" alt="" />
        </span>
        <button type="button" :class="$style.closeBtn" @click="close()" aria-label="Закрыть меню">✕</button>
      </header>

      <nav :class="$style.sheetNav">
        <NuxtLink to="#pricing" :class="$style.sheetLink" @click="close()">Тарифы</NuxtLink>

        <NuxtLink
          :to="isTeachers ? '/students' : '/teachers'"
          :class="[$style.sheetLink, $style.sheetSwitch]"
          @click="close()"
        >
          {{ isTeachers ? 'Взрослым & Детям' : 'Преподавателям' }}
        </NuxtLink>

        <NuxtLink to="#contact" :class="$style.sheetLink" @click="close()">Контакты</NuxtLink>
      </nav>

      <NuxtLink to="/platform" :class="$style.sheetCta" @click="close()">
        Перейти на платформу
        <i aria-hidden="true">
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
            <path d="M1 10L11 1M11 1H4.5M11 1V7.5"
                  stroke="#3232E9" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </i>
      </NuxtLink>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import logo from '@/assets/img/logo.svg' // ← SVG логотип

const props = defineProps<{ insideHero?: boolean }>()
const route = useRoute()
const isTeachers = computed(() => route.path.startsWith('/teachers'))

const isOpen = ref(false)
const toggle = () => (isOpen.value = !isOpen.value)
const close  = () => (isOpen.value = false)

// Escape закрывает меню
onMounted(() => {
  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
  window.addEventListener('keydown', onKey)
  onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
})
</script>

<style module>
/* ===== Base bar ===== */
.bar{
  display:flex; align-items:center; justify-content:space-between;
  max-width:1390px; margin:0 auto;
  padding:14px 0;
  -webkit-tap-highlight-color: transparent;
}
.inHero{
  padding:25px 50px 0 50px;
  margin-bottom:66px;
}

/* Лого (SVG) */
.logo{
  display:inline-flex; align-items:center; text-decoration:none;
  line-height:0;        /* убираем возможные отступы из-за baseline */
}
.logo img{
  display:block; width:auto; height:28px; /* подгони, если нужно */
}

/* Desktop nav */
.nav{ display:flex; gap:10px; }
.navBtn{
  padding:10px 14px; border-radius:12px; font-weight:500;
  -webkit-tap-highlight-color: transparent;
}
.navBtn:active{ background:inherit !important; }
.primary{
  padding:12px 16px; border-radius:12px;
  -webkit-tap-highlight-color: transparent;
}
.primary:active{ background:inherit !important; }
.link{ transition: background .2s ease; }

/* Mobile "Меню" button */
.menuBtn{
  display:none;
  align-items:center; justify-content:center;
  width:68px; height:38px;
  border:1px solid rgba(44,44,44,0.3);
  border-radius:8px;
  background:transparent;
  font-family:Inter, system-ui, sans-serif;
  font-weight:500; font-size:14px; line-height:1.3; letter-spacing:-0.03em;
  color:#2C2C2C; cursor:pointer;
  -webkit-tap-highlight-color: transparent;
}
.menuBtn:active{ background:inherit; }

/* ===== Mobile menu overlay & sheet ===== */
.overlay{
  position:fixed; inset:0;
  background:rgba(0,0,0,.28);
  z-index:999;
  backdrop-filter: blur(2px);
}

/* Панель */
.sheet{
  position:fixed; left:50%; top:0;
  transform:translateX(-50%);
  width:390px; max-width:100vw;
  background:#fff;
  border-bottom-left-radius:16px; border-bottom-right-radius:16px;
  box-shadow:0 18px 36px rgba(16,24,40,.16);
  z-index:1000;
  padding:12px 16px 16px;
  -webkit-tap-highlight-color: transparent;
}

/* Шапка панели */
.sheetHead{
  display:flex; align-items:center; justify-content:space-between;
  padding:4px 0 8px;
}
.sheetLogo{
  display:inline-flex; align-items:center; line-height:0;
}
.sheetLogo img{ display:block; width:auto; height:22px; }
.closeBtn{
  width:38px; height:38px; border-radius:8px;
  border:1px solid rgba(44,44,44,0.12);
  background:#fff; cursor:pointer; line-height:1;
  color:#2C2C2C;
  -webkit-tap-highlight-color: transparent;
}
.closeBtn:active{ background:#fff; }

/* Ссылки */
.sheetNav{
  display:flex; flex-direction:column; gap:6px;
  padding:6px 0 10px;
}
.sheetLink{
  display:block;
  padding:12px 12px;
  border-radius:10px;
  text-decoration:none;
  color:#1F2937;
  font-family:Inter, system-ui, sans-serif; font-weight:600; font-size:15px; letter-spacing:-0.02em;
  background:#F6F7FB;
  -webkit-tap-highlight-color: transparent;
}
/* без визуального «active» при тапе */
.sheetLink:active{ background:#F6F7FB; transform:none; }

/* CTA внутри меню */
.sheetCta{
  margin-top:6px;
  display:flex; align-items:center; justify-content:space-between;
  height:48px; padding:0 14px 0 16px;
  border-radius:12px; text-decoration:none;
  background:#FFD249; color:#2C2C2C;
  font-family:Inter, system-ui, sans-serif; font-weight:600; font-size:15px; letter-spacing:-.02em;
  box-shadow:0 10px 24px rgba(255,210,73,.28);
  -webkit-tap-highlight-color: transparent;
}
.sheetCta:active{ background:#FFD249; }
.sheetCta i{
  width:36px; height:36px; border-radius:10px; background:#fff;
  display:grid; place-items:center; flex:0 0 36px;
}

/* Доступность: видимый фокус только для клавиатуры */
a:focus-visible, button:focus-visible{
  outline:2px solid #3232E9;
  outline-offset:2px;
}

/* ===== Animations ===== */
.fade-enter-active, .fade-leave-active{ transition: opacity .18s ease; }
.fade-enter-from, .fade-leave-to{ opacity:0; }

.slideDown-enter-active, .slideDown-leave-active{
  transition: transform .22s cubic-bezier(.22,.94,.34,1), opacity .18s ease;
}
.slideDown-enter-from, .slideDown-leave-to{
  transform:translateX(-50%) translateY(-16px);
  opacity:0;
}

/* ===== Responsive ===== */
@media (max-width:1390px){
  .bar{ padding-left:25px; padding-right:25px; }
  .inHero{ padding-left:25px; padding-right:25px; }
}
@media (max-width:768px){
  .nav, .primary{ display:none; }
  .menuBtn{ display:flex; }
  .inHero{ margin-bottom:60px; }
}
@media (max-width:400px){
  .sheet{ width:100vw; border-radius:0 0 16px 16px; }
}
</style>
