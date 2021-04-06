


const ProductItem = ({ product }) => {
    return (
        <li className="item">
            <p>name: {product.name}</p>
            <p>price: {product.price}</p>
            <p>count: {product.count}</p>
            <img src={product.img} alt={product.name} width='70'/>
            {/* <p>{(product.count < 1 ? 'нет в наличии' : 'есть в наличии')} </p> */}
        </li>
    )
};

export default ProductItem