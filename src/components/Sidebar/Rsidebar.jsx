/* eslint-disable no-unused-vars */
import * as s from "./RsidebarStyles";

export const Rsidebar = () => {
  return (
    <s.container>
      <s.Title>Artículos Científicos</s.Title>
      <s.content>
        <s.Ul>
          <s.Li>
            <span>Relatividad</span>
          </s.Li>
          <s.Li>
            <span>Cuerdas</span>
          </s.Li>
          <s.Li>
            <span>Incertidumbre</span>
          </s.Li>
        </s.Ul>
      </s.content>
    </s.container>
  );
};
