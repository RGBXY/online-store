<template>
  <ProfileLay class="h-full min-h-screen">
    <div class="flex flex-row overflow-x-auto no-scrollbar justify-between gap-10 mb-9">
      <a class="relative group" href="">
        <p class="font-neue lg:text-3xl text-xl">SEMUA</p>
        <span class="absolute w-full h-1 bottom-0 bg-black transition-all"></span>
      </a>
      <a class="relative group" href="">
        <p class="font-neue text-secondary lg:text-3xl inline text-xl text">SEDANG DIKEMAS</p>
        <span class="w-0 absolute group-hover:w-full bottom-0 right-0 left-0 h-1 bg-secondary transition-all"></span>
      </a>
      <a class="relative group" href="">
        <p class="font-neue text-secondary lg:text-3xl text-xl text">DIKIRIM</p>
        <span class="w-0 absolute group-hover:w-full bottom-0 right-0 left-0 h-1 bg-secondary transition-all"></span>
      </a>
      <a class="relative group" href="">
        <p class="font-neue text-secondary lg:text-3xl text-xl text">SELESAI</p>
        <span class="w-0 absolute group-hover:w-full bottom-0 right-0 left-0 h-1 bg-secondary transition-all"></span>
      </a>
      <a class="relative group" href="">
        <p class="font-neue text-secondary lg:text-3xl text-xl text">DIBATALKAN</p>
        <span class="w-0 absolute group-hover:w-full bottom-0 right-0 left-0 h-1 bg-secondary transition-all"></span>
      </a>
    </div>

    <div class="mb-10">
      <div class="flex flex-col lg:flex-row justify-between border-b mb-5 pb-5">
        <div class="flex gap-5 mb-5">
          <img class="w-[100px] h-[100px] object-cover" src="../../public/assets/image_populer_2.png" alt="" />
          <div class="text-secondary">
            <h1 class="text-2xl font-neue text-black">Jaket denim jeans tebal pria wanita</h1>
            <p>warna biru, ukuran jaket:XL</p>
            <p>Kuantitas 1</p>
          </div>
        </div>
        <div class="bg-white shadow-md h-full text-sm py-3 px-4">
          <p>Pesanan sudah diterima</p>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row justify-between border-b mb-5 pb-5">
        <div class="flex gap-5 mb-5">
          <img class="w-[100px] h-[100px] object-cover" src="../../public/assets/image_populer_2.png" alt="" />
          <div class="text-secondary">
            <h1 class="text-2xl font-neue text-black">Jaket denim jeans tebal pria wanita</h1>
            <p>warna biru, ukuran jaket:XL</p>
            <p>Kuantitas 1</p>
          </div>
        </div>
        <div class="bg-white shadow-md h-full text-sm py-3 px-4">
          <p>Pesanan sudah diterima</p>
        </div>
      </div>
    </div>
    <div class="flex gap-3 text-end items-end w-full justify-end">
      <h1 class="mb-1 font-semibold">Total Pesanan</h1>
      <h1 class="font-neue text-3xl">RP.200.000</h1>
    </div>
  </ProfileLay>
</template>

<script setup>
import ProfileLay from "@/components/ProfileLay.vue";
</script>
