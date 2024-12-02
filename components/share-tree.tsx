import React from 'react'
import LinkModal from './link-modal';


function ShareTree() {
    return (
        <div className='h-10 w-10 bg-gray-800 rounded-full md:p-2 flex justify-center items-center'>
            <LinkModal link={{ platform: "LinkTree", url: "https://kartiklinks.vercel.app" }} vertical />
        </div>
    )
}

export default ShareTree