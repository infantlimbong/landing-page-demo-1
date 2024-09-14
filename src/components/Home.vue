<template>
    <section id="home" class="relative">
        <div class="jumbotron h-96 md:min-h-screen flex justify-center">
            <div class="text-center text-gray-300 flex flex-col bg-black/70 w-full items-center justify-center px-5">
                <h2 class="text-3xl font-serif uppercase">Empress Canton House</h2>
                <p class="text-lg my-4 font-cursive">Experience the finest Cantonese cuisine in an ambiance of elegance and tradition.</p>
                <button class="bg-primary text-secondary py-1 px-4">MENUS</button>
            </div>
        </div>
        <div>
            <h2 class="text-center font-light font-serif text-dark">SIGNATURE MENUS</h2>
            <div v-for="(menu, index) in menus" :key="index" class="flex flex-col">
                <img :src="menu.img" :alt="menu.name" />
                <div>
                    <h4 class="font-semibold text-serif uppercase">{{ menu.name }}</h4>
                    <p>{{ menu.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AOS from 'aos'

onMounted(() => {
    AOS.refresh()
})

const menus = ref([
    {
        name: 'Cantonese Chicken Noodle Soup',
        img: '/images/home-menu-1.jpg',
        description: 'A comforting bowl of light noodles with tender chicken slices, mushrooms, and bright red peppers. A perfect harmony of delicate and fragrant flavors.',
    },
    {
        name: 'Sichuan Spicy Chicken Stir-Fry',
        img: '/images/home-menu-2.jpg',
        description: 'Tender chicken stir-fried with bell peppers and onions, coated in a rich, spicy Sichuan sauce. Served with a fresh lettuce leaf for a balanced bite.',
    },
    {
        name: 'Crispy Shrimp Delight',
        img: '/images/home-menu-3.jpg',
        description: 'Juicy prawns, grilled to perfection and served with a crisp vegetable garnish. Accompanied by a zesty green dipping sauce for an added burst of flavor.',
    },
])
</script>

<style scoped>
.jumbotron {
    background: url(./images/home-bg.jpg) no-repeat;
    background-size: cover;
    background-position: center;
}
</style>
