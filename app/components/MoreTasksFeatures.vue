<template>
  <section :class="$style.wrap">
    <div :class="$style.inner">
      <header :class="$style.head" ref="zone">
        <!-- Desktop title -->
        <h2 :class="[$style.title, $style.titleDesk]">
          <span :class="$style.tline">Еще больше интерактивных </span>
          <span :class="$style.tline">
            заданий <span :class="$style.eq">и полезных фишек</span>
          </span>
        </h2>

        <!-- Mobile title -->
        <h2 :class="[$style.title, $style.titleMob]" aria-hidden="false">
          <span :class="$style.mline">Еще больше </span>
          <span :class="$style.mline">интерактивных</span>
          <span :class="$style.mline">заданий</span>
          <span :class="[$style.mline, $style.mEq]">и полезных фишек</span>
        </h2>

        <!-- notes -->
        <p :class="[$style.note, $style.noteDesk]">
          *Задания можно использовать для подготовки<br> к устной части ЕГЭ и ОГЭ по английскому языку
        </p>
        <p :class="[$style.note, $style.noteMob]">
          *Задания можно использовать<br />
          для подготовки к устной части ЕГЭ<br />
          и ОГЭ по английскому языку
        </p>

        <!-- BADGES (desktop) -->
        <div :class="$style.leftBadges">
          <span :class="[$style.badge, 'wiggle']" style="--base-rot:7.3deg">
            <img :src="icoMonolog" :class="$style.badgeIcon" alt="" />
            <span :class="$style.badgeText">Тематические монологи*</span>
          </span>
          <span :class="[$style.badge, 'wiggle']" style="--base-rot:0deg">
            <img :src="icoCompare" :class="$style.badgeIcon" alt="" />
            <span :class="$style.badgeText">Сравнение двух фото*</span>
          </span>
          <span :class="[$style.badge, 'wiggle']" style="--base-rot:-5.47deg">
            <img :src="icoQ" :class="$style.badgeIcon" alt="" />
            <span :class="$style.badgeText">Вопросы по ключевым словам*</span>
          </span>
          <span :class="[$style.badge, 'wiggle']" style="--base-rot:-13.2deg">
            <img :src="icoDialog" :class="$style.badgeIcon" alt="" />
            <span :class="$style.badgeText">Диалог-расспрос*</span>
          </span>
        </div>

        <div :class="$style.rightBadges">
          <span :class="[$style.badge, 'wiggle']" style="--base-rot:-7.7deg">
            <img :src="icoPhoto" :class="$style.badgeIcon" alt="" />
            <span :class="$style.badgeText">Описание фото</span>
          </span>
          <span :class="[$style.badge, 'wiggle']" style="--base-rot:-.9deg">
            <img :src="icoAnswer" :class="$style.badgeIcon" alt="" />
            <span :class="$style.badgeText">Ответы на вопросы</span>
          </span>
          <span :class="[$style.badge, 'wiggle']" style="--base-rot:4.5deg">
            <img :src="icoTalks" :class="$style.badgeIcon" alt="" />
            <span :class="$style.badgeText">Короткие беседы (Small Talks)</span>
          </span>
        </div>

        <!-- BADGES (mobile absolute) -->
        <div :class="$style.mobBadges">
          <span :class="[$style.mbadge, 'wiggle']" style="--x:81px;  --y:71px;  --base-rot:5deg; --bg:#77D1FD">
            <img :src="icoDialog" :class="$style.micon" alt="" />Диалог-расспрос*
          </span>
          <span :class="[$style.mbadge, 'wiggle']" style="--x:-19px; --y:93px;  --base-rot:25deg; --bg:#C8BDFF">
            <img :src="icoAnswer" :class="$style.micon" alt="" />Ответы на вопросы
          </span>
          <span :class="[$style.mbadge, 'wiggle']" style="--x:159px; --y:112px; --base-rot:-6deg; --bg:#FF9B76">
            <img :src="icoCompare" :class="$style.micon" alt="" />Сравнение двух фото*
          </span>
          <span :class="[$style.mbadge, 'wiggle']" style="--x:11px;  --y:165px; --base-rot:-8deg; --bg:#FFD551">
            <img :src="icoQ" :class="$style.micon" alt="" />Вопросы по ключевым словам*
          </span>
          <span :class="[$style.mbadge, 'wiggle']" style="--x:2px;   --y:224px; --base-rot:3deg; --bg:#C8BDFF">
            <img :src="icoMonolog" :class="$style.micon" alt="" />Тематические монологи*
          </span>
          <span :class="[$style.mbadge, 'wiggle']" style="--x:206px; --y:181px; --base-rot:-11deg; --bg:#77D1FD">
            <img :src="icoPhoto" :class="$style.micon" alt="" />Описание фото
          </span>
          <span :class="[$style.mbadge, 'wiggle']" style="--x:66px;  --y:266px; --base-rot:0deg; --bg:#FF9B76">
            <img :src="icoTalks" :class="$style.micon" alt="" />Короткие беседы (Small Talks)
          </span>
        </div>
      </header>

      <!-- ниже твои карточки оставил как были -->
      <div :class="$style.grid">
        <div :class="$style.card">
          <span :class="$style.plus">＋</span>
          <div :class="$style.cardText">
            <h3 :class="$style.cardTitle">Аудио словарь с функцией<br/>переключения языков</h3>
          </div>
          <img :src="imgPhone2x" :class="$style.cardImg" alt="" :style="{ width: imgSize.phone.w + 'px', height: imgSize.phone.h + 'px' }">
        </div>

        <div :class="$style.card">
          <span :class="$style.plus">＋</span>
          <div :class="$style.cardText">
            <h3 :class="$style.cardTitle">Встроенный<br/>онлайн переводчик</h3>
          </div>
          <img :src="imgTranslate2x" :class="$style.cardImg" alt="" :style="{ width: imgSize.translate.w + 'px', height: imgSize.translate.h + 'px' }">
        </div>

        <div :class="$style.card">
          <span :class="$style.plus">＋</span>
          <div :class="$style.cardText">
            <h3 :class="$style.cardTitle">Грамматические<br/>таблицы по английскому</h3>
          </div>
          <img :src="imgTables2x" :class="$style.cardImg" alt="" :style="{ width: imgSize.tables.w + 'px', height: imgSize.tables.h + 'px' }">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

import imgPhone2x     from '@/assets/img/teachers/teacher-extras-phone.png'
import imgTranslate2x from '@/assets/img/extras-translate.png'
import imgTables2x    from '@/assets/img/extras-tables.png'

import icoMonolog from '@/assets/img/extras-ico-monolog.svg'
import icoCompare from '@/assets/img/extras-ico-compare.svg'
import icoQ       from '@/assets/img/extras-ico-q.svg'
import icoDialog  from '@/assets/img/extras-ico-dialog.svg'
import icoPhoto   from '@/assets/img/extras-ico-photo.svg'
import icoAnswer  from '@/assets/img/extras-ico-answer.svg'
import icoTalks   from '@/assets/img/extras-ico-talks.svg'

const imgSize = {
  phone:     { w: 119, h: 143 },
  translate: { w: 194, h: 154 },
  tables:    { w: 133, h: 159 },
}

/* ======= proximity «магнит» ======= */
const zone = ref<HTMLElement|null>(null)
let rafId = 0
type BadgeState = { el: HTMLElement; tx: number; ty: number; r: number; sx: number; sy: number; sr: number }
let badges: BadgeState[] = []

function onMove(e: MouseEvent){
  if (!zone.value) return
  const rectZ = zone.value.getBoundingClientRect()
  const x = e.clientX
  const y = e.clientY
  const radius = 160   // радиус чувствительности
  const maxShift = 10  // px
  const maxRot = 5     // deg

  badges.forEach(b => {
    const r = b.el.getBoundingClientRect()
    const cx = r.left + r.width/2
    const cy = r.top  + r.height/2
    const dx = x - cx
    const dy = y - cy
    const dist = Math.hypot(dx, dy)

    if (dist < radius && x > rectZ.left && x < rectZ.right && y > rectZ.top && y < rectZ.bottom){
      const t = (1 - dist / radius) // 0..1
      // слегка «отталкиваемся» от курсора
      b.tx = (-dx / dist) * maxShift * t
      b.ty = (-dy / dist) * maxShift * t
      b.r  = (dx / radius) * maxRot * t
    } else {
      b.tx = 0; b.ty = 0; b.r = 0
    }
  })
  loop() // запустить сглаживание
}

function loop(){
  cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(()=>{
    let needNext = false
    badges.forEach(b=>{
      // плавно тянемся к «целям»
      b.sx += (b.tx - b.sx) * 0.12
      b.sy += (b.ty - b.sy) * 0.12
      b.sr += (b.r  - b.sr) * 0.12
      // применяем
      b.el.style.setProperty('--tx', `${b.sx.toFixed(2)}px`)
      b.el.style.setProperty('--ty', `${b.sy.toFixed(2)}px`)
      b.el.style.setProperty('--r',  `${b.sr.toFixed(2)}deg`)
      // нужно ли продолжать
      if (Math.abs(b.tx - b.sx) > 0.05 || Math.abs(b.ty - b.sy) > 0.05 || Math.abs(b.r - b.sr) > 0.05){
        needNext = true
      }
    })
    if (needNext) loop()
  })
}

function onLeave(){
  badges.forEach(b=>{ b.tx = b.ty = b.r = 0 })
  loop()
}

onMounted(()=>{
  const list = Array.from(document.querySelectorAll<HTMLElement>('.wiggle'))
  badges = list.map(el => ({ el, tx:0, ty:0, r:0, sx:0, sy:0, sr:0 }))
  zone.value?.addEventListener('mousemove', onMove, { passive: true })
  zone.value?.addEventListener('mouseleave', onLeave)
})
onBeforeUnmount(()=>{
  zone.value?.removeEventListener('mousemove', onMove)
  zone.value?.removeEventListener('mouseleave', onLeave)
  cancelAnimationFrame(rafId)
})
</script>

<style module>
/* ===== базовая верстка (твой прежний стиль — укорочено только в нужных местах) ===== */
.wrap{ background:#FFF; border-radius:24px; overflow:hidden; margin-top:140px; }
.inner{ max-width:1390px; margin:0 auto; padding:130px 30px 30px; }
.head{ position:relative; text-align:center; background:transparent; padding:0; }

.title{ margin:0; font-family:Inter,system-ui,sans-serif; font-weight:500; font-size:55px; line-height:.95; letter-spacing:-.05em; color:#2C2C2C; }
.tline{ display:block; }
.titleDesk{ display:block; }
.titleMob{ display:none; }

.eq{ position:relative; display:inline-block; isolation:isolate; }
.eq::before{
  content:""; position:absolute; left:-.08em; right:-.38em; top:50%;
  transform:translateY(-50%) rotate(1.2deg);
  height:1.05em; background:#FFD24A; border-radius:12px;
  box-shadow: inset 0 -2px 0 rgba(0,0,0,.06); z-index:-1;
}

.note{ color:#2C2C2C; font:500 18px/1.3 Inter,system-ui,sans-serif; letter-spacing:-.03em; text-align:center; }
.noteDesk{ margin:26px auto; max-width:680px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
.noteMob{ display:none; margin:18px 0; }

/* ===== BADGES — важная часть ===== */
/* общий стиль + НОВАЯ сборка transform на CSS-переменных */
.leftBadges, .rightBadges{
  position:absolute; top:-88px; width:360px; pointer-events:none;
}
.leftBadges{ left:0; display:flex; flex-direction:column; align-items:flex-end; }
.rightBadges{ right:0; display:flex; flex-direction:column; align-items:flex-start; padding-left:70px; }

.badge{
  display:inline-flex; align-items:center; gap:9px;
  height:44px; padding:0 13px; border-radius:10px;
  margin:20px 50px 20px 0; box-shadow:0 6px 18px rgba(16,24,40,.12);
  /* вместо transform:rotate(...) — собираем из переменных */
  transform: translate(var(--tx,0), var(--ty,0)) rotate(calc(var(--base-rot,0deg) + var(--r,0deg)));
  transition: transform .12s ease;
  will-change: transform;
}
.badgeIcon{ width:20px; height:20px; display:block; }
.badgeText{ color:#1F2937; font:600 14px/1 Inter,system-ui,sans-serif; letter-spacing:-.02em; }
/* цвета как были */
.badge:nth-child(1){ background:#C8BDFF; }
.badge:nth-child(2){ background:#FF9B76; }
.badge:nth-child(3){ background:#FFD551; }
.badge:nth-child(4){ background:#77D1FD; }
.rightBadges .badge:nth-child(1){ background:#77D1FD; }
.rightBadges .badge:nth-child(2){ background:#C8BDFF; }
.rightBadges .badge:nth-child(3){ background:#FF9B76; }

  .mbadge{
    background: var(--bg, #fff); /* ← фон из переменной, по умолчанию белый */
  }
  .m1{ --bg:#77D1FD; }   /* голубая */
  .m2{ --bg:#C8BDFF; }   /* сиреневая */
  .m3{ --bg:#FF9B76; }   /* персиковая */
  .m4{ --bg:#FFD551; }   /* жёлтая */
  .m5{ --bg:#C8BDFF; }
  .m6{ --bg:#77D1FD; }
  .m7{ --bg:#FF9B76; }

/* hover-дребезг — чистый CSS */
.wiggle:hover{
  animation: wobble .45s ease-in-out;
}
@keyframes wobble{
  0%   { --r: 0deg;   --tx: 0px;  --ty: 0px; }
  25%  { --r: 2.5deg; --tx: .5px; --ty: -1px; }
  50%  { --r:-2deg;   --tx:-.6px; --ty: .6px; }
  75%  { --r: 1.3deg; --tx: .4px; --ty:-.4px; }
  100% { --r: 0deg;   --tx: 0px;  --ty: 0px; }
}

/* ===== MOBILE badges ===== */
.mobBadges{ display:none; }
.mbadge{
  position:absolute;
  left:var(--x,0); top:var(--y,0);
  display:flex; align-items:center; gap:8px;
  height:36px; padding:0 12px; border-radius:12px;
  /* было: background:#fff; */
  background: var(--bg, #fff);   /* ← теперь берём цвет из --bg */
  box-shadow:0 6px 18px rgba(16,24,40,.12);
  font:500 14px/1.3 Inter,system-ui,sans-serif; letter-spacing:-.03em;
  white-space:nowrap; max-width:320px; overflow:hidden; text-overflow:ellipsis;
  transform: translate(var(--tx,0), var(--ty,0))
             rotate(calc(var(--base-rot,0deg) + var(--r,0deg)));
  transition: transform .12s ease; will-change: transform;
  color: #2C2C2C;
}

.micon{ width:18px; height:18px; flex:0 0 18px; }

/* ===== Cards (как было) ===== */
.grid{ margin-top:100px; display:grid; grid-template-columns:repeat(3,1fr); column-gap:39px; }
.card{ position:relative; background:#F7F9FE; border:2px solid #EAEEF7; border-radius:20px; height:210px; overflow:hidden; }
.plus{ position:absolute; left:30px; top:30px; width:28px; height:28px; border-radius:999px; display:grid; place-items:center; background:#B87EFF; color:#fff; font-weight:700; line-height:1; box-shadow:0 6px 14px rgba(184,126,255,.35); user-select:none; }
.cardText{ position:absolute; left:30px; bottom:30px; max-width:58%; }
.cardTitle{ margin:0; color:#1F2937; font:600 18px/1.3 Inter,system-ui,sans-serif; letter-spacing:-.03em; text-align:left; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
.cardImg{ position:absolute; right:0; bottom:0; display:block; object-fit:contain; pointer-events:none; }

/* ===== Tablet ===== */
@media (max-width:1200px){
  .grid{ grid-template-columns:1fr; row-gap:28px; }
  .leftBadges, .rightBadges{ display:none; }
  .card{ height:220px; }
  .cardText{ right:24px; max-width:68%; }
}

/* ===== Mobile ===== */
@media (max-width:640px){
  .wrap{ background:#E9EFF7; border-radius:0; overflow:visible; margin-top:120px; }
  .inner{ width:390px; max-width:390px; margin:0 auto; padding:0 0 20px; }
  .head{ width:390px; margin:0 auto; padding:40px 25px 18px 20px; background:#fff; border-radius:20px; box-shadow:0 8px 22px rgba(16,24,40,.06); }
  .titleDesk{ display:none; }
  .titleMob{ display:block; font-size:33px; line-height:1.02; letter-spacing:-.04em; color:#2C2C2C; margin:0; }
  .mline{ display:block; }
  .mEq{ position:relative; display:inline-block; isolation:isolate; }
  .mEq::before{
    content:""; position:absolute; left:-.38em; right:-.38em; top:50%;
    transform:translateY(-50%) rotate(1.2deg); height:1.05em; background:#FFD24A; border-radius:12px;
    box-shadow: inset 0 -2px 0 rgba(0,0,0,.06); z-index:-1;
  }
  .noteDesk{ display:none; }
  .noteMob{ display:block; font-size:16px; line-height:1.3; letter-spacing:-.03em; margin:14px 0 16px; }

  .mobBadges{ display:block; position:relative; width:100%; height:310px; margin-top:6px; }
  .grid{ width:390px; margin:16px auto 0; grid-template-columns:1fr; row-gap:16px; }
  .card{ height:170px; border-radius:16px; background-color: #ffffff;}
  .plus{ left:20px; top:20px; width:26px; height:26px; }
  .cardText{ left:20px; right:20px; bottom:20px; max-width:70%; }
  .cardTitle{ font-size:16px; }
}
</style>
