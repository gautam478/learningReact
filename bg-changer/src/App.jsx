import Color from "./components/Color.jsx";

export default function App() {
    function change (color) {
        document.getElementById('papa').style.backgroundColor = color;
    }
  return (
    <div id={'papa'} className={'bg-white h-screen w-screen flex justify-center items-end'}>
        <div id={'colors'} className={'bg-gray-400 h-20 w-96 border rounded-lg flex flex-row justify-around items-center'}>
            <Color color={'red'} method={change}/>
            <Color color={'green'} method={change}/>
            <Color color={'blue'} method={change}/>
        </div>
    </div>
  )
}