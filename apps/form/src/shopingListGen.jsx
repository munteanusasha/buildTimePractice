import {useState} from "react";

export default function ShoppingList() {

    // const data=[ // Amando example
    //     {
    //         url:'https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/mffsycymuwolgltmlvaf?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MjU2LCJoZWlnaHQiOjI1Nn19XQ==',
    //         title:'Oliva'
    //     },
    //     {
    //         url:'https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/mffsycymuwolgltmlvaf?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MjU2LCJoZWlnaHQiOjI1Nn19XQ==',
    //         title:'Oliva'
    //     },
    //     {
    //         url:'https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/mffsycymuwolgltmlvaf?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MjU2LCJoZWlnaHQiOjI1Nn19XQ==',
    //         title:'Oliva'
    //     }
    // ]


    const [products, setProduct] = useState(initialProducts);
    const [filter, setFilter] = useState("all");
    const [newProductName, setNewProductName] = useState("");
    const [newProductPrice, setNewProductPrice] = useState("");

    const handleBought = (productId) => {
        setProduct((currentProducts) =>
            currentProducts.map((product) =>
                product.id === productId
                    ? { ...product, bought: true }
                    : product
            )
        );
    };

    const handleBuy = (productId) => {
        setProduct((currentProducts) =>
            currentProducts.map((product) =>
                product.id === productId
                    ? { ...product, bought: false }
                    : product
            )
        );
    };

    const handleRemove = (productId) => {
        setProduct((currentProducts) =>
            currentProducts.filter((product) => product.id !== productId)
        );
    };

    const handleAddProduct = () => {
        const trimmedName = newProductName.trim();
        const parsedPrice = Number(newProductPrice);

        if (!trimmedName || Number.isNaN(parsedPrice) || parsedPrice < 0) {
            return;
        }

        setProduct((currentProducts) => [
            ...currentProducts,
            {
                id: Date.now(),
                name: trimmedName,
                price: parsedPrice,
                bought: false,
            },
        ]);

        setNewProductName("");
        setNewProductPrice("");
    };

    const filteredProducts = products.filter((product) => {
        if (filter === "bought") return product.bought;
        if (filter === "to-buy") return !product.bought;
        return true;
    });

    const totalAmount = filteredProducts.reduce(
        (sum, product) => sum + product.price,
        0
    );

    const listItems = filteredProducts.map((product) => (
        <div key={product.id}>
            <ul>
                <li>{product.name}</li>
                <li>{currency} {product.price}</li>
                <li>{product.bought ? "Bought" : "Buy It"}</li>
            </ul>
            <button onClick={() => handleBuy(product.id)}>
                Buy
            </button>
            <button onClick={() => handleBought(product.id)}>
                Bought
            </button>
            <button onClick={() => handleRemove(product.id)}>
                Remove
            </button>
        </div>
    ));

    return (
        <div id="shoppingList">
            <div>
                <button type="button" onClick={() => setFilter("all")}>Show All</button>
                <button type="button" onClick={() => setFilter("bought")}>Bought</button>
                <button type="button" onClick={() => setFilter("to-buy")}>To Buy</button>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Product name"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                />
                <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Price"
                    value={newProductPrice}
                    onChange={(e) => setNewProductPrice(e.target.value)}
                />
                <button type="button" onClick={handleAddProduct}>Add</button>
            </div>

            {listItems}

            <p>
                Total amount: {currency} {totalAmount.toFixed(2)}
            </p>
        </div>
    );

}

const currency = "$";

const initialProducts = [
    {
        id: 1,
        name: "Milk",
        price: 2.5,
        bought: false
    },
    {
        id: 2,
        name: "Bread",
        price: 1.5,
        bought: true
    },
    {
        id: 3,
        name: "Apples",
        price: 3,
        bought: false
    },
    {
        id: 4,
        name: "Cheese",
        price: 5,
        bought: false
    }
];