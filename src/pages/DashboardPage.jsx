import React, { useEffect, useState } from "react";
import axios from "axios";

const link = "http://127.0.0.1:8000/api";
const DashboardPage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    const response = await axios.get(`${link}/category`);
    setCategories(response.data.category);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Slug</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.slug}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
