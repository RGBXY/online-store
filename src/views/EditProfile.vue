<template>
  <div class="pt-32 px-10 mb-20 flex flex-col lg:flex-row justify-center lg:justify-between w-full h-full min-h-screen">
    <div class="lg:w-[20%] w-full mb-10 flex justify-center lg:justify-start items-center flex-col">
      <h1 class="text-[2.5rem] font-neue mb-7">EDIT PROFILE</h1>
      <div class="relative w-[200px]">
        <img class="w-[200px] h-[200px] rounded-full" src="../../public/assets/image_kategori_4.png" alt="" />
        <button class="bg-black inline-block p-3 rounded-full absolute right-3 bottom-0">
          <img class="" src="../../public/assets/icon_pencil.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="lg:w-[70%] w-full border h-full border-secondary p-5">
      <div class="flex flex-wrap items-start justify-between">
        <div class="lg:w-[45%] md:w-[350px] w-full h-[100px] flex-shrink-0 flex-grow-0 mb-5">
          <h1 class="font-neue text-2xl mb-2">Nama Lengkap</h1>
          <input type="text" class="px-3 py-2 w-full border border-primary rounded-md" placeholder="Jhon Doe" />
        </div>
        <div class="lg:w-[45%] md:w-[350px] w-full h-[100px] flex-shrink-0 flex-grow-0 mb-5">
          <h1 class="font-neue text-2xl mb-2">Alamat Email</h1>
          <input type="text" class="px-3 py-2 w-full border border-primary rounded-md" placeholder="jhon@gmail.com" />
        </div>
        <div class="lg:w-[45%] md:w-[350px] w-full h-[100px] flex-shrink-0 flex-grow-0 mb-5">
          <h1 class="font-neue text-2xl mb-2">Kode Pos</h1>
          <input type="text" class="px-3 py-2 w-full border border-primary rounded-md" placeholder="11111" />
        </div>
        <div class="lg:w-[45%] md:w-[350px] w-full h-[100px] flex-shrink-0 flex-grow-0 mb-5">
          <h1 class="font-neue text-2xl mb-2">Tanggal Lahir</h1>
          <input type="text" class="px-3 py-2 w-full border border-primary rounded-md" placeholder="Masukan Nama" />
        </div>
        <div class="lg:w-[45%] md:w-[350px] w-full h-[100px] flex-shrink-0 flex-grow-0 mb-5">
          <h1 class="font-neue text-2xl mb-2">Jenis Kelamin</h1>
          <input type="text" class="px-3 py-2 w-full border border-primary rounded-md" placeholder="Pria" />
        </div>
      </div>
      <div class="flex gap-4">
        <button class="border border-primary py-1 px-5 rounded-md font-neue text-xl">Nanti Saja</button>
        <button class="border border-primary py-1 px-5 bg-primary text-white rounded-md font-neue text-xl">Simpan</button>
      </div>
    </div>
    <div></div>
  </div>
</template>
