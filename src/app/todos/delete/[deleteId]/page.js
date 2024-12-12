import { redirect } from 'next/navigation';
import React from 'react';

export default async function Delete ({params})  {
  const para = params.deleteId
  const dataDelete = await fetch(`http://localhost:3001/todoList/${para}`,{
    method:"DELETE"
  }) 
  if (dataDelete.ok) {
    redirect("/todos?deletedTod=" + para)
  }
  const resu = await dataDelete.json()
  
  return (
    <div>
     {para}
    </div>
  );
}


