import { url } from 'inspector';
import styles from './ListProducts.module.css';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../../types';

const ListProducts: React.FunctionComponent = () => {
    const { isPending, error, data } = useQuery<Product[]>({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`${process.env.REACT_APP_Local_Host}/products`).then((res) =>
                res.json(),
            ),
    })

    return <div className={styles.productList}>
        {isPending && <p>Loading products</p>}
        {error && <p>An Error is occured while fetching product datas</p>}
        {data && data.length > 0 && data.map((product) => {
            return <div key={product.id} className={styles.productCard}>
                <div>
                    <div style={{
                        backgroundImage: `url(${'/images'}${product.imageUrl})`
                    }} className={styles.cardImage} ></div>
                    <div className={styles.productInformation}>
                        <p className={styles.productName}>{product.productName}</p>
                        <p className={styles.productPrice}>${product.price}</p>
                        <button type='button'>Add to basket</button>
                    </div>
                </div>
            </div>
        })}
    </div>
}

export default ListProducts;

