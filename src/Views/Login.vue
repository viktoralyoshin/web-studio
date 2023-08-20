<template>
  <div class="bg-black h-screen flex items-center justify-center">
    <div class="border-[#333333] rounded-xl p-4 border-[1px]">
      <h1 class="text-white font-medium text-[24px] mb-4">Вход</h1>
      <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
        <div>
          <label
            for="login"
            class="block text-lg my-2 font-normal leading-6 text-white opacity-70"
            >Логин</label
          >
          <div class="flex items-center">
            <span
              class="material-symbols-rounded text-white opacity-100 absolute pl-1"
            >
              person
            </span>
            <input
              type="text"
              name="login"
              id="login"
              required
              autocomplete="off"
              class="block w-full outline-none rounded-md border-0 py-1.5 pl-8 pr-20 text-white bg-[#0a0a0a] ring-1 ring-inset ring-[#333333] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#22c55e] duration-300 ease-in"
              placeholder="Логин"
            />
          </div>
        </div>
        <div>
          <label
            for="password"
            class="block text-lg my-2 font-normal leading-6 text-white opacity-70"
            >Пароль</label
          >
          <div class="flex items-center">
            <span
              class="material-symbols-rounded text-white opacity-100 absolute pl-1"
            >
              <span class="material-symbols-rounded"> lock </span>
            </span>
            <input
              type="password"
              name="password"
              id="password"
              required
              autocomplete="off"
              class="block w-full outline-none rounded-md border-0 py-1.5 pl-8 pr-20 text-white bg-[#0a0a0a] ring-1 ring-inset ring-[#333333] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#22c55e] duration-300 ease-in"
              placeholder="Пароль"
            />
          </div>
        </div>
        <button
          type="submit"
          class="mt-4 py-2 px-4 bg-gradient-to-r from-green-700 to-green-500 hover:from-green-500 hover:to-green-400 rounded-md text-white font-medium duration-700 hover:shadow-xl items-center"
        >
          Вход
        </button>
      </form>
    </div>
  </div>
</template>
<script></script>
