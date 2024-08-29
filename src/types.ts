export type Product = {
    id: number,
    productName: string,
    price: number,
    imageUrl: string
}

export type BasketItem = {
    product: Product,
    count: number
}