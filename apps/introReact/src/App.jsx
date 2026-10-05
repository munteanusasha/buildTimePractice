
import List from "./List.jsx";

function App() {

    const fruits = [
                    {id: 1, name : "apple", calories: 95},
                    {id: 2, name : "orange", calories: 45},
                    {id: 3, name : "banana", calories: 105},
                    {id: 4, name : "cocnut", calories: 159},
                    {id: 5, name : "pineapple", calories: 37}
    ];
    return(

        <List/>
  );
}

export default App
