export const Contact = () => {
  return (
    <div>
      <h2>Contacto</h2>

      <form className="form form--1-column form--mini">
        <h3>Contactanos</h3>
        <div className="input">
          <label htmlFor="email">Correo</label>
          <input className="input__input-box input__input-box--medium" type="text" />
        </div>
        <div className="input">
          <label htmlFor="email">Mensaje</label>
          <input className="input__input-box input__input-box--large" type="text" />
          
        </div>

        <button className="btn btn--form">Enviar</button>
      </form>



    </div>
  )
}
