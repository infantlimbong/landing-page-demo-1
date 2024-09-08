<template>
    <nav class="bg-white shadow fixed w-full z-50">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
            <h1 class="text-lg font-bold">Landing Page</h1>
            <ul class="flex space-x-4">
                <li>
                    <a @click.prevent="$scrollTo('#home')" :class="{ 'bg-blue-500 text-white rounded-md px-2 py-1': activeSection === 'home', 'text-gray-700 hover:text-blue-500 cursor-pointer': activeSection !== 'home' }"> Home </a>
                </li>
                <li>
                    <a @click.prevent="$scrollTo('#gallery')" :class="{ 'bg-blue-500 text-white rounded-md px-2 py-1': activeSection === 'gallery', 'text-gray-700 hover:text-blue-500 cursor-pointer': activeSection !== 'gallery' }"> Gallery </a>
                </li>
                <li>
                    <a @click.prevent="$scrollTo('#ballroom')" :class="{ 'bg-blue-500 text-white rounded-md px-2 py-1': activeSection === 'ballroom', 'text-gray-700 hover:text-blue-500 cursor-pointer': activeSection !== 'ballroom' }"> Ballroom </a>
                </li>
                <li>
                    <a @click.prevent="$scrollTo('#order')" :class="{ 'bg-blue-500 text-white rounded-md px-2 py-1': activeSection === 'order', 'text-gray-700 hover:text-blue-500 cursor-pointer': activeSection !== 'order' }"> Online Order </a>
                </li>
                <li>
                    <a @click.prevent="$scrollTo('#career')" :class="{ 'bg-blue-500 text-white rounded-md px-2 py-1': activeSection === 'career', 'text-gray-700 hover:text-blue-500 cursor-pointer': activeSection !== 'career' }"> Career </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('home')

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

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
