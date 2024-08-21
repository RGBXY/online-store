<template>
  <div :class="['fixed flex justify-center items-center font-roboto top-0 z-50 bg-opacity-40 w-full h-screen bg-black', { hidden: !pengiriman }]">
    <div class="w-[550px] bg-white py-7 px-6">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-neue mb-1">PILIH OPSI PENGIRIMAN</h1>
        <button @click="closePengirimanBtn">
          <img class="w-10 mb-1.5" src="../../public/assets/icon_close.svg" alt="" />
        </button>
      </div>
      <h1 class="font-medium text-xl text-secondary">PILIH JASA PENGIRIMAN</h1>
      <p class="text-sm text-secondary leading-tight mb-4">Estimasi tanggal diterima tergantung pada waktu pengemasan Penjual dan waktu pengiriman ke lokasi Anda</p>
      <button @focus="selectRadio(1)" class="h-[90px] w-full flex mb-1 text-start group">
        <div class="w-1.5 me-1 bg-secondary group-focus:bg-primary rounded-full h-full"></div>
        <div class="border-2 border-secondary rounded-lg h-full w-full px-7 flex items-center justify-between">
          <div>
            <h1 class="font-semibold text-lg -mb-1 text-secondary peer-has-[:checked]:text-primary group-focus:text-primary">JNT Rp.30.000 <span class="text-secondary">Reguler</span></h1>
            <p class="font-medium text-secondary peer-has-[:checked]:text-primary group-focus:text-primary">Akan diterima pada 25 - 28 Jan 2024</p>
          </div>
          <input type="radio" class="radio-input peer" value="1" name="options" />
        </div>
      </button>
      <button @focus="selectRadio(2)" class="h-[90px] w-full flex mb-1 text-start group">
        <div class="w-1.5 me-1 bg-secondary group-focus:bg-primary rounded-full h-full"></div>
        <div class="border-2 border-secondary rounded-lg h-full w-full px-7 flex items-center justify-between">
          <div>
            <h1 class="font-semibold text-lg -mb-1 text-secondary group-focus:text-primary">JNT Rp.20.000 <span class="text-secondary">Ekonomi</span></h1>
            <p class="font-medium text-secondary group-focus:text-primary">Akan diterima pada 28 - 30 Jan 2024</p>
          </div>
          <input type="radio" class="radio-input" value="2" name="options" />
        </div>
      </button>
      <button @focus="selectRadio(3)" class="h-[90px] w-full flex mb-1 text-start group">
        <div class="w-1.5 me-1 bg-secondary group-focus:bg-primary rounded-full h-full"></div>
        <div class="border-2 border-secondary rounded-lg h-full w-full px-7 flex items-center justify-between">
          <div>
            <h1 class="font-semibold text-lg -mb-1 text-secondary group-focus:text-primary">JNT Rp.0 <span class="text-secondary">Gratis Ongkir</span></h1>
            <p class="font-medium text-secondary group-focus:text-primary">Akan diterima pada 25 - 28 Jan 2024</p>
          </div>
          <input type="radio" class="radio-input" value="3" name="options" />
        </div>
      </button>
      <div class="flex justify-end font-neue text-lg mt-10">
        <Button>NANTI SAJA</Button>
        <Button class="bg-primary px-10 text-white">SIMPAN</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePopupStore } from "@/stores/Popup";
import { storeToRefs } from "pinia";
import Button from "./Button.vue";

const popup = usePopupStore();

const { pengiriman } = storeToRefs(popup);

const closePengirimanBtn = () => {
  popup.closePengirimanBtn();
};

const selectRadio = (index) => {
  const radios = document.querySelectorAll(".radio-input");
  if (radios[index]) {
    radios[index].checked = true;
  }
};
</script>

<style scoped>
.radio-input {
  appearance: none;
  width: 18px;
  height: 18px;
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
  width: 11px;
  height: 11px;
  background-color: #232121;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
