import { useRef, useState } from "react"


export const UseDragAndDrop = (setPreview, setCheckSize) => {

    const refDropZone = useRef(null)

    const handleDragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (refDropZone) {
            refDropZone.current.classList.add("over")
        }
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (refDropZone) {
            refDropZone.current.classList.remove("over")
        }
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (refDropZone) {
            refDropZone.current.classList.remove("over")
        }
        const files = e.dataTransfer.files
        addFiles(files)
    }
    const handleChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            addFiles(files);
        }
        e.target.value = ""; // Limpia el valor del input
    };

    const handleClickRemove = () => {
        console.log("Remove image triggered");
        setPreview(null)
    }

    const addFiles = (files) => {
        const arrayFile = Array.from(files)
        if (arrayFile.length === 0) {
            return
        }
        const file = arrayFile[0]
        const validType = ["image/jpeg", "image/png"]
        const maxSize = 500 * 1024;
        if (!validType.includes(file.type)) {
            setCheckSize(true)
            return
        }
        if (file.size > maxSize) {
            setCheckSize(true)
            return
        }

        const reader = new FileReader()
        reader.onload = (e) => {
            setPreview(e.target.result)
        }
        reader.readAsDataURL(file)
        setCheckSize(false)


    }

    return {
        handleDragOver,
        handleDragLeave,
        handleDrop,
        refDropZone,
        handleChange,
        handleClickRemove,
    }
}
