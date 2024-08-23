<template>
  <div class="flex flex-col lg:flex-row justify-between px-6 lg:px-14 pt-40 pb-20 w-full">
    <div class="lg:w-[47%] mb-10 w-full p-8 border border-primary font-neue">
      <h1 class="text-5xl mb-6">LOGIN</h1>
      <p class="font-roboto text-xl mb-7">Masuk dengan alamat e-mail dan kata sandi anda</p>
      <h1 class="text-3xl mb-4">ALAMAT EMAIL</h1>
      <input required type="text" class="w-full mb-8 px-6 py-4 shadow-md border border-primary font-roboto text-xl" placeholder="Masukan alamat email anda" />
      <h1 class="text-3xl mb-4">MASUKAN PASSWORD</h1>
      <input required type="password" class="w-full mb-8 px-6 py-5 shadow-md border border-primary font-roboto text-xl" placeholder="Masukan kata sandi anda" />
      <p class="font-roboto text-xl mb-8">Kata sandi minimal 8 karakter dan terdiri dari huruf dan angka. Hanya simbol -_.@ yang dapat digunakan.</p>
      <button @click="dummyLoginBtn" class="bg-black mb-8 text-white py-3 w-[200px] text-4xl">Login</button>
      <h1 class="text-4xl mb-6">ATAU</h1>
      <button class="flex mb-8 items-center border w-[250px] justify-between border-primary px-5 py-2">
        <h1 class="text-3xl mt-1">GOOGLE</h1>
        <img class="w-10" src="../../public/assets/icon_google.svg" alt="" />
      </button>
      <button class="flex items-center border mb-10 w-[250px] justify-between border-primary px-5 py-2">
        <h1 class="text-3xl mt-1">FACEBOOK</h1>
        <img class="w-10" src="../../public/assets/icon_facebook.svg" alt="" />
      </button>
      <h1 class="text-5xl font-neue mb-2">BUAT AKUN</h1>
      <RouterLink to="/register">
        <button class="bg-black mb-8 text-white py-3 w-[200px] font-neue text-4xl">registrasi</button>
      </RouterLink>
    </div>
    <div class="lg:w-[47%] hidden lg:block font-roboto px-5">
      <h1 class="text-5xl font-neue mb-7">BUAT AKUN</h1>
      <p class="text-xl mb-6">Sangat mudah. Masukkan alamat email Anda, isi formulir di halaman berikutnya dan nikmati keuntungan dari memiliki akun, misalnya:</p>
      <div class="flex gap-4 mb-9">
        <img class="w-7" src="../../public/assets/icon_check.svg" alt="" />
        <p>Produk dengan harga spesial sepanjang tahun, setiap hari.</p>
      </div>
      <div class="flex gap-4 mb-9">
        <img class="w-7" src="../../public/assets/icon_check.svg" alt="" />
        <p>Produk dengan harga spesial sepanjang tahun, setiap hari.</p>
      </div>
      <div class="flex gap-4 mb-9">
        <img class="w-7" src="../../public/assets/icon_check.svg" alt="" />
        <p>Produk dengan harga spesial sepanjang tahun, setiap hari.</p>
      </div>
      <div class="flex gap-4 mb-9">
        <img class="w-7" src="../../public/assets/icon_check.svg" alt="" />
        <p>Produk dengan harga spesial sepanjang tahun, setiap hari.</p>
      </div>
      <RouterLink to="/register">
        <button class="bg-black mb-8 text-white py-3 w-[200px] font-neue text-4xl">registrasi</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useDummyFncStore } from "@/stores/DummyFnc";
import { storeToRefs } from "pinia";

const dummy = useDummyFncStore();

const { userStatus } = storeToRefs(dummy);

const dummyLoginBtn = () => {
  dummy.setUserStat();
};
</script>
