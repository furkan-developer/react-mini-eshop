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
        { Id: 1, Price: 200, ProductName: "Product Name", ImageUrl: "/images/headphone-1.jpg" },
        { Id: 2, Price: 200, ProductName: "Product Name", ImageUrl: "/images/headphone-1.jpg" },
        { Id: 3, Price: 200, ProductName: "Product Name", ImageUrl: "/images/headphone-1.jpg" },
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