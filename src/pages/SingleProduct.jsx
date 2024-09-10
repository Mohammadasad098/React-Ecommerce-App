import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();  // Extract `id` from the URL

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setData(json);  // Set fetched data to state
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      {
        data ? (
          <div className="card lg:w-2/3 mx-auto bg-base-100 shadow-2xl p-6 rounded-lg md:my-16">
            <figure className="w-full h-72">
              <img
                style={{ width: "50%", height: "100%", objectFit: "cover" }} 
                src={data.image} 
                alt={data.title} 
              />
            </figure>
            <div className="card-body">
                <h1 className='className="card-title text-4xl font-bold mb-4"'>{data.category}</h1>
              <h2 className="card-title text-2xl font-bold mb-4">{data.title}</h2> 
              <p className="text-gray-700 mb-4">{data.description}</p> 
              <h3 className="text-xl font-semibold text-green-600 mb-6">${data.price}</h3>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-lg">Buy Now</button>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="text-center text-2xl"><span className="loading loading-spinner loading-lg"></span></h1> 
        )
      }
    </>
  );
};

export default SingleProduct;
