"use client"
import { ContextOneProvider } from '@/app/context/GeneralContext';
import React from 'react'
import ComponentContext1 from './ComponentContext1';
import ComponentContext2 from './ComponentContext2';

function ContextApp() {
  return (
    <ContextOneProvider>
      <div className='flex space-x-4'>
      <ComponentContext1 />
      <ComponentContext2  />
      </div>
    </ContextOneProvider>
  );
}

export default ContextApp;