import { RxCaretUp } from "react-icons/rx";
import { RxCaretDown } from "react-icons/rx";

export function AddToCart({ cartArry }) {
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
        <div className="header" key={index}>
          <div className="imge">
            <img src={item.thumbnail} alt={index} />
            <p>{item.title}</p>
          </div>
          <div className="prices">
            <p>${item.price.toFixed(2)}</p>
          </div>
          <div className="quan">
            <div className="realmessage">3</div>

            <div className="caret">
              <div className="caretup">
                <RxCaretUp />
              </div>
              <div className="caretdown">
                <RxCaretDown />
              </div>
            </div>
          </div>
          <div className="subtotal">
            <p>$650</p>
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
          <div className="tot">$1750</div>
        </div>

        <div className="sub">
          <div className="namee">Shipping:</div>
          <div className="tot">Free</div>
        </div>
        <div className="sub">
          <div className="namee">Total:</div>
          <div className="tot"> $1750</div>
        </div>
        <div className="proceed">Procees to checkout</div>
      </div>
    </div>
  );
}
