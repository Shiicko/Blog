/* eslint-disable no-unused-vars */
import * as s from "./BankStyled";
import { useState } from "react";
import { useNavigate } from "react-router";
import logo from "/assets/logo.png";

export const Bank = () => {
  const [search, setSearch] = useState("");
  const [transactions] = useState([
    {
      concepto: "Recibo de sueldo",
      detalle: "Transferencia de empresa",
      fecha: "15/08/2025",
      monto: 1500,
      tipo: "Ingreso",
    },
    {
      concepto: "Netflix",
      detalle: "Suscripción mensual",
      fecha: "12/08/2025",
      monto: -15,
      tipo: "Egreso",
    },
    {
      concepto: "Supermercado",
      detalle: "Compra semanal",
      fecha: "10/08/2025",
      monto: -75,
      tipo: "Egreso",
    },
    {
      concepto: "Venta web",
      detalle: "Landing page",
      fecha: "08/08/2025",
      monto: 50,
      tipo: "Ingreso",
    },
    {
      concepto: "Pago de luz",
      detalle: "Servicios públicos",
      fecha: "05/08/2025",
      monto: -80,
      tipo: "Egreso",
    },
  ]);

  const navigate = useNavigate();
  const [showTipPrompt, setShowTipPrompt] = useState(false);
  const [tipApproved, setTipApproved] = useState(false);

  const handleSendTip = () => {
    setTipApproved(true);
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <s.container>
      <s.header>
        <s.logoStyle
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="Logo" />
        </s.logoStyle>
      </s.header>

      <s.heroContainer>
        <s.card>
          <s.cardHeader>
            <span>Saldo en Cuenta</span>
          </s.cardHeader>
          <s.cardBody>
            <s.cardNumber>$ 1,234.56</s.cardNumber>
            <s.cardInfo>
              <span>Cuenta de Ahorro</span>
            </s.cardInfo>
            <s.cardButton
              onClick={() => {
                alert("upss, de momento esta función no está disponible");
              }}
            >
              Transferir Dinero
            </s.cardButton>
          </s.cardBody>
        </s.card>

        <s.card>
          <s.cardHeader>
            <span>Tarjeta de Crédito</span>
          </s.cardHeader>
          <s.cardBody>
            <s.cardNumber>**** **** **** 1234</s.cardNumber>
            <s.cardInfo>
              <span>Nombre: Joelium</span>
              <span>Válida hasta: 12/25</span>
            </s.cardInfo>
            <s.cardButton
              onClick={() => {
                alert("upss, de momento esta función no está disponible");
              }}
            >
              Realizar Pago
            </s.cardButton>
          </s.cardBody>
        </s.card>
      </s.heroContainer>

      <s.tipContainer>
        {tipApproved ? (
          <s.approvalMessage>Aprobado</s.approvalMessage>
        ) : (
          <>
            {!showTipPrompt && (
              <s.tipButton onClick={() => setShowTipPrompt(true)}>
                Deseas enviar $50 de propina a la publicacion?
              </s.tipButton>
            )}
            {showTipPrompt && (
              <s.tipButtons>
                <s.tipButtonYes onClick={handleSendTip}>Sí</s.tipButtonYes>
                <s.tipButtonNo onClick={() => setShowTipPrompt(false)}>
                  No
                </s.tipButtonNo>
              </s.tipButtons>
            )}
          </>
        )}
      </s.tipContainer>

      <s.recentTransactions>
        <h2>Movimientos Recientes</h2>
        <table>
          <thead>
            <tr>
              <th>Concepto</th>
              <th>Detalle</th>
              <th>Fecha</th>
              <th>Monto</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.concepto}</td>
                <td>{transaction.detalle}</td>
                <td>{transaction.fecha}</td>
                <td>${transaction.monto}</td>
                <td className={transaction.tipo}>{transaction.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </s.recentTransactions>
    </s.container>
  );
};
