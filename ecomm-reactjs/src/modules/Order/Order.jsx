import React from "react";

function Order() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-5">Order Confirmation</h1>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div
            key={index}
            className="mb-8 bg-white rounded-lg shadow-md p-5"
          >
            <h2 className="text-lg font-semibold mb-3">
              Order ID: {order.orderId}
            </h2>
            <h3 className="text-xl font-semibold mb-5">Items Purchased:</h3>
            <div className="border rounded-lg p-5">
              {order.items &&
                order.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center mb-3">
                    <span className="font-semibold mr-3">{item.title}</span>
                    <span className="text-gray-600">
                      x{item.quantity} - ${item.price * item.quantity}
                    </span>
                  </div>
                ))}
            </div>
            <h2 className="text-lg font-semibold mt-8">
              Total: ${order.total?.toFixed(2)}
            </h2>
          </div>
        ))
      ) : (
        <div className="text-lg font-semibold">No orders found.</div>
      )}
    </div>
  );
}

export default Order;
