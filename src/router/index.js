import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ProfileView from "@/views/ProfileView.vue";
import StatusPesanan from "@/views/StatusPesanan.vue";
import EditProfile from "@/views/EditProfile.vue";
import AboutView from "@/views/AboutView.vue";
import DetailView from "@/views/DetailView.vue";
import CartView from "@/views/CartView.vue";
import PaymentView from "@/views/PaymentView.vue";
import HistoryView from "@/views/HistoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/status-pesanan",
      name: "status",
      component: StatusPesanan,
    },
    {
      path: "/edit-profile",
      name: "edit",
      component: EditProfile,
    },
    {
      path: "/tentang-kami",
      name: "about",
      component: AboutView,
    },
    {
      path: "/detail",
      name: "detail",
      component: DetailView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/payment",
      name: "payment",
      component: PaymentView,
    },
    {
      path: "/order-history",
      name: "history",
      component: HistoryView,
    },
  ],
});

export default router;
