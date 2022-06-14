import React from "react";
import { NavLink } from "react-router-dom";

const List = () => {
  return (
    <section className="list">
      <div className="container">
        <NavLink
          to="/product"
          className="flex pb-4 mb-4 border-b-2 border-b-slate-300"
        >
          <div className="relative w-1/3 overflow-hidden">
            <img
              src="https://saigontourist.net/uploads/destination/TrongNuoc/Caobang-BacCan/Ban-Gioc-waterfall-in-Cao-Bang_733724497.jpg"
              alt=""
              className="duration-200 ease-in cursor-pointer hover:scale-125"
            />
            <div className="absolute bottom-0 left-0 px-3 py-1 text-base font-medium text-white bg-secondary">
              Giá trọn gói 3.990.000 vnđ/khách
            </div>
          </div>
          <div className="flex w-2/3 px-6 py-4">
            <div className="flex flex-col w-2/3 gap-2">
              <h2 className="text-xl font-medium uppercase cursor-pointer text-text">
                Du lịch tham quan Cao Bằng - Pác Bó - Thác Bản Giốc
              </h2>
              <p className="text-base font-medium">HÀ NỘI - ĐÔNG BẮC</p>
              <div className="flex flex-col gap-1">
                <p>Thời gian : 4 ngày 3 đêm</p>
                <p>Phương tiện : Ô tô</p>
                <p>
                  - Tham quan Khu di tích Pắc Bó – di tích lịch sử gắn liền...
                </p>
              </div>
            </div>
            <div className="w-1/3 text-center ">
              <button className="px-6 py-3 text-lg text-white rounded-lg bg-primary">
                Chi tiết
              </button>
            </div>
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default List;
