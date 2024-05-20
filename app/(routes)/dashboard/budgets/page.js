import { ModeToggle } from '@/app/_components/ui/themeChangerBtn'
import React from 'react'
import BudgetList from './_components/BudgetList'

function page() {
  return (
    <>
    <nav className='h-[10vh] flex items-center justify-between p-3 bg-blend-darken bg-blue-50 dark:bg-gray-800 border-b-2 border-gray-200'>
      <h1 className='text-xl font-bold text-gray-900 dark:text-gray-100'>My Budgets</h1>
      <div>
        <ModeToggle />
      </div>
    </nav>
    <BudgetList/>
  </>
  )
}

export default page
