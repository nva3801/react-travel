import React, { Fragment } from "react";

const Content = () => {
  return (
    <section className="content">
      <div className="container">
        <div className="flex">
          <div className="w-3/4">
            <div className="flex flex-wrap ">
              <div className="flex w-1/2 pb-1 text-base gap-x-1">
                <span className="uppercase">thời gian:</span>
                <span className="font-bold">1 ngày</span>
              </div>
              <div className="flex w-1/2 pb-1 text-base gap-x-1 ">
                <span className="uppercase">PHƯƠNG TIỆN:</span>
                <span className="font-bold">Đi về bằng ôtô</span>
              </div>
              <div className="flex w-1/2 pb-1 text-base gap-x-1 ">
                <span className="uppercase">ĐIỂM XUẤT PHÁT:</span>
                <span className="font-bold">Hải Phòng</span>
              </div>
              <div className="flex w-1/2 pb-1 text-base gap-x-1 ">
                <span className="uppercase">ĐIỂM ĐẾN:</span>
                <span className="font-bold">Hạ Long</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="text-base font-bold">Tour này có gì hay</div>
              <div>
                Tham quan Cảng tàu Tuần Châu, Hòn Chó Đá, Hòn Đinh Hương, Hòn Gà
                Chọi, Hang Sửng Sốt, Kayak, ĐảoTi Top, Cảng tàu Tuần Châu
              </div>
              <a
                href=""
                className="flex items-center px-4 py-2 text-white rounded-lg bg-primary w-fit gap-x-2"
              >
                <div>In chương trình tour</div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="flex flex-wrap mt-4">
              <div className="w-1/3 p-2">
                <img
                  src="https://saigontourist.net/uploads/destination/TrongNuoc/HaNam/HaNam-ChuaTamChuc_1831633072.jpg"
                  alt=""
                  className="duration-300 ease-in cursor-pointer hover:scale-[1.1]"
                />
              </div>
              <div className="w-1/3 p-2">
                <img
                  src="https://saigontourist.net/uploads/destination/TrongNuoc/HaNam/HaNam-ChuaTamChuc_1831633072.jpg"
                  alt=""
                  className="duration-300 ease-in cursor-pointer hover:scale-[1.1]"
                />
              </div>
              <div className="w-1/3 p-2">
                <img
                  src="https://saigontourist.net/uploads/destination/TrongNuoc/HaNam/HaNam-ChuaTamChuc_1831633072.jpg"
                  alt=""
                  className="duration-300 ease-in cursor-pointer hover:scale-[1.1]"
                />
              </div>
              <div className="w-1/3 p-2">
                <img
                  src="https://saigontourist.net/uploads/destination/TrongNuoc/HaNam/HaNam-ChuaTamChuc_1831633072.jpg"
                  alt=""
                  className="duration-300 ease-in cursor-pointer hover:scale-[1.1]"
                />
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="m-3 border">
              <div className="p-4">
                <h4 className="text-base font-bold text-primary">
                  Hỗ trợ khách hàng
                </h4>
                <a href="" className="flex items-center p-2 gap-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  <span>Hotline: 1900 1808</span>
                </a>
                <a href="" className="flex items-center p-2 gap-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span>Hotline: 1900 1808</span>
                </a>
                <a
                  href=""
                  className="flex items-center w-full px-3 py-2 text-center text-white rounded-lg gap-x-1 bg-primary"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  <span>Bạn có muốn được gọi lại?</span>
                </a>
              </div>
            </div>
            <div className="m-3 border">
              <div className="p-4">
                <h4 className="text-base font-bold text-primary">
                  Vì sao nên mua tour online?
                </h4>
                <div className="flex flex-col gap-3 pl-3 mt-2">
                  <a href="">An toàn và bảo mật</a>
                  <a href="">Tiện lợi, tiết kiệm thời gian</a>
                  <a href="">Không tính phí giao dịch</a>
                  <a href="">Dịch vụ bảo đảm</a>
                  <a href="">Nhận thêm ưu đãi</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
