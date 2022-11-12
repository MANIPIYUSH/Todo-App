import React,{useState,useRef} from 'react'


function Listdata({ task, id, getNewAddedItem, deleteItem }) {
  const [input, setInput] = useState(task);
  const [itemID] = useState(id);

  const [save, setSet] = useState(false);
  const ref = useRef();


  const handleEdit = () => {
    if (!save) {
      ref.current.removeAttribute("readOnly");
      ref.current.focus();
    } else {
      ref.current.setAttribute("readOnly", "readonly");
      getNewAddedItem([input, itemID]);
    }
    setSet(!save);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleDeleteItem = () => {
    deleteItem(itemID);
  };


  return (
    <div className=''>
     <div className="flex mb-4 items-center">
                <p className="w-full text-white">{input}</p>
                <button className="flex-no-shrink p-1 ml-4 mr-2 border-2 rounded hover:text-white text-white border-green hover:bg-green"onClick={handleEdit}> {save ? "save" : "edit"}</button>
                <button className="flex-no-shrink p-1 ml-2 border-2 rounded text-white border-red hover:text-white hover:bg-red"onClick={handleDeleteItem}>delete</button>
            </div>
      </div>
  )
}

export default Listdata
