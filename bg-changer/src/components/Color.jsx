export default function Color({color, method}) {
    return (
        <>
            <div id={color} style={{ backgroundColor: color }} className={'h-16 w-28 border rounded-lg ' +
                'text-white flex justify-center items-center'} onClick={() => method(color)}>
                 {color}
            </div>
        </>
    )
}