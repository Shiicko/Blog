/* eslint-disable no-unused-vars */
import * as s from "./RsidebarStyles";

export const Rsidebar = () => {
  return (
    <s.container>
      <s.Title>Artículos Científicos</s.Title>
      <s.content>
        <s.Ul>
          <s.Li>
            <a
              target="blank"
              href="https://www.iar.unlp.edu.ar/actividades/temas-de-investigacion/relatividad-general/#:~:text=La%20Relatividad%20General%20es%20una,entidad%20dotada%20de%20propiedades%20f%C3%ADsicas."
            >
              Relatividad general 1915
            </a>
          </s.Li>
          <s.Li>
            <a href="https://nucleares.unam.mx/~alberto/physics/cuerdas.html">
              Cuerdas
            </a>
          </s.Li>
          <s.Li>
            <a href="https://nucleares.unam.mx/~vieyra/node20.html">
              Incertidumbre
            </a>
          </s.Li>
        </s.Ul>
      </s.content>
    </s.container>
  );
};
