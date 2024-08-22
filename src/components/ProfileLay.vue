<template>
  <div class="pt-32 px-10 mb-10 flex justify-between w-full h-full">
    <div class="w-[25%]">
      <div class="flex items-center gap-3 w-full mb-4 shadow-md p-4">
        <img class="rounded-full w-16 h-16 object-cover" :src="imageSrc" alt="" />
        <h1 class="font-semibold font-roboto text-xl">Jhon Doe</h1>
      </div>
      <div class="shadow-md mb-10 p-5">
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
        <Button @click="logout">Logout</Button>
      </div>
    </div>
    <div class="w-[70%] font-roboto border border-primary_border p-7">
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

const { profileImage } = storeToRefs(dummy);

const logout = () => {
  dummy.logout();
};

// Compute the image source URL based on the profile image in the store
const imageSrc = computed(() => {
  return dummy.profileImage ? `../../public/assets/${dummy.profileImage}` : "";
});
</script>
