import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact & Quote Form | Glenns Lens Photography",
  description:
    "Request an instant quote or book a session with Glenns Lens Photography. Bay Area family, portrait, and engagement photographer based in Hayward, CA.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
