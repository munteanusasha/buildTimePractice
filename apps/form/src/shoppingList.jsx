import {useState} from "react";

export default function ShoppingList() {

    const data=[
        {
            url:'https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/mffsycymuwolgltmlvaf?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MjU2LCJoZWlnaHQiOjI1Nn19XQ==',
            title:'Oliva'
        },
        {
            url:'https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/mffsycymuwolgltmlvaf?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MjU2LCJoZWlnaHQiOjI1Nn19XQ==',
            title:'Oliva'
        },
        {
            url:'https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/mffsycymuwolgltmlvaf?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MjU2LCJoZWlnaHQiOjI1Nn19XQ==',
            title:'Oliva'
        }
    ]


    const [products, setProduct] = useState(initialProducts);

    const handleBought = (e) => {
        console.log(e.target.bought);
        setProduct(
            products.map((product) => {
                if (product.id === e.target.id) return e.target.bought = true;
            })
        );
    };

    const handleBuy = (e) => {
        setProduct(
            products.map((product) =>
            {
                if (product.id === e.target.id) return e.target.bought = false;
            })
        );
    }

    const handleRemove = (e) => {
        setProduct(e.splice(e.target.id - 1, 1));
    }

    const listItems = products.map(
        product => (
            <div key={product.id}>
                <ul>
                    <li>{product.name}</li>
                    <li>{currency} {product.price}</li>
                    <li>{product.bought ? "Bought" : "Buy It"}</li>
                </ul>
                <button
                    onClick={handleBuy}
                >Buy
                </button>
                <button
                    onClick={handleBought}
                >Bought
                </button>
                <button
                    onClick={handleRemove}
                >Remove
                </button>
            </div>
        )
    );


    return (
        <div id="shoppingList">
            {listItems}

            <div style={{display:'flex',direction:"row",justifyContent:"space-around"}}>
                { data.map((item)=>(
                    <div style={{width:'200px',borderRadius:'50%',border:"1px solid blue",overflow:'hidden'}} >
                        <img src={item.url} width='100px'/>
                        <p>{item.title}</p>
                    </div>
                ))}

            </div>


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