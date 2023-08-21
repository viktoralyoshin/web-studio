<template>
  <div class="bg-black">
    <div
      v-motion
      :initial="{ opacity: 0 }"
      :visibleOnce="{
        opacity: 100,
        transition: {
          opacity: {
            duration: 2400,
          },
        },
      }"
      class="flex max-w-[1200px] min-[1200px]:mx-auto mx-4 py-10 justify-between text-[#8b8b8b] items-center md:text-[18px] sm:text-[14px] text-[10px]"
    >
      <h1 class="font-head">WebLab©</h1>
      <div class="flex gap-8">
        <a href=""
          ><img class="w-[30px] h-[30px]" src="../../public/vk.png" alt="vk"
        /></a>
        <a href=""
          ><img class="w-[30px] h-[30px]" src="../../public/tg.png" alt="tg"
        /></a>
        <a href=""
          ><img
            class="w-[30px] h-[30px]"
            src="../../public/whatsapp.png"
            alt="whatsapp"
        /></a>
      </div>
      <h1 class="font-head">2023</h1>
    </div>
  </div>
</template>
<script setup></script>
