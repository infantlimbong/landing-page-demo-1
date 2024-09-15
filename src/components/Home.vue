<template>
    <section id="home" class="relative">
        <div class="jumbotron h-96 md:min-h-screen flex justify-center">
            <div class="text-center text-gray-300 flex flex-col bg-black/70 w-full items-center justify-center px-5">
                <h2 class="text-3xl font-serif uppercase">Empress Canton House</h2>
                <p class="text-lg my-4 font-cursive"> Experience the finest Cantonese cuisine in an ambiance of elegance and tradition. </p>
                <button class="bg-secondary text-primary py-1 px-4 hover:opacity-70 transition-all duration-300">ORDER</button>
            </div>
        </div>

        <div class="mt-5 px-5">
            <h2 class="text-center font-bold font-sans text-dark text-xl relative pb-2">
                SIGNATURE MENUS
                <div class="absolute w-full h-[1px] bottom-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </h2>

            <div v-if="isSmallScreen" class="relative w-full overflow-hidden mt-4" @touchstart="startTouch" @touchmove="moveTouch" data-aos="fade-up" data-aos-duration="1500">
                <div class="w-full flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                    <div class="relative w-full flex-shrink-0" v-for="(menu, index) in menus" :key="index">
                        <img :src="menu.img" :alt="menu.name" class="w-full object-cover" />
                        <div class="text-center mt-4">
                            <h4 class="font-bold text-serif uppercase">{{ menu.name }}</h4>
                            <p class="font-sans text-primary">{{ menu.price }}</p>
                            <p>{{ menu.description }}</p>
                        </div>
                    </div>
                </div>

                <button @click="prevSlide" class="absolute top-[50%] translate-y-[-50%] left-1 bg-black/50 text-white p-2 rounded-full w-11 aspect-square grid place-items-center">
                    <i class="bx bx-chevron-left text-2xl"></i>
                </button>
                <button @click="nextSlide" class="absolute top-[50%] translate-y-[-50%] right-1 bg-black/50 text-white p-2 rounded-full w-11 aspect-square grid place-items-center">
                    <i class="bx bx-chevron-right text-2xl"></i>
                </button>

                <div class="flex justify-center space-x-2 mt-4">
                    <span v-for="(menu, i) in menus" :key="i" @click="goToSlide(i)" :class="i === currentIndex ? 'bg-primary' : 'bg-gray-300'" class="w-3 h-3 rounded-full cursor-pointer"></span>
                </div>
            </div>

            <div v-else class="grid grid-cols-3 gap-4 mt-4">
                <div v-for="(menu, index) in menus" :key="index" class="menu-item flex flex-col">
                    <img :src="menu.img" :alt="menu.name" class="w-full object-cover" />
                    <div class="text-center mt-4">
                        <h4 class="font-bold text-serif uppercase">{{ menu.name }}</h4>
                        <p class="font-sans text-primary">{{ menu.price }}</p>
                        <p>{{ menu.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AOS from 'aos'

const menus = ref([
    {
        name: 'Cantonese Chicken Noodle Soup',
        img: '/images/home-menu-1.jpg',
        price: '99.000 IDR',
        description: 'Light noodles with tender chicken, mushrooms, and red peppers.',
    },
    {
        name: 'Sichuan Spicy Chicken Stir-Fry',
        img: '/images/home-menu-2.jpg',
        price: '199.000 IDR',
        description: 'Chicken stir-fried with peppers in spicy Sichuan sauce.',
    },
    {
        name: 'Crispy Shrimp Delight',
        img: '/images/home-menu-3.jpg',
        price: '179.000 IDR',
        description: 'Grilled prawns with vegetable garnish and green dipping sauce.',
    },
])

const isSmallScreen = ref(false)
const currentIndex = ref(0)

const checkScreenSize = () => {
    isSmallScreen.value = window.innerWidth < 640
}

const startCarousel = () => {
    const interval = setInterval(() => {
        nextSlide()
    }, 10000)

    onBeforeUnmount(() => clearInterval(interval))
}

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + menus.value.length) % menus.value.length
}

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % menus.value.length
}

const goToSlide = (index) => {
    currentIndex.value = index
}

let touchStartX = 0

const startTouch = (event) => {
    touchStartX = event.touches[0].clientX
}

const moveTouch = (event) => {
    const touchEndX = event.touches[0].clientX
    if (touchEndX < touchStartX - 50) {
        nextSlide()
    }
    if (touchEndX > touchStartX + 50) {
        prevSlide()
    }
}

onMounted(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    AOS.init({
        once: true,
    })

    if (isSmallScreen.value) {
        startCarousel()
    }

    AOS.refresh()

    return () => {
        window.removeEventListener('resize', checkScreenSize)
    }
})
</script>

<style scoped>
.jumbotron {
    background: url(./images/home-bg.jpg) no-repeat;
    background-size: cover;
    background-position: center;
}
</style>
