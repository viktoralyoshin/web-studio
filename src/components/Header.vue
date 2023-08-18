<template>
  <img class="fixed z-[-10] overflow-hidden object-cover opacity-40" src="../../public/bg.svg" alt="">
  <Navbar></Navbar>
  <div class="h-screen flex max-w-[1200px] mx-auto items-center">
    <div class="flex flex-col">
      <div class="text-white text-[26px] w-[600px] flex flex-col gap-5">
        <h1 class="text-[48px] text-purple-500  font-medium">&ltFuture - Web-Studio/&gt</h1>
        <h1>Разработаем сайт, который привлечёт, удержит и превратит посетителей в клиентов!</h1>
      </div>
    </div>
    <img class="overflow-hidden absolute z-[-5] right-0" src="../../public/img.svg" alt="">
  </div>
</template>
<script setup>
import Navbar from "./Header/Navbar.vue";
</script>
