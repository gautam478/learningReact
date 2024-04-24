import Color from "./components/Color.jsx";

export default function App() {
    function changeBackgroundColor(color) {
        document.getElementById('papa').style.backgroundColor = color;
    }
  return (
    <div id={'papa'} className={'bg-white h-screen w-screen flex justify-center items-end'}>
        <div id={'colors'} className={'bg-gray-400 h-20 w-96 border rounded-lg flex flex-row justify-around items-center'}>
            <Color color={'red'} method={changeBackgroundColor}/>
            <Color color={'green'} method={changeBackgroundColor}/>
            <Color color={'blue'} method={changeBackgroundColor}/>
        </div>
    </div>
  )
}