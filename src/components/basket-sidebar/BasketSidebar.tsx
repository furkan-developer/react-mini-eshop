import { IoMdClose } from "react-icons/io";
import styles from './BasketSidebar.module.css';

type props = {
    shiftVisibilityOfBasketSidebar: () => void
}

const BasketSidebar: React.FunctionComponent<props> = ({ shiftVisibilityOfBasketSidebar }) => {

    return <aside className={styles.basketSidebar}>
        <h2>Your Basket</h2>
        <div>
            <IoMdClose className={styles.closeIcon} onClick={shiftVisibilityOfBasketSidebar}/>
        </div>
        <div className={styles.basketItem}>
            <img src="/images/headphone-1.jpg" alt="" />
            <div>
                <p className={styles.itemName}>Product name</p>
                <p className={styles.itemPrice}>$220.99</p>
            </div>
        </div>
        <div className={styles.basketItem}>
            <img src="/images/headphone-1.jpg" alt="" />
            <div>
                <p className={styles.itemName}>Product name</p>
                <p className={styles.itemPrice}>$220.99</p>
            </div>
        </div>
        <div className={styles.basketItem}>
            <img src="/images/headphone-1.jpg" alt="" />
            <div>
                <p className={styles.itemName}>Product name</p>
                <p className={styles.itemPrice}>$220.99</p>
            </div>
        </div>
        <div className={styles.basketItem}>
            <img src="/images/headphone-1.jpg" alt="" />
            <div>
                <p className={styles.itemName}>Product name</p>
                <p className={styles.itemPrice}>$220.99</p>
            </div>
        </div>
        <button type="button">Checkout</button>
    </aside>
}

export default BasketSidebar