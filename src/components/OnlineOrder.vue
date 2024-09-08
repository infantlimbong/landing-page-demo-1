<template>
    <section id="order" class="min-h-screen flex items-center justify-center bg-white" data-aos="fade-up" data-aos-duration="1500">
        <div class="text-center">
            <h2 class="text-3xl font-bold">Online Order</h2>
            <p class="text-lg mt-4">This section is for online orders.</p>
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
