<template>
  <div id="portfolio" class="flex flex-col items-center bg-[black]">
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
      Наши работы
    </h1>
    <div
      class="flex md:flex-row flex-col xl:max-w-[1200px] xl:mx-auto justify-center md:gap-16 gap-10 my-10 flex-wrap mx-3"
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
        class="flex md:w-auto w-[90%] mx-4 md:mx-0 flex-col gap-6 hover:border-[#22c55e] bg-[#0a0a0a] hover:shadow-inner hover:shadow-[#22c566bd] duration-200 ease-in border-[1px] border-[#333333] rounded-xl p-4"
      >
        <img
          class="md:w-[480px]  w-full rounded-xl"
          src="./../../../public/portfolio/weblab.png"
          alt=""
        />
        <div class="flex justify-between">
          <h1 class="text-white text-[26px] font-head">WebLab</h1>
          <a
            class="text-[#7a7a7a] text-[20px] hover:text-white duration-200 ease-in cursor-pointer"
            >Перейти&rarr;</a
          >
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
        class="flex md:w-auto w-[90%] mx-4 md:mx-0 flex-col gap-6 hover:border-[#22c55e] bg-[#0a0a0a] hover:shadow-inner hover:shadow-[#22c566bd] duration-200 ease-in border-[1px] border-[#333333] rounded-xl p-4"
      >
        <img
          class="md:w-[480px]  w-full rounded-xl"
          src="./../../../public/portfolio/weblab.png"
          alt=""
        />
        <div class="flex justify-between">
          <h1 class="text-white text-[26px] font-head">WebLab</h1>
          <a
            class="text-[#7a7a7a] text-[20px] hover:text-white duration-200 ease-in cursor-pointer"
            >Перейти&rarr;</a
          >
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
        class="flex md:w-auto w-[90%] mx-4 md:mx-0 flex-col gap-6 hover:border-[#22c55e] bg-[#0a0a0a] hover:shadow-inner hover:shadow-[#22c566bd] duration-200 ease-in border-[1px] border-[#333333] rounded-xl p-4"
      >
        <img
          class="md:w-[480px]  w-full rounded-xl"
          src="./../../../public/portfolio/weblab.png"
          alt=""
        />
        <div class="flex justify-between">
          <h1 class="text-white text-[26px] font-head">WebLab</h1>
          <a
            class="text-[#7a7a7a] text-[20px] hover:text-white duration-200 ease-in cursor-pointer"
            >Перейти&rarr;</a
          >
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
        class="flex md:w-auto w-[90%] mx-4 md:mx-0 flex-col gap-6 hover:border-[#22c55e] bg-[#0a0a0a] hover:shadow-inner hover:shadow-[#22c566bd] duration-200 ease-in border-[1px] border-[#333333] rounded-xl p-4"
      >
        <img
          class="md:w-[480px] w-full rounded-xl"
          src="./../../../public/portfolio/weblab.png"
          alt=""
        />
        <div class="flex justify-between">
          <h1 class="text-white text-[26px] font-head">WebLab</h1>
          <a
            class="text-[#7a7a7a] text-[20px] hover:text-white duration-200 ease-in cursor-pointer"
            >Перейти&rarr;</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="h-[1px] w-full bg-[#333333]"></div>
</template>
<script setup></script>
