import { defineStore } from "pinia";
import { useDataStore } from "./Data";

export const useDummyFncStore = defineStore("dummyFnc", {
  state: () => ({
    userStatus: false,
    profileImage: localStorage.getItem("profileImage") || "",
    cartsdat: [],
  }),

  actions: {
    setUserStat() {
      this.userStatus = true;
      localStorage.setItem("userStatus", JSON.stringify(this.userStatus));

      if (this.userStatus === true) {
        window.location.href = "/profile";
      }
    },

    logout() {
      this.userStatus = false;
      localStorage.setItem("userStatus", JSON.stringify(this.userStatus));

      if (this.userStatus === false) {
        window.location.href = "/login";
      }
    },

    updateProfileImage(file) {
      const fileName = file.name;
      this.profileImage = fileName;
      localStorage.setItem("profileImage", fileName);
    },

    cart() {
      const data = useDataStore();
      let id = 1;

      // The object you want to add
      const newCartItem = {
        id: id++,
        harga: 200000,
        produk: "DENIM JACKET",
        img: "../../public/assets/image_populer_2.png",
        deskripsi: "JAKET DENIM JEANS TEBAL PRIA WANITA",
        jenis: "warna biru, ukuran jaket:XL",
        jumlah: 1,
      };

      // Add the new object to the carts array
      data.carts.push(newCartItem);

      // Update local state and log the updated array
      this.cartsdat = data.carts;
    },
  },
});
