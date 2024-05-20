import { ModeToggle } from '@/app/_components/ui/themeChangerBtn';
import React from 'react';

function Page() {
  return (
    <>
      <nav className='h-[10vh] flex items-center justify-between p-3 bg-blend-darken bg-blue-50 dark:bg-gray-800'>
        <h1 className='text-xl font-bold text-gray-900 dark:text-gray-100'>Dashboard</h1>
        <div>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}

export default Page;


