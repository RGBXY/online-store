<template>
  <div class="fixed top-0 flex justify-between z-40 items-center px-10 bg-primary w-full h-20 text-white font-neue">
    <RouterLink to="/" class="">
      <h1 class="text-4xl -mb-1">ONLINE</h1>
      <p class="text-lg">STORE</p>
    </RouterLink>
    <div class="flex gap-8 text-[28px]">
      <a class="relative group" href="">
        <p>PRIA</p>
        <span class="w-0 absolute bottom-1.5 group-hover:w-full h-0.5 bg-white transition-all"></span>
      </a>
      <a class="relative group" href="">
        <p>WANITA</p>
        <span class="w-0 absolute bottom-1.5 group-hover:w-full h-0.5 bg-white transition-all"></span>
      </a>
      <RouterLink to="/tentang-kami" class="relative group" href="">
        <p>TENTANG KAMI</p>
        <span class="w-0 absolute bottom-1.5 group-hover:w-full h-0.5 bg-white transition-all"></span>
      </RouterLink>
      <a class="relative group" href="">
        <p>BLOG</p>
        <span class="w-0 absolute bottom-1.5 group-hover:w-full h-0.5 bg-white transition-all"></span>
      </a>
    </div>
    <div class="relative w-[320px]">
      <input class="w-full py-2 px-3 text-black rounded-xl font-roboto" type="text" placeholder="Cari" />
      <button>
        <img class="absolute top-2.5 right-2.5 w-6" src="../../public/assets/icon_search.svg" alt="" />
      </button>
    </div>
    <div class="flex items-center gap-12">
      <button>
        <img class="w-8" src="../../public/assets/icon_notif.svg" alt="" />
      </button>
      <RouterLink to="/cart">
        <img class="w-8" src="../../public/assets/icon_cart.svg" alt="" />
      </RouterLink>
      <RouterLink :to="userStatus ? '/profile' : '/login'">
        <img v-if="userStatus" class="h-10 w-10 rounded-full object-cover" :src="imageSrc" alt="" />
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

const { userStatus, profileImage } = storeToRefs(dummy);

if (localStorage.getItem("userStatus") === "true") {
  dummy.userStatus = true;
}

// Compute the image source URL based on the profile image in the store
const imageSrc = computed(() => {
  return dummy.profileImage ? `../../public/assets/${dummy.profileImage}` : "";
});
</script>
