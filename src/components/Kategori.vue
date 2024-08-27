<template>
  <div class="py-14 lg:px-10 px-6 font-neue">
    <h1 class="text-[40px]">KATEGORI</h1>
    <div class="flex gap-8 mt-10 justify-between no-scrollbar overflow-x-auto overflow-y-hidden">
      <div class="text-center w-[210px] shrink-0">
        <img class="w-full h-[220px] object-cover mb-3 bg-[#D9D9D9] rounded-xl" src="../../public/assets/image_kategori_1.png" alt="" />
        <h1 class="text-4xl">JAKET</h1>
      </div>
      <div class="text-center w-[210px] shrink-0">
        <img class="w-full h-[220px] object-cover mb-3 bg-[#D9D9D9] rounded-xl" src="../../public/assets/image_kategori_2.png" alt="" />
        <h1 class="text-4xl">T-SHIRT</h1>
      </div>
      <div class="text-center w-[210px] shrink-0">
        <img class="w-full h-[220px] object-cover mb-3 bg-[#D9D9D9] rounded-xl" src="../../public/assets/image_kategori_3.png" alt="" />
        <h1 class="text-4xl">KEMEJA</h1>
      </div>
      <div class="text-center w-[210px] shrink-0">
        <img class="w-full h-[220px] object-cover mb-3 bg-[#D9D9D9] rounded-xl" src="../../public/assets/image_kategori_4.png" alt="" />
        <h1 class="text-4xl">OUTERS</h1>
      </div>
      <div class="text-center w-[210px] shrink-0">
        <img class="w-full h-[220px] object-cover mb-3 bg-[#D9D9D9] rounded-xl" src="../../public/assets/image_kategori_5.png" alt="" />
        <h1 class="text-4xl">SHIRTS</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from "@/stores/Data";
import { storeToRefs } from "pinia";

const data = useDataStore();

const { kategoris } = storeToRefs(data);
</script>
