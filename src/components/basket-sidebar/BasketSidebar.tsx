import { IoMdClose } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from './BasketSidebar.module.css';
import { BasketItem, Product } from "../../types";

type props = {
    shiftVisibilityOfBasketSidebar: () => void,
    setBasketItems: React.Dispatch<React.SetStateAction<BasketItem[]>>
    basketItems: BasketItem[]
}

const BasketSidebar: React.FunctionComponent<props> = ({ shiftVisibilityOfBasketSidebar, basketItems, setBasketItems }) => {

    // This handler remove basket item corresponding to itemId
    const removeIconClickHandler = (itemId: number) => {
        setBasketItems(basketItems.filter(item =>
            item.product.id !== itemId
        ));
    }

    return <aside className={styles.basketSidebar}>
        <h2>Your Basket</h2>
        <div>
            <IoMdClose className={styles.closeIcon} onClick={shiftVisibilityOfBasketSidebar} />
        </div>
        {basketItems && basketItems.length > 0 && basketItems.map(item => {
            return <div key={item.product.id} className={styles.basketItem}>
                <img src={item.product.imageUrl} alt="" />
                <div>
                    <p className={styles.itemName}>{item.product.productName}</p>
                    <p className={styles.itemPrice}>{item.product.price}</p>
                </div>
                <FaRegTrashAlt onClick={() => { removeIconClickHandler(item.product.id) }} className={styles.itemRemoveIcon} />
            </div>
        })}
        <button type="button">Checkout</button>
    </aside>
}

export default BasketSidebar