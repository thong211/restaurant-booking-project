<template >
  <div id="app"  class=" dark:bg-gray-300" >
    <div class="container">
      <header>
        <div class="title">
          Tìm kiếm:
          <input type="text" v-model="searchQuery" placeholder="Tìm sản phẩm..." />
        </div>
        <div class="icon-cart" @click="toggleCart">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
          </svg>
          <span>{{ cartItemCount }}</span>
        </div>
      </header>
      <div class="listProduct">
        <!-- Filtered Product list -->
        <div v-for="product in filteredProducts" :key="product.id" class="item">
          <img :src="product.image" :alt="product.name">
          <h2>{{ product.name }}</h2>
          <div class="price"> {{ product.price }} VNĐ </div>
          <router-link :to="{ name: 'oder' }" style="text-decoration: none;">
        <button class="menu-item">Đặt bàn</button>
      </router-link>
          <button class="addCart" @click="addToCart(product.id)">Thêm giỏ hàng</button>
        </div>
      </div>
    </div>
    <div class="cartTab" v-if="isCartOpen">
      <h1 ><b>Giỏ Hàng</b></h1>
      <div class="listCart">
        <!-- Shopping cart items -->
        <div v-for="item in cart" :key="item.product_id" class="item">
          <div class="image">
            <img :src="getProductImage(item.product_id)" :alt="getProductName(item.product_id)">
          </div>
          <div class="name">{{ getProductName(item.product_id) }}</div>
          <div class="totalPrice"> {{ getProductTotalPrice(item.product_id, item.quantity) }} VNĐ </div>
          <div class="quantity">
            <span class="minus" @click="changeQuantityCart(item.product_id, 'minus')">-</span>
            <span>{{ item.quantity }}</span>
            <span class="plus" @click="changeQuantityCart(item.product_id, 'plus')">+</span>
            <span class="delete" @click="deleteFromCart(item.product_id)">Xoá</span>
          </div>
        </div>
      </div>
<div>
  <hr class="m-1"> <b>Tổng: {{ cartTotal }} VNĐ</b></div>
      <div class="btn h-16">
        <button class="close" @click="toggleCart">Đóng</button>
        <button class="checkOut" @click="checkOut">Thanh Toán</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCartOpen: false,
      cartItemCount: 0,
      products: [],
      cart: [],
      searchQuery: '' // Add searchQuery data property
    };
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((total, item) => {
        const product = this.products.find(prod => prod.id === item.product_id);
        return total + (product ? product.price * item.quantity : 0);
      }, 0);
    },
    filteredProducts() {
      // Filter products based on searchQuery
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    checkOut() {
      this.$router.push('/thanhtoan');
    },
    addToCart(product_id) {
      let positionThisProductInCart = this.cart.findIndex((value) => value.product_id == product_id);
      if (this.cart.length <= 0) {
        this.cart = [{
          product_id: product_id,
          quantity: 1
        }];
      } else if (positionThisProductInCart < 0) {
        this.cart.push({
          product_id: product_id,
          quantity: 1
        });
      } else {
        this.cart[positionThisProductInCart].quantity++;
      }
      this.updateCartItemCount();
      this.addCartToMemory();
    },
    updateCartItemCount() {
      let totalCount = 0;
      this.cart.forEach(item => {
        totalCount += item.quantity;
      });
      this.cartItemCount = totalCount;
    },
    getProductImage(product_id) {
      let product = this.products.find(prod => prod.id === product_id);
      return product ? product.image : '';
    },
    getProductName(product_id) {
      let product = this.products.find(prod => prod.id === product_id);
      return product ? product.name : '';
    },
    getProductTotalPrice(product_id, quantity) {
      let product = this.products.find(prod => prod.id === product_id);
      return product ? product.price * quantity : 0;
    },
    changeQuantityCart(product_id, type) {
      let positionItemInCart = this.cart.findIndex((value) => value.product_id == product_id);
      if (positionItemInCart >= 0) {
        switch (type) {
          case 'plus':
            this.cart[positionItemInCart].quantity++;
            break;
          case 'minus':
            let changeQuantity = this.cart[positionItemInCart].quantity - 1;
            if (changeQuantity > 0) {
              this.cart[positionItemInCart].quantity = changeQuantity;
            } else {
              this.cart.splice(positionItemInCart, 1);
            }
            break;
        }
        this.updateCartItemCount();
        this.addCartToMemory();
      }
    },
    deleteFromCart(product_id) {
      let deleteIndex = this.cart.findIndex((value) => value.product_id === product_id);
      if (deleteIndex >= 0) {
        this.cart.splice(deleteIndex, 1);
        this.updateCartItemCount();
        this.addCartToMemory();
      }
    },
    addCartToMemory() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    initApp() {
      fetch('products.json')
        .then(response => response.json())
        .then(data => {
          this.products = data;

          if (localStorage.getItem('cart')) {
            this.cart = JSON.parse(localStorage.getItem('cart'));
            this.updateCartItemCount();
          }
        });
    }
  },
  mounted() {
    this.initApp();
  }
};

</script>
<style>
.title input {
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #000000;
  border-radius: 5px;
}
.container {
  width: 900px;
  margin: auto;
  max-width: 90vw;
  text-align: center;
  padding-top: 10px;
  transition: transform .5s;
}

svg {
  width: 30px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.icon-cart {
  position: relative;
}

.icon-cart span {
  position: absolute;
  background-color: red;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  top: 50%;
  right: -20px;
}

.title {
  font-size: 1rem;
}

.listProduct .item img {
  width: 100%;
  height: 50%;
  padding-bottom: 20px;
  filter: drop-shadow(0 10px 20px #0009);
}

.listProduct {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.listProduct .item {
  background-color: #EEEEE6;
  padding: 20px;
  border-radius: 20px;
}

.listProduct .item h2 {
  font-weight: 500;
  font-size: large;
}

.listProduct .item .price {
  letter-spacing: 1px;
  font-size: large;
  color: red;
}

.listProduct .item button  {
  background-color: rgb(233, 71, 50);
  color: #eee;
  border: none;
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 20px;
}
.listProduct .item button:hover
{
background-color: green;
}
/* cart */
.cartTab {
  width: 500px;
  background-color: #f0ece6;
  color: rgb(0, 0, 0);
  position: fixed;
  top: 0;
  right: 0px;
  bottom: 0;
  display: grid;
  grid-template-rows: 70px 1fr 50px;
  transition: .5s;

}

/* template .showCart .cartTab{
  right: 0;
}
template .showCart .container{
  transform: translateX(-250px);
} */
.cartTab h1 {
  padding: 20px;
  margin: 0;
  font-weight: 300;
}

.cartTab .btn {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.cartTab .listCart .delete {
  padding: auto;
  background: red;
  color:#eee;
  width: 30%;
  border-radius: 0;
}
.cartTab .listCart .delete:hover{
  background:rgb(119, 0, 0) ;
}
.cartTab button {
  background-color: green;
  border: none;
  font-family: Poppins;
  font-weight: 500;
  cursor: pointer;
  color: #eee;
}

.cartTab .close {
  background-color: rgb(255, 0, 0);
}
.cartTab .close:hover {
  background-color:rgb(119, 0, 0);
}.cartTab .checkOut:hover {
  background-color:rgb(5, 119, 81);
}

.listCart .item img {
  width: 100%;
  margin: 10px;
}

.listCart .item {
  display: grid;
  grid-template-columns: 70px 150px 100px 1fr;
  gap: 10px;
  text-align: center;
  align-items: center;
}

.listCart .quantity span {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: #eee;
  border-radius: 50%;
  color: #555;
  cursor: pointer;
}

.listCart .quantity span:nth-child(2) {
  background-color: transparent;
  color: rgb(0, 0, 0);
  cursor: auto;
}

.listCart .item:nth-child(even) {
  background-color: #eee1;
}

.listCart {
  overflow: auto;
}

.listCart::-webkit-scrollbar {
  width: 0;
}

@media only screen and (max-width: 992px) {
  .listProduct {
    grid-template-columns: repeat(3, 1fr);
  }
}


/* mobile */
@media only screen and (max-width: 768px) {
  .listProduct {
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>
