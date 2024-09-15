<template>
    <nav class="bg-primary sticky md:fixed top-0 w-full z-50 h-14">
        <div class="container mx-auto flex justify-between items-center">
            <div class="w-full h-14 flex items-center justify-between px-5">
                <a href="" class="flex items-center gap-x-1">
                    <img src="/images/logo.png" alt="Logo image" class="w-9" />
                    <h1 class="text-xl font-bold font-serif text-secondary">ECH</h1>
                </a>
                <!-- Hamburger Menu for Mobile -->
                <div class="md:hidden">
                    <button @click="toggleNavbar" class="relative z-50 flex flex-col w-8 aspect-square items-end justify-center">
                        <!-- Hamburger Icon and X Icon with transition -->
                        <span :class="{ 'transform rotate-45 transition-transform': isNavbarOpen }" class="block w-6 h-0.5 bg-secondary rounded"></span>
                        <span :class="{ 'opacity-0': isNavbarOpen }" class="block w-6 h-0.5 bg-secondary mt-1.5 rounded"></span>
                        <span :class="{ 'transform -rotate-45 mt-[-10px] transition-transform': isNavbarOpen }" class="block w-6 h-0.5 bg-secondary mt-1.5 rounded"></span>
                    </button>
                </div>
            </div>
            <!-- Desktop Navbar -->
            <ul class="hidden md:flex space-x-4">
                <li>
                    <a @click.prevent="scrollToSection('home')" :class="linkClasses('home')"> Home </a>
                </li>
                <li>
                    <a @click.prevent="scrollToSection('gallery')" :class="linkClasses('gallery')"> Gallery </a>
                </li>
                <li>
                    <a @click.prevent="scrollToSection('ballroom')" :class="linkClasses('ballroom')"> Ballroom </a>
                </li>
                <li>
                    <a @click.prevent="scrollToSection('order')" :class="linkClasses('order')"> Online Order </a>
                </li>
                <li>
                    <a @click.prevent="scrollToSection('career')" :class="linkClasses('career')"> Career </a>
                </li>
            </ul>
        </div>
        <!-- Mobile Navbar -->
        <div :class="{ 'translate-x-0 opacity-100': isNavbarOpen, '-translate-x-full opacity-0': !isNavbarOpen }" class="fixed left-0 top-14 w-full h-full bg-black/30 backdrop-blur-lg transition-all duration-500 md:hidden">
            <ul class="px-6 h-full text-center flex flex-col justify-center pb-28 text-lg">
                <li class="w-full relative flex">
                    <a @click.prevent="scrollToSection('home')" :class="['py-4 w-full', linkClasses('home')]"> Home </a>
                    <div :class="['absolute w-full h-[.5px] bottom-0 md:hidden', lineClasses('home')]"></div>
                </li>
                <li class="w-full relative flex">
                    <a @click.prevent="scrollToSection('gallery')" :class="['py-4 w-full', linkClasses('gallery')]"> Gallery </a>
                    <div :class="['absolute w-full h-[.5px] bottom-0 md:hidden', lineClasses('gallery')]"></div>
                </li>
                <li class="w-full relative flex">
                    <a @click.prevent="scrollToSection('ballroom')" :class="['py-4 w-full', linkClasses('ballroom')]"> Ballroom </a>
                    <div :class="['absolute w-full h-[.5px] bottom-0 md:hidden', lineClasses('ballroom')]"></div>
                </li>
                <li class="w-full relative flex">
                    <a @click.prevent="scrollToSection('order')" :class="['py-4 w-full', linkClasses('order')]"> Online Order </a>
                    <div :class="['absolute w-full h-[.5px] bottom-0 md:hidden', lineClasses('order')]"></div>
                </li>
                <li class="w-full relative flex">
                    <a @click.prevent="scrollToSection('career')" :class="['py-4 w-full', linkClasses('career')]"> Career </a>
                    <div :class="['absolute w-full h-[.5px] bottom-0 md:hidden', lineClasses('career')]"></div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('home')
const isNavbarOpen = ref(false)

// Handle section scroll and active link
const handleScroll = () => {
    const sections = [
        { id: 'home', offset: document.getElementById('home').offsetTop },
        { id: 'gallery', offset: document.getElementById('gallery').offsetTop },
        { id: 'ballroom', offset: document.getElementById('ballroom').offsetTop },
        { id: 'order', offset: document.getElementById('order').offsetTop },
        { id: 'career', offset: document.getElementById('career').offsetTop },
    ]
    const currentScrollPos = window.scrollY + window.innerHeight / 2
    sections.forEach((section) => {
        if (currentScrollPos >= section.offset) {
            activeSection.value = section.id
        }
    })
}

// Toggle mobile navbar
const toggleNavbar = () => {
    isNavbarOpen.value = !isNavbarOpen.value
    if (isNavbarOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

// Scroll to a section and close the mobile navbar
const scrollToSection = (section) => {
    const el = document.getElementById(section)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        isNavbarOpen.value = false
        document.body.style.overflow = ''
    }
}

// Get link class based on active section
const linkClasses = (section) => {
    return activeSection.value === section ? 'text-primary' : 'text-white'
}

const lineClasses = (section) => {
    return activeSection.value === section ? 'bg-gradient-to-r from-transparent via-primary to-transparent' : 'bg-gradient-to-r from-transparent via-white to-transparent'
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
button span {
    transition: all 0.3s ease;
}
</style>
