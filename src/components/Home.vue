<template>
    <section id="home" class="relative">
        <div class="jumbotron h-96 md:min-h-screen flex justify-center">
            <div class="text-center text-gray-300 flex flex-col bg-black/70 w-full items-center justify-center px-5">
                <h2 class="text-3xl font-serif uppercase">Empress Canton House</h2>
                <p class="text-lg my-4 font-cursive"> Experience the finest Cantonese cuisine in an ambiance of elegance and tradition. </p>
                <button class="bg-secondary text-primary py-1 px-4 hover:opacity-70 transition-all duration-300"> ORDER </button>
            </div>
        </div>

        <div class="mt-5 px-5 overflow-hidden">
            <h2 class="text-center font-bold font-sans text-dark text-xl relative pb-2">
                SIGNATURE MENUS
                <div class="absolute w-full h-[1px] bottom-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </h2>

            <div v-if="isSmallScreen" class="relative w-full mt-4" data-aos="fade-up" data-aos-duration="1500">
                <swiper
                    :effect="'cards'"
                    :grabCursor="true"
                    :spaceBetween="0"
                    :pagination="{
                        dynamicBullets: true,
                    }"
                    :centeredSlides="true"
                    :autoplay="{
                        delay: 5000,
                        disableOnInteraction: false,
                    }"
                    :modules="modules"
                    class="swiper-container"
                    @slideChange="onSlideChange"
                >
                    <swiper-slide v-for="(menu, index) in menus" :key="index" class="relative w-full">
                        <img :src="menu.img" :alt="menu.name" class="w-full object-cover rounded-md" />
                    </swiper-slide>
                </swiper>

                <div class="text-center mt-4" v-if="menus[currentIndex]">
                    <h4 class="font-bold text-serif uppercase">{{ menus[currentIndex].name }}</h4>
                    <p class="font-sans text-primary">{{ menus[currentIndex].price }}</p>
                    <p>{{ menus[currentIndex].description }}</p>
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
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'

import { Autoplay, Pagination, Navigation, EffectCards } from 'swiper/modules'

// Menus data
const menus = ref([
    {
        name: 'Crispy Shrimp Delight',
        img: '/images/home-menu-3.jpg',
        price: '179.000 IDR',
        description: 'Grilled prawns with vegetable garnish and green dipping sauce.',
    },
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
])

const isSmallScreen = ref(false)
const currentIndex = ref(0)

const modules = [Autoplay, Pagination, Navigation, EffectCards]

const checkScreenSize = () => {
    isSmallScreen.value = window.innerWidth < 640
}

const onSlideChange = (swiper) => {
    currentIndex.value = swiper.activeIndex
}

onMounted(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

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

::v-deep .swiper-pagination-bullet {
    background-color: #e6c895 !important;
}

::v-deep .swiper-pagination-bullet-active {
    background-color: #9a0000 !important;
}
</style>
