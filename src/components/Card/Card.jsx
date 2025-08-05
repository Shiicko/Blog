/* eslint-disable no-unused-vars */
import * as s from "./CardStyle";

export const Card = () => {
  return (
    <s.container>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Canales que pueden interesarte
      </h1>
      <s.wrapper>
        <s.cardContainer>
          <s.card>
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiXiEG1DiVMmyO2q5cbS-Pj7EhwNVtk5dXpFTLJJQfncBkiP8lrcqvQ3jep4_huzsMC4Hyd2k2uPNeNZgVQ1B-pw"
              alt=""
            />
            <s.overlay>
              <h3>Javier Santaolalla</h3>
              <p>Fisico de particulas</p>
              <a target="blank" href="https://www.youtube.com/@dateunvlog">
                Youtube
              </a>
            </s.overlay>
          </s.card>
          <s.card>
            <img
              style={{ objectFit: "cover" }}
              src="https://media.es.wired.com/photos/668f68eab1b39554ba64801d/master/w_1600%2Cc_limit/_0281_WIRED_JOSE_LUIS_CRESPO_QUANTUM_FRACTURE.jpg"
              alt=""
            />
            <s.overlay>
              <h3>Jose Crespo</h3>
              <p>Astrofísico</p>
              <a target="blank" href="https://www.youtube.com/@QuantumFracture">
                Youtube
              </a>
            </s.overlay>
          </s.card>
          <s.card>
            <img
              style={{ objectFit: "cover" }}
              src="https://yt3.googleusercontent.com/ytc/AIdro_mRziZ7jDHUaVsl7qvkr0OZn7_j8ycJfRoAwFQpzgSV0Lw=s160-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <s.overlay>
              <h3>Astronomiaweb</h3>
              <p>divulgador científico</p>
              <a
                target="blank"
                href="https://www.youtube.com/@Astronomiaweb/videos"
              >
                Youtube
              </a>
            </s.overlay>
          </s.card>
          <s.card>
            <img
              style={{ objectFit: "cover" }}
              src="https://yt3.googleusercontent.com/ytc/AIdro_kgVNHD648niHUht1QXGUxf9VxMwPFMOzhWhdepFZbFB8A=s160-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <s.overlay>
              <h3>Big Think</h3>
              <p>educational content</p>
              <a target="blank" href="https://www.youtube.com/@bigthink/videos">
                Youtube
              </a>
            </s.overlay>
          </s.card>
        </s.cardContainer>
      </s.wrapper>
    </s.container>
  );
};
