import { IoMdClose } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from './BasketSidebar.module.css';
import { Product } from "../../types";

type props = {
    shiftVisibilityOfBasketSidebar: () => void,
    setBasketItems: React.Dispatch<React.SetStateAction<Product[]>>
    basketItems: Product[]
}

const BasketSidebar: React.FunctionComponent<props> = ({ shiftVisibilityOfBasketSidebar, basketItems, setBasketItems }) => {

    // This handler remove basket item corresponding to itemId
    const removeIconClickHandler = (itemId: number) => {
        setBasketItems(basketItems.filter(item =>
            item.id !== itemId
        ));
    }

    return <aside className={styles.basketSidebar}>
        <h2>Your Basket</h2>
        <div>
            <IoMdClose className={styles.closeIcon} onClick={shiftVisibilityOfBasketSidebar} />
        </div>
        {basketItems && basketItems.length > 0 && basketItems.map(item => {
            return <div key={item.id} className={styles.basketItem}>
                <img src={item.imageUrl} alt="" />
                <div>
                    <p className={styles.itemName}>{item.productName}</p>
                    <p className={styles.itemPrice}>{item.price}</p>
                </div>
                <FaRegTrashAlt onClick={() => { removeIconClickHandler(item.id) }} className={styles.itemRemoveIcon} />
            </div>
        })}
        <button type="button">Checkout</button>
    </aside>
}

export default BasketSidebar