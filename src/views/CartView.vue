<template>
  <div class="pt-32 px-10 mb-10 flex flex-col justify-between w-full h-screen font-roboto">
    <h1 class="font-neue text-4xl mb-6">KERANJANG</h1>
    <div class="h-full">
      <div class="w-[75%]">
        <div class="shadow-md py-3 px-3 border flex items-center gap-8">
          <input type="checkbox" class="radio-input" value="wanita" name="options" />
          <p class="font-medium text-lg">Pilih Semua <span class="text-secondary">(3 Barang)</span></p>
        </div>
      </div>
      <div class="w-[20%]"></div>
    </div>
  </div>
</template>

<style>
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
