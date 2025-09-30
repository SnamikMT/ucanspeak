<script setup lang="ts">
import TeachersHero from '~/components/teachers/TeacherHero.vue'
import TeachersHowItWorks from '~/components/teachers/TeacherHowItWorks.vue'
import TeachersPromoBanner from '~/components/teachers/TeacherPromoBanner.vue'
import TeachersCoursesShowcase from '~/components/teachers/TeacherCoursesShowcase.vue'
import TeachersUcsBrand from '~/components/teachers/TeacherUcsBrand.vue'
import TeachersMoreTasksFeatures from '~/components/teachers/TeacherMoreTasksFeatures.vue'
import TeachersFaqBlock from '~/components/teachers/TeacherFaqBlock.vue'
import TeachersTestimonials from '~/components/teachers/TeacherTestimonials.vue'
import TeachersPricingTickets from '~/components/teachers/TeacherPricingTickets.vue'

useHead({ title: 'Ucanspeak — Преподавателям' })
</script>

<template>
  <main class="container">
    <TeachersHero />
    <TeachersHowItWorks />
    <TeachersPromoBanner />
    <TeachersCoursesShowcase />
    <TeachersAudioTrainer />
    <TeachersInteractiveLessons />
    <TeachersProgress />
    <TeachersUcsBrand />
    <TeachersMoreTasksFeatures />
    <TeachersBikeNotBicycle />
    <TeachersPricingTickets />
    <TeachersFaqBlock />
    <TeachersTestimonials />
    <Footer />
  </main>
</template>
