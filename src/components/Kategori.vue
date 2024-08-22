<template>
  <div class="py-14 px-10 font-neue">
    <h1 class="text-[40px]">KATEGORI</h1>
    <div class="flex gap-8 mt-10 justify-between no-scrollbar overflow-x-auto overflow-y-hidden">
      <div v-for="kategori in kategoris" :key="kategori.id" class="text-center w-[210px] shrink-0">
        <img class="w-full h-[220px] object-cover mb-3 bg-[#D9D9D9] rounded-xl" :src="kategori.img" alt="" />
        <h1 class="text-4xl">{{ kategori.kategori }}</h1>
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
