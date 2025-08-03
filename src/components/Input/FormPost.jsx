/* eslint-disable no-unused-vars */
import * as s from "./FormStyles";

export const FormPost = () => {
  return (
    <s.Container>
      <s.Input type="text" placeholder="¿Qué estás pensando?" />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <s.Button>Publicar</s.Button>
        <s.Button>Archivo</s.Button>
      </div>
    </s.Container>
  );
};
