import Header from "../components/header/Header";
import ListProducts from "../components/list-products/ListProducts";
import BasketSidebar from "../components/basket-sidebar/BasketSidebar";
import { useState } from "react";
import { Product } from "../types";


const Home: React.FunctionComponent = () => {
    // State to control visibility of BasketSidebar component
    const [displayBasketSidebar, setDisplayBasketSidebar] = useState(false);
    // State to store basket items
    const [basketItems, setBasketItems] = useState<Product[]>([
        { id: 1, price: 200, productName: "Product Name", imageUrl: "/images/headphone-1.jpg" },
        { id: 2, price: 200, productName: "Product Name", imageUrl: "/images/headphone-1.jpg" },
        { id: 3, price: 200, productName: "Product Name", imageUrl: "/images/headphone-1.jpg" }]);

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