import * as React from "react";
import Head from "next/head";

interface EmailTemplateProps {
  name: string;
  email: string;
  eventType: string;
  location: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  eventType,
  location,
  message,
}) => (
  <html>
    <Head>
      <title>Nouvelle demande de contact</title>
    </Head>
    <body
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <table
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
        }}
      >
        <tr>
          <td style={{ padding: "20px" }}>
            <h2 style={{ color: "#1D0808" }}>Nouvelle demande de contact</h2>
            <p>
              <strong>Nom :</strong> {name}
            </p>
            <p>
              <strong>Email :</strong> {email}
            </p>
            <p>
              <strong>Type d&apos;événement :</strong> {eventType}
            </p>
            <p>
              <strong>Lieu de l&pos;événement :</strong> {location}
            </p>
            <p>
              <strong>Message :</strong>
            </p>
            <p
              style={{
                backgroundColor: "#f0f0f0",
                padding: "10px",
                borderRadius: "5px",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </p>
          </td>
        </tr>
      </table>
    </body>
  </html>
);
