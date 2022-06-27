import React, { useState } from "react";
import { Label } from "../../components/label";
import { Field } from "../../components/field";

const Checkout = () => {
  const [numberAdult, setNumberAdult] = useState(1);
  const [numberChildren, setNumberChildren] = useState("");
  const [numberBaby, setNumberBaby] = useState("");
  const handleAdultChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setNumberAdult(result);
  };
  const handleChildrenChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setNumberChildren(result);
  };
  const handleBabyChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setNumberBaby(result);
  };
  const [radio, setRadio] = useState("1");
  const handleChange = (e) => {
    setRadio(e.target.value);
  };
  return (
    <section className="mt-10 checkout">
      <div className="container">
        <div className="flex w-full">
          <div className="w-2/3 mx-3">
            <h1 className="text-2xl font-semibold uppercase">
              Số lượng hành khách
            </h1>
            <form className="my-3">
              <Field className="gap-3 mb-5">
                <Label className="font-normal" htmlFor="adult">
                  Người lớn (*)
                </Label>
                <div className="flex w-full">
                  <input
                    type="number"
                    className="w-5/12 px-4 py-3 border rounded-lg bg-grayLight"
                    id="adult"
                    value={numberAdult}
                    onChange={handleAdultChange}
                    min={1}
                  />
                  <div className="w-7/12"></div>
                </div>
              </Field>
              <Field className="gap-3 mb-5">
                <Label className="font-normal" htmlFor="children">
                  Trẻ em
                </Label>
                <div className="flex w-full gap-4">
                  <input
                    type="number"
                    className="w-5/12 px-4 py-3 border rounded-lg bg-grayLight"
                    id="children"
                    value={numberChildren}
                    onChange={handleChildrenChange}
                  />
                  <div className="w-7/12 italic">
                    <ul>
                      <li>Tour nước ngoài: áp dụng từ 2 đến dưới 12 tuổi</li>
                      <li>
                        Tour trong nước và tour Campuchia: áp dụng từ 6 đến 11
                        tuổi
                      </li>
                    </ul>
                  </div>
                </div>
              </Field>
              <Field className="gap-3 mb-5">
                <Label className="font-normal" htmlFor="baby">
                  Em bé
                </Label>
                <div className="flex w-full gap-4">
                  <input
                    type="number"
                    className="w-5/12 px-4 py-3 border rounded-lg bg-grayLight"
                    id="baby"
                    value={numberBaby}
                    onChange={handleBabyChange}
                  />
                  <div className="w-7/12 italic">
                    <ul>
                      <li>Tour nước ngoài: áp dụng từ Dưới 2 tuổi</li>
                      <li>
                        Tour trong nước và tour Campuchia: áp dụng từ 2 đến 5
                        tuổi
                      </li>
                    </ul>
                  </div>
                </div>
              </Field>
            </form>
            <h1 className="pt-5 text-2xl font-semibold uppercase">
              Phương thức thanh toán
            </h1>
            <div className="flex gap-3 mt-4">
              <input
                type="radio"
                value="1"
                name="checkout"
                id="full"
                onChange={handleChange}
                className="hidden"
              />
              <label
                className={radio == 1 ? "radio_active" : "radio_hidden"}
                htmlFor="full"
              >
                Thanh toán 100%
                <span className="absolute right-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              </label>
              <input
                type="radio"
                value="0"
                name="checkout"
                id="half"
                className="hidden"
                onChange={handleChange}
              />
              <label
                className={radio == 0 ? "radio_active" : "radio_hidden"}
                htmlFor="half"
              >
                Thanh toán 50%
                <span className="absolute right-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              </label>
              Sau khi đặt cọc, quý khách vui lòng hoàn tất thanh toán trong 48h
            </div>
          </div>
          <div className="w-1/3 mx-3">
            <div className="w-full py-3 text-lg text-center text-white rounded-lg bg-primary hover:opacity-80 hover:text-[#23527c] duration-300 ease-in mb-5">
              <a href="">
                Hỗ trợ giao dịch <span className="font-bold">1900 1808</span>
              </a>
            </div>
            <div className="border rounded-lg">
              <img
                src="https://saigontourist.net/uploads/destination/TrongNuoc/HaNam/HaNam-ChuaTamChuc_1831633072.jpg"
                alt=""
                className="rounded-t-lg"
              />
              <div className="flex flex-col gap-2 px-3 my-5">
                <h4 className="text-[#23527c] text-lg">
                  DU LỊCH HÀ NỘI - NINH BÌNH - HẠ LONG
                </h4>
                <div className="flex items-center gap-1 text-base">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span>Ngày đi:</span>
                  <span className="font-semibold">17-09-2022</span>
                </div>
                <div className="flex items-center gap-1 text-base">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span>Ngày về:</span>
                  <span className="font-semibold">20-09-2022</span>
                </div>
                <div className="flex items-center gap-1 text-base">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span>Thời gian:</span>
                  <span className="font-semibold">4 ngày 3 đêm</span>
                </div>
                <div className="flex items-center gap-1 text-base">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span>Giá Người lớn:</span>
                  <span className="font-semibold">
                    8.079.000 đ x {numberAdult}
                  </span>
                </div>
                {numberChildren > 0 ? (
                  <div className="flex items-center gap-1 text-base">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <span>Giá Trẻ Em:</span>
                    <span className="font-semibold">
                      3.000.000 đ x {numberChildren}
                    </span>
                  </div>
                ) : (
                  ""
                )}
                {numberBaby > 0 ? (
                  <div className="flex items-center gap-1 text-base">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <span>Giá Em Bé:</span>
                    <span className="font-semibold">
                      2.000.000 đ x {numberBaby}
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="flex items-center gap-2 px-3 mb-5 text-lg">
                Tổng Tiền:
                <span className="text-3xl font-bold text-primary">
                  {(
                    8000000 * numberAdult +
                    3000000 * numberChildren +
                    2000000 * numberBaby
                  ).toLocaleString()}
                </span>
                <span className="text-lg">đ</span>
              </div>
              {radio == 0 ? (
                <div className="flex flex-col gap-1 px-3 border-t-2 border-black">
                  <h1 className="mt-3 text-3xl font-semibold">Thanh toán</h1>
                  <h2 className="flex items-center gap-2 text-base">
                    Bạn đã chọn hình thức:
                    <span className="text-lg font-bold">Đặt cọc 50%</span>
                  </h2>
                  <div className="flex items-center gap-2 mb-5 text-base">
                    Ban cần thanh toán:
                    <span className="text-3xl font-bold text-primary">
                      {(
                        (8000000 * numberAdult +
                          3000000 * numberChildren +
                          2000000 * numberBaby) /
                        2
                      ).toLocaleString()}
                    </span>
                    <span className="text-lg">đ</span>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
