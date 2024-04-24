export default function Print ({display, extra = "wow"}) {
    return (
        <>
            <h3 className={'bg-blue-400'}>{display} {extra}</h3>
        </>
    )
}