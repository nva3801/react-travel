import React from "react";

const Intro = () => {
  return (
    <section className="intro">
      <div className="relative mb-5 h-[500px]">
        <img
          src="https://saigontourist.net/uploads/destination/TrongNuoc/HaNam/HaNam-ChuaTamChuc_1831633075.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 w-full -translate-x-1/2 left-1/2 ">
          <div className="container">
            <div className="bg-[#00000080] py-4 px-6 rounded-t-lg">
              <h1 className="my-4 text-4xl font-bold text-white uppercase">
                DU LỊCH HÀ NỘI - TAM CHÚC - NINH BÌNH - HẠ LONG - SAPA
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
