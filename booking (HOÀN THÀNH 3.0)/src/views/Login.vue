<template>

  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-10 lg:px-8 w-full p-4 bg-gray-300">
    <div class="p-4 w-80 bg-white sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Đăng nhập
        </h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="login">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-black-900">E-mail
            </label>
            <div>
              <input id="email" name="email" type="email" autocomplete="email" v-model="username"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style="background-color: #DDDDDD;" />
            </div>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mật khẩu</label>
            <div>
              <input id="password" name="password" type="password" v-model="password" autocomplete="current-password"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style="background-color: #dddddd;" />
            </div>

          </div>
          <div>
            <button type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Đăng nhập
            </button>
            <div class="text-sm">
              <router-link :to="{ name: 'dangky' }">
                <span class="font-semibold text-indigo-600 hover:text-indigo-500">Đăng ký</span>
              </router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      if (this.username === '' || this.password === '') {
        alert('Vui lòng không để trống');
      } else {
        const user = JSON.parse(localStorage.getItem(this.username));
        if (user && user.username === this.username && user.password === this.password) {
          alert('Đăng Nhập Thành Công');
          this.$router.push('/home');
        } else {
          alert('Đăng Nhập Thất Bại');
        }
      }
    }
  }
}
</script>