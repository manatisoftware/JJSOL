import React from "react";

export function Contenido({ setContenido }) {
  return (
    <div>
      <h4>Contenido</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const contenido = formData.get("contenido");

          if (contenido) {
            setContenido(contenido);
          }
        }}
      >
        <div className="form-group">
          <label>Nuevo contenido</label>
          <input
            className="form-control"
            type="text"
            name="contenido"
            placeholder="nuevo contenido"
            required
          />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Cambiar" />
        </div>
      </form>
    </div>
  );
}
