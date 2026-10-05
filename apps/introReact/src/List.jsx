

function List(){
    const fruits = [
        {id: 1, name : "apple", calories: 95},
        {id: 2, name : "orange", calories: 45},
        {id: 3, name : "banana", calories: 105},
        {id: 4, name : "cocnut", calories: 159},
        {id: 5, name : "pineapple", calories: 37}
    ];

    // fruits.sort((a, b) => a.name.localCompare(b.name)); // Alphabetical
    // fruits.sort((b,a) => b.name.localeCompare(a.name)); //Reverser alphabetical order
    // fruits.sort((a,b) => a.calories - b.calories); // Numeric
    // fruits.sort((a,b) => b.calories - a.calories); // Reverse numerical

    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruit = fruits.filter(fruit => fruit.calories > 100);


    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                                        {fruit.name}: &nbsp;
                                                        <b>{fruit.calories}</b></li>);



    return(<ol>{listItems}</ol>);
}
export default List;