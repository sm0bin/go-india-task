import React from 'react';
import storiesData from '@/data/stories';
import Image from 'next/image';

const StoriesSection = () => {
    return (
        <aside className=''>
            <div className='h-12 hidden md:block'>
                <h2 className='text-2xl font-bold uppercase text-rose-500 mb-6'>Market Stories</h2>
            </div>

            <div className='space-y-6 '>
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
    );
};

export default StoriesSection;