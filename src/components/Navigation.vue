<template>
  <div class="fixed top-0 flex justify-between z-40 items-center px-6 lg:px-10 bg-primary w-full h-20 text-white font-neue">
    <RouterLink to="/" class="">
      <h1 class="text-4xl -mb-1">ONLINE</h1>
      <p class="text-lg">STORE</p>
    </RouterLink>
    <div
      :class="[
        'flex fixed lg:static flex-col text-[22px] transition-all duration-300 ease-in-out lg:border-none border-l-2 border-white lg:text-[28px] lg:flex-row top-0 h-screen lg:h-auto bg-primary lg:bg-transparent lg:w-auto w-[60%] py-5 px-5 lg:p-0 gap-4 lg:gap-8',
        navStatus ? 'right-0' : ' -right-[1000px]',
      ]"
    >
      <button @click="navResBtnClose" class="w-full lg:hidden flex justify-end mt-1 mb-2">
        <img class="w-10" src="../../public/assets/icon_close_white.svg" alt="" />
      </button>
      <a class="block lg:hidden mb-1 border-b-2 pb-4" :href="userStatus ? '/profile' : '/login'">
        <div v-if="userStatus" class="flex items-center gap-4">
          <img class="h-10 w-10 rounded-full object-cover" src="../../public/assets/image_kategori_3.png" alt="" />
          <p>Nama</p>
        </div>
        <div v-else class="flex items-center gap-4">
          <img class="h-8" src="../../public/assets/icon_profile.svg" alt="" />
          <p>Login</p>
        </div>
      </a>
      <a v-if="userStatus === true" class="lg:hidden relative group" href="">
        <p>PROFILE</p>
        <span class="w-0 absolute bottom-0.5 lg:bottom-1.5 group-hover:w-full h-0.5 bg-white transition-all"></span>
      </a>
      <a class="lg:hidden relative group" href="">
        <p>NOTIFICATION</p>
        <span class="w-0 absolute bottom-0.5 lg:bottom-1.5 group-hover:w-full h-0.5 bg-white transition-all"></span>
      </a>
      <a class="relative group" href="">
        <p>PRIA</p>
        <span class="w-0 absolute bottom-0.5 lg:bottom-1.5 group-hover:w-full h-0.5 bg-white transition-all"></span>
      </a>
      <a class="relative group" href="">
        <p>WANITA</p>
        <span class="w-0 absolute bottom-0.5 lg:bottom-1.5 group-hover:w-full h-0.5 bg-white transition-all"></span>
      </a>
      <RouterLink to="/tentang-kami" class="relative group">
        <p>TENTANG KAMI</p>
        <span class="w-0 absolute bottom-0.5 lg:bottom-1.5 group-hover:w-full h-0.5 bg-white transition-all"></span>
      </RouterLink>
      <a class="relative group" href="">
        <p>BLOG</p>
        <span class="w-0 absolute bottom-0.5 lg:bottom-1.5 group-hover:w-full h-0.5 bg-white transition-all"></span>
      </a>
    </div>

    <div :class="['w-full lg:w-[320px] absolute lg:relative left-0 top-20 lg:top-0 lg:bg-transparent bg-white border-2 border-primary lg:block', { hidden: !searchStatus }]">
      <input class="w-full py-2 px-6 lg:px-3 text-black outline-none rounded-xl font-roboto" type="text" placeholder="Cari" />
      <button>
        <img class="absolute top-2.5 right-2.5 w-6" src="../../public/assets/icon_search.svg" alt="" />
      </button>
    </div>
    <div class="flex items-center lg:gap-12 gap-6">
      <button class="hidden lg:block">
        <img class="w-8" src="../../public/assets/icon_notif.svg" alt="" />
      </button>
      <button @click="searchResBtn" class="lg:hidden">
        <img class="w-8" src="../../public/assets/icon_search_white.svg" alt="" />
      </button>
      <RouterLink to="/cart">
        <img class="w-6 lg:w-8" src="../../public/assets/icon_cart.svg" alt="" />
      </RouterLink>
      <button @click="navResBtn" class="lg:hidden">
        <img class="w-8" src="../../public/assets/icon_hamburger.svg" alt="" />
      </button>
      <RouterLink class="hidden lg:block" :to="userStatus ? '/profile' : '/login'">
        <img v-if="userStatus" class="h-10 w-10 rounded-full object-cover" src="../../public/assets/image_kategori_3.png" alt="" />
        <img v-else class="h-8" src="../../public/assets/icon_profile.svg" alt="" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useDummyFncStore } from "@/stores/DummyFnc";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const dummy = useDummyFncStore();

const { userStatus, profileImage, navStatus, searchStatus } = storeToRefs(dummy);

const navResBtn = () => {
  dummy.navResBtn();
};

const navResBtnClose = () => {
  dummy.navResBtnClose();
};

const searchResBtn = () => {
  dummy.searchResBtn();
};

if (localStorage.getItem("userStatus") === "true") {
  dummy.userStatus = true;
}

const imageSrc = computed(() => {
  return dummy.profileImage ? `../../public/assets/${dummy.profileImage}` : "";
});
</script>
