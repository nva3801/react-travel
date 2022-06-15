import React from "react";
import Slider from "react-slick";

const data = [
  {
    id: 1,
    image:
      "http://mauweb.monamedia.net/travelwp/wp-content/uploads/2019/01/205b44a8-0aca-4881-bbb8-0d9ac4814be3-430x323.jpg",
    category: "Du lịch châu á",
    name: "Du lịch hàn quốc giá tốt khởi hành từ sài gòn",
    price: "14,999,000đ",
  },
  {
    id: 2,
    image:
      "http://mauweb.monamedia.net/travelwp/wp-content/uploads/2017/12/tuong_ti_son_wwwweixinyiducom.jpg",
    category: "Du lịch châu á",
    name: "Du lịch nhật bản mùa hoa anh đào",
    price: "37,999,000đ",
  },
  {
    id: 3,
    image:
      "http://mauweb.monamedia.net/travelwp/wp-content/uploads/2017/12/2.jpg",
    category: "Du lịch châu au",
    name: "Du lịch Nga 8 ngày khởi hành từ TP.HCM",
    price: "49,999,000đ",
  },
  {
    id: 4,
    image:
      "http://mauweb.monamedia.net/travelwp/wp-content/uploads/2017/12/Du-lich-que-lam-trung-quoc-www.kynghidongduong.vn-6.jpg",
    category: "Du lịch canada",
    name: "Du lịch canada giá tốt khởi hành từ sài gòn",
    price: "97,999,000đ",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={`${className} md:hidden`} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={`${className} md:hidden`} onClick={onClick} />;
}
const Popular = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="popular">
      <div className="relative my-14">
        <div className="w-full h-[600px]">
          <div className="bg-[#00000099] absolute inset-0 z-10"></div>
          <img
            src="/banner2.jpg"
            alt=""
            className="z-0 object-cover w-full h-full"
          />
        </div>
        <div className="absolute z-20 w-full text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="container">
            <p className="mb-5 text-base">Những điểm đến trên cả tuyệt vời</p>
            <h1 className="mb-5 text-3xl font-medium uppercase">
              Thiên đường hội tụ
            </h1>
            <Slider {...settings}>
              {data.map((item) => (
                <div className="relative p-3" key={item.id}>
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover w-full h-[258px]"
                  />
                  <div className="bg-[#000000b3] absolute w-[calc(100%-24px)] bottom-16">
                    <p className="text-[#f1f1f1] uppercase">{item.category}</p>
                    <p className="text-[#f1f1f1] text-base uppercase h-[46px]">
                      {item.name}
                    </p>
                    <span className="text-base font-bold">{item.price}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
