import ProductItem from './ProductItem'

const ProductList = ({ products }) => {
    return (
        <ul>
            {products.map((product) =>
                product.count > 0 ? <ProductItem key={product.id} product={product} /> : null
                //ИЛИ ТАК:
                //product.count && <ProductItem key={product.id} product={product} />
                //НО тогда в product.count подставится 0 из 3-го элемента и зарендерится 0,
                //а нам надо, чтобы элемент с product.count = 0 не рендерился, тогда
                //чтобы 0 преобразовался в false и не зарендерился, ставим "!!"
                //!!product.count && <ProductItem key={product.id} product={product} />
            )}
        </ul>
    )
};

export default ProductList