<template>
  <div id="services" class="flex flex-col items-center bg-black">
    <h1
      v-motion
      :initial="{ opacity: 0 }"
      :visibleOnce="{
        opacity: 100,
        transition: {
          opacity: {
            duration: 1400,
          },
        },
      }"
      class="text-white my-8 font-semibold text-[34px]"
    >
      Услуги
    </h1>
    <div
      class="max-w-[1200px] xl:mx-auto my-10 mx-6 md:grid lg:grid-cols-3 md:grid-cols-2 gap-12 flex flex-col"
    >
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{
          opacity: 100,
          transition: {
            opacity: {
              duration: 1400,
            },
          },
        }"
        class="flex flex-col text-white gap-2 bg-[#0a0a0a] hover:border-[#22c55e] hover:shadow-inner hover:shadow-[#22c566bd] duration-200 ease-in border-[1px] border-[#333333] rounded-xl p-4"
      >
        <img
          class="w-[250px] rounded-lg"
          src="../../../public/service.png"
          alt=""
        />
        <div>
          <h1 class="text-[20px]">Лендинг</h1>
          <p class="opacity-70">5&nbsp;000&nbsp;₽</p>
        </div>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{
          opacity: 100,
          transition: {
            opacity: {
              duration: 1400,
            },
          },
        }"
        class="flex flex-col text-white gap-2 bg-[#0a0a0a] hover:border-[#22c55e] hover:shadow-inner hover:shadow-[#22c566bd] duration-200 ease-in border-[1px] border-[#333333] rounded-xl p-4"
      >
        <img
          class="w-[250px] rounded-lg"
          src="../../../public/service.png"
          alt=""
        />
        <div>
          <h1 class="text-[20px]">Вёрстка</h1>
          <p class="opacity-70">5&nbsp;000&nbsp;₽</p>
        </div>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{
          opacity: 100,
          transition: {
            opacity: {
              duration: 1400,
            },
          },
        }"
        class="flex flex-col text-white gap-2 bg-[#0a0a0a] hover:border-[#22c55e] hover:shadow-inner hover:shadow-[#22c566bd] duration-200 ease-in border-[1px] border-[#333333] rounded-xl p-4"
      >
        <img
          class="w-[250px] rounded-lg"
          src="../../../public/service.png"
          alt=""
        />
        <div>
          <h1 class="text-[20px]">Front-end Разработка</h1>
          <p class="opacity-70">5&nbsp;000&nbsp;₽</p>
        </div>
      </div>
    </div>
  </div>
  <div class="h-[1px] w-full bg-[#333333]"></div>
</template>
<script setup></script>
