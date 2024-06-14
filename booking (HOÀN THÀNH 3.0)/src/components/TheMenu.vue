<template>
  <a-menu mode="inline" theme="red" >
    <a-menu-item key="home">
      <router-link :to="{ name: 'home' }" style="text-decoration: none;">
        <span class="menu-item">Trang chủ</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="gioithieu">
      <router-link :to="{ name: 'gioithieu' }" style="text-decoration: none;">
        <span class="menu-item">Giới thiệu</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="cart">
      <router-link :to="{ name: 'cart' }" style="text-decoration: none;">
        <span class="menu-item">Menu</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="contact">
      <router-link :to="{ name: 'contact' }" style="text-decoration: none;">
        <span class="menu-item">Liên hệ</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="oder">
      <router-link :to="{ name: 'oder' }" style="text-decoration: none;">
        <span class="menu-item">Đặt bàn</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="login">
      <router-link :to="{ name: 'login' }" style="text-decoration: none;">
        <span class="menu-item">Đăng nhập</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<style>
.menu-item {
  transition: background-color 0.3s, color 0.3s;
  padding: 10px 20px; /* Adjust padding as needed */
  font-size: 16px; /* Adjust font size as needed */
}

.menu-item:hover {
  background-color: #F6AFA5; 
}



</style>
