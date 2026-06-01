import './../../scss/components/_loader.scss'

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__paw">
        <span></span><span></span><span></span><span></span>
      </div>
      <p className="loader__text">Conectando con el servidor...</p>
    </div>
  )
}

export default Loader