import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MainContent } from './MainContent';
import { Doctor } from './Doctors';
import Mediscan from './MediScan';

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={
              <MainContent /> 
            } />  
            <Route path="/doctors" element={
              <Doctor />
            } />
            <Route path="/mediScan" element={
              <Mediscan />
            } />
          </Routes>
        </div>
      </div>
    </div>
  );
}
