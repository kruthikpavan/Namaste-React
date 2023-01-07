import React from "react"
import ReactDom from "react-dom/client"
const header = React.createElement("h1", {}, "Main header")
const Logo = () => <div className="logo">🫡</div>
const Search = () => (
   <div className="search">
      <input type="text" placeholder="Search anything"></input>
   </div>
)
const Icon = () => <div className="icon">🧑‍🦰</div>
const container = (
   <div className="container">
      <Logo />
      <Search />
      <Icon />
   </div>
)
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(container)
