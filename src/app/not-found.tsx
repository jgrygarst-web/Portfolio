import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="obsah"
      className="wrap flex min-h-[60vh] flex-col justify-center py-20"
    >
      <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">404</h1>
      <p className="mt-4 text-muted">
        Tahle stránka neexistuje. / This page does not exist.
      </p>
      <Link href="/" className="btn btn-outline mt-8 w-fit">
        Domů / Home
      </Link>
    </main>
  );
}
