import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  // console.log(dummy);
  // console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item.id && index}
          className="p-2 m-2 border-b-2 border-gray-400 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 flex flex-col">
              <span className="font-bold">{item.title} </span>
              <span>₹{item.price} </span>
            </div>
            <p className="text-xs">{item.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="px-2 py-1 rounded-lg mx-12 bg-black text-white "
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={item.image} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
