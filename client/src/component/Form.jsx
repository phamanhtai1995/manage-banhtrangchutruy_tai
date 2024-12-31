import { useEffect, useState } from "react";
import Modal from "./Modal";
import LocalStorage from "../ultils/LocalStorage";
import IconEdit from "../assets/edit.svg";
import IconDelete from "../assets/delete.svg";

function Form() {
  //State input name
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isModal, setIsModal] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [editOrder, setEditOrder] = useState("");

  //Select item
  const handleSelectName = (itemSelect) => {
    setName(itemSelect);
  };

  //Change quantiity products
  const handleQuantityChange = (e) => {
    const value = e.target.value;
    setQuantity(value === "" ? null : Number(value));
  };

  //Handle submit order
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const newOrder = {
      name,
      quantity,
    };

    let updateOrder;
    if (editOrder !== "") {
      updateOrder = [...orderList];
      updateOrder[editOrder] = newOrder;
      setEditOrder("");
    } else {
      updateOrder = [newOrder, ...orderList];
    }

    // const updateOrder = [newOrder, ...orderList];
    setOrderList(updateOrder);

    //Save localStorage
    LocalStorage.set("orders", updateOrder);

    setName("");
    setQuantity("");
  };

  //Edit order
  const handleEditOrder = (index) => {
    const editIndex = orderList[index];
    // console.log("editIndex", editIndex);
    setName(editIndex.name);
    setQuantity(editIndex.quantity);
    setEditOrder(index);
  };

  //Delete order
  const handleDeleteOrder = (index) => {
    // console.log("orderList", orderList);
    const updateNewOrder = orderList.filter((item, itemIndex) => {
      return itemIndex !== index;
    });
    // console.log("updateNewOrder", updateNewOrder);
    setOrderList(updateNewOrder);
    LocalStorage.set("orders", updateNewOrder);
  };

  //Disabled button if input blank
  const disabledSubmit = !name.trim() || !quantity;

  //Load data
  // useEffect(() => {
  //   const getData = localStorage.getItem("orders");
  //   const storeOrder = JSON.parse(getData);
  //   setOrderList(storeOrder);
  // }, []);
  useEffect(() => {
    let localStorageOrderList = LocalStorage.get("orders");
    if (localStorageOrderList) {
      setOrderList(localStorageOrderList);
    }
  }, []);

  return (
    <div className="p-4 min-w-[600px]">
      <div className="text-2xl font-bold mb-4">Order Form</div>
      <form className="mb-4">
        <div className="mb-2 text-left">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onClick={() => setIsModal(true)}
            readOnly
            className="w-full p-2 border rounded"
          ></input>
        </div>
        <div className="mb-2 text-left">
          <label className="block text-sm font-medium mb-1">Quanlity</label>
          <input
            type="number"
            name="name"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-full p-2 border rounded"
          ></input>
        </div>
        <button
          type="submit"
          onClick={handleSubmitOrder}
          disabled={disabledSubmit}
          className={`mt-4  text-white rounded 
            ${
              disabledSubmit
                ? "bg-gray-600 pointer-events-none opacity-50"
                : "bg-orange-500 hover:bg-orange-700"
            }
          `}
        >
          {editOrder !== "" ? "Update" : "Submit"}
        </button>
      </form>
      <div className="text-2xl font-bold mb-4">Order List</div>
      <div className="list-product">
        <div className="border">
          <div className="flex bg-gray-100">
            <div className="p-2 flex-1 text-left font-medium border-r">
              Name Product
            </div>
            <div className="p-2 min-w-24 font-medium border-r">Quantity</div>
            <div className="p-2 min-w-20 font-medium border-r">Edit</div>
            <div className="p-2 min-w-20 font-medium">Delete</div>
          </div>
          {orderList.map((item, index) => (
            <div key={index} className="border-t flex">
              <div className="p-2 flex-1 text-left border-r content-center">
                {item.name}
              </div>
              <div className="p-2 min-w-24 border-r content-center">
                {item.quantity}
              </div>
              <div className="p-0 min-w-20 border-r content-center">
                <button
                  onClick={() => {
                    handleEditOrder(index);
                  }}
                  className="p-2 cursor-pointer bg-white border-0 outline-0 focus:outline-0"
                >
                  <img src={IconEdit} alt="Edit Icon" width="26" height="26" />
                </button>
              </div>
              <div className="p-0 min-w-20">
                <button
                  onClick={() => {
                    console.log("index", index);
                    handleDeleteOrder(index);
                  }}
                  className="p-2 cursor-pointer bg-white border-0 outline-0 focus:outline-0"
                >
                  <img
                    src={IconDelete}
                    alt="Delete Icon"
                    width="26"
                    height="26"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal component */}
      <Modal
        isOpen={isModal}
        onClose={() => setIsModal(false)}
        onSelect={handleSelectName}
      />
      {/* End modal component */}
    </div>
  );
}

export default Form;
