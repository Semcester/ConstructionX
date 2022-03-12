import React from "react"
import Browse from "./Browse"
import CoreValue from "./CoreValue"
import Header from "./Header"
import Hero from "./Hero"
import Service from "./Service"
import Support from "./Support"

const Layouts = () => {
  return (
    <div className="font-league">
      <Header />
      <Hero />
      <CoreValue />
      <Service />
      <Browse />
      <Support />
    </div>
  )
}

export default Layouts
