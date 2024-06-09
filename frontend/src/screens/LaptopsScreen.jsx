/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import Product from '../components/Product';
import laptop_banner from '../components/Assets/banner-laptop.png';

const LaptopsScreen = () => {
  const category = 'laptops'; // Set the category for laptops
  const { data, isLoading, error } = useGetProductsQuery({ category });

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message || error?.error);
    }
  }, [error]);

  if (isLoading) {
    return <Spinner />;
  }

  const products = data?.products || [];

  return (
    <div>
      {/* Banner Section */}
      <div>
        <img src={laptop_banner} alt="Laptops Banner" className="w-full h-auto" />
      </div>

      {/* Content Section */}
     
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LaptopsScreen;
