import React, { Fragment } from "react";

const AddCategory = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="w-full my-20">
          <img
            src="/logo.png"
            alt=""
            className="items-center w-[20%] mx-auto"
          />
          <div className="mt-4 text-center">
            <h1 className="text-4xl font-bold">Thêm danh mục</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddCategory;
