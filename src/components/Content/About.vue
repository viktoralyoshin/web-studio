<template>
  <div id="about" class="flex flex-col items-center bg-black">
    <h1 class="text-white my-8 font-semibold text-[34px]">О нас</h1>
    <div
      class="flex flex-col max-w-[1200px] mx-auto my-10 gap-8 text-white text-[24px]"
    >
      <div class="flex gap-8 items-center">
        <div class="flex flex-col gap-2">
          <p class="text-[30px]">Мы - слаженная команда профессионалов</p>
          <p class="text-[#8b8b8b] text-[18px]">
            Которая уже более 2 лет занимается разработкой сайтов.
          </p>
        </div>
        <img
          class="rounded-xl w-1/2"
          src="../../../public/about.jpg"
          alt="about"
        />
      </div>
      <div class="h-[1px] w-full bg-[#333333]"></div>
      <div class="flex gap-8 items-center">
        <img
          class="rounded-xl w-1/2"
          src="../../../public/about2.jpg"
          alt="about"
        />
        <div class="flex flex-col gap-2">
          <p class="text-[30px]">Наше преимущество над конкурентами</p>
          <p class="text-[#8b8b8b] text-[18px]">
            В том, что мы болеем своим продуктом и делаем всё, чтобы он стал №1
            в своей сфере.
          </p>
        </div>
      </div>
      <div class="h-[1px] w-full bg-[#333333]"></div>
      <div class="flex gap-8 items-center">
        <div class="flex flex-col gap-10">
          <div class="flex flex-col gap-4">
            <p class="text-[30px]">
              Наш менеджер ответит вам в любое время дня
            </p>
            <p class="text-[#8b8b8b] text-[18px]">
              Наша команда разработает такой сайт, что вы сами заходите купить
              свой продукт у себя же.
            </p>
          </div>
          <div class="flex justify-between">
            <div
              class="rounded-md bg-gradient-to-r from-green-700 to-green-500 hover:from-green-500 hover:to-green-400 hover:shadow-xl"
            >
              <a
                class="decoration-none no-underline text-white font-medium duration-700 hover:shadow-xl items-center"
                href="https://vk.com/im?sel=-222064767"
                ><div class="mx-6 my-3 font-medium text-[16px]">Написать VK</div></a
              >
            </div>
            <div></div>
          </div>
        </div>
        <img
          class="rounded-xl w-1/4"
          src="../../../public/about3.png"
          alt="about"
        />
      </div>
      <div class="h-[1px] w-full bg-[#333333]"></div>
    </div>
  </div>
</template>
<script setup></script>
