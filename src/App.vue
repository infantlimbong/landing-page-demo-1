<template>
    <Navbar />
    <div class="container font-serif">
        <Home />
        <Gallery />
        <Ballroom />
        <OnlineOrder />
        <Career />
    </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Gallery from './components/Gallery.vue'
import Ballroom from './components/Ballroom.vue'
import OnlineOrder from './components/OnlineOrder.vue'
import Career from './components/Career.vue'
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>
