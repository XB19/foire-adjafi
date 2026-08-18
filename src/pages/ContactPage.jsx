import { useState } from "react";
import PageHero from "../components/PageHero";
import Contact from "../components/Contact";
import { api, isApiConfigured } from "../lib/apiClient";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const infoBlocks = [
  {
    icon: FaLocationDot,
    title: "Adresse",
    lines: [
      "Lycée d'Agoé Nyivé",
      "Agoè-nyivé, Réserve à côté de l'école primaire internationale Mariam",
    ],
  },
  {
    icon: FaPhone,
    title: "Numéros",
    lines: ["+228 70 54 24 44", "+228 90 00 43 86"],
  },
  {
    icon: FaEnvelope,
    title: "Email",
    lines: ["maxkom@live.com", "maxkomjob@gmail.com"],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    if (!isApiConfigured) {
      setStatus("error");
      setError("L'API n'est pas encore configurée (voir .env.example)");
      return;
    }

    try {
      await api.post("/contact_messages", {
        name: form.name,
        phone: form.phone,
        message: form.message,
      });
      setStatus("success");
      setForm({ name: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Passez nous voir, écrivez-nous"
        title="Une question ? Un projet ? Un partenariat en vue ?"
        subtitle="Nous serions ravis de vous entendre ! Que vous souhaitiez en savoir plus sur la Foire Adjafi, devenir exposant, ou envisager un partenariat, notre équipe est là pour répondre à toutes vos questions."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            {infoBlocks.map((block) => (
              <div key={block.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-adjafi-green text-white">
                  <block.icon />
                </div>
                <div>
                  <h3 className="heading-display text-sm text-adjafi-ink">{block.title}</h3>
                  {block.lines.map((line) => (
                    <p key={line} className="font-open-sans text-sm text-adjafi-gray">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-adjafi-gray-light p-8"
          >
            <h2 className="heading-display text-xl text-adjafi-ink">Laissez-nous un message</h2>

            <div className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nom & prénoms"
                className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
              />
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="Téléphone"
                className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
              />
              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 rounded-full bg-adjafi-green px-8 py-3 font-mont-black text-sm tracking-wide text-white transition-transform hover:scale-105 disabled:opacity-60"
            >
              {status === "sending" ? "Envoi..." : "Envoyez"}
            </button>

            {status === "success" && (
              <p className="mt-4 font-open-sans text-sm text-adjafi-green-dark">
                Merci ! Votre message a bien été envoyé.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 font-open-sans text-sm text-red-600">
                Une erreur est survenue{error ? ` : ${error}` : ""}. Vérifiez que le serveur API
                est bien démarré.
              </p>
            )}
          </form>
        </div>
      </section>

      <Contact />
    </>
  );
}
