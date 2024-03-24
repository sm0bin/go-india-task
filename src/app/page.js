'use client'
import React, { useState } from 'react';
import Sidebar from './_components/Sidebar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DiscussionSection from './_components/DiscussionSection';
import StoriesSection from './_components/StoriesSection';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <main className={`flex ${isSidebarOpen ? 'overflow-hidden' : ''}`}>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className={`flex-1 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'md:ml-[320px]' : 'ml-0'}`}>


        <Tabs className='block md:hidden p-2'>
          <TabList>
            <Tab>Discussion Forum</Tab>
            <Tab>Market Stories</Tab>
          </TabList>

          <TabPanel>
            <DiscussionSection />
          </TabPanel>

          <TabPanel>
            <StoriesSection />
          </TabPanel>
        </Tabs>

        <div className='grid-cols-1 md:grid-cols-3 gap-8 p-2 md:p-6 w-full hidden md:grid'>
          <DiscussionSection />
          <StoriesSection />
        </div>
      </div>
    </main>
  );
};

export default Home;
