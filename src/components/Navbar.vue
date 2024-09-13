<template>
    <nav class="bg-white shadow fixed w-full z-50 h-14">
        <div class="container mx-auto flex justify-between items-center">
            <div class="w-full h-14 flex items-center justify-between px-4">
                <h1 class="text-lg font-bold">Landing Page</h1>
                <!-- Hamburger Menu for Mobile -->
                <div class="md:hidden">
                    <button @click="toggleNavbar" class="relative z-50 flex flex-col w-8 aspect-square items-center justify-center">
                        <!-- Hamburger Icon and X Icon with transition -->
                        <span :class="{ 'transform rotate-45 transition-transform': isNavbarOpen }" class="block w-6 h-0.5 bg-black transition-all duration-300 rounded"></span>
                        <span :class="{ 'opacity-0': isNavbarOpen }" class="block w-6 h-0.5 bg-black mt-1.5 transition-opacity duration-300 rounded"></span>
                        <span :class="{ 'transform -rotate-45 -mt-2.5 transition-transform': isNavbarOpen }" class="block w-6 h-0.5 bg-black mt-1.5 transition-all duration-300 rounded"></span>
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
        <div :class="{ 'translate-x-0': isNavbarOpen, '-translate-x-full': !isNavbarOpen }" class="fixed left-0 top-14 w-full h-full bg-white/10 backdrop-blur-lg trans shadow-lg transform transition-transform duration-300 md:hidden">
            <ul class="space-y-4 px-6 bg-red-200/10 h-full">
                <li>
                    <a @click.prevent="scrollToSection('home')" :class="['text-white', linkClasses('home')]"> Home </a>
                </li>
                <li>
                    <a @click.prevent="scrollToSection('gallery')" :class="['text-white', linkClasses('gallery')]"> Gallery </a>
                </li>
                <li>
                    <a @click.prevent="scrollToSection('ballroom')" :class="['text-white', linkClasses('ballroom')]"> Ballroom </a>
                </li>
                <li>
                    <a @click.prevent="scrollToSection('order')" :class="['text-white', linkClasses('order')]"> Online Order </a>
                </li>
                <li>
                    <a @click.prevent="scrollToSection('career')" :class="['text-white', linkClasses('career')]"> Career </a>
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
}

// Scroll to a section and close the mobile navbar
const scrollToSection = (section) => {
    const el = document.getElementById(section)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        isNavbarOpen.value = false // Close navbar on navigation
    }
}

// Get link class based on active section
const linkClasses = (section) => {
    return activeSection.value === section ? 'bg-blue-500 text-white rounded-md px-2 py-1' : 'text-gray-700 hover:text-blue-500 cursor-pointer'
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* For smooth hamburger icon transition */
button span {
    transition: all 0.3s ease;
}
</style>
