<template>
  <div class="pt-32 px-6 lg:px-10 mb-10 flex justify-between w-full h-full">
    <div :class="['lg:w-[25%] w-[60%] bg-white top-20 h-screen z-30 lg:h-auto lg:p-0 pt-5 fixed lg:static transition-all duration-300 ease-in-out', menuStatus ? 'left-0 ' : '-left-[1000px]']">
      <button @click="menuResBtnClose" class="lg:hidden ms-4 flex justify-end w-full pr-6">
        <img class="w-10 mb-1.5" src="../../public/assets/icon_close.svg" alt="" />
      </button>
      <div class="flex items-center gap-3 w-full mb-4 lg:shadow-md border-b-2 p-4">
        <img class="rounded-full w-16 h-16 object-cover" src="../../public/assets/image_kategori_3.png" alt="" />
        <h1 class="font-semibold font-roboto text-xl">Jhon Doe</h1>
      </div>
      <div class="lg:shadow-md mb-10 p-5">
        <div class="flex items-center gap-4 mb-1">
          <img class="w-6" src="../../public/assets/icon_profile_black.svg" alt="" />
          <h1 class="font-neue text-2xl">AKUN SAYA</h1>
        </div>
        <RouterLink to="/profile">
          <div class="flex items-center gap-3 mb-1">
            <div class="w-2 h-2 bg-secondary rounded-full"></div>
            <h1 class="text-lg text-secondary font-semibold">Profil</h1>
          </div>
        </RouterLink>
        <RouterLink to="/edit-profile">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-2 h-2 bg-secondary rounded-full"></div>
            <h1 class="text-lg text-secondary font-semibold">Edit Profil</h1>
          </div>
        </RouterLink>
        <div class="flex items-center gap-4 mb-5">
          <img class="w-4 ml-0.5" src="../../public/assets/icon_pesanan.svg" alt="" />
          <h1 class="font-neue text-2xl">PESANAN SAYA</h1>
        </div>
        <div class="flex items-center gap-3 mb-1">
          <img class="w-7 -ml-1" src="../../public/assets/icon_notif_black.svg" alt="" />
          <h1 class="font-neue text-2xl">NOTIFIKASI</h1>
        </div>
        <RouterLink to="/status-pesanan" class="flex items-center gap-3 mb-1">
          <div class="w-2 h-2 bg-secondary rounded-full"></div>
          <h1 class="text-lg text-secondary font-semibold">Status Pesanan</h1>
        </RouterLink>
        <a href="#" class="flex items-center gap-3 mb-6">
          <div class="w-2 h-2 bg-secondary rounded-full"></div>
          <h1 class="text-lg text-secondary font-semibold">Promo</h1>
        </a>
        <RouterLink to="/login">
          <Button @click="logout">Logout</Button>
        </RouterLink>
      </div>
    </div>
    <div class="lg:w-[70%] w-full font-roboto border border-primary_border p-7">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useDummyFncStore } from "@/stores/DummyFnc";
import { storeToRefs } from "pinia";
import Button from "./Button.vue";
import { computed } from "vue";

const dummy = useDummyFncStore();

const { profileImage, menuStatus, userStatus } = storeToRefs(dummy);

const menuResBtnClose = () => {
  dummy.menuResBtnClose();
};

const logout = () => {
  dummy.logout();
};

// Compute the image source URL based on the profile image in the store
const imageSrc = computed(() => {
  return dummy.profileImage ? `../../public/assets/${dummy.profileImage}` : "";
});
</script>
