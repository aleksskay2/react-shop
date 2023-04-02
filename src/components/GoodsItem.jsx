function GoodsItem(props) {
    const { mainId, displayName, displayDescription,
         price, displayAssets, addToBasket = Function.prototype } =
        props;
    const final = price.finalPrice;

    return (
        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={displayName} />
               
                <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i className="material-icons">add</i>
                </a>
            </div>
            <div className="card-content">
            <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button onClick={
                    () =>addToBasket({
                        mainId,
                        displayName,
                        final

                    })
                } className="btn">Купить</button>
                <span className="right" style={{fontSize: '1.8rem'}}>
                    {price.finalPrice} руб. </span>
            </div>
        </div>
    );
}

export default GoodsItem;
