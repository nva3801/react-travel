import React from "react";

const Intro = () => {
  return (
    <section className="intro">
      <div className="relative mb-10 md:h-[350px]">
        <img
          src="https://media.mia.vn/uploads/blog-du-lich/ve-tham-thap-rua-bieu-tuong-du-lich-tam-linh-giua-long-ha-noi-03-1640113393.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 w-full -translate-x-1/2 left-1/2 md:mb-5 ">
          <div className="container">
            <div className="bg-[#00000080] py-4 px-6 rounded-t-lg md:rounded-b-lg">
              <h1 className="my-4 text-4xl font-bold text-white uppercase md:text-base">
                Tour Hà nội
              </h1>
              <p className="text-base text-white md:text-sm md:truncate ">
                Du lịch Hà Nội. Hành trình khám phá thủ đô Hà Nội nơi lưu giữ
                biết bao tinh hoa của dân tộc, lưu dấu nhiều di tích như Hồ
                Gươm, Chùa Quán Sứ, Hồ Tây, 36 phố phường. Hà Nội còn được biết
                đến bởi những món ăn nổi tiếng của người Hà Thành: phở, chả cá
                Lã Vọng, bánh tôm Hồ Tây
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
