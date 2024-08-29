import Header from "../components/header/Header";
import ListProducts from "../components/list-products/ListProducts";
import BasketSidebar from "../components/basket-sidebar/BasketSidebar";
import { useState } from "react";
import { BasketItem } from "../types";


const Home: React.FunctionComponent = () => {
    // State to control visibility of BasketSidebar component
    const [displayBasketSidebar, setDisplayBasketSidebar] = useState(false);
    // State to store basket items
    const [basketItems, setBasketItems] = useState<BasketItem[]>([
        { product: { id: 1, price: 200, productName: "Product Name-1", imageUrl: "/images/headphone-1.jpg" }, count: 1 },
        { product: { id: 2, price: 200, productName: "Product Name-2", imageUrl: "/images/headphone-1.jpg" }, count: 2 },
        { product: { id: 3, price: 200, productName: "Product Name-3", imageUrl: "/images/headphone-1.jpg" }, count: 3 },
    ]);

    // Callback to trigger visibility of BasketSidebar component
    function shiftVisibilityOfBasketSidebar(): void {
        setDisplayBasketSidebar(!displayBasketSidebar);
    }

    return <>
        <Header shiftVisibilityOfBasketSidebar={shiftVisibilityOfBasketSidebar} basketItems={basketItems} />
        <ListProducts />

        {displayBasketSidebar && <BasketSidebar setBasketItems={setBasketItems} basketItems={basketItems} shiftVisibilityOfBasketSidebar={shiftVisibilityOfBasketSidebar} />}
    </>
}

export default Home;