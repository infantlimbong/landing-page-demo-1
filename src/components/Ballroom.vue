<template>
    <section id="ballroom" class="min-h-screen flex items-center justify-center bg-gray-100" data-aos="fade-up" data-aos-duration="1500">
        <div class="text-center">
            <h2 class="text-3xl font-bold">Ballroom</h2>
            <p class="text-lg mt-4">Information about the ballroom goes here.</p>
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
