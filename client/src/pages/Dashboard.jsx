import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MainContent } from './MainContent';
// import Page1 from './Page1';
// import Page2 from './Page2';
// import Page3 from './Page3';
import { Doctor } from './Doctors';

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<MainContent />} />
            {/* <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} /> */}
            <Route path="/doctors" element={<Doctor />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
