import { url } from 'inspector';
import styles from './ListProducts.module.css';

const ListProducts: React.FunctionComponent = () => {

    return <div className={styles.productList}>
        <div className={styles.productCard}>
            <div>
                <div style={{
                    backgroundImage: `url(${'/images/headphone-1.jpg'})`
                }} className={styles.cardImage} ></div>
                <div className={styles.productInformation}>
                    <p className={styles.productName}>product name</p>
                    <p className={styles.productPrice}>$190.99</p>
                    <button type='button'>Add to basket</button>
                </div>
            </div>
        </div>
        <div className={styles.productCard}>
            <div>
                <div style={{
                    backgroundImage: `url(${'/images/headphone-2.jpg'})`
                }} className={styles.cardImage} ></div>
                <div className={styles.productInformation}>
                    <p className={styles.productName}>product name</p>
                    <p className={styles.productPrice}>$190.99</p>
                    <button type='button'>Add to basket</button>
                </div>
            </div>
        </div>
        <div className={styles.productCard}>
            <div>
                <div style={{
                    backgroundImage: `url(${'/images/laptop-1.jpg'})`
                }} className={styles.cardImage} ></div>
                <div className={styles.productInformation}>
                    <p className={styles.productName}>product name</p>
                    <p className={styles.productPrice}>$190.99</p>
                    <button type='button'>Add to basket</button>
                </div>
            </div>
        </div>
        <div className={styles.productCard}>
            <div>
                <div style={{
                    backgroundImage: `url(${'/images/camera.jpg'})`
                }} className={styles.cardImage} ></div>
                <div className={styles.productInformation}>
                    <p className={styles.productName}>product name</p>
                    <p className={styles.productPrice}>$190.99</p>
                    <button type='button'>Add to basket</button>
                </div>
            </div>
        </div>
        <div className={styles.productCard}>
            <div>
                <div style={{
                    backgroundImage: `url(${'/images/laptop-2.jpg'})`
                }} className={styles.cardImage} ></div>
                <div className={styles.productInformation}>
                    <p className={styles.productName}>product name</p>
                    <p className={styles.productPrice}>$190.99</p>
                    <button type='button'>Add to basket</button>
                </div>
            </div>
        </div>
        <div className={styles.productCard}>
            <div>
                <div style={{
                    backgroundImage: `url(${'/images/keyboard.jpg'})`
                }} className={styles.cardImage} ></div>
                <div className={styles.productInformation}>
                    <p className={styles.productName}>product name</p>
                    <p className={styles.productPrice}>$190.99</p>
                    <button type='button'>Add to basket</button>
                </div>
            </div>
        </div>
    </div>
}

export default ListProducts;

