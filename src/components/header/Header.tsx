import { BasketItem, Product } from '../../types';
import styles from './Header.module.css';
import { BsFillBasketFill } from "react-icons/bs";

type props = {
    shiftVisibilityOfBasketSidebar: () => void,
    setProductFilterText: React.Dispatch<React.SetStateAction<string>>
    basketItems: BasketItem[]
}

const Header: React.FunctionComponent<props> = ({ shiftVisibilityOfBasketSidebar, basketItems, setProductFilterText }) => {

    const searchInput = (value: string) => setProductFilterText(value.trim().toLowerCase());

    return <header className={styles.header}>
        <p className={styles.logo}>Furkan AYDIN</p>
        <div className={styles.searchInput}>
            <input type="text" placeholder='Search product' onInput={(e) => searchInput(e.currentTarget.value)} />
        </div>
        <div className={styles.icon} onClick={shiftVisibilityOfBasketSidebar}>
            <BsFillBasketFill style={{ fontSize: '2.4rem' }} />
            <span className={styles.count}>{basketItems && basketItems.length}</span>
        </div>
    </ header>
}

export default Header;