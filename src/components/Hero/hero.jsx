import React from 'react';
import "./hero.css"
export default function Hero ()  {
  return (
   <div className='flex items-center justify-between m-4 bg-yellow-100 '>
    <div>
        <div className="flex flex-col items-left justify-center min-h-60  p-6 pl-9">
  <h2 className="text-lg font-small text-gray-900 mb-2 capitalize">This is a new project</h2>
  <h1 className="text-4xl font-small text-gray-900 mb-4 capitalize">Todo List By Next.js</h1>

</div>

    </div>

    <div className='todo'>
          <div className='ballOne'></div>
          <div className='ballTwo'></div>
          <div className='ballThree'></div>
          
    </div>
   </div>
    

  );
}

