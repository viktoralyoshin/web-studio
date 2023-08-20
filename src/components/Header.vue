<template>
  <img class="fixed z-[-10] overflow-hidden object-cover opacity-40" src="../../public/bg.svg" alt="">
  <Navbar></Navbar>
  <div id="header" class="h-screen flex max-w-[1200px] mx-auto items-center">
    <div class="flex flex-col">
      <div class="text-white text-[26px] w-[640px] flex flex-col gap-5">
        <h1 class="text-[46px] text-green-500 font-medium font-head">&lt<span class="text-white">WebLab - Web-Dev</span>/&gt</h1>
        <h1>Разработаем сайт, который привлечёт, удержит и превратит посетителей в клиентов!</h1>
      </div>
    </div>
    <img class="object-cover" src="../../public/img.svg" alt="">
  </div>
</template>
<script setup>
import Navbar from "./Header/Navbar.vue";
</script>
