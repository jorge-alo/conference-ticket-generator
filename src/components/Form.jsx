import { useRef, useState } from "react"
import { Info } from "../iconos/Info"
import { Upload } from "../iconos/Upload"
import "../styles/form.css"
import { DragAndDrop } from "./DragAndDrop"
import { Inputs } from "./Inputs"


export const Form = ({setData, preview, setPreview, setFormSubmitted}) => {
  const refInput = useRef()
  const [checkPreview, setCheckPreview] = useState(false)
  const [checkSize, setCheckSize] = useState(false)
 
  console.log(checkPreview)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!preview){
      setCheckPreview(true) 
      refInput.current.validar()
      return          
    }
    setCheckPreview(false)
    if(!refInput.current.validar()) {    
      return;
    }
   
    
    
    const inputsData = refInput.current.getInputs();
    
    console.log("Datos enviados:", inputsData);
    setData(inputsData)
    setFormSubmitted(true)
      // Limpiar los campos del formulario
      refInput.current.resetInputs();
      
  }
  return (
    <div>
        <form 
        className="form"
        onSubmit={handleSubmit}>
           <DragAndDrop
           preview={preview}
           setPreview={setPreview}
           setCheckSize={setCheckSize} />
            <Info 
            checkPreview={checkPreview}
            checkSize={checkSize}/>
            <Inputs ref={refInput}/>
            <button className="button-generator">Generate My Ticket</button>
            
        </form>
    </div>
  )
}
