<template>
  <Hero />
  <Kategori />
  <Populer />
  <Blog />
</template>

<script setup>
import Hero from "@/components/Hero.vue";
import Kategori from "@/components/Kategori.vue";
import Populer from "@/components/Populer.vue";
import Blog from "@/components/Blog.vue";
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
