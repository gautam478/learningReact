import Color from "./components/Color.jsx";
import {useState} from "react";

export default function App() {
  const [papaColor, setPapaColor] = useState('bg-[white]');
  return (
    <div className={`${papaColor} h-screen w-screen flex justify-center items-end duration-[690ms]`}>
        <div className={'bg-gray-400 h-20 w-96 border rounded-lg flex flex-row justify-around items-center'}>
            <Color color={'bg-red-600'} method={setPapaColor}/>
            <Color color={'bg-green-600'} method={setPapaColor}/>
            <Color color={'bg-blue-600'} method={setPapaColor}/>
        </div>
    </div>
  )
}

// function changeBackgroundColor(color) {
//     document.getElementById('papa').classList.remove(`bg-white`);
//     document.getElementById('papa').classList.add(color);
//     console.log(document.getElementById('papa').classList)
// }