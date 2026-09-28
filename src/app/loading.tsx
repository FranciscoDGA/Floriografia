export default function Loading() {
  return (
    <div className="container-page animate-pulse py-16" aria-busy="true" aria-live="polite">
      <span className="sr-only">Carregando…</span>
      <div className="h-3 w-24 rounded bg-paper-2" />
      <div className="mt-4 h-9 w-2/3 rounded bg-paper-2" />
      <div className="mt-4 h-4 w-full max-w-2xl rounded bg-paper-2" />
      <div className="mt-2 h-4 w-3/4 max-w-xl rounded bg-paper-2" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-52 rounded-2xl bg-paper-2" />
        ))}
      </div>
    </div>
  );
}
