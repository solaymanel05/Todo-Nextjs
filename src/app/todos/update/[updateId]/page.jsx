
"use client";
import "./update.css"
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function UpdateTodo({ params }) {
   const { updateId } = React.use(params); // Access the ID from params
  const [data, setData] = useState(null); // Store the fetched todo item
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState({}); // Store updated values
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/todoList/${updateId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
        setUpdatedTodo(result); // Initialize updatedTodo with fetched data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [updateId]);

  const handleInputChange = (field, value) => {
    setUpdatedTodo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/todoList/${updateId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      });

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      // Redirect or notify the user of success
      alert("Todo updated successfully!");
      router.push("/todos"); // Navigate back to the main page or list
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="cont">
      <h1>Update Todo</h1>

      <main className="parent-form ">
        <form className="main-form flex flex-col gap-y-5" onSubmit={handleSubmit}>
          <div className="cont-form  border p-3">
            <Label className="text-gray-600">Title:</Label>
            <Input className="border-2 border-pink-200  border-b-pink-500  "
              value={updatedTodo.title || ""}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
            <Label className="text-gray-600">Position:</Label>
            <Input className="border-2 border-pink-200  border-b-pink-500 "
              value={updatedTodo.position || ""}
              onChange={(e) => handleInputChange("position", e.target.value)}
            />
            <Label className="text-gray-600">Status:</Label>
            <Switch
              checked={updatedTodo.completed || false}
              onCheckedChange={(checked) => handleInputChange("completed", checked)}
            />
          </div>
          <Button className="bt-update" type="submit">Update Todo</Button>
        </form>
      </main>
    </div>
  );
}

