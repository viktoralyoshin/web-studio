<template>
  <div class="fixed w-full backdrop-blur-xl backdrop-brightness-50 z-50">
    <div class="max-w-[1200px] items-center mx-auto">
      <div class="flex justify-between text-white my-6 mx-4">
        <div class="flex items-center">
          <h1 class="font-[500] md:text-[24px] text-[18px] font-head tracking-wider">
            <span class="text-green-500">Web</span>Lab
          </h1>
        </div>
        <nav class="hidden text-white font-medium md:flex items-center gap-6 text-[17px]">
          <router-link
            to="#header"
            class="opacity-70 hover:opacity-100 duration-200 ease-in cursor-pointer"
          >
            Главная
          </router-link>
          <router-link
            to="/#services"
            class="opacity-70 hover:opacity-100 duration-200 ease-in cursor-pointer"
          >
            Услуги
          </router-link>
          <router-link
            to="/#portfolio"
            class="opacity-70 hover:opacity-100 duration-200 ease-in cursor-pointer"
          >
            Портфолио
          </router-link>
          <router-link
            to="/#about"
            class="opacity-70 hover:opacity-100 duration-200 ease-in cursor-pointer"
          >
            О нас
          </router-link>
        </nav>
        <a
          class="decoration-none no-underline bg-gradient-to-r from-green-700 to-green-500 hover:from-green-500 hover:to-green-400 rounded-md text-white font-medium duration-700 hover:shadow-xl items-center"
          href="https://vk.com/im?sel=-222064767"
          ><div class="md:mx-6 md:my-2 mx-3 my-1 max-md:text-[16px] font-medium">Написать VK</div></a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
