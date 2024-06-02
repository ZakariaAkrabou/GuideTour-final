import React from 'react';
import { useSelector } from 'react-redux';

const OrderDetails = ({ handleDetailsClose }) => {
  const tour = useSelector((state) => state.tours.cartTourBuId);
  const camping = useSelector((state) => state.campings.campingID);
  const guideIdName = useSelector((state) => state.tours.guideIds);
  console.log(guideIdName);

  return (
    <>
      <div className="fixed inset-0 z-50 backdrop-blur-sm flex justify-center items-center">
        <div className="relative bg-white shadow-xl rounded-lg w-1/2 h-[500px] p-3">
          <h2 className="text-xl font-bold mb-4">Order Details</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <img
              className="w-full h-2/3 object-cover rounded-lg"
              src={camping.image || tour.image}
              alt="Order Image"
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col rounded-lg">
                  <h1 className="text-lg font-bold mb-2">Description</h1>
                  <span className="border-primary/50 border-2 rounded-xl max-h-40 overflow-y-auto p-1.5">
                    {camping.description || tour.description}
                  </span>
                </div>
                <h1 className="">
                  <span className="font-bold pr-2">Location:</span> {camping.location || tour.title}
                </h1>
                <h1 className=" pr-2 ">
                  <span className="font-bold">Guide:</span> {guideIdName.firstName}
                </h1>
                <h1 className="">
                  <span className="font-bold pr-2">Price:</span> {camping.price || tour.price}
                </h1>
                <h1 className=" ">
                  <span className="font-bold pr-2">Start-date:</span> {camping.start_date || tour.title}
                </h1>
                <h1 className="">
                  <span className="font-bold pr-2">End-date:</span> {camping.end_date || tour.title}
                </h1>
              </div>
              <button
                className="text-white bg-primary hover:bg-white  font-medium rounded-lg py-2.5 mt-4 hover:text-primary border"
                onClick={handleDetailsClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
