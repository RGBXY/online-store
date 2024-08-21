import { defineStore } from "pinia";

export const usePopupStore = defineStore("popup", {
  state: () => ({
    pengiriman: false,
    alamat: false,
  }),
  actions: {
    pengirimanBtn() {
      this.pengiriman = true;
      document.body.style.overflow = "hidden";
    },
    alamatBtn() {
      this.alamat = true;
      document.body.style.overflow = "hidden";
    },
    closePengirimanBtn() {
      this.pengiriman = false;
      document.body.style.overflow = "auto";
    },
    closeAlamatBtn() {
      this.alamat = false;
      document.body.style.overflow = "auto";
    },
  },
});
