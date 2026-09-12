import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />

      {
      }
      <div className="flex min-h-[30vh] items-center justify-center border-y border-dashed border-black/10 bg-white px-6 text-center text-sm text-black/40">
        Team sections go here (How It Works, B2B Solutions, Contact, etc.)
      </div>

      <Footer />
    </main>
  );
}
