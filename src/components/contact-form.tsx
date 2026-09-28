"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { SITE } from "@/lib/site";

type Variant = "contato" | "correcoes";
type Status = "idle" | "spam" | "sem-destino" | "aberto";

interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "url" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  hint?: string;
  options?: string[];
  rows?: number;
}

const FIELDS: Record<Variant, Field[]> = {
  contato: [
    { name: "nome", label: "Seu nome", type: "text", required: true, placeholder: "Como podemos te chamar?" },
    { name: "email", label: "Seu e-mail", type: "email", required: true, placeholder: "voce@exemplo.com" },
    {
      name: "assunto",
      label: "Assunto",
      type: "select",
      required: true,
      options: ["Elogio", "Dúvida", "Parceria", "Imprensa", "Outro"],
    },
    {
      name: "mensagem",
      label: "Mensagem",
      type: "textarea",
      required: true,
      rows: 6,
      placeholder: "Escreva sua mensagem…",
    },
  ],
  correcoes: [
    { name: "nome", label: "Seu nome", type: "text", required: true, placeholder: "Como podemos te chamar?" },
    { name: "email", label: "Seu e-mail", type: "email", required: true, placeholder: "voce@exemplo.com" },
    {
      name: "url",
      label: "URL da página com o problema",
      type: "url",
      required: true,
      placeholder: "https://…",
      hint: "Cole o endereço completo da página.",
    },
    {
      name: "correcao",
      label: "O que deve ser corrigido",
      type: "textarea",
      required: true,
      rows: 5,
      placeholder: "Descreva o erro e, se possível, a fonte que sustenta a correção.",
    },
  ],
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FILL_MS = 3000;

interface Props {
  variant: Variant;
}

export function ContactForm({ variant }: Props) {
  const fields = FIELDS[variant];
  // Marcador de tempo de abertura do formulário (anti-spam), registrado fora do render.
  const openedAt = useRef<number | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [composed, setComposed] = useState("");

  useEffect(() => {
    openedAt.current = performance.now();
  }, []);

  const destination = SITE.contactEmail;

  const subject = useMemo(
    () =>
      variant === "contato"
        ? `[Site] ${values.assunto || "Contato"} — ${values.nome || "visitante"}`
        : `[Correção] ${values.url || "página"}`,
    [variant, values.assunto, values.nome, values.url],
  );

  function validate(data: Record<string, string>) {
    const next: Record<string, string> = {};
    for (const field of fields) {
      const value = (data[field.name] || "").trim();
      if (field.required && !value) {
        next[field.name] = "Preencha este campo.";
        continue;
      }
      if (field.type === "email" && value && !EMAIL_RE.test(value)) {
        next[field.name] = "Informe um e-mail válido.";
      }
      if (field.type === "url" && value && !/^https?:\/\/\S+$/i.test(value)) {
        next[field.name] = "Use um endereço começando com http:// ou https://";
      }
    }
    return next;
  }

  function handleChange(name: string, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data: Record<string, string> = {};
    for (const field of [...fields.map((f) => f.name), "website"]) {
      const element = form.elements.namedItem(field);
      if (element && "value" in element) data[field] = String(element.value || "");
    }

    // Armadilha de spam: campo oculto preenchido ou envio instantâneo.
    const elapsed = openedAt.current === null ? Infinity : performance.now() - openedAt.current;
    if ((data.website || "").trim() || elapsed < MIN_FILL_MS) {
      setStatus("spam");
      return;
    }

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    const body = fields
      .map((field) => `${field.label}: ${(data[field.name] || "").trim()}`)
      .join("\n\n");

    setComposed(body);

    if (!destination) {
      setStatus("sem-destino");
      return;
    }

    window.location.href = `mailto:${destination}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("aberto");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className={field.type === "textarea" ? "sm:col-span-2" : ""}>
            <label htmlFor={`campo-${field.name}`} className="mb-1.5 block text-sm font-medium text-ink">
              {field.label}
              {field.required && <span className="text-bloom"> *</span>}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={`campo-${field.name}`}
                name={field.name}
                rows={field.rows ?? 4}
                value={values[field.name] || ""}
                onChange={(event) => handleChange(field.name, event.target.value)}
                placeholder={field.placeholder}
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={errors[field.name] ? `erro-${field.name}` : undefined}
                className={`w-full rounded-2xl border bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-2/70 focus:outline-none focus:ring-2 focus:ring-focus ${
                  errors[field.name] ? "border-bloom" : "border-line"
                }`}
              />
            ) : field.type === "select" ? (
              <select
                id={`campo-${field.name}`}
                name={field.name}
                value={values[field.name] || ""}
                onChange={(event) => handleChange(field.name, event.target.value)}
                aria-invalid={Boolean(errors[field.name])}
                className={`w-full rounded-2xl border bg-paper px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-focus ${
                  errors[field.name] ? "border-bloom" : "border-line"
                }`}
              >
                <option value="">Selecione…</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={`campo-${field.name}`}
                name={field.name}
                type={field.type}
                value={values[field.name] || ""}
                onChange={(event) => handleChange(field.name, event.target.value)}
                placeholder={field.placeholder}
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={errors[field.name] ? `erro-${field.name}` : undefined}
                className={`w-full rounded-full border bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-2/70 focus:outline-none focus:ring-2 focus:ring-focus ${
                  errors[field.name] ? "border-bloom" : "border-line"
                }`}
              />
            )}

            {field.hint && <p className="mt-1 text-xs text-ink-2">{field.hint}</p>}
            {errors[field.name] && (
              <p id={`erro-${field.name}`} className="mt-1 text-xs font-medium text-bloom">
                {errors[field.name]}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Armadilha anti-spam: invisível para humanos e leitores de tela. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="campo-website">Não preencha este campo</label>
        <input id="campo-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        className="rounded-full bg-leaf px-7 py-3 text-sm font-medium text-white transition hover:bg-leaf-2"
      >
        {variant === "contato" ? "Enviar mensagem" : "Enviar correção"}
      </button>

      {status === "spam" && (
        <p role="alert" className="rounded-2xl border border-bloom/40 bg-bloom/10 p-4 text-sm text-ink-2">
          Não foi possível processar este envio (proteção anti-spam). Recarregue a página e tente novamente em
          alguns segundos.
        </p>
      )}

      {status === "sem-destino" && (
        <div role="status" className="rounded-2xl border border-line bg-paper-2 p-5 text-sm leading-relaxed text-ink-2">
          <p className="font-semibold text-ink">Nada foi enviado.</p>
          <p className="mt-2">
            Este formulário ainda não tem um canal publicado neste ambiente: ele valida os campos, mas{" "}
            <strong className="font-semibold text-ink">não transmite seus dados</strong>. Nenhum dado foi
            armazenado.
          </p>
          <p className="mt-2">
            Se o canal de contato já estiver configurado no servidor (variável de ambiente do projeto), o seu
            aplicativo de e-mail abrirá automaticamente com a mensagem pronta.
          </p>
          <p className="mt-3 break-words rounded-xl bg-white p-3 font-mono text-xs whitespace-pre-wrap">{composed}</p>
        </div>
      )}

      {status === "aberto" && (
        <p role="status" className="rounded-2xl border border-leaf/40 bg-leaf/10 p-4 text-sm leading-relaxed text-ink-2">
          Seu aplicativo de e-mail foi aberto com a mensagem pronta — conclua o envio por lá. Se nada abriu,
          copie o texto abaixo e use o canal oficial de contato.
        </p>
      )}
    </form>
  );
}
