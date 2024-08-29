import { url } from 'inspector';
import styles from './ListProducts.module.css';
import { useQuery } from '@tanstack/react-query';
import { BasketItem, Product } from '../../types';

type props = {
    setBasketItems: React.Dispatch<React.SetStateAction<BasketItem[]>>,
    basketItems: BasketItem[]
}

const ListProducts: React.FunctionComponent<props> = ({ setBasketItems, basketItems }) => {
    const { isPending, error, data } = useQuery<Product[]>({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`${process.env.REACT_APP_LOCAL_HOST}/products`).then((res) =>
                res.json(),
            ),
    })

    const addButtonClick = (itemId: number) => {
        const basketItem = basketItems.find((item) => item.product.id === itemId);
        if (basketItem) {
            basketItem.count += 1;
            setBasketItems([...basketItems])

            return;
        }

        const selectedProduct: Product | undefined = data?.find((item) => item.id === itemId);
        if (!selectedProduct) return;

        const newBasketItem: BasketItem = { product: selectedProduct, count: 1 };
        setBasketItems(() => [...basketItems, newBasketItem]);
    }

    return <div className={styles.productList}>
        {isPending && <p>Loading products</p>}
        {error && <p>An Error is occured while fetching product datas</p>}
        {data && data.length > 0 && data.map((product) => {
            return <div key={product.id} className={styles.productCard}>
                <div>
                    <div style={{
                        backgroundImage: `url(${process.env.REACT_APP_IMAGES_DIRECTORY}${product.imageUrl})`
                    }} className={styles.cardImage} ></div>
                    <div className={styles.productInformation}>
                        <p className={styles.productName}>{product.productName}</p>
                        <p className={styles.productPrice}>${product.price}</p>
                        <button onClick={() => { addButtonClick(product.id) }} type='button'>Add to basket</button>
                    </div>
                </div>
            </div>
        })}
    </div>
}

export default ListProducts;

