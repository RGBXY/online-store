<template>
  <div class="font-neue py-10 px-6 lg:px-10">
    <div class="flex lg:items-center flex-col lg:flex-row lg:justify-between mb-10">
      <h1 class="text-[40px]">PRODUK TERPOPULER</h1>
      <div class="flex gap-3 text-xl overflow-auto no-scrollbar">
        <button class="py-4 rounded-lg px-8 border bg-primary text-white transition-all">TERLARIS</button>
        <button class="py-4 rounded-lg px-8 border border-primary hover:bg-primary focus:bg-primary hover:text-white focus:text-white transition-all">TERBARU</button>
        <button class="py-4 rounded-lg px-8 border border-primary hover:bg-primary focus:bg-primary hover:text-white focus:text-white transition-all">TERMURAH</button>
        <button class="py-4 rounded-lg px-8 border border-primary hover:bg-primary focus:bg-primary hover:text-white focus:text-white transition-all">PROMO</button>
      </div>
    </div>
    <div class="flex gap-8 justify-between overflow-x-auto no-scrollbar pb-5">
      <div v-for="populer in populers" :key="populer.id" class="relative w-[330px] overflow-hidden shrink-0 bg-white shadow-lg rounded-xl">
        <img class="w-full h-[260px] object-cover" src="../../public/assets/image_populer_2.png" alt="" />
        <div class="flex justify-between items-center px-5 py-3">
          <div class="">
            <RouterLink to="/detail">
              <h1 class="text-4xl">{{ populer.produk }}</h1>
            </RouterLink>
            <div class="flex gap-2 font-roboto font-semibold">
              <p class="text-2xl">Rp {{ populer.hargaDiskon }}</p>
              <p class="text-[#928F8F] line-through">Rp {{ populer.hargaAsli }}</p>
            </div>
          </div>
          <button @click="cart" class="bg-primary shrink-0 p-3 rounded-xl">
            <img class="w-8" src="../../public/assets/icon_cart.svg" alt="" />
          </button>
          <div class="absolute top-2 left-2 bg-primary text-white text-xl py-1 px-2 rounded-lg">
            <p>DISKON 40%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useDataStore } from "@/stores/Data";
import { useDummyFncStore } from "@/stores/DummyFnc";
import { storeToRefs } from "pinia";

const data = useDataStore();
const dummy = useDummyFncStore();

const { populers } = storeToRefs(data);

const cart = () => {
  dummy.cart();
};
</script>
