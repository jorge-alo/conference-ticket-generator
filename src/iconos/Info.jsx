import "../styles/info.css"

export const Info = ({ checkPreview, checkSize }) => {
 
  return (
    <div className="info">
      <svg className="info__icono"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16">
        <path stroke="#D1D0D5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z" />
        <path
          fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
        <path
          stroke="#D1D0D5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.004 10.462V7.596M8 5.569v-.042" />
      </svg>
      {checkSize ?
          <p className="error">File too large. Please upload a photo under 500KB</p>
       : 
      checkPreview ?      
        (<p className="error">Image is required</p>) :
        (<p>Upload your photo (JPG or PNG, max size: 500KB).</p>)}
      

    </div>

  )
}
