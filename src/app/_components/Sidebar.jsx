import React from 'react';
import Link from 'next/link';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import { MdInsertComment } from 'react-icons/md';
import { TbCoinFilled } from 'react-icons/tb';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            <div className={`h-screen min-w-[320px] fixed left-0 bg-sky-950 z-50 text-white transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='border-b border-gray-300 flex items-center p-4'>
                    <div className='flex items-center gap-2 grow'>
                        <FaUserCircle className='text-2xl' />
                        <h1 className='text-xl font-medium inline'>Hello. user</h1>
                    </div>
                    <FaBell className='text-2xl' />
                </div>
                <div className='pt-3'>
                    <ul className=''>
                        <li className='py-1 px-3 hover:bg-gray-500/50'><Link href='/discussion'><MdInsertComment className='inline text-xl mr-1 w-6' />Discussion Forum</Link></li>
                        <li className='py-1 px-3 hover:bg-gray-500/50'><Link href='/stories'><TbCoinFilled className='inline text-xl mr-1 w-6' />Market Stories</Link></li>
                        <li className='py-1 px-3 pl-10 hover:bg-gray-500/50'><Link href='/sentiment'>Sentiment</Link></li>
                        <li className='py-1 px-3 pl-10 hover:bg-gray-500/50'><Link href='/market'>Market</Link></li>
                        <li className='py-1 px-3 pl-10 hover:bg-gray-500/50'><Link href='/watchlist'>Watch list</Link></li>
                        <li className='py-1 px-3 pl-10 hover:bg-gray-500/50'><Link href='/events'>Events</Link></li>
                        <li className='py-1 px-3 pl-10 hover:bg-gray-500/50'><Link href='/news'>News/Interviews</Link></li>
                    </ul>
                </div>
                <button onClick={toggleSidebar} className='bg-sky-950 absolute top-1/2 -right-7 z-[40] w-8
                h-12 rounded-r-md'>
                    {isOpen ? '❮' : '❯'}
                </button>
            </div>
        </>
    );
};

export default Sidebar;
