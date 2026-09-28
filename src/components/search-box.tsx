interface SearchBoxProps {
  id?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  autoFocus?: boolean;
}

/**
 * Busca por formulário GET para /buscar.
 * Funciona sem JavaScript: o servidor renderiza os resultados.
 */
export function SearchBox({
  id = "busca",
  label = "O que você quer descobrir?",
  placeholder = "Ex.: significado da rosa branca",
  defaultValue,
  className,
  autoFocus,
}: SearchBoxProps) {
  return (
    <form action="/buscar" method="get" role="search" className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="search"
          id={id}
          name="q"
          defaultValue={defaultValue}
          placeholder={placeholder}
          autoComplete="off"
          autoFocus={autoFocus}
          required
          minLength={2}
          className="w-full rounded-full border border-line bg-white px-5 py-3 text-base text-ink placeholder:text-ink-2/70 sm:rounded-l-full sm:rounded-r-none"
        />
        <button
          type="submit"
          className="rounded-full bg-leaf px-6 py-3 text-base font-medium text-white transition hover:bg-leaf-2 sm:rounded-l-none sm:rounded-r-full"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
