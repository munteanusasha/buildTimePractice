import {useState,useRef} from "react";

function Calculator(){

    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const inputRef = useRef(null);

    let result = eval(`${input2}+${input1}`);

    // const handlerInput =(e)=>{
    //
    // }

    return(
        <div>
            <input ref={inputRef}/>
            <input
                onChange={
                    (e)=>{setInput2(e.target.value)}}/>
            <button onClick={()=>alert(result)}>Add</button>
            <p>Result: {eval(`${input2}+${input1}`)}</p>
        </div>
    );
}
export default Calculator