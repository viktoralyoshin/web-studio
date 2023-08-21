<template>
  <img class="fixed z-[-10] overflow-hidden object-cover md:w-screen h-screen opacity-40" src="../../public/bg.svg" alt="">
  <Navbar></Navbar>
  <div id="header" class="h-screen flex lg:flex-row flex-col md:max-w-[1200px] mx-auto items-center">
    <div class="flex flex-col justify-center h-screen">
      <div class="text-white md:text-[20px] lg:text-[24px] max-w-[640px] md:w-[640px] flex flex-col gap-5 text-[16px] text-center lg:text-left mx-4">
        <h1 class="lg:text-[46px] md:text-[36px] text-[26px] text-green-500 font-medium font-head">&lt<span class="text-white">WebLab - Web-Dev</span>/&gt</h1>
        <h1>Разработаем сайт, который привлечёт, удержит и превратит посетителей в клиентов!</h1>
      </div>
    </div>
    <img class="object-cover lg:flex hidden lg:overflow-visible overflow-hidden" src="../../public/img.svg" alt="">
  </div>
</template>
<script setup>
import Navbar from "./Header/Navbar.vue";
</script>
