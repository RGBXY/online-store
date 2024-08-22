<template>
  <div class="pt-32 px-10 mb-20 flex flex-col w-full h-full min-h-screen font-roboto">
    <h1 class="font-neue text-4xl mb-6">KERANJANG</h1>
    <div class="flex w-full items-start justify-between">
      <div class="w-[65%]">
        <div class="shadow-md p-3 border mb-7 flex items-center gap-8">
          <input type="checkbox" class="radio-input" value="wanita" name="options" />
          <p class="font-medium">
            Pilih Semua <span class="text-secondary">({{ totalUniqueProducts }} Barang)</span>
          </p>
        </div>
        <div v-for="cart in carts" :key="cart.id" class="p-3 shadow-md mb-6">
          <div class="flex justify-between mb-4">
            <div class="flex items-center gap-14">
              <input type="checkbox" class="radio-input" value="1" name="options" />
              <h1 class="font-neue text-3xl">{{ cart.produk }}</h1>
            </div>
            <h1 class="font-medium text-xl">Rp. {{ cart.harga }}</h1>
          </div>
          <div class="flex justify-between">
            <div class="flex gap-4">
              <img class="w-[120px] h-[100px] object-cover" :src="cart.img" alt="" />
              <div>
                <h1 class="font-neue text-xl -mb-2">{{ cart.deskripsi }}</h1>
                <p class="text-secondary font-medium">{{ cart.jenis }}</p>
              </div>
            </div>
            <div class="flex gap-5 items-end justify-end">
              <button class="mb-1.5">
                <img src="../../public/assets/icon_trash.svg" alt="" />
              </button>
              <div class="border border-primary py-1 px-2 rounded-lg flex items-center gap-3">
                <button @click="minus(cart)" class="py-2">
                  <img src="../../public/assets/icon_minus.svg" alt="" />
                </button>
                <p>{{ cart.jumlah }}</p>
                <button @click="plus(cart)" class="py-2">
                  <img src="../../public/assets/icon_plus.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[30%] h-full shadow-md p-4">
        <h1 class="font-neue text-2xl mb-1">LOKASI</h1>
        <div class="flex items-center gap-3 mb-5">
          <img src="../../public/assets/icon_location.svg" alt="" />
          <p class="font-medium">Bulu Lor, semarang, Jawa Tengah</p>
        </div>
        <h1 class="font-neue text-2xl mb-1">RINGKASAN PESANAN</h1>
        <div class="flex items-center justify-between mb-4">
          <p class="text-secondary font-medium">Subtotal ({{ total }} barang)</p>
          <h1 class="font-medium">Rp.{{ totalPrice }}</h1>
        </div>
        <p class="text-secondary font-medium mb-4">Biaya Pengiriman</p>
        <div class="flex items-center justify-between mb-6">
          <p class="font-medium font-neue text-2xl">TOTAL</p>
          <h1 class="font-semibold">Rp.{{ totalPrice }}</h1>
        </div>
        <RouterLink to="/payment">
          <p class="text-sm font-medium text-end">Termasuk PPN, jika berlaku</p>
          <Button class="bg-primary text-white w-full">CHECKOUT</Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
import { useDataStore } from "@/stores/Data";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const data = useDataStore();
const { carts } = storeToRefs(data);
const totalUniqueProducts = computed(() => carts.value.length);

const plus = (cart) => {
  cart.jumlah++;
};
  
const minus = (cart) => {
  if (cart.jumlah > 1) {
    cart.jumlah--;
  }
};

const total = computed(() => {
  return carts.value.reduce((total, cart) => {
    return total + cart.jumlah;
  }, 0);
});

const totalPrice = computed(() => {
  return carts.value.reduce((total, cart) => {
    return total + cart.harga * cart.jumlah;
  }, 0);
});
</script>

<style scoped>
.radio-input {
  appearance: none;
  width: 25px;
  height: 25px;
  border: 2px solid #232121;
  position: relative;
  border-radius: 8px;
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
  position: absolute;
  border-radius: 3px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
