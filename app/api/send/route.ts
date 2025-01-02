import { EmailTemplate } from "@/components/email/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Récupération des données du formulaire
    const { name, email, eventType, location, message } = await req.json();

    // Envoi de l'e-mail
    const { error } = await resend.emails.send({
      from: "Good Old Drinks <goodolddrinks@upizweb.com>",
      to: ["upizweb@gmail.com"],
      subject: "Nouvelle demande de contact",
      react: EmailTemplate({ name, email, eventType, location, message }),
    });

    // Gestion des erreurs Resend
    if (error) {
      console.error("Erreur Resend :", error);
      return Response.json(
        { error: "Erreur d'envoi de l'email" },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Erreur interne :", error);
    return Response.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
