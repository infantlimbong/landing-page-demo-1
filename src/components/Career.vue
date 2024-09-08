<template>
    <section id="career" class="min-h-screen flex items-center justify-center bg-gray-100" data-aos="fade-up" data-aos-duration="1500">
        <div class="text-center">
            <h2 class="text-3xl font-bold">Career</h2>
            <p class="text-lg mt-4">Find job opportunities in our career section.</p>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
    AOS.refresh()
})
</script>

<style scoped></style>
