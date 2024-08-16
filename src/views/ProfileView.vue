<template>
  <ProfileLay>
    <h1 class="text-[2.5rem] font-neue">Profil saya</h1>
    <p class="text-secondary font-medium mb-8">Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</p>
    <div class="flex flex-row gap-10 mb-8">
      <a class="relative group" href="">
        <p class="font-neue text-3xl">Biodata diri</p>
        <span class="absolute w-full h-1 bg-black transition-all"></span>
      </a>
      <a class="relative group" href="">
        <p class="font-neue text-3xl text">Daftar Alamat</p>
        <span class="w-0 absolute group-hover:w-full h-1 bg-black transition-all"></span>
      </a>
    </div>
    <div class="flex justify-between">
      <div class="w-[40%] p-4 border border-primary_border">
        <img class="mb-3 w-full h-[240px] object-cover" src="../../public/assets/image_kategori_4.png" alt="" />
        <button class="bg-primary mb-3 text-white py-2 w-full font-neue text-xl">pilih foto</button>
        <p class="text-sm text-secondary">Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
      </div>
      <div class="w-[60%] px-14">
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
import Link from "@/components/Link.vue";
import ProfileLay from "@/components/ProfileLay.vue";
</script>
