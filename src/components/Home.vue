<template>
    <!-- <section id="home" class="min-h-screen flex items-center justify-center bg-gray-100" data-aos="fade-up" data-aos-duration="1500"> -->
    <section id="home" class="min-h-screen flex justify-center bg-gray-100 relative">
        <div class="text-center text-gray-300 flex flex-col bg-black/80 w-full items-center justify-center">
            <h2 class="text-3xl font-bold">Welcome to Our Website</h2>
            <p class="text-lg mt-4">This is the home section with some dummy content.</p>
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

<style scoped>
section {
    background: url(./images/home-bg.jpg) no-repeat;
    background-size: cover;
    background-position: center;
}
</style>
