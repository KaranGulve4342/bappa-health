// pages/Dashboard.jsx
import React from 'react';
import { Sidebar } from './Sidebar.jsx';
import { Header } from './Header.jsx';
import { MainContent } from './MainContent.jsx';

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
