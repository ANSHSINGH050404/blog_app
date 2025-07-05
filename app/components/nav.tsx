"use clent"

import React from 'react'
import {UserButton,OrganizationSwitcher} from '@clerk/nextjs'

const navbar = () => {
  return (
    <nav className=' p-4 flex items-center justify-between'>
        <div>
            <h1 className='font-bold text-2xl'>Blog Application</h1>
           
        </div>
        <div className='flex items-center justify-center'>
            <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug"/>
            <UserButton/>
        </div>
    </nav>
  )
}

export default navbar