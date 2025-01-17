import { useState } from "react"
import "./App.css"
import { Form } from "./components/Form"
import { LogoFull } from "./iconos/LogoFull"
import { Ticket } from "./components/Ticket"

export const App = () => {
  const [data, setData] = useState(null)
  const [preview, setPreview] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  return (
    <div className="app-container">
      {!data ?
        <section className="app-container__section-form">
          <h3 ><LogoFull /></h3>
          <h1 >Your Journey to Coding Conf 2025 Start Here!</h1>
          <p className="app-container__section-form-p">Secure your spot at next year's biggest coding conference.</p>
          <Form
            setData={setData}
            setPreview={setPreview}
            preview={preview}
            setFormSubmitted={setFormSubmitted}
           
          />
        </section>
        :
        <section className="app-container__section-ticket">
          <Ticket
            data={data}
            preview={preview}
            formSubmitted={formSubmitted} />
        </section>}
    </div>
  )
}

