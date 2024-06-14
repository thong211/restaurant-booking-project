<template>
  <div class="w-full flex p-4 bg-gray-400">
    <div class="w-1/12 flex md:hidden">
      <span class="cursor-pointer" @click="showDrawer()">
        <MenuOutlined />
      </span>
    </div>
    <div class="w-11/12 flex justify-center items-center md:justify-start">
      <!-- Adjusted logo size -->
      <router-link :to="{ name: 'home' }" style="text-decoration: none;">
        <img src="https://theme.hstatic.net/200000662729/1001050504/14/logo.png?v=33" alt="logo" width="130rem"
         class="ms-3 me-3">
      </router-link>
      <div class="w-11/12 hidden md:flex md:justify-center items-center">
        <!-- Added padding to menu items -->
        <router-link :to="{ name: 'gioithieu' }" style="text-decoration: none;">
          <span class="menu-item py-3 px-6 m-1" style="color: aliceblue; font-size: 1.3rem;">Giới Thiệu</span>
        </router-link>
        <router-link :to="{ name: 'cart' }" style="text-decoration: none;">
          <span class="menu-item py-3 px-6 m-1" style="color: aliceblue; font-size: 1.3rem;">Menu</span>
        </router-link>
        <router-link :to="{ name: 'contact' }" style="text-decoration: none;">
          <span class="menu-item py-3 px-6 m-1" style="color: aliceblue; font-size: 1.3rem;">Liên Hệ</span>
        </router-link>
        <router-link :to="{ name: 'oder' }" style="text-decoration: none;">
          <span class="menu-item py-3 px-6 m-1" style="color: aliceblue; font-size: 1.3rem;">Đặt Bàn</span>
        </router-link>
        <router-link :to="{ name: 'login' }" style="text-decoration: none;">
          <span class="menu-item py-3 px-6 m-1" style="color: aliceblue; font-size: 1.3rem;">Đăng nhập</span>
        </router-link>
      </div>
    </div>
  </div>

  <a-drawer v-model:visible="visible" placement="left">
    <TheMenu />
  </a-drawer>
</template>

<script>
import { MenuOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import TheMenu from '../components/TheMenu.vue';

export default defineComponent({
  components: {
    MenuOutlined,
    TheMenu,
  },
  setup() {
    const visible = ref(false);
    const showDrawer = () => {
      visible.value = true;
    };

    return {
      visible,
      showDrawer,
    };
  },
});
</script>

<style>
.menu-item {
  transition: background-color 0.3s, color 0.3s;
}

.menu-item:hover {
  background-color: #e76743; /* Equivalent to bg-gray-700 */


}

.router-link-active .menu-item,
.router-link-exact-active .menu-item {
  background-color: #de361c; /* Equivalent to bg-gray-700 */
  
}
</style>
