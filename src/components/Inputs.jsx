import { forwardRef, useImperativeHandle, useState } from "react"


export const Inputs = forwardRef((props, ref) => {
    const [error, setError] = useState({})
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        github: ""
    })
    const handleOnchange = (e) => {
        const {name, value} = e.target
        setInput({...input, [name]: value})
    }

    const validar = () => {
        const newsError = {};
        if(!input.fullname) newsError.fullname = "Full name is required"
        if(!input.email) newsError.email = "Please enter a valid email address.";
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) newsError.email = "invalid format"
        if(!input.github) newsError.github = "github username is required"
        setError(newsError)
        return Object.keys(newsError).length === 0;
    }
    const resetInputs = () => {
        setInput({
            fullname: "",
            email: "",
            github: ""
        })
        setError({})
        
    }
    useImperativeHandle(ref, () => ({
        validar,
        getInputs: () => input,
        resetInputs
      }));


    return (
        <>
            <label htmlFor="">Full Name</label>
            <input
                type="text"
                name="fullname"
                value={input.fullname}
                onChange={handleOnchange}
            />
            {error && <p className="error">{error.fullname}</p> }
            <label htmlFor="">Email Address</label>
            <input
                type='email'
                placeholder="example@mail.com"
                name="email"
                value={input.email}
                onChange={handleOnchange}
            />
             {error && <p className="error">{error.email}</p> }
            <label htmlFor="">Github Username</label>
            <input
                type="text"
                placeholder="@yourusername"
                name="github"
                value={input.github}
                onChange={handleOnchange}
            />
             {error && <p className="error">{error.github}</p> }
        </>
    )
})
