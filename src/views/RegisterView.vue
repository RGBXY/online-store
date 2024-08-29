<template>
  <form class="flex justify-between px-6 lg:px-14 pt-40 pb-20 w-full">
    <div class="lg:w-[47%] w-full p-8 border border-primary font-neue">
      <h1 class="text-5xl mb-10">registrasi</h1>
      <h1 class="text-3xl mb-4">Nama Anda</h1>
      <input required type="text" class="w-full mb-8 px-6 py-4 shadow-md border border-primary font-roboto text-xl" placeholder="Masukan nama anda" />
      <h1 class="text-3xl mb-4">Tanggal Lahir</h1>
      <div class="flex gap-4">
        <input type="number" min="1" max="31" class="w-full mb-8 px-6 py-4 shadow-md border border-primary font-roboto text-xl text-center placeholder:text-primary" placeholder="dd" />
        <input type="number" min="1" max="12" class="w-full mb-8 px-6 py-4 shadow-md border border-primary font-roboto text-xl text-center placeholder:text-primary" placeholder="mm" />
        <input type="number" min="1900" max="2100" class="w-full mb-8 px-6 py-4 shadow-md border border-primary font-roboto text-xl text-center placeholder:text-primary" placeholder="yyyy" />
      </div>
      <h1 class="text-3xl mb-4">MASUKAN EMAIL & PASSWORD</h1>
      <input required type="email" class="outline-none w-full mb-4 px-6 py-5 shadow-md border border-primary font-roboto text-xl" placeholder="Masukan kata email anda" />
      <div class="flex items-center justify-between mb-8 shadow-md border border-primary">
        <input required :type="passStat ? 'text' : 'password'" class="w-[80%] outline-none px-6 py-5 font-roboto text-xl" placeholder="Masukan kata password anda" />
        <button @click="pass" class="gap-2 flex items-center mr-5 w-[20%]">
          <img :src="passStat ? '../../public/assets/icon_hide.svg' : '../../public/assets/icon_show.svg'" alt="" />
          <p v-if="passStat" class="text-xl">hide</p>
          <p v-else class="text-xl">show</p>
        </button>
      </div>
      <p class="font-roboto mb-7">Harap gunakan 8+ karakter, dengan sedikitnya 1 angka dan perpaduan huruf besar dan kecil</p>
      <h1 class="text-3xl mb-4">GENDER</h1>
      <div class="flex items-center gap-2 mb-6 font-roboto">
        <label class="radio-container mr-3 flex gap-2 items-center">
          <input type="radio" class="radio-input" value="pria" name="options" />
          <p class="text-xl">Pria</p>
        </label>
        <label class="radio-container flex gap-2 items-center">
          <input type="radio" class="radio-input" value="wanita" name="options" />
          <p class="text-xl">Wanita</p>
        </label>
      </div>
      <RouterLink to="/profile">
        <button class="bg-black mb-8 text-white py-3 w-[200px] font-neue text-4xl">registrasi</button>
      </RouterLink>
      <h1 class="text-4xl mb-6">ATAU</h1>
      <button class="flex mb-8 items-center border w-[250px] justify-between border-primary px-5 py-2">
        <h1 class="text-3xl mt-1">GOOGLE</h1>
        <img class="w-10" src="../../public/assets/icon_google.svg" alt="" />
      </button>
      <button class="flex items-center border w-[250px] justify-between border-primary px-5 py-2">
        <h1 class="text-3xl mt-1">FACEBOOK</h1>
        <img class="w-10" src="../../public/assets/icon_facebook.svg" alt="" />
      </button>
    </div>
    <div class="w-[47%] hidden lg:block font-roboto px-5">
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
      <RouterLink to="/profile">
        <button class="bg-black mb-8 text-white py-3 w-[200px] font-neue text-4xl">registrasi</button>
      </RouterLink>
    </div>
  </form>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

onMounted(() => {
  window.scrollTo(0, 0);
});

const pass = () => {
  passStat.value = !passStat.value;
};
</script>

<style scoped>
.radio-input {
  appearance: none;
  width: 25px;
  height: 25px;
  border: 2px solid #232121;
  border-radius: 50%;
  position: relative;
  outline: none;
  cursor: pointer;
}

.radio-input:checked {
  background-color: white;
}

.radio-input:checked::before {
  content: "";
  display: block;
  width: 16px;
  height: 16px;
  background-color: #232121;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
