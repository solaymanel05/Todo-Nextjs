"use client";
import "./create.css";
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TodoCreate() {
  const router = useRouter();
  const title = useRef();
  const position = useRef();
  // const isCompleted = useRef();
  const [completed, setCompleted] = useState(true);

  const collaback = async (e) => {
    e.preventDefault();
    const titleOfInp = title.current.value;
    const positionInp = position.current.value;

    console.log(titleOfInp);
    const data = await fetch("http://localhost:3001/todoList", {
      method: "POST",
      body: JSON.stringify({
        title: titleOfInp,
        position: positionInp,
        completed,
      }),
    });
    const todo = await data.json();
    if (data.ok) {
      router.push("/todos?createdTodo" + todo.id);
    }
  };
  return (
    <div className="cont">
      <h1>Create Todo</h1>
      <main className="parent-form ">
        <form className="main-form flex flex-col gap-y-5">
          <div className="cont-form  border p-3">
            <Label htmlFor="title" className="text-gray-600">
              Title
            </Label>
            <Input
              className="border-2 border-pink-200  border-b-pink-500   "
              ref={title}
              type="title"
              id={"title"}
              name={"title"}
            />
          
        
            <Label htmlFor="position" className="text-gray-600">
              position
            </Label>
            <Input
              className="border-2 border-pink-200  border-b-pink-500   "
              ref={position}
              type="position"
              id={"position"}
              name={"position"}
            />
        
        
            <Label htmlFor="completed" className="text-gray-600">
              Completed
            </Label>
            <Switch
              checked={completed}
              onCheckedChange={setCompleted}
              className="mb-5"
              id="completed"
            />
          </div>

          <Button className="bt-update" onClick={collaback}>
            Create
          </Button>
        </form>
      </main>
    </div>
  );
}
