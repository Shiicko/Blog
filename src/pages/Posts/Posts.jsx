/* eslint-disable no-unused-vars */
import * as s from "./PostStyles";

export const Posts = () => {
  return (
    <s.container>
      <s.cardContainer>
        <s.card>
          <s.header>
            <s.avatar
              src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Paul_Dirac%2C_1933%2C_head_and_shoulders_portrait%2C_bw.jpg"
              alt="avatar"
            />
            <div>
              <s.username>Paul Dirac</s.username>
              <s.date>Publicado: 2 ago 2025</s.date>
            </div>
          </s.header>

          <s.image
            src="https://content.nationalgeographic.com.es/medio/2024/06/03/paul-dirac_cd743c01_5a3d1d78482c5200368c13e8_240603094613_1280x941.jpg"
            alt="Ecuación de Dirac"
          />

          <s.content>
            <h3>La belleza en la física</h3>
            <p>
              “Si uno no puede encontrar una teoría bella, es mejor no tener
              ninguna.”
            </p>
          </s.content>

          <s.footer>
            <s.tipButton>Enviar propina</s.tipButton>
          </s.footer>
        </s.card>
      </s.cardContainer>
    </s.container>
  );
};
