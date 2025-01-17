import { useMemo } from "react";
import { UseDragAndDrop } from "../hooks/UseDragAndDrop"
import { Upload } from "../iconos/Upload"
import "../styles/DragAndDrop.css"
export const DragAndDrop = ({preview, setPreview, setCheckSize}) => {

    const {
        handleDragOver,
        handleDragLeave,
        handleDrop,
        refDropZone,
        handleChange,
        handleClickRemove,
    } = UseDragAndDrop(setPreview, setCheckSize);

    const handleClick = () => {
        const input = document.querySelector(".drop-zone__input");
        if (input) {
            input.click();
        }
    };


    return (
        <div className="container-drop-zone">
            <label htmlFor="">Upload Avatar</label>
            <div
                className="drope-zone"
                ref={refDropZone}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={!preview ? handleClick : undefined} // Solo permitir clic en el área si no hay una imagen
            >

                {preview ? <>
                    <div className="preview-container">
                        <img src={preview} />
                    </div>
                    <div className="drop-zone__buttons">
                        <button
                            className="button-removechange"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClickRemove();
                            }}
                        >Remove image
                        </button>

                        <button
                            className="button-removechange"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClick();
                            }}
                        >
                            Change image
                        </button>
                    </div>
                </>

                    : <Upload />}
                {!preview && <p>Drag and drop or click to upload</p>}
                <input
                    className="drop-zone__input"
                    id="drop-zone-input"
                    type="file"
                    hidden
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    accept="image/*"
                />
            </div>

        </div>
    )
}
