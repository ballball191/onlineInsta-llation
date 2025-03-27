import Vue from "vue"
import VueRouter from "vue-router"
import InstallationProcess from "../views/InstallationProcess.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "installation",
    component: InstallationProcess,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router

