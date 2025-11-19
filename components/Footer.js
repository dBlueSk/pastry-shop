export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-serif text-amber-500 mb-4">La Patisserie</h2>
        <p className="mb-4">Baking the world a better place, one crumb at a time.</p>
        <p className="text-sm text-stone-500">© {new Date().getFullYear()} Pastry Shop. Built with Next.js</p>
      </div>
    </footer>
  );
}