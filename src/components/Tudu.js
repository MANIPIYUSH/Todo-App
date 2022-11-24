import React, { useState,useEffect} from "react";

import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import List from "./List";

function Todu() {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("myData"))
      ? JSON.parse(localStorage.getItem("myData"))
      : []
  );

  const getUserInput = (input) => {
    // console.log(task);
    const taskItem = { task: input, id: uuidv4() };
    setTask((prevState) => [...prevState, taskItem]);
    localStorage.setItem("myData", JSON.stringify(task));
  };

  const getNewAddedItem = (item) => {
    // console.log(item);
    setTask((prevState) =>
      prevState.map((task) => {
        if (task.id === item[1]) {
          return { ...task, task: item[0], id: item[1] };
        }
        return task;
      })
    );
  };

  const deleteItem = (item) => {
    const newTask = task.filter((taskItem) => {
      return taskItem.id !== item;
    });

    setTask(newTask);
  };

  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(task));
  }, [task]);

  return (
    <section className="h-full bg-[#243c5a]">
     <div className="flex items-center flex-col">
                
                
                <h6 className="mt-2 text-white">DREAMS don't work unless YOU do.</h6>
                <Form getUserInput={getUserInput} />
                <List
                  data={task}
                  getNewAddedItem={getNewAddedItem}
                  deleteItem={deleteItem}
                />
              
                
                
     </div>
    </section>
  );
}

export default Todu;