import {useMemo, useState} from "react";

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
    const [counter, setCounter] = useState(0);
    const total = 0;

    // const handleBought = (e) => {
    //     setProduct(
    //         products.map((product) => {
    //             if (product.id === e.target.id) return e.target.bought = true;
    //         })
    //     );
    // };

    // const handleBuy = (e) => {
    //     setProduct(
    //         products.map((product) =>
    //         {
    //             if (product.id === e.target.id) return e.target.bought = false;
    //         })
    //     );
    // }

    // const handleRemove = (e) => {

    //     setProduct(e.splice(e.target.id - 1, 1));
    // }

    const handleBought = (productId) => {
        setProduct((currentProducts) =>
            currentProducts.map((product) =>
                product.id === productId ? {...product, bought: true} : product
            )
        );
    };

    const handleBuy = (productId) => {
        setProduct((currentProducts) =>
            currentProducts.map((product) =>
                product.id === productId ? {...product, bought: false} : product
            )
        );
    };

    const handleRemove = (productId) => {
        setProduct((currentProducts) =>
            currentProducts.filter((product) => product.id !== productId)
        );
    };

    // const handleShowAll = (productId) => {
    //
    // }


    const listItems = useMemo(
        () => products.map(

            product => {

                console.log("test");

                return (<div key={product.id}>
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
                )
            }
        ), [products]
    );

    // const [obj, setObj] = useState({
    //     name: "Name",
    //     gen: "gen",
    // });
    //
    // const addObj = (e) => {
    //     setObj(
    //         ...obj,
    //         [e.target.name] = e.target.value,
    //         )
    // };
    //
    // const showObj = obj.map(o => {o.name});

    return (
        <div id="shoppingList">
            <button>Show All</button>
            <button>Bought</button>
            <button>To Buy</button>
            <button>Add</button>
            {listItems}
            <p>Total : {currency} {total}</p>

            <button onClick={() => setCounter(prevState => prevState + 1)}>Counter {counter}</button>


            {/* // Armando Example
            <div style={{display:'flex',direction:"row",justifyContent:"space-around"}}>
                { data.map((item)=>(
                    <div style={{width:'200px',borderRadius:'50%',border:"1px solid blue",overflow:'hidden'}} >
                        <img src={item.url} width='100px'/>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div> */}
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