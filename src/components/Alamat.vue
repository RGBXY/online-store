<template>
  <div :class="['fixed flex justify-center items-center font-roboto top-0 z-50 bg-opacity-40 w-full h-screen bg-black', { hidden: !alamat }]">
    <div class="lg:w-[600px] w-[90%] bg-white py-7 px-6">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-3xl font-neue mb-1">EDIT ALAMAT</h1>
        <button @click="closeAlamatBtn">
          <img class="w-10 mb-1.5" src="../../public/assets/icon_close.svg" alt="" />
        </button>
      </div>

      <div class="flex justify-between mb-5">
        <div class="w-[47%]">
          <p class="mb-1 text-secondary font-medium">Nama lengkap</p>
          <input type="text" placeholder="Nama" class="py-2 px-3 w-full rounded-md border border-primary outline-none" />
        </div>
        <div class="w-[47%]">
          <p class="mb-1 text-secondary font-medium">Nomor Telepon</p>
          <input type="number" placeholder="(+62) *** **** ****" class="py-2 px-3 w-full rounded-md border border-primary outline-none" />
        </div>
      </div>

      <div class="mb-5">
        <p class="mb-1 text-secondary font-medium">Alamat</p>
        <input type="text" placeholder="Alamat" class="py-2 px-3 w-full rounded-md border border-primary outline-none" />
      </div>

      <div class="mb-5">
        <p class="mb-1 text-secondary font-medium">Detail Lainnya</p>
        <input type="text" placeholder="Detail Lainnya (Cth: No rumah/patokan)" class="py-2 px-3 w-full rounded-md border border-primary outline-none" />
      </div>

      <div class="mb-5">
        <p class="mb-2 text-secondary font-medium">Tandai Sebagai</p>
        <div class="flex gap-2">
          <Button>Kantor</Button>
          <Button>Rumah</Button>
        </div>
      </div>

      <div class="flex justify-end gap-3">
        <Button>NANTI SAJA</Button>
        <Button class="bg-primary text-white">SIMPAN</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePopupStore } from "@/stores/Popup";
import { storeToRefs } from "pinia";
import Button from "./Button.vue";

const popup = usePopupStore();

const { alamat } = storeToRefs(popup);

const closeAlamatBtn = () => {
  popup.closeAlamatBtn();
};
</script>
