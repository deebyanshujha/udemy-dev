function CurrTime(){
    const dT = new Date()
    const formatted = dT.toLocaleString();
    return (
        <p className="timeP">
            This is the current time: {formatted} 
        </p>
    )
}

export default CurrTime