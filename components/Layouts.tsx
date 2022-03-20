import React from "react"
import Application from "./Application"
import Browse from "./Browse"
import CoreValue from "./CoreValue"
import Facts from "./Facts"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import Service from "./Service"
import Support from "./Support"

const Layouts = () => {
  return (
    <div className="font-league">
      <Hero />
      <CoreValue />
      <Service />
      <Browse />
      <Support />
      <Facts />
      <Application />
    </div>
  )
}

export default Layouts
