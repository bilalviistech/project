import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminOrderPage = () => {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchOrders = async (pageNum = 1) => {
        try {
            const res = await axios.get(`https://mavdocsbackend-production.up.railway.app/api/order?page=${pageNum}`);
            setOrders(res.data.data);
            setPage(res.data.page);
            setTotalPages(res.data.totalPages);
        } catch (error) {
            console.error('Error fetching orders', error);
        }
    };

    useEffect(() => {
        fetchOrders(page);
    }, [page]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            fetchOrders(newPage);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Orders</h2>

            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2">Document</th>
                            <th>User</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Delivery</th>
                            <th>Payment</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id} className="border-t">
                                <td className="p-2 text-center">{order.docName}</td>
                                <td className='text-center'>{order.userName}</td>
                                <td className='text-center'>{order.userPhoneNumber}</td>
                                <td className='text-center'>{order.userAddress}</td>
                                <td className='text-center'>{order.userCity}</td>
                                <td className='text-center'>{order.deliverySlot}</td>
                                <td className='text-center'>{order.paymentMethod}</td>
                                <td className='text-center'>Rs. {order.totalPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Pagination Controls */}
            <div className="mt-4 flex gap-2 items-center">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className="px-4 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span>Page {page} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                    className="px-4 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AdminOrderPage;
