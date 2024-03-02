import "./Countdown.css"

function Countdown() {
    return(
        <div className="row CountdownContainer">
            <div className="col"><h1 className="LoremCountdown">Lorem ipsum dolor sit amet, consetetur</h1></div>
            <div className="DaysContainer col-2">
                <h1 className="row DaysNumber">170</h1>
                <h1 className="row Days">Days</h1>
            </div>
            <span className="Divider col"></span>
            <div className="DaysContainer col-2">
                <h1 className="row HoursNumber">13</h1>
                <h1 className="row Days">Hours</h1>
            </div>
            <span className="Divider col"></span>
            <div className="DaysContainer col-2">
                <h1 className="row MinutesNumber">39</h1>
                <h1 className="row Days">Minutes</h1>
            </div>
            <span className="Divider col"></span>
            <div className="DaysContainer col-2">
                <h1 className="row SecondsNumber">29</h1>
                <h1 className="row Days">Seconds</h1>
            </div>
        </div>
    )
}

export default Countdown;