import { AlertDialogDemo } from "@/components/deleteTodo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Todos() {
  const data = await fetch("http://localhost:3001/todoList", {
    cache: "no-store",
  });
  if (!data.ok) {
    throw new Error("Failed to fetch todos");
  }
  const todos = await data.json();

  return (
    <div className=" relative overflow-x-auto shadow-md sm:rounded-lg p-4">
      <div className="flex justify-end my-2">
        <Button
          variant="outline"
          className="border-red-500border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
        >
          <Link href={"todos/create"}>create</Link>
        </Button>
      </div>
      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
        <div>{/* Dropdown menu */}</div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4"></th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Position
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr
              key={todo.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4">
                <div className="flex items-center"></div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="ps-3">
                  <div className="text-base font-semibold">{todo.title}</div>
                  {/* <div className="font-normal text-gray-500">
              neil.sims@flowbite.com
            </div> */}
                </div>
              </th>
              <td className="px-6 py-4">{todo.position}</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  {todo.completed ? (
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />
                      completed
                    </div>
                  ) : (
                    <div className="flex items-center">
                      {" "}
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2" />
                      Incompleted
                    </div>
                  )}
                </div>
              </td>
              <td className="px-6 py-4">
                {/* Modal toggle */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="border-green-500border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  >
                    <Link href={`todos/update/${todo.id}`}>Update</Link>
                  </Button>
                  {/* <Button
                    variant="outline"
                    className="border-red-500border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <Link href={`todos/delete/${todo.id}`}>Delete</Link>
                  </Button> */}
                  <AlertDialogDemo todo={todo}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Edit user modal */}
    
    </div>
  );
}
