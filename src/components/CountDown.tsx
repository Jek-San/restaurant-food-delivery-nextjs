"use client"
import React, { useEffect, useState } from "react"
import Countdown from "react-countdown"

const endingDate = new Date("2023-11-25")

const CountDown = () => {
  const [timerStarted, setTimerStarted] = useState(false)

  useEffect(() => {
    // Initialize and start the countdown timer on the client side
    setTimerStarted(true)
  }, [])

  return (
    <div className="font-bold text-5xl text-yellow-300">
      {timerStarted ? (
        <Countdown
          date={endingDate}
          onComplete={() => console.log("Countdown completed")}
        />
      ) : (
        "Loading..." // You can display a loading message until the timer starts
      )}
    </div>
  )
}

export default CountDown
