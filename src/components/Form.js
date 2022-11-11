import React,{useState} from 'react'
import List from "./Listdata"


function Form({ getUserInput }) {
    const [input, setInput] = useState("");
    const handleInput = (e) => {
        setInput(e.target.value);
      };
      const handleAdd = (e) => {
        e.preventDefault();
        if (input) {
          getUserInput(input);
          setInput("");
        }
      };
  return (
    <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
            <h1 class="text-grey-darkest">Todo List</h1>
            <div class="flex mt-4">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Enter Your Task!" value={input} onChange={handleInput}/>
                <button class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal " onClick={handleAdd}>Add</button>
            </div>
        </div>
        
        
    </div>
</div>

  )
}

export default Form