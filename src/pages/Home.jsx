import React, { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
                <h1 className="card-title">${item.price}</h1>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          )
        }) : <h1>Loading....</h1>}
      </div>
    </>
  );
}

export default Home;
