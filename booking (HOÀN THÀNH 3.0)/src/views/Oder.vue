<template>
 
  <div class="bg-gray-300">
    <div class="sm:mx-auto sm:w-full sm:max-w-xl p-4">
      <form class="bg-white shadow-md rounded px-10 pt-10 pb-8 xl-4">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          CHI TIẾT ĐẶT BÀN
        </h2>
        <input type="hidden" value="987477ecef873a86e404eb76d369a628fcdab4d9" name="_token" />
        <div class="mb-3 form-icon position-relative">
          <input type="date" id="date" value="" required="" class="form-control" placeholder="Chọn ngày" name="date" />
          <i class="fas fa-calendar-alt"></i>
        </div>
        <div class="mb-3 form-icon position-relative">
          <input type="number" id="number" value="" required="" min="0" class="form-control" placeholder="Số lượng khách"
            name="so_luong" />
          <i class="fas fa-users"></i>
        </div>
        <div class="mb-3 form-icon position-relative">
          <input type="time" id="time" value="" required="" class="form-control" placeholder="Giờ đặt bàn"
            name="time" />
          <i class="far fa-clock"></i>
        </div>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          THÔNG TIN LIÊN HỆ
        </h2>
        <div class="mb-3 form-icon position-relative">
          <input type="text" id="text" value="" class="form-control" required="" placeholder="Họ và tên"
            name="ho_ten" />
          <i class="far fa-user"></i>
        </div>
        <div class="mb-3 form-icon position-relative">
          <input type="email" id="email" value="" class="form-control" required="" placeholder="Email" name="email" />
          <i class="far fa-envelope"></i>
        </div>
        <div class="mb-3 form-icon position-relative">
          <input type="text" id="text" value="" class="form-control" required=""  pattern="[0-9]{10,11}" placeholder="Số điện thoại"
            name="dien_thoai" />
          <i class="fas fa-phone-alt"></i>
        </div>
        <div class="mb-3 col-span-3">
          <textarea class="form-control" rows="3" name="ghi_chu"
            placeholder="Vui lòng cho chúng tôi biết yêu cầu của khác:"></textarea>
        </div>
        <div class="text-center">
          <button class="btn btn-danger" @click="checkOrder" name="booking">
            XÁC NHẬN ĐẶT BÀN
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    // kiểm tra đăng nhâp
    checkOrder() {
      var a = document.getElementById("date").value;
      var b = document.getElementById("number").value;
      var c = document.getElementById("time").value;
      var d = document.getElementById("text").value;
      var e = document.getElementById("email").value;

      if (a === "" || b === "" || c === "" || d === "" || e === "") {
        alert("vui lòng nhập đủ thông tin! ");
      } else {
        alert("đặt bàn thành công");
      }
    }
  }
}
</script>
