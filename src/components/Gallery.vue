<template>
    <section id="gallery" class="min-h-screen flex items-center justify-center bg-white" data-aos="fade-up" data-aos-duration="1500">
        <div class="text-center w-full">
            <h2 class="text-3xl font-bold mb-8">Gallery</h2>
            <swiper
                :grabCursor="true"
                :slides-per-view="1"
                :spaceBetween="10"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }"
                :pagination="{
                    clickable: true,
                }"
                :navigation="true"
                :breakpoints="{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }"
                :modules="[Pagination, Navigation, Autoplay]"
                class="swiper-container"
            >
                <swiper-slide v-for="(slide, index) in slides" :key="index">
                    <div v-if="slide.length === 1" class="image-container">
                        <img :src="slide[0].src" :alt="slide[0].alt" class="image" />
                    </div>
                    <div v-else class="image-container grid-layout">
                        <img :src="slide[0].src" :alt="slide[0].alt" class="image" />
                        <img :src="slide[1].src" :alt="slide[1].alt" class="image" />
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import AOS from 'aos'

// Gallery images
const images = ref([
    { src: '/images/gallery/1.jpg', alt: 'Gallery Image 1', isLandscape: false },
    { src: '/images/gallery/2.jpg', alt: 'Gallery Image 2', isLandscape: true },
    { src: '/images/gallery/3.jpg', alt: 'Gallery Image 3', isLandscape: true },
    { src: '/images/gallery/4.jpg', alt: 'Gallery Image 4', isLandscape: false },
    { src: '/images/gallery/5.jpg', alt: 'Gallery Image 5', isLandscape: false },
    { src: '/images/gallery/6.jpg', alt: 'Gallery Image 6', isLandscape: false },
    { src: '/images/gallery/7.jpg', alt: 'Gallery Image 7', isLandscape: false },
    { src: '/images/gallery/8.jpg', alt: 'Gallery Image 8', isLandscape: false },
    { src: '/images/gallery/9.jpg', alt: 'Gallery Image 9', isLandscape: false },
    { src: '/images/gallery/10.jpg', alt: 'Gallery Image 10', isLandscape: true },
    { src: '/images/gallery/11.jpg', alt: 'Gallery Image 11', isLandscape: true },
    { src: '/images/gallery/12.jpg', alt: 'Gallery Image 12', isLandscape: false },
    { src: '/images/gallery/13.jpg', alt: 'Gallery Image 13', isLandscape: true },
    { src: '/images/gallery/14.jpg', alt: 'Gallery Image 14', isLandscape: true },
])

const slides = ref([])

const processImages = () => {
    let tempSlide = []
    images.value.forEach((image, index) => {
        if (image.isLandscape) {
            tempSlide.push(image)
            if (tempSlide.length === 2) {
                slides.value.push(tempSlide)
                tempSlide = []
            }
        } else {
            if (tempSlide.length === 1) {
                slides.value.push(tempSlide)
                tempSlide = []
            }
            slides.value.push([image])
        }
    })
    if (tempSlide.length === 1) {
        slides.value.push(tempSlide)
    }
}

onMounted(() => {
    AOS.refresh()
    processImages()
})
</script>

<style scoped>
.swiper-container {
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.grid-layout {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    height: 100%;
}

::v-deep .swiper-button-next,
::v-deep .swiper-button-prev {
    color: #fff;
    scale: 0.5;
}

::v-deep .swiper-pagination-bullet {
    background-color: #e6c895 !important;
}

::v-deep .swiper-pagination-bullet-active {
    background-color: #9a0000 !important;
}
</style>
