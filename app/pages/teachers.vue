<script setup lang="ts">
import TeachersHero from '~/components/teachers/TeacherHero.vue'
import TeachersHowItWorks from '~/components/teachers/TeacherHowItWorks.vue'
import TeachersPromoBanner from '~/components/teachers/TeacherPromoBanner.vue'
import TeachersCoursesShowcase from '~/components/teachers/TeacherCoursesShowcase.vue'
import TeachersUcsBrand from '~/components/teachers/TeacherUcsBrand.vue'
import TeachersFaqBlock from '~/components/teachers/TeacherFaqBlock.vue'
import TeachersTestimonials from '~/components/teachers/TeacherTestimonials.vue'
import TeachersPricingTickets from '~/components/teachers/TeacherPricingTickets.vue'
import TeachersCoopBanner from '~/components/teachers/TeacherCoopBanner.vue'
import TeachersEnjoyResults from '~/components/teachers/TeacherEnjoyResults.vue'
import TeachersInteractiveLessons from '~/components/teachers/TeacherInteractiveLessons.vue'
import UseReadyLessons from '~/components/teachers/UseReadyLessons.vue'
import TeachersFeatures from '~/components/teachers/TeacherFeatures.vue'


useHead({ title: 'Ucanspeak — Преподавателям' })
</script>

<template>
  <main class="container">
    <TeachersHero />
    <TeachersHowItWorks />
    <TeachersPromoBanner />
    <TeachersCoursesShowcase />
    <TeachersInteractiveLessons />
    <UseReadyLessons />
    <TeachersFeatures />
    <TeachersExclusives />
    <TeachersEnjoyResults/>
    <TeachersCoopBanner/>
    <TeachersUcsBrand />
    <TeachersPricingTickets />
    <TeachersFaqBlock />
    <TeachersTestimonials />
    <Footer />
  </main>
</template>
