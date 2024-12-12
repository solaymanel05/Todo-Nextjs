import React from 'react';
import "./nav.css"
import Link from "next/link";

export default function Nav (){
  return (
    <div className='nav'>
      <h1>TodoList</h1>
      <ul>
        <li><Link href={"/todos"} legacyBehavior><a>Home</a></Link></li>
        <li><Link href={"/todos"} legacyBehavior><a>About</a></Link></li>
        <li><Link href={"/todos/create"} legacyBehavior><a>Create</a></Link></li>
      
      </ul>
      
    </div>
  );
}


