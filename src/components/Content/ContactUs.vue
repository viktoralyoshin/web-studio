<template>
  <div class="bg-black">
    <div class="flex md:flex-row flex-col max-w-[1200px] min-[1200px]:mx-auto mx-4 md:py-10 py-6 justify-between items-center gap-4 md:gap-0 overflow-hidden">
      <div class="md:w-1/2 w-[full] text-white text-[24px] flex flex-col md:gap-6 text-center md:text-left gap-2 md:mx-0 mb-6 md:mb-0">
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
          class="md:text-[32px] text-[26px]"
        >
          Остались вопросы?
        </p>
        <p
        v-motion
            :initial="{ opacity: 0, x: -200 }"
            :visibleOnce="{
              opacity: 100,
              x: 0,
              transition: {
                x: {
                  delay:200,
                  duration: 1000,
                },
                opacity: {
                  delay: 700,
                  duration: 5000,
                },
              },
            }"
          class="text-[#8b8b8b] text-[20px]"
        >
          Заполните форму и мы обязательно с вами свяжемся.
        </p>
      </div>
      <div
      v-motion
            :initial="{ opacity: 0, x: 200 }"
            :visibleOnce="{
              opacity: 100,
              x: 0,
              transition: {
                x: {
                  delay:400,
                  duration: 1000,
                },
                opacity: {
                  delay: 900,
                  duration: 5000,
                },
              },
            }"
        class="border-[#333333] rounded-xl p-4 border-[1px]"
      >
        <h1 class="text-white font-medium text-[24px] mb-4">
          Связаться с нами
        </h1>
        <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
          <div>
            <label
              for="name"
              class="block text-lg my-2 font-normal leading-6 text-white opacity-70"
              >Ваше имя</label
            >
            <div class="flex items-center">
              <span
                class="material-symbols-rounded text-white opacity-100 absolute pl-1"
              >
                person
              </span>
              <input
                type="text"
                name="name"
                id="name"
                required
                autocomplete="off"
                class="block w-full outline-none rounded-md border-0 py-1.5 pl-8 pr-20 text-white bg-[#0a0a0a] ring-1 ring-inset ring-[#333333] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#22c55e] duration-300 ease-in"
                placeholder="Иван"
              />
            </div>
          </div>
          <div>
            <label
              for="phone"
              class="block text-lg my-2 font-normal leading-6 text-white opacity-70"
              >Номер телефона</label
            >
            <div class="flex items-center">
              <span
                class="material-symbols-rounded text-white opacity-100 absolute pl-1"
              >
                call
              </span>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                autocomplete="off"
                pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                class="block w-full outline-none rounded-md border-0 py-1.5 pl-8 pr-20 text-white bg-[#0a0a0a] ring-1 ring-inset ring-[#333333] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#22c55e] duration-300 ease-in"
                placeholder="+7 (800) 800-80-80"
              />
            </div>
          </div>
          <div>
            <label
              for="tg"
              class="block text-lg my-2 font-normal leading-6 text-white opacity-70"
              >Telegram</label
            >
            <div class="flex items-center">
              <span
                class="material-symbols-rounded text-white opacity-100 absolute pl-1"
              >
                send
              </span>
              <input
                type="text"
                name="tg"
                id="tg"
                required
                autocomplete="off"
                class="block w-full outline-none rounded-md border-0 py-1.5 pl-8 pr-20 text-white bg-[#0a0a0a] ring-1 ring-inset ring-[#333333] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#22c55e] duration-300 ease-in"
                placeholder="@weblab"
              />
            </div>
          </div>
          <button
            type="submit"
            class="mt-4 py-2 px-4 bg-gradient-to-r from-green-700 to-green-500 hover:from-green-500 hover:to-green-400 rounded-md text-white font-medium duration-700 hover:shadow-xl items-center"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  </div>
  <div class="h-[1px] w-full bg-[#333333]"></div>
</template>
<script setup></script>
