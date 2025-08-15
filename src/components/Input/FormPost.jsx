/* eslint-disable no-unused-vars */
import { useState } from "react";
import * as s from "./FormStyles";
import { FaImage } from "react-icons/fa";

export const FormPost = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    titulo: "",
    contenido: "",
    archivo: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      ...formData,
      imagen: formData.archivo ? URL.createObjectURL(formData.archivo) : null,
    };

    if (!newPost.titulo || newPost.titulo.trim() === "") {
      alert("No puedes publicar sin título");
      setFormData({ titulo: "", contenido: "", archivo: null });
      return;
    }

    onSubmit(newPost);
    setFormData({ titulo: "", contenido: "", archivo: null });
  };

  return (
    <s.Container as="form" onSubmit={handleSubmit}>
      <s.TextInput
        type="text"
        placeholder="Título"
        value={formData.titulo}
        onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
      />
      <s.TextArea
        placeholder="¿Qué estás pensando?"
        value={formData.contenido}
        onChange={(e) =>
          setFormData({ ...formData, contenido: e.target.value })
        }
      />
      <s.Actions>
        <label
          style={{ marginLeft: "15px", cursor: "pointer", color: "black" }}
          htmlFor="fileUpload"
          title="Subir imagen o video"
        >
          <FaImage />
        </label>
        <input
          id="fileUpload"
          type="file"
          accept="image/*,video/*"
          style={{ display: "none" }}
          onChange={(e) =>
            setFormData({ ...formData, archivo: e.target.files[0] })
          }
        />
        <s.PublishButton type="submit">Publicar</s.PublishButton>
      </s.Actions>
    </s.Container>
  );
};
