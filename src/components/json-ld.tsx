type JsonLdData = Record<string, unknown>;

/**
 * Renderiza structured data no <head> sem JavaScript.
 * Não é interativo — apenas marcação para mecanismos de busca.
 */
export function JsonLd({ data }: { data: JsonLdData | JsonLdData[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload).replace(/</g, "\\u003c") }}
    />
  );
}
