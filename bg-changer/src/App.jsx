import Color from "./components/Color.jsx";

export function change (color) {
    document.getElementById('papa').style.backgroundColor = color;
}

export default function App() {
  return (
    <div id={'papa'} className={'h-screen w-screen bg-red-200 flex justify-center items-end'}>
        <div id={'colors'} className={'bg-cyan-500 h-20 w-96 border rounded-lg flex flex-row justify-around items-center'}>
            <Color color={'red'} method={change}/>
            <Color color={'green'} method={change}/>
            <Color color={'blue'} method={change}/>
        </div>
    </div>
  )
}