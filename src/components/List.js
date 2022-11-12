import React from "react";
import ListItem from "./Listdata";

function List({ data, getNewAddedItem, deleteItem }) {
  // console.log(data, "data");
  return (
   <div>
       {data
        ? data.map((item) => {
            // console.log(item);
            return (
              <ListItem
                key={item.id}
                {...item}
                getNewAddedItem={getNewAddedItem}
                deleteItem={deleteItem}
              />
            );
          })
        : ""}

   </div>
  );
}

export default List;