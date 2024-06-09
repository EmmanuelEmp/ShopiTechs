import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Product from '../components/Product';
import Spinner from '../components/Spinner';
import Hero from '../components/Hero';
import Offers from '../components/Offers';
import NewsLetter from '../components/NewsLetter';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { BACKEND_URL } from '../constants';
import { setCredentials } from '../slices/userSlice';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const [popularProducts, setPopularProducts] = useState([]);
    const [loadingPopular, setLoadingPopular] = useState(true);
    const [errorPopular, setErrorPopular] = useState(null);

    const getUser = useCallback(async () => {
        try {
            const res = await axios.get(`${BACKEND_URL}/auth/login/success`, {
                withCredentials: true
            });
            dispatch(setCredentials({ ...res.data.user._json, _id: res.data._id, isAdmin: res.data.user.isAdmin }));
        } catch (error) {
            toast.error(error?.data?.message || error?.error);
        }
    }, [dispatch]);

    useEffect(() => {
        getUser();
    }, [getUser]);

    useEffect(() => {
        const fetchPopularProducts = async () => {
            try {
                const { data } = await axios.get(`${BACKEND_URL}/api/products/popular`);
                setPopularProducts(Array.isArray(data) ? data : []);
                setLoadingPopular(false);
            } catch (error) {
                setErrorPopular(error.message);
                setLoadingPopular(false);
            }
        };

        fetchPopularProducts();
    }, []);

    const { keyword, pageNumber } = useParams();
    const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber });

    return (
        <>
            <Hero />
            <div className="my-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjust padding on different screen sizes */}
                    <div className="text-center mb-4">
                        <h1 className="text-[#171717] text-3xl font-semibold">NEW PRODUCTS</h1>
                        <div className="w-[120px] h-[7px] rounded-[10px] bg-[#252525] mx-auto mt-2"></div>
                    </div>
                    {isLoading ? (
                        <Spinner />
                    ) : error ? (
                        toast.error(error.message || 'Failed to load products')
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {data?.products?.map((product, i) => (
                                <Product key={i} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Offers />
            <div className="my-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjust padding on different screen sizes */}
                    <div className="text-center mb-4">
                        <h1 className="text-[#171717] text-3xl font-semibold">Trending in Mobiles</h1>
                        <div className="w-[120px] h-[7px] rounded-[10px] bg-[#252525] mx-auto mt-2"></div>
                    </div>
                    {loadingPopular ? (
                        <Spinner />
                    ) : errorPopular ? (
                        toast.error(errorPopular)
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {popularProducts.map((product, i) => (
                                <Product key={i} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="my-8">
                <NewsLetter />
            </div>
        </>
    );
}
