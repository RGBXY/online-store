<template>
  <div class="pt-32 px-6 lg:px-10 mb-20 flex justify-between w-full h-full min-h-screen font-roboto">
    <div class="w-full">
      <h1 class="text-4xl font-neue mb-8">ORDER HISTORY</h1>
      <div class="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-7 mb-8">
        <div class="border flex items-center justify-between text-base pl-2 pr-3 w-full lg:w-[400px] rounded-lg border-primary">
          <input type="text" class="lg:px-3 px-1 lg:py-4 py-2 outline-none w-full lg:w-[90%]" placeholder="Cari riwayat belanja disini" />
          <button>
            <img src="../../public/assets/icon_search.svg" alt="" />
          </button>
        </div>
        <div class="flex items-center gap-3">
          <img class="w-6" src="../../public/assets/icon_callender.svg" alt="" />
          <p class="font-medium text-secondary">Pilih tanggal riwayat order</p>
        </div>
      </div>
      <div class="w-full flex flex-col lg:flex-row justify-between shadow-md lg:p-5 p-4 divide-x-2">
        <div class="flex flex-col lg:flex-row gap-4 lg:w-[40%] mb-7 w-full">
          <img class="md:w-[100px] md:h-[80px] w-full h-[200px] object-cover rounded-xl" src="../../public/assets/image_populer_2.png" alt="" />
          <div>
            <h1 class="font-neue text-xl -mb-1">JAKET DENIM JEANS TEBAL PRIA WANITA</h1>
            <p class="text-secondary font-medium mb-2">warna biru, ukuran jaket:XL</p>
            <h1 class="font-neue text-xl -mb-1">TOTAL PEMBAYARAN</h1>
            <p class="text-secondary font-medium">Rp.200.000</p>
          </div>
        </div>
        <div class="lg:w-[30%] w-full mb-8 px-4 lg:px-10">
          <h1 class="font-neue text-xl">ALAMAT</h1>
          <p class="text-sm text-secondary">Jl. Anjasmoro Raya, Tawangsari, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50144</p>
        </div>
        <div class="gap-4 lg:w-[30%] w-full px-4 lg:px-10">
          <p class="font-medium mb-2">Dikirim - Diterima</p>
          <div class="flex items-center gap-3 mb-2">
            <img class="w-6" src="../../public/assets/icon_time.svg" alt="" />
            <p class="text-sm text-secondary">1 Januari 2024 - 4 Januari 2024</p>
          </div>
          <h1 class="font-medium mb-3">Pengiriman</h1>
          <div class="border border-primary px-3 py-4 rounded-lg inline-block mb-8">
            <div class="flex items-center gap-2">
              <img src="../../public/assets/icon_verif.svg" alt="" />
              <h1 class="text-xl font-medium">Rp.13.000</h1>
            </div>
            <h1 class="font-medium -mb-1">Standar</h1>
            <h1 class="font-medium text-secondary">Estimasi tiba 18-19 Des</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
