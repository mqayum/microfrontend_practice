import React from "react"
import ReactDOM from "react-dom"

const mount = (element) => {
    ReactDOM.render(
        <h3>Hello from react auth app</h3>, element
    )
}

if(process.env.NODE_ENV === "development"){
    const devRoot = document.querySelector("#authRootDiv")
    if(devRoot){
        mount(devRoot)
    }
}

export { mount }