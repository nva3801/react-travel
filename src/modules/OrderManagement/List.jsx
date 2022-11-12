import React from 'react';
import { fetcher, link } from "../../config";
import useSWR from "swr";
import Button from './../../components/button/Button';


const List = () => {
    const email = localStorage.getItem("email");
    const { data } = useSWR(`${link}/list/list-order/${email}`, fetcher);
    const product = data || [];
    return (
        <div>
            <div className='container'>
                {product.map(item => (
                    <div className='h-[200px] bg-gray-300 rounded-lg mb-5'>
                    <div className='flex justify-between'>
                        <div className='w-1/2 px-5 py-4 text-base'>
                            <div className='flex'>
                                <span className='pr-1'>Tour_Code: </span>
                                <span className='font-bold'>{item.tour_code}</span>
                            </div>
                            <div className='flex'>
                                <span className='pr-1'>Tên Tour: </span>
                                <span className='font-bold'>123</span>
                            </div>
                            <div className='flex'>
                                <span className='pr-1'>Số Người Lớn: </span>
                                <span className='font-bold'>{item.number_adult}</span>
                            </div>
                            <div className='flex'>
                                <span className='pr-1'>Số trẻ em: </span>
                                {item.number_baby == null ? (
                                    <span className='font-bold'>0</span>
                                ) : (
                                    <span className='font-bold'>{item.number_children}</span>
                                )}
                            </div>
                            <div className='flex'>
                                <span className='pr-1'>Số em bé: </span>
                                {item.number_baby == null ? (
                                    <span className='font-bold'>0</span>
                                ) : (
                                    <span className='font-bold'>{item.number_baby}</span>
                                )}
                            </div>
                            <div className='flex'>
                                <span className='pr-1'>Phương thức thanh toán: </span>
                                {item.payment_methods == 1 ? (
                                    <span className='font-bold'>Thanh toán 100%</span>
                                ) : (
                                    <span className='font-bold'>Thanh toán 50%</span>
                                )}
                            </div>
                            <div className='flex'>
                                <span className='pr-1'>Tổng tiền: </span>
                                <span className='font-bold'>{item.total.toLocaleString()}đ</span>
                            </div>
                        </div>
                        <div className='float-left w-1/4 px-5 py-4 text-base'>
                            <div className='flex'>
                                <span className='pr-1'>Tên Người Đặt: </span>
                                <span className='font-bold'>{item.name}</span>
                            </div>
                            <div className='flex'>
                                <span className='pr-1'>Số điện thoại: </span>
                                <span className='font-bold'>{item.phoneNumber}</span>
                            </div>
                            <div className='flex'>
                                <span className='pr-1'>Email: </span>
                                <span className='font-bold'>{item.email}</span>
                            </div>
                        </div>
                        <div className='float-left w-1/4 px-5 py-4 my-auto text-base'>
                            <div className='flex my-auto align-center'>
                                <Button className='mr-2'>Sửa</Button>
                                <Button className='bg-red-500'>Hủy đặt tour</Button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default List;