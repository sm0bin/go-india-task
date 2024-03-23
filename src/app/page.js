import React from 'react';

const Home = () => {
  return (
    <main className='grid grid-cols-3 h-screen gap-8'>
      <div className='col-span-2 border border-gray-700'>
        <h1 className='text-4xl font-bold uppercase text-rose-500'>Discussion Forum</h1>
        <p className='text-lg'>Welcome to the home page</p>
      </div>
      <aside className='col-span-1 border border-gray-700'>
        <h2 className='text-2xl font-bold uppercase text-rose-500 mb-8'>Market Stories</h2>
        <div className='space-y-2'>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
              </div>
            </div>
          </div>
        </div>

      </aside>

    </main>
  );
};

export default Home;


