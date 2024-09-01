import Header from "../components/header/Header";
import ListProducts from "../components/list-products/ListProducts";
import BasketSidebar from "../components/basket-sidebar/BasketSidebar";
import { useState } from "react";
import { BasketItem } from "../types";


const Home: React.FunctionComponent = () => {
    // State to control visibility of BasketSidebar component
    const [displayBasketSidebar, setDisplayBasketSidebar] = useState(false);
    // State to store basket items
    const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

    // State to store filter text for filtering product list
    const [productFilterText, setProductFilterText] = useState('');

    // Callback to trigger visibility of BasketSidebar component
    function shiftVisibilityOfBasketSidebar(): void {
        setDisplayBasketSidebar(!displayBasketSidebar);
    }

    return <>
        <Header shiftVisibilityOfBasketSidebar={shiftVisibilityOfBasketSidebar} basketItems={basketItems} setProductFilterText={setProductFilterText} />

        <ListProducts setBasketItems={setBasketItems} basketItems={basketItems} productFilterText={productFilterText} />

        {displayBasketSidebar && <BasketSidebar setBasketItems={setBasketItems} basketItems={basketItems} shiftVisibilityOfBasketSidebar={shiftVisibilityOfBasketSidebar} />}
    </>
}

export default Home;