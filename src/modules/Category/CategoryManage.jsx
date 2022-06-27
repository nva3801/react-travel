import React, { useEffect, useState } from "react";
import { Button } from "../../components/button";
import axios from "axios";

const link = "http://127.0.0.1:8000/api";

const CategoryManage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    const response = await axios.get(`${link}/category`);
    setCategories(response.data.category);
  };
  return (
    <div className="flex flex-col">
      <Button className="p-5 bg-green-600" to="/manage/add-category">
        Thêm danh mục
      </Button>
      <div className="mt-3 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr className="bg-gray-200">
                  <th className="px-6 py-4 font-medium text-left text-gray-900">
                    #
                  </th>
                  <th className="px-6 py-4 font-medium text-left text-gray-900">
                    Name
                  </th>
                  <th className="px-6 py-4 font-medium text-left text-gray-900">
                    Slug
                  </th>
                  <th className="px-6 py-4 font-medium text-left text-gray-900">
                    Status
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-base">
                {categories.map((item) => (
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                      {item.slug}
                    </td>
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                      {item.status == 1 ? "Hiển Thị" : "Không hiển thị"}
                    </td>
                    <td className="flex gap-5 mt-2">
                      <Button to="edit" className="py-3 bg-red-500">
                        Edit
                      </Button>
                      <Button to="delete" className="py-3">
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryManage;
