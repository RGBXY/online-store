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
      const data = useDataStore(); // Accessing the store directly might cause issues, use composable if needed
      const id = Date.now(); // Use timestamp or UUID for unique ID

      // The object you want to add
      const newCartItem = {
        id: id,
        harga: 200000,
        produk: "DENIM JACKET",
        img: "../../public/assets/image_populer_2.png",
        deskripsi: "JAKET DENIM JEANS TEBAL PRIA WANITA",
        jenis: "warna biru, ukuran jaket:XL",
        jumlah: 1,
      };

      // Add the new object to the carts array in Data store
      data.carts.push(newCartItem);

      // Update local state and log the updated array
      this.cartsdat = data.carts;
    },

    removeCartItem(id) {
      this.carts = this.carts.filter((cart) => cart.id !== id);
    },

    deleteCartItem(cartId) {
      const data = useDataStore(); // Accessing the store
      data.removeCartItem(cartId); // Use action from the Data store
      this.cartsdat = data.carts; // Update local state if needed
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
