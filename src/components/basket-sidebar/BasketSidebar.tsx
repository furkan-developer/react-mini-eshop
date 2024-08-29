import { IoMdClose, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
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

    const incrementIconClickHandler = (itemId: number) => {
        const item = basketItems.find((item) => item.product.id === itemId);
        if (item) {
            item.count += 1;
            setBasketItems(() => [...basketItems])
        }
    }

    const decrementIconClickHandler = (itemId: number) => {
        const basketItem = basketItems.find((item) => item.product.id === itemId);
        if (basketItem) {
            basketItem.count -= 1;
            if (basketItem.count <= 0) {
                const indexNumber = basketItems.indexOf(basketItem);
                basketItems.splice(indexNumber, 1);

                setBasketItems(() => [...basketItems]);
                return;
            }

            setBasketItems(() => [...basketItems]);
        }
    }

    return <aside className={styles.basketSidebar}>
        <h2>Your Basket</h2>
        <div>
            <IoMdClose className={styles.closeIcon} onClick={shiftVisibilityOfBasketSidebar} />
        </div>
        {basketItems && basketItems.length > 0 && basketItems.map(item => {
            return <div key={item.product.id} className={styles.basketItem}>
                <img src={`${process.env.REACT_APP_IMAGES_DIRECTORY}${item.product.imageUrl}`} alt="" />
                <div>
                    <p className={styles.itemName}>{item.product.productName}</p>
                    <p className={styles.itemPrice}>{item.product.price}</p>
                </div>
                <div className={styles.countIndicator}>
                    <span onClick={() => incrementIconClickHandler(item.product.id)}><IoIosArrowUp /></span>
                    <span>{item.count}</span>
                    <span onClick={() => decrementIconClickHandler(item.product.id)}><IoIosArrowDown /></span>
                </div>
                <FaRegTrashAlt onClick={() => { removeIconClickHandler(item.product.id) }} className={styles.itemRemoveIcon} />
            </div>
        })}
        <button type="button">Checkout</button>
    </aside>
}

export default BasketSidebar


