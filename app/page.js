import Image from "next/image";
import Link from "next/link";
import { products } from "./data/pastries";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1920&q=80"
            alt="Baker kneading dough"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Artisan Baking <br /> <span className="text-amber-400">With Love</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Freshly baked breads and delicate pastries made from scratch every morning.
          </p>

          <Link
            href="/#menu"
            className="bg-amber-500 text-stone-900 px-8 py-3 rounded-full font-bold hover:bg-amber-400 transition transform hover:scale-105"
          >
            View Our Menu
          </Link>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">
            Our Selection
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            Explore our range of handcrafted pastries. We use only high-quality butter, organic flour, and seasonal fruits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-stone-100 py-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

          <div className="md:w-1/2 relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80"
              alt="Chefs working"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
              The Art of Pastry
            </h2>

            <p className="text-stone-700 text-lg mb-4 leading-relaxed">
              Founded in 2023, La Patisserie started with a simple mission: to bring the authentic taste of French baking to your neighborhood.
            </p>

            <p className="text-stone-700 text-lg leading-relaxed">
              Our chefs wake up before dawn to ensure every croissant is flaky, every tart is crisp, and every loaf is warm when you walk through our doors.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
