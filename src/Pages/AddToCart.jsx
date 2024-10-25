import { useState } from "react";
import { RxCaretUp } from "react-icons/rx";
import { RxCaretDown } from "react-icons/rx";

export function AddToCart({ cartArry }) {
  const [value, setValue] = useState(() => {
    const newValue = {};
    cartArry.forEach((item) => {
      newValue[item.id] = item.quantity;
      newValue[item.title] = item.price;
    });
    return newValue;
  });
  const handleIncrement = (id) => {
    setValue((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };
  const handleDecrement = (id) => {
    setValue((prev) => {
      const currentValue = prev[id] || 0;
      const newValue = Math.max(currentValue - 1, 0);
      return { ...prev, [id]: newValue };
    });
  };

  const handlePrice = (price, quan) => {
    return price * quan;
  };

  const total = cartArry.reduce((acc, item) => {
    const quantity = value[item.id] || 0;
    return acc + handlePrice(item.price, quantity);
  }, 0);
  const goods = cartArry;

  return (
    <div className="cart-mother">
      <div className="homes">
        <p>
          <span>Home </span> / Cart
        </p>
      </div>

      <div className="header">
        <h5>Product</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>SubTotal</h5>
      </div>

      {goods?.map((item, index) => (
        <div className="header" key={item.id}>
          <div className="imge">
            <img src={item.thumbnail} alt={index} />
            <p>{item.title}</p>
          </div>
          <div className="prices">
            <p>${item.price.toFixed(2)}</p>
          </div>
          <div className="quan">
            <div className="realmessage">{value[item.id] || 0}</div>

            <div
              className="caret"
              onClick={(e) => {
                e.stopPropagation();
                handleIncrement(item.id);
              }}
            >
              <div className="caretup">
                <RxCaretUp />
              </div>

              <div
                className="caretdown"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDecrement(item.id);
                }}
              >
                <RxCaretDown />
              </div>
            </div>
          </div>
          <div className="subtotal">
            <p>${handlePrice(item.price, value[item.id] || 0).toFixed(2)}</p>
          </div>
        </div>
      ))}
      <div className="lastbutn">
        {" "}
        <div className="return">Return to Shop</div>
        <div className="update">Update Cart</div>
      </div>
      <div className="summingTotal">
        <h5>Cart Total</h5>
        <div className="sub">
          <div className="namee">Subtotal:</div>
          <div className="tot"></div>
        </div>

        <div className="sub">
          <div className="namee">Shipping:</div>
          <div className="tot">Free</div>
        </div>
        <div className="sub">
          <div className="namee">Total:</div>
          <div className="tot"> ${total.toFixed(2)}</div>
        </div>
        <div className="proceed">Procees to checkout</div>
      </div>
    </div>
  );
}
