import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    kategoris: [
      {
        id: 1,
        img: "../../public/assets/image_kategori_1.png",
        kategori: "JAKET",
      },
      {
        id: 2,
        img: "../../public/assets/image_kategori_2.png",
        kategori: "T-SHIRT",
      },
      {
        id: 3,
        img: "../../public/assets/image_kategori_3.png",
        kategori: "KEMEJA",
      },
      {
        id: 4,
        img: "../../public/assets/image_kategori_4.png",
        kategori: "OUTERS",
      },
      {
        id: 5,
        img: "../../public/assets/image_kategori_5.png",
        kategori: "SHIRTS",
      },
    ],

    populers: [
      {
        id: 1,
        img: "../../public/assets/image_populer_2.png",
        produk: "DENIM JACKET",
        hargaDiskon: 200000,
        hargaAsli: 250000,
      },
      {
        id: 2,
        img: "../../public/assets/image_populer_3.png",
        produk: "SHIRT",
        hargaDiskon: 210000,
        hargaAsli: 250000,
      },
      {
        id: 3,
        img: "../../public/assets/image_populer_1.png",
        produk: "POLO SHIRT",
        hargaDiskon: 150000,
        hargaAsli: 200000,
      },
      {
        id: 4,
        img: "../../public/assets/image_kategori_4.png  ",
        produk: "OUTERS",
        hargaDiskon: 200000,
        hargaAsli: 250000,
      },
    ],

    carts: [
      {
        id: 1,
        harga: 200000,
        produk: "DENIM JACKET",
        img: "../../public/assets/image_populer_2.png",
        deskripsi: "JAKET DENIM JEANS TEBAL PRIA WANITA",
        jenis: "warna biru, ukuran jaket:XL",
        jumlah: 1,
      },
    ],
  }),
});
