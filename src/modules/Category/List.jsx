import React from "react";

const List = () => {
  return (
    <section className="list">
      <div className="container">
        <div className="flex border-b-2 border-b-slate-300 pb-4 mb-4">
          <div className="w-1/3 relative  overflow-hidden">
            <img
              src="https://saigontourist.net/uploads/destination/TrongNuoc/Caobang-BacCan/Ban-Gioc-waterfall-in-Cao-Bang_733724497.jpg"
              alt=""
              className="hover:scale-125 cursor-pointer ease-in duration-200"
            />
            <div className="absolute bottom-0 left-0 bg-secondary text-white px-3 py-1 text-base font-medium">
              Giá trọn gói 3.990.000 vnđ/khách
            </div>
          </div>
          <div className="w-2/3 py-4 px-6 flex">
            <div className="w-2/3 flex flex-col gap-2">
              <h2 className="text-xl uppercase font-medium text-text cursor-pointer">
                Du lịch tham quan Cao Bằng - Pác Bó - Thác Bản Giốc
              </h2>
              <p className="font-medium text-base">HÀ NỘI - ĐÔNG BẮC</p>
              <div className="flex flex-col gap-1">
                <p>Thời gian : 4 ngày 3 đêm</p>
                <p>Phương tiện : Ô tô</p>
                <p>
                  - Tham quan Khu di tích Pắc Bó – di tích lịch sử gắn liền...
                </p>
              </div>
            </div>
            <div className="w-1/3 text-center ">
              <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg">
                Chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
