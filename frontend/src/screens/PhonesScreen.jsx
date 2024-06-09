/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import Product from '../components/Product';
import phone_banner from '../components/Assets/banner-phone.png';

const PhonesScreen = () => {
  const category = 'phones'; // Set the category for phones
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
        <img src={phone_banner} alt="Phones Banner" className="w-full h-auto" />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8"> {/* Adjust padding on different screen sizes */}
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhonesScreen;
