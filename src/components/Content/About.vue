<template>
  <div id="about" class="flex flex-col items-center bg-black overflow-hidden">
    <h1
      v-motion
      :initial="{ opacity: 0 }"
      :visibleOnce="{
        opacity: 100,
        transition: {
          opacity: {
            delay: 400,
            duration: 5000,
          },
        },
      }"
      class="text-white my-8 font-semibold text-[34px]"
    >
      О нас
    </h1>
    <div
      class="flex flex-col max-w-[1200px] mx-auto my-10 gap-8 text-white text-[24px]"
    >
      <div class="flex md:flex-row flex-col gap-8 items-center">
        <div class="flex flex-col gap-2 md:text-left text-center md:mx-0 mx-3">
          <p
            v-motion
            :initial="{ opacity: 0, x: -200 }"
            :visibleOnce="{
              opacity: 100,
              x: 0,
              transition: {
                x: {
                  duration: 1000,
                },
                opacity: {
                  delay: 400,
                  duration: 5000,
                },
              },
            }"
            class="md:text-[30px] text-[24px]"
          >
            Мы - слаженная команда профессионалов
          </p>
          <p
            v-motion
            :initial="{ opacity: 0, x: -200 }"
            :visibleOnce="{
              opacity: 100,
              x: 0,
              transition: {
                x: {
                  delay: 200,
                  duration: 1000,
                },
                opacity: {
                  delay: 700,
                  duration: 5000,
                },
              },
            }"
            class="text-[#8b8b8b] md:text-[18px] text-[16px]"
          >
            Которая уже более 2 лет занимается разработкой сайтов.
          </p>
        </div>
        <img
          class="rounded-xl md:w-1/2 w-[80%]"
          src="../../../public/about.jpg"
          alt="about"
        />
      </div>
      <div class="h-[1px] w-full bg-[#333333]"></div>
      <div class="flex md:flex-row flex-col gap-8 items-center">
        <img
          class="rounded-xl w-1/2 md:flex hidden"
          src="../../../public/about2.jpg"
          alt="about"
        />
        <div class="flex flex-col gap-2 md:text-left text-center md:mx-0 mx-3">
          <p
            v-motion
            :initial="{ opacity: 0, x: 200 }"
            :visibleOnce="{
              opacity: 100,
              x: 0,
              transition: {
                x: {
                  duration: 1000,
                },
                opacity: {
                  delay: 400,
                  duration: 5000,
                },
              },
            }"
            class="md:text-[30px] text-[24px]"
          >
            Наше преимущество над конкурентами
          </p>
          <p
            v-motion
            :initial="{ opacity: 0, x: 200 }"
            :visibleOnce="{
              opacity: 100,
              x: 0,
              transition: {
                x: {
                  delay: 200,
                  duration: 1000,
                },
                opacity: {
                  delay: 700,
                  duration: 5000,
                },
              },
            }"
            class="text-[#8b8b8b] md:text-[18px] text-[16px]"
          >
            В том, что мы болеем своим проектом и делаем всё, чтобы он стал №1 в
            своей сфере.
          </p>
        </div>
        <img
          class="rounded-xl w-[80%] flex md:hidden"
          src="../../../public/about2.jpg"
          alt="about"
        />
      </div>
      <div class="h-[1px] w-full bg-[#333333]"></div>
      <div class="flex md:flex-row flex-col gap-8 items-center">
        <div class="flex flex-col gap-10 md:items-start items-center">
          <div
            class="flex flex-col gap-2 md:text-left text-center md:mx-0 mx-3"
          >
            <p
              v-motion
              :initial="{ opacity: 0, x: -200 }"
              :visibleOnce="{
                opacity: 100,
                x: 0,
                transition: {
                  x: {
                    duration: 1000,
                  },
                  opacity: {
                    delay: 400,
                    duration: 5000,
                  },
                },
              }"
              class="md:text-[30px] text-[24px]"
            >
              Наш менеджер ответит вам в любое время дня
            </p>
            <p
              v-motion
              :initial="{ opacity: 0, x: -200 }"
              :visibleOnce="{
                opacity: 100,
                x: 0,
                transition: {
                  x: {
                    delay: 200,
                    duration: 1000,
                  },
                  opacity: {
                    delay: 700,
                    duration: 5000,
                  },
                },
              }"
              class="text-[#8b8b8b] md:text-[18px] text-[16px]"
            >
              Наша команда разработает такой сайт, что вы сами захотите купить
              свой продукт у себя же.
            </p>
          </div>
          <div class="flex justify-between">
            <div
              v-motion
              :initial="{ opacity: 0, x: -200 }"
              :visibleOnce="{
                opacity: 100,
                x: 0,
                transition: {
                  x: {
                    delay: 400,
                    duration: 1000,
                  },
                  opacity: {
                    delay: 900,
                    duration: 5000,
                  },
                },
              }"
              class="rounded-md bg-gradient-to-r from-green-700 to-green-500 hover:from-green-500 hover:to-green-400 hover:shadow-xl"
            >
              <a
                class="decoration-none no-underline text-white font-medium duration-700 hover:shadow-xl items-center"
                href="https://vk.com/im?sel=-222064767"
                ><div class="mx-6 my-3 font-medium text-[16px]">
                  Написать VK
                </div></a
              >
            </div>
            <div></div>
          </div>
        </div>
        <img
          class="object-cover rounded-xl md:w-1/4 w-[70%] overflow-hidden"
          src="../../../public/about3.png"
          alt="about"
        />
      </div>
      <div class="h-[1px] w-full bg-[#333333]"></div>
    </div>
  </div>
</template>
<script setup></script>
