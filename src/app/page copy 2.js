import React from 'react';
import storiesData from '@/data/stories';
import discussionData from '@/data/discussion';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
import { HiOutlineEye } from 'react-icons/hi';
import { BiComment } from 'react-icons/bi';
import { FiShare2 } from 'react-icons/fi';
import SidebarButton from './_components/SidebarButton';

const Home = () => {
  return (
    <main className='h-screen'>

      <div className='flex justify-end'>

        <SidebarButton />
        <div className='grid grid-cols-3 h-screen gap-8 p-6 grow'>
          <div className='col-span-2'>
            <div className='h-12'>
              <h1 className='text-4xl font-bold uppercase text-rose-500 mb-6'>Discussion Forum</h1>
            </div>

            {/* Discussion Card */}
            <div className='space-y-6'>
              {
                discussionData.map((discussion, index) => (
                  <div key={index} className='card card-side card-compact bg-base-100 border border-gray-400'>
                    <div className='pl-4 pt-4'>
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <Image src={discussion.userImage} alt={discussion.username} width={100} height={100} />
                        </div>
                      </div>
                    </div>

                    <div className='card-body pl-4 gap-4'>
                      <div className='flex items-center space-x-4'>
                        <div className='flex items-center gap-4'>
                          <h2 className='card-title'>{discussion.username}</h2>
                          <p className='badge badge-info'>{discussion.sector}</p>
                        </div>
                      </div>
                      <p>{discussion.post}</p>

                      <div className='flex items-center justify-between pr-6'>
                        <button className='btn btn-ghost btn-sm'>
                          <FaRegHeart className='text-xl' />
                          <span>{discussion.likes}</span>
                        </button>
                        <button className='btn btn-ghost btn-sm'>
                          <HiOutlineEye className='text-xl' />
                          <span>{discussion.views}</span>
                        </button>
                        <button className='btn btn-ghost btn-sm'>
                          <BiComment className='text-xl' />
                          <span>{discussion.comments}</span>
                        </button>
                        <button className='btn btn-ghost btn-sm'>
                          <FiShare2 className='text-xl' />
                          <span>Share</span>
                        </button>
                      </div>

                    </div>
                    <p className='text-sm text-gray-500 absolute top-5 right-6'>{discussion.postTime}</p>
                  </div>
                ))
              }
            </div >
          </div>

          <aside className='col-span-1'>
            <div className='h-12'>
              <h2 className='text-2xl font-bold uppercase text-rose-500 mb-6'>Market Stories</h2>
            </div>

            {/* Stories Cards */}
            <div className='space-y-6'>

              {
                storiesData.map((story, index) => (
                  <div key={index} className='card card-compact bg-base-100 border border-gray-400'>
                    <figure>
                      <Image className='w-full h-60' src={story.thumbnail} alt={story.title} width={400} height={200} />
                    </figure>
                    <div className='card-body'>
                      <h2 className='card-title'>{story.title}</h2>
                      <p>{story.details}</p>
                      <div className='card-actions justify-end'></div>
                    </div>
                  </div>
                ))
              }
            </div>

          </aside >

        </div>
      </div>
    </main>
  );
};

export default Home;


