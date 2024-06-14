<template>
  <div class="bg-gray-300">
    <div class="sm:mx-auto sm:w-full sm:max-w-xl p-4">
      <form class="bg-white shadow-md rounded px-10 pt-10 pb-8 xl-4" @submit.prevent="checkOrder">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          THÔNG TIN LIÊN HỆ
        </h2>
        <div class="mb-3 form-icon position-relative">
          <input type="text" id="ho_ten" value="" class="form-control" placeholder="Họ và tên" name="ho_ten" />
          <i class="far fa-user"></i>
        </div>
        <div class="mb-3 form-icon position-relative">
          <input type="email" id="email" value="" class="form-control" placeholder="Email" name="email"  />
          <i class="far fa-envelope"></i>
        </div>
            <div class="mb-3 form-icon position-relative">
            <input type="text" id="number" value="" class="form-control" placeholder="Số điện thoại" name="dien_thoai" 
            pattern="[0-9]{10,11}"/>
            <i class="fas fa-phone-alt"></i>
            </div>
        <h4 class="mb-3">Hình thức thanh toán</h4>
        <div class="d-block my-3">
          <div class="custom-control custom-radio">
            <input id="check1" name="httt_ma" type="radio" class="custom-control-input" value="tien_mat">
            <label class="custom-control-label" >Tiền mặt</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="check2" name="httt_ma" type="radio" @click="chuyenkhoan" class="custom-control-input" value="chuyen_khoan">
            <label class="custom-control-label" >Chuyển khoản ngân hàng</label>
          </div>
        </div>
        <div class="mb-3 col-span-3">
          <textarea class="form-control" rows="3" name="ghi_chu" placeholder="Vui lòng cho chúng tôi biết yêu cầu của bạn:"></textarea>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-danger" name="booking">Thanh Toán</button>
        </div>
      </form>
    </div>
  </div>
  
</template>

<script>
export default {
  methods: {
    // Kiểm tra đơn hàng
    checkOrder() {
      var hoTen = document.getElementById("ho_ten").value;
      var email = document.getElementById("email").value;
      var number = document.getElementById("number").value;
      var tienMatChecked = document.getElementById("check1").checked;
      var chuyenKhoanChecked = document.getElementById("check2").checked;

      if (hoTen === "" || email === "" || number==="") {
        alert("Vui lòng nhập đầy đủ thông tin.");
      } else if (!tienMatChecked && !chuyenKhoanChecked) {
        alert("Vui lòng chọn phương thức thanh toán.");
        return this.checkOrder;
      } else {
        alert("Cảm ơn quý Khách đã đặt hàng thành công!!!");
      } 
    }  
  }
}
</script>