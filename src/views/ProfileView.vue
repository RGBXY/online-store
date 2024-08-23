<template>
  <ProfileLay>
    <div class="flex items-center mb-3 justify-between">
      <h1 class="text-[2.5rem] font-neue">Profil saya</h1>
      <Button @click="menu" class="lg:hidden">
        <p>Menu</p>
      </Button>
    </div>
    <p class="text-secondary font-medium mb-8">Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</p>
    <div class="flex flex-row gap-10 mb-8">
      <a class="relative group" href="">
        <p class="font-neue text-2xl lg:text-3xl">Biodata diri</p>
        <span class="absolute w-full h-1 bg-black transition-all"></span>
      </a>
      <a class="relative group" href="">
        <p class="font-neue text-2xl lg:text-3xl">Daftar Alamat</p>
        <span class="w-0 absolute group-hover:w-full h-1 bg-black transition-all"></span>
      </a>
    </div>
    <div class="flex flex-col lg:flex-row justify-between">
      <div class="lg:w-[40%] w-full mb-10 p-4 border border-primary_border">
        <!-- Display the profile image -->
        <img class="mb-3 w-full h-[240px] object-cover" :src="imageSrc" alt="" />
        <input @change="handleFileChange" type="file" class="hidden" id="profile-pic" />
        <button class="bg-primary mb-5 text-white py-2 w-full font-neue text-xl">
          <label for="profile-pic" class="w-full block text-center cursor-pointer"> pilih foto </label>
        </button>
        <p class="text-sm text-secondary">Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
      </div>
      <div class="lg:w-[60%] w-full lg:px-14">
        <!-- Display user profile information -->
        <div class="flex justify-between text-xl mb-6 font-medium">
          <p class="text-secondary w-1/2">Nama</p>
          <p class="w-1/2 text-end">Jhon Doe</p>
        </div>
        <div class="flex mb-6 justify-between text-xl font-medium">
          <p class="text-secondary w-1/2">Tanggal Lahir</p>
          <p class="w-1/2 text-end">11/11/1991</p>
        </div>
        <div class="flex mb-6 justify-between text-xl font-medium">
          <p class="text-secondary w-1/2">Jenis Kelamin</p>
          <p class="w-1/2 text-end">Pria</p>
        </div>
        <div class="flex mb-6 justify-between text-xl font-medium">
          <p class="text-secondary w-1/2">Email</p>
          <p class="w-1/2 text-end break-words">jhon@gmail.com</p>
        </div>
        <div class="flex mb-6 justify-between text-xl font-medium">
          <p class="text-secondary w-1/2">Nomor HP</p>
          <p class="w-1/2 text-end break-words">628907354215</p>
        </div>
      </div>
    </div>
  </ProfileLay>
</template>

<script setup>
import { computed } from "vue";
import { useDummyFncStore } from "@/stores/DummyFnc";
import ProfileLay from "@/components/ProfileLay.vue";
import Button from "@/components/Button.vue";

// Initialize the store
const dummy = useDummyFncStore();

const menu = () => {
  dummy.menuResBtn();
};

// Handle file input change event
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    dummy.updateProfileImage(file);
  }
};

// Compute the image source URL based on the profile image in the store
const imageSrc = computed(() => {
  return dummy.profileImage ? `../../public/assets/${dummy.profileImage}` : "";
});
</script>
