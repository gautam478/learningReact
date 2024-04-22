import Print from './Print.jsx';
import {useState} from "react";

export default function App() {
    // let count = 5; // changes to this type of variable is not reflected in UI
    let [count, setCount] = useState(10);
    function addVal () {
        console.log('value added');
        if (count < 20) setCount(count + 1);
    }
    function minusVal () {
        console.log('value substracted');
        if (count > 0) setCount(count - 1);
    }
    return (
        <>
            <Print/>
            <h2 className={'bg-sky-300'}>count is {count}</h2>
            <button className={'bg-blue-500'} onClick={addVal}>add value</button>
            <button className={'bg-blue-300'} onClick={minusVal}>minus value</button>
        </>
    )
}