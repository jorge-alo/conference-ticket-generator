import { UseDragAndDrop } from "../hooks/UseDragAndDrop"
import { Github } from "../iconos/Github"
import { LogoFull } from "../iconos/LogoFull"
import { TicketImg } from "../iconos/TicketImg"
import "../styles/Ticket.css"

export const Ticket = ({ data, preview, formSubmitted }) => {
    const appContainerSectionForm = document.querySelector(".app-container__section-form")
    if (data) {
        appContainerSectionForm.computedStyleMap.display = "none"
    }

    return (
        <>
            <h3><LogoFull /></h3>
            <h1>Congrats, <span className="data-name">{data.fullname}</span> ! Your ticket es ready.</h1>
            <p className="message">We've emailed your ticket to <span className="data-email">{data.email}</span>  and will send updates in the run up to the event.</p>
            <div className="ticket">
                <div>
                    <h3> <LogoFull /> </h3>
                    <p className="date">Jan 31, 2025 / Austin, tx</p>
                </div>

                <div className="ticket-container">
                    <div className="ticket-container__preview-container">
                        <img src={preview} />
                    </div>
                    <div className="ticket-container__github">
                        <p className="name">{data.fullname}</p>
                        <p className="github-p"> <Github /> {data.github}</p>
                    </div>
                </div>
               
            </div>
            {formSubmitted && <p className="submited">Form submited successfully</p> }
        </>
    )
}
