import { useEffect, useState } from "react";

const productData = [
    {
        id: 1,
        name: 'Product 1',
        price: '$100',
    },
    {
        id: 2,
        name: 'Product 2',
        price: '$200',
    },
    {
        id: 3,
        name: 'Product 3',
        price: '$300',
    },
    {
        id: 4,
        name: 'Product 4',
        price: '$400',
    },
    {
        id: 5,
        name: 'Product 5',
        price: '$500',
    },
]

export const useProducts = () => {

    // normally you would fetch the data from an API and then return the result but here i am just using the data from the array above to simulate the API call 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(productData);
        }, 2000);
    }, [])

    return products;

}