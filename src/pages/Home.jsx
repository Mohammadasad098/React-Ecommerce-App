import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState(null)


  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json.slice(0, 8));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const singleProduct = (item) =>{
    navigate(`singleproduct/${item.id}`)
  }
  return (
    <>
      <div className='flex mt-3 mb-4 flex-wrap gap-6 justify-center'>
        {data ? data.map((item) => {
          return (
            <div key={item.id} className="card bg-base-100 w-80 shadow-xl">
              <figure>
                <img style={{ width: "100%", height: "200px", objectFit: "cover" }} src={item.image} alt={item.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <h1 className="card-title text-green-600">${item.price}</h1>
                <div className="card-actions justify-end">
                <button className='btn btn-neutral' onClick={()=> singleProduct(item)}>more info</button>
                </div>
              </div>
            </div>
          )
        }) : <h1 className="text-center text-2xl"><span className="loading loading-spinner loading-lg"></span></h1> 
}
      </div>
    </>
  );
}

export default Home;
