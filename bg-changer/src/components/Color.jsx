export default function Color({color, method}) {
    return (
        <>
            <div className={`${color} h-16 w-28 border rounded-lg ` +
                'text-white flex justify-center items-center'} onClick={
                function () {
                    method(color)
                }
            }>
                 <p>{color.split('-')[1]}</p>
            </div>
        </>
    )
}

// function merafunction (name) {
//     console.log(name)
// }
// definedfunction(function () { merafunction(`gautam`)})