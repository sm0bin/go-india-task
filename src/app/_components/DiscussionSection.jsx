import React from 'react';
import discussionData from '@/data/discussion';
import { FaRegHeart } from 'react-icons/fa';
import { HiOutlineEye } from 'react-icons/hi';
import { BiComment } from 'react-icons/bi';
import { FiShare2 } from 'react-icons/fi';
import Image from 'next/image';

const DiscussionSection = () => {


    return (
        <div className='col-span-1 md:col-span-2'>
            <div className='h-12 hidden md:block'>
                <h1 className='text-4xl font-bold uppercase text-rose-500 mb-6'>Discussion Forum</h1>
            </div>

            <div className='space-y-6'>
                {
                    discussionData.map((discussion, index) => (
                        <div key={index} className='card md:card-side card-compact bg-base-100 border border-gray-400'>
                            <div className='pl-4 pt-4'>
                                <div className="avatar">
                                    <div className="w-8 md:w-12 rounded-full">
                                        <Image src={discussion.userImage} alt={discussion.username} width={100} height={100} />
                                    </div>
                                </div>
                            </div>

                            <div className='card-body pl-4 gap-4'>
                                <div className='flex items-center space-x-4'>
                                    <div className='flex items-center gap-4'>
                                        <h2 className='card-title text-base md:text-xl'>{discussion.username}</h2>
                                        <p className='badge badge-info badge-xs md:badge-md'>{discussion.sector}</p>
                                    </div>
                                </div>
                                <p className='text-sm md:text-base'>{discussion.post}</p>

                                <div className='flex items-center justify-between pr-6'>
                                    <button className='btn btn-ghost btn-sm'>
                                        <FaRegHeart className='text-sm md:text-xl' />
                                        <span>{discussion.likes}</span>
                                    </button>
                                    <button className='btn btn-ghost btn-sm'>
                                        <HiOutlineEye className='text-sm md:text-xl' />
                                        <span>{discussion.views}</span>
                                    </button>
                                    <button className='btn btn-ghost btn-sm'>
                                        <BiComment className='text-sm md:text-xl' />
                                        <span>{discussion.comments}</span>
                                    </button>
                                    <button className='btn btn-ghost btn-sm'>
                                        <FiShare2 className='text-sm md:text-xl' />
                                        <span className='hidden lg:inline-block'>Share</span>
                                    </button>
                                </div>

                            </div>
                            <p className='text-sm text-gray-500 absolute top-5 right-6'>{discussion.postTime}</p>
                        </div>
                    ))
                }
            </div >
        </div>
    );
};

export default DiscussionSection;