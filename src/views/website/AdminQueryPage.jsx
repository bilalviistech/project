import React, { useEffect, useState } from 'react';
import axios from 'axios';

const api = import.meta.env.VITE_API_URL

const AdminQueryPage = () => {
    const [queries, setQueries] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchQueries = async (pageNum = 1) => {
        try {
            const res = await axios.get(`${api}/api/order/getAllQuery?page=${pageNum}`);
            setQueries(res.data.data);
            setPage(res.data.page);
            setTotalPages(res.data.totalPages);
        } catch (error) {
            console.error('Error fetching queries', error);
        }
    };

    useEffect(() => {
        fetchQueries(page);
    }, [page]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            fetchQueries(newPage);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Queries</h2>

            {queries.length === 0 ? (
                <p>No queries found.</p>
            ) : (
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2">Name</th>
                            <th>Contact</th>
                            <th>Document Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {queries.map((query) => (
                            <tr key={query._id} className="border-t">
                                <td className="p-2 text-center">{query.name}</td>
                                <td className='text-center'>{query.contact}</td>
                                <td className='text-center'>{query.docDetail}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Pagination Controls */}
            <div className="mt-4 flex gap-2 items-center justify-center">
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

export default AdminQueryPage;
