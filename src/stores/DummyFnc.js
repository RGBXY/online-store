import { defineStore } from "pinia";
import { useDataStore } from "./Data";

export const useDummyFncStore = defineStore("dummyFnc", {
  state: () => ({
    userStatus: false,
    navStatus: false,
    menuStatus: false,
    searchStatus: false,
    profileImage: localStorage.getItem("profileImage") || "",
    cartsdat: [],
  }),

  actions: {
    setUserStat() {
      this.userStatus = true;
      localStorage.setItem("userStatus", JSON.stringify(this.userStatus));
    },

    logout() {
      this.userStatus = false;
      localStorage.setItem("userStatus", JSON.stringify(this.userStatus));
    },

    updateProfileImage(file) {
      const fileName = file.name;
      this.profileImage = fileName;
      localStorage.setItem("profileImage", fileName);
    },

    cart() {
      const data = useDataStore();
      const id = Date.now();
      
      const newCartItem = {
        id: id,
        harga: 200000,
        produk: "DENIM JACKET",
        img: "../../public/assets/image_populer_2.png",
        deskripsi: "JAKET DENIM JEANS TEBAL PRIA WANITA",
        jenis: "warna biru, ukuran jaket:XL",
        jumlah: 1,
      };

      data.carts.push(newCartItem);

      this.cartsdat = data.carts;
    },

    deleteCartItem(cartId) {
      const data = useDataStore();
      data.removeCartItem(cartId);
      this.cartsdat = data.carts;
    },

    navResBtn() {
      this.navStatus = true;
      this.menuStatus = false;
      this.searchStatus = false;
    },

    menuResBtn() {
      this.menuStatus = true;
      this.navStatus = false;
    },

    searchResBtn() {
      this.searchStatus = !this.searchStatus;
      this.navStatus = false;
    },

    navResBtnClose() {
      this.navStatus = false;
    },

    menuResBtnClose() {
      this.menuStatus = false;
    },
  },
});
