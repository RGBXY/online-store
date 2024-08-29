<template>
  <div class="pt-32 px-10 mb-20 flex flex-col lg:flex-row justify-between w-full h-full min-h-screen font-roboto">
    <div class="w-full lg:w-[60%]">
      <div class="shadow-md p-4 mb-7">
        <div class="flex justify-between mb-3">
          <h1 class="font-neue text-2xl">ALAMAT PENGIRIMAN</h1>
          <button @click="alamatBtn">
            <h1 class="font-neue text-2xl">UBAH</h1>
          </button>
        </div>
        <p class="text-secondary text-lg">Jl. Anjasmoro Raya, Tawangsari, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50144</p>
      </div>
      <div class="shadow-md p-4 mb-10">
        <div class="flex justify-between mb-2">
          <h1 class="font-neue text-2xl">PILIHAN PENGIRIMAN</h1>
          <button @click="pengirimanBtn">
            <h1 class="font-neue text-2xl">UBAH</h1>
          </button>
        </div>
        <div class="border border-primary px-3 py-4 rounded-lg inline-block mb-8">
          <div class="flex items-center gap-2">
            <img src="../../public/assets/icon_verif.svg" alt="" />
            <h1 class="text-xl font-medium">Rp.13.000</h1>
          </div>
          <h1 class="font-medium -mb-1">Standar</h1>
          <h1 class="font-medium text-secondary">Estimasi tiba 18-19 Des</h1>
        </div>
        <div class="flex flex-col md:flex-row justify-between gap-5">
          <div class="flex gap-5">
            <img class="w-[120px] h-[100px] object-cover" src="../../public/assets/image_populer_2.png" alt="" />
            <div>
              <h1 class="font-neue text-xl -mb-2">JAKET DENIM JEANS TEBAL PRIA WANITA</h1>
              <p class="text-secondary font-medium">warna biru, ukuran jaket:XL</p>
            </div>
          </div>
          <div class="flex items-center flex-row md:flex-col justify-between">
            <h1 class="font-medium text-lg">Rp.200.000</h1>
            <p class="text-secondary font-medium text-end">Kuantitas 1</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-[35%] mb-7 h-full py-10 px-4 shadow-md">
      <div class="py-3 px-4 mb-6 border border-primary rounded-lg">
        <div class="flex justify-between mb-4">
          <div class="flex items-center gap-3">
            <img src="../../public/assets/icon_wallet.svg" alt="" />
            <h1 class="font-neue text-xl">KARTU KREDIT/DEBIT</h1>
          </div>
          <img src="../../public/assets/icon_verif.svg" alt="" />
        </div>
        <div class="flex items-center justify-between">
          <p class="text-secondary">Tambah Kartu</p>
          <div class="flex items-center gap-3">
            <img class="w-10" src="../../public/assets/image_payment_1.png" alt="" />
            <img class="w-10" src="../../public/assets/image_payment_2.jpeg" alt="" />
            <img class="w-10" src="../../public/assets/image_payment_3.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div class="flex justify-between px-3 pb-6 mb-2 border-b-2 border-primary_border">
        <div class="flex items-center gap-3">
          <img class="w-10 rounded-lg" src="../../public/assets/image_payment_4.png" alt="" />
          <p class="text-xl font-neue">DANA</p>
        </div>
        <input type="checkbox" class="radio-input" value="wanita" name="options" />
      </div>
      <p class="px-3 text-sm text-secondary font-medium mb-8">Aktifkan dan bayar</p>
      <RouterLink to="/order-history">
        <Button class="w-full bg-primary text-white font-neue text-xl">BUAT PESANAN</Button>
      </RouterLink>
    </div>
  </div>

  <!-- Pengiriman Popup -->
  <Pengiriman />
  <Alamat />
  <!-- Pengiriman Popup -->
</template>

<script setup>
import Alamat from "@/components/Alamat.vue";
import Button from "@/components/Button.vue";
import Pengiriman from "@/components/Pengiriman.vue";
import { usePopupStore } from "@/stores/Popup";
import { onMounted } from "vue";

const popup = usePopupStore();

const pengirimanBtn = () => {
  popup.pengirimanBtn();
};

onMounted(() => {
  window.scrollTo(0, 0);
});

const alamatBtn = () => {
  popup.alamatBtn();
};
</script>

<style scoped>
.radio-input {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid #232121;
  position: relative;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
}

.radio-input:checked {
  background-color: white;
}

.radio-input:checked::before {
  content: "";
  display: block;
  width: 13px;
  height: 13px;
  background-color: #232121;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
