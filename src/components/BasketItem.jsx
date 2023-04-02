function BasketItem (props){
    const{
        mainId,
        displayName,
        final,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props;

   console.log('final ' + final)
//    const finalPrice = price.finalPrice;
    return (
        <li className="collection-item">
        {displayName} <i onClick={() =>decQuantity(mainId)} className="material-icons basket-quantity">remove</i> 
         x <i  onClick={() =>incQuantity(mainId)}  className="material-icons basket-quantity">add</i> {' '} {quantity*final} руб
        <span onClick={() => removeFromBasket(mainId)}  className="secondary-content" > 
            <i className="material-icons basket-delete">close</i>
        </span>
        </li>
    )
}

export default BasketItem;