<template>
  <!-- slider đầu tiên -->
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
        aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://theme.hstatic.net/200000662729/1001050504/14/slideshow_1.jpg?v=33" class="d-block w-100"
          alt="..." />
      </div>
      <div class="carousel-item">
        <img src="https://theme.hstatic.net/200000662729/1001050504/14/slideshow_2.jpg?v=33" class="d-block w-100"
          alt="..." />
      </div>
      <div class="carousel-item">
        <img src="https://theme.hstatic.net/200000662729/1001050504/14/slideshow_3.jpg?v=33" class="d-block w-100"
          alt="..." />
      </div>
      <div class="carousel-item">
        <img src="https://theme.hstatic.net/200000662729/1001050504/14/slideshow_4.jpg?v=33" class="d-block w-100"
          alt="..." />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- ảnh thứ 2 -->
  <div>
    <section class="py-20 sm:py-12  dark:bg-gray-300;" style="background-color: grey">
      <div class="container max-w-6xl p-16 mx-auto space-y-6 sm:space-y-12" style="background-color: white">
        <a style="text-decoration: none" rel="noopener noreferrer" href="#"
          class="block max-w-sm gap-16 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
          <img src="https://theme.hstatic.net/200000662729/1001050504/14/img_home_main_about.jpg?v=33" alt=""
            class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-6" />
          <div class="p-6 space-y-9 lg:col-span-6">
            <h3 class="font-semibold sm:text-4xl" style="color: black">
              OMAKASE
            </h3>
            <span class="text-xl font-semibold" style="color: red">CÂU CHUYỆN CỦA KASEN OMAKASE</span>
            <p style="color: black">
              Về cốt lõi, Kasen có nghĩa vụ biến đổi các nguyên liệu theo mùa,
              chất lượng cao nhất thành một trải nghiệm Omakase khác biệt. Kế
              thừa kỹ thuật nấu nướng của bậc thầy sushi hàng đầu Murata Shinji,
              truyền thống được đẩy vào sự đổi mới và tinh tế. Kiến thức, kinh
              nghiệm và sự kết hợp tinh tế, phối hợp thay đổi để mang đến những
              hương vị và dịch vụ mới. Kasen hứa hẹn sẽ mang đến nét nghệ thuật,
              hương vị độc đáo của ẩm thực Nhật Bản.
            </p>
          </div>
        </a>
      </div>
    </section>
  </div>
  <!-- ảnh thứ 3 -->
  <div>
    <section>
      <div class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 class="text-2xl font-bold tracking-tight sm:text-2xl dark:text-gray-900">
              THỰC ĐƠN CỦA CHÚNG TÔI
            </h3>
            <p class="mt-3 text-lg dark:text-gray-600">NGÀY HÔM NAY</p>
            <div class="-mt-0.5 space-y-12">
              <div class="flex flex-col justify-between col-span-12 py-0 space-y-8 md:space-y-16 md:col-span-3">
                <div class="flex flex-col divide-y dark:divide-gray-400">
                  <div class="flex px-1 py-3">
                    <img alt="" class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                      src="https://product.hstatic.net/200000662729/product/477f19a5-c75b-4522-8412-4c855de4b996_210f27f47d3841fc9b6503f6802353f2_grande.jpeg" />
                    <div class="flex flex-col flex-grow">
                      <router-link :to="{ name: 'cart' }" style="text-decoration: none;">
                        <a rel="noopener noreferrer" href="" style="text-decoration: none; color: black">PREMIUM
                          OMAKASE</a>
                         </router-link>
                  
                      <p class="mt-auto text-xs dark:text-gray-600">
                        Premium Omakase: nguồn nguyên liệu đặc biệt cao cấp được
                        phối hợp một cách tài tình, mang đến buổi trải...
                        <a rel="noopener noreferrer" href="#" class="block py-2"
                          style="text-decoration: none; color: red">2,500,000₫</a>
                      </p>
                    </div>
                  </div>
                  <div class="flex px-1 py-3">
                    <img alt="" class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                      src="https://product.hstatic.net/200000662729/product/706ced78-cb94-4ff9-ac76-abf4cdfe0642_91cdd38bd07c401487d4805049dbe835_grande.jpeg" />
                    <div class="flex flex-col flex-grow">
                      <router-link :to="{ name: 'cart' }" style="text-decoration: none;">
                        <a rel="noopener noreferrer" href="" style="text-decoration: none; color: black">
                          OMAKASE ĐẶT BIỆT</a>
                         </router-link>
                      <p class="mt-auto text-xs dark:text-gray-600">
                        Omakase Đặc Biệt: Nguyên liệu tươi ngon đặc biệt theo
                        mùa được chọn lọc kỹ càng, tạo nên thực đơn...
                        <a rel="noopener noreferrer" href="#" class="block py-2"
                          style="text-decoration: none; color: red">1,800,000₫</a>
                      </p>
                    </div>
                  </div>
                  <div class="flex px-1 py-3">
                    <img alt="" class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                      src="https://product.hstatic.net/200000662729/product/bf2bc5d3-94a2-4fcc-852d-533bd5c8dbe6_b32f699ce231458b86ea2315b322243a_grande.jpeg" />
                    <div class="flex flex-col flex-grow">
                      <router-link :to="{ name: 'cart' }" style="text-decoration: none;">
                        <a rel="noopener noreferrer" href="" style="text-decoration: none; color: black">
                          OMAKASE Seasonal </a>
                         </router-link>
                      <p class="mt-auto text-xs dark:text-gray-600">
                        Seasonal Omakase: Các loại cá tươi quý hiếm theo từng
                        mùa được tuyển chọn kỹ lưỡng bởi bếp trưởng, mang...
                        <a rel="noopener noreferrer" href="#" class="block py-2"
                          style="text-decoration: none; color: red">3,500,000₫</a>
                      </p>
                    </div>
                  </div>
                  <div class="flex px-1 py-3">
                    <img alt="" class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                      src="https://product.hstatic.net/200000662729/product/oyster_20sashimi_20-_20kasen_96f4cf1193b24be587354239e849207a_grande.jpeg" />
                    <div class="flex flex-col flex-grow">
                      <router-link :to="{ name: 'cart' }" style="text-decoration: none;">
                        <a rel="noopener noreferrer" href="" style="text-decoration: none; color: black">
                          OMAKASE Cao Cấp</a>
                         </router-link>
                      <p class="mt-auto text-xs dark:text-gray-600">
                        OMAKASE CAO CẤP: Nguồn nguyên liệu đặc biệt cao cấp được
                        phối hợp một cách tài tình, mang đến buổi trải...
                        <a rel="noopener noreferrer" href="#" class="block py-2"
                          style="text-decoration: none; color: red">1,500,000₫</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" class="mt-10 lg:mt-0">
            <img src="https://theme.hstatic.net/200000662729/1001050504/14/collection_banner_image.jpg?v=33" alt=""
              class="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- review -->
  <div class="py-20 sm:py-12" style="background-color: grey">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container flex flex-col w-max max-w-lg p-1 mx-auto divide-y rounded-md"
            style="background-color: white">
            <div class="flex justify-between p-4">
              <div class="flex space-x-4">
                <div>
                  <img src="https://source.unsplash.com/100x100/?portrait" alt=""
                    class="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                </div>
                <div>
                  <h4 class="font-bold">Leroy Jenkins</h4>
                  <span class="text-xs dark:text-gray-600">2 days ago</span>
                </div>
              </div>
              <div class="flex items-center space-x-2 dark:text-yellow-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                  <path
                    d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z">
                  </path>
                </svg>
                <span class="text-xl font-bold">5</span>
              </div>
            </div>
            <div class="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum
                lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris
                cursus venenatis. Maecenas gravida urna vitae accumsan feugiat.
                Vestibulum commodo, ante sit urna purus rutrum sem.
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container flex flex-col w-max max-w-lg p-1 mx-auto divide-y rounded-md"
            style="background-color: pink">
            <div class="flex justify-between p-4">
              <div class="flex space-x-4">
                <div>
                  <img src="https://source.unsplash.com/120x120/?portrait" alt=""
                    class="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                </div>
                <div>
                  <h4 class="font-bold">Leroy Jenkins</h4>
                  <span class="text-xs dark:text-gray-600">7 days ago</span>
                </div>
              </div>
              <div class="flex items-center space-x-2 dark:text-yellow-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                  <path
                    d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z">
                  </path>
                </svg>
                <span class="text-xl font-bold">4</span>
              </div>
            </div>
            <div class="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum
                lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris
                cursus venenatis. Maecenas gravida urna vitae accumsan feugiat.
                Vestibulum commodo, ante sit urna purus rutrum sem.
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container flex flex-col w-max max-w-lg p-1 mx-auto divide-y rounded-md"
            style="background-color: pink">
            <div class="flex justify-between p-4">
              <div class="flex space-x-4">
                <div>
                  <img src="https://source.unsplash.com/140x140/?portrait" alt=""
                    class="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                </div>
                <div>
                  <h4 class="font-bold">Leroy Jenkins</h4>
                  <span class="text-xs dark:text-gray-600">12 days ago</span>
                </div>
              </div>
              <div class="flex items-center space-x-2 dark:text-yellow-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                  <path
                    d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z">
                  </path>
                </svg>
                <span class="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div class="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum
                lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris
                cursus venenatis. Maecenas gravida urna vitae accumsan feugiat.
                Vestibulum commodo, ante sit urna purus rutrum sem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span style="color: black;" class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span style="color: black;" class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  </div>

</template>
