<template>
  <div :class="$style.card">
    <!-- Постер -->
    <img
      v-if="poster"
      :src="poster"
      :class="[$style.poster, showPoster ? $style.visible : $style.hidden]"
      alt=""
      draggable="false"
    />

    <!-- Видео появляется только после готовности -->
    <video
      v-if="hasStarted || showVideo"
      ref="vid"
      :class="[$style.video, showVideo ? $style.visible : $style.hidden]"
      :poster="poster"
      :muted="muted"
      playsinline
      webkit-playsinline
      preload="metadata"
      controls="false"
      disablepictureinpicture
      disableremoteplayback
      @canplay="onFirstFrame"
    >
      <source v-if="videoWebm" :src="videoWebm" type="video/webm" />
      <source v-if="videoMp4"  :src="videoMp4"  type="video/mp4" />
    </video>

    <!-- Play поверх -->
    <button v-if="!isPlaying" :class="$style.play" @click.stop="startVideo">
      ▶
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  videoWebm: String,
  videoMp4: String,
  poster: String,
})

const vid = ref<HTMLVideoElement|null>(null)
const showVideo = ref(false)
const showPoster = ref(true)
const hasStarted = ref(false)
const isPlaying = ref(false)
const muted = ref(false)

function onFirstFrame() {
  showVideo.value = true
  setTimeout(() => { showPoster.value = false }, 100)
}

async function startVideo() {
  const v = vid.value
  if (!v) return
  hasStarted.value = true
  muted.value = false
  v.muted = false
  try {
    await v.play()
    isPlaying.value = true
  } catch {
    // fallback: если блокирует звук
    v.muted = true
    muted.value = true
    await v.play().catch(()=>{})
    isPlaying.value = true
  }
}
</script>

<style module>
.card{
  position:relative;
  overflow:hidden;
}

/* Скрываем видео полностью пока не надо */
.video{
  position:absolute; inset:0;
  width:100%; height:100%;
  object-fit:cover;
  border-radius:inherit;
  opacity:0; visibility:hidden;
  transition:opacity .2s ease, visibility .2s ease;
  background:#000;
}

/* Постер */
.poster{
  position:absolute; inset:0;
  width:100%; height:100%;
  object-fit:cover;
  border-radius:inherit;
  transition:opacity .2s ease;
}

/* классы видимости */
.visible{ opacity:1; visibility:visible; }
.hidden { opacity:0; visibility:hidden; }

/* Play */
.play{
  position:absolute; left:50%; top:50%;
  transform:translate(-50%,-50%);
  width:56px; height:56px;
  border:0; border-radius:50%;
  background:#B87EFF; color:#fff;
  font-size:20px;
  box-shadow:0 8px 18px rgba(184,126,255,.35);
  cursor:pointer;
  z-index:3;
}
</style>
