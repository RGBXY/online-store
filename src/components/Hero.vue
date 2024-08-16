<template>
  <div class="h-screen relative w-full flex justify-center items-center pt-20">
    <swiper
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      :autoplay="{
        delay: 10000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper bg-red-200 h-full flex justify-center items-center text-center font-neue text-white"
    >
      <swiper-slide class="relative">
        <div class="absolute z-30 h-full flex flex-col items-center justify-center w-full">
          <p class="text-3xl mb-4">DESIGNED BY</p>
          <h1 class="text-6xl mb-4">AUTUMN RETRO COLLECTION</h1>
          <p class="text-3xl mb-9">
            Introduction a shympony of textures, color, and warm of the coming <br />
            season
          </p>
          <button class="bg-white text-black font-roboto font-semibold py-3 px-12 rounded-xl text-lg">Explore Now</button>
        </div>
        <img class="h-full object-cover w-full object-top" src="../../public/assets/image_banner_1.png" alt="" />
      </swiper-slide>
      <swiper-slide class="relative h-full">
        <div class="absolute z-30 h-full flex flex-col items-center justify-center w-full">
          <p class="text-3xl mb-4">DESIGNED BY</p>
          <h1 class="text-6xl mb-4">AUTUMN RETRO COLLECTION</h1>
          <p class="text-3xl mb-9">
            Introduction a shympony of textures, color, and warm of the coming <br />
            season
          </p>
          <button class="bg-white text-black font-roboto font-semibold py-3 px-12 rounded-xl text-lg">Explore Now</button>
        </div>
        <img class="h-full object-cover w-full object-top" src="../../public/assets/image_banner_2.png" alt="" />
      </swiper-slide>
      <swiper-slide class="relative">
        <div class="absolute z-30 h-full flex flex-col items-center justify-center w-full">
          <p class="text-3xl mb-4">DESIGNED BY</p>
          <h1 class="text-6xl mb-4">AUTUMN RETRO COLLECTION</h1>
          <p class="text-3xl mb-9">
            Introduction a shympony of textures, color, and warm of the coming <br />
            season
          </p>
          <button class="bg-white text-black font-roboto font-semibold py-3 px-12 rounded-xl text-lg">Explore Now</button>
        </div>
        <img class="h-full object-cover w-full object-top" src="../../public/assets/image_banner_3.png" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
};
</script>

<style>
.swiper-pagination-bullet {
  background: white;
  opacity: 100%;
  width: 14px;
  height: 14px;
}
.swiper-pagination-bullet-active {
  background: #232121;
}
</style>
