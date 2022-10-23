import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetcher, link } from "../../config";
import useSWR from "swr";

const Header = () => {
  const [header, setHeader] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  let [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
      const response = await axios.get(`${link}/category`);
    setCategories(response.data);
  };
  const { data } = useSWR(`${link}/category-list`, fetcher);
  const categoryItems = data || [];
  return (
    <header
      className={
        header
          ? "fixed bg-white top-0 w-full leading-[60px] h-[60px] transition-all z-50 border border-b-2 justify-between"
          : "bg-transparent w-full h-[110px] fixed top-0 z-10 leading-[110px] transition-all text-white z-50 md:leading-[60px] md:h-[60px] "
      }
    >
      <div className="container md:p-0">
        <div className="flex items-center justify-between h-full md:mt-3 md:block">
          <NavLink to="/" className="max-h-[60px] w-[120px] ">
            <img
              src="/logo.png"
              alt=""
              className={
                header
                  ? "object-cover w-full h-full block md:ml-3 md:h-[40px] md:w-[120px] md:object-cover"
                  : "hidden"
              }
            />
            <img
              src="/logo-white.png"
              alt=""
              className={
                header
                  ? "hidden"
                  : "block w-full h-full object-cover md:h-[40px] md:w-[120px] md:object-cover md:ml-3"
              }
            />
          </NavLink>
          <div
            className={`relative md:text-black md:bg-white md:px-4 md:pb-4 md:${
              open ? "" : "hidden"
            }`}
          >
            <ul className="flex gap-8 font-bold uppercase md:block md:gap-2 md:flex-col">
              {categories.map(item =>
                item.categoryList?.length > 0 ? (<li className="relative cursor-pointer dropdown" key={item._id}>
                  <span className="hover:border-b-2 hover:border-b-primary hover:pb-4">
                    {item.title}
                  </span>
                  <div className="dropdown-item">
                    <div
                        className={`absolute flex w-[520px] grid-cols-3 leading-8 text-black bg-white gap-x-5 px-5 py-3 rounded-lg ${
                            header ? "top-[100%]" : "top-[80%]"
                        } md:w-full md:grid-cols-1 md:block md:p-0 md:relative`}
                    >
                      {item.categoryList.map((item1) => (
                        <div className="flex flex-col w-1/3 md:w-full" key={item1._id}>
                          <span>{item1.title}</span>
                          {categoryItems.map((item2) =>
                            item1.slug === item2.slug ? (
                              <div className="block" key={item2.id}>
                                {item2.categoryItem.map((item3) => (
                                  <NavLink
                                    to={`/category/${item3.slug}`}
                                    className="text-[#ccc] hover:bg-[#ccc] hover:text-black hover:rounded-lg hover:px-2 block"
                                    key={item3.id}
                                  >
                                    {item3.title}
                                  </NavLink>
                                ))}
                              </div>
                            ) : (
                              "")
                         )}
                        </div>
                      ))}
                    </div>
                  </div>
                </li>) : (
                    <li key={item._id}>
                      <NavLink to={`/${item.slug}`} className="hover:border-b-2 hover:border-b-primary hover:pb-4">{item.title}</NavLink>
                    </li>
                )
              )}
              <li
                className={`bg-primary p-1 h-[32px] ${
                  header ? "mt-[13px]" : "mt-[38px] md:mt-[20px]"
                } rounded-lg`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          <div
            className="absolute hidden px-2 py-1 text-black bg-white rounded-sm right-4 top-3 md:block"
            onClick={() => setOpen(!open)}
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
