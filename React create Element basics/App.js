import React from "react"
import ReactDom from "react-dom/client"

const header1 = React.createElement("h1", {}, "Hello World ")
const header2 = React.createElement("h2", {}, "This is Pavan")
const header3 = React.createElement("h3", {}, "This is a sample app")

const container = React.createElement("div", {}, [header1, header2, header3])
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(container)
