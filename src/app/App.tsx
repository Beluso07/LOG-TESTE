import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Differentials } from "./components/Differentials";
import { Partners } from "./components/Partners";
import { QuoteForm } from "./components/QuoteForm";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div style={{ overflowX: "hidden", minHeight: "100vh" }}>
      <Toaster position="top-right" richColors closeButton />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Partners />
      <QuoteForm />
      <Contact />
    </div>
  );
}
