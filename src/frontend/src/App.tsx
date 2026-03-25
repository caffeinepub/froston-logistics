import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Menu, Phone, Snowflake, X } from "lucide-react";
import { useEffect, useState } from "react";

const LOGO_URL =
  "/assets/uploads/whatsapp_image_2026-03-24_at_19.40.30-removebg-preview-019d2619-1dba-70ab-a000-464896bfb75b-1.png";

const services = [
  {
    icon: "❄️",
    title: "Refrigerated Transportation",
    desc: "Safe and temperature-controlled delivery for perishable goods",
  },
  {
    icon: "📦",
    title: "Cold Chain Logistics",
    desc: "End-to-end handling of temperature-sensitive shipments",
  },
  {
    icon: "🚛",
    title: "Last-Mile Delivery",
    desc: "Reliable and timely doorstep delivery",
  },
];

const whyUs = [
  {
    icon: "🌡️",
    title: "-20°C Temperature Control",
    desc: "Ideal for frozen and highly sensitive products",
  },
  {
    icon: "📊",
    title: "Trip Temperature Reports",
    desc: "Full transparency with recorded temperature data",
  },
  {
    icon: "📍",
    title: "GPS-Enabled Fleet",
    desc: "Real-time tracking of your shipments",
  },
  {
    icon: "🚨",
    title: "Smart Temperature Alerts",
    desc: "Instant alerts if temperature deviates from required range",
  },
  {
    icon: "⚙️",
    title: "Quick Issue Resolution",
    desc: "Immediate corrective action to maintain product safety",
  },
  {
    icon: "⏱️",
    title: "Reliable & On-Time Delivery",
    desc: "We value your time and your cargo",
  },
];

const tech = [
  { icon: "🌡️", title: "Smart Temperature Control System", ocid: "tech.item.1" },
  {
    icon: "📊",
    title: "Real-Time Temperature Tracking & Reports",
    ocid: "tech.item.2",
  },
  { icon: "📍", title: "GPS-Enabled Fleet Tracking", ocid: "tech.item.3" },
  { icon: "🚨", title: "Automated Alert System", ocid: "tech.item.4" },
];

const phones = ["8707074712", "8299772037", "8299148034", "8707476914"];

const iceBlue = "oklch(0.67 0.16 240)";
const silver = "oklch(0.76 0.03 255)";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", message: "" });

  useEffect(() => {
    document.documentElement.classList.add("dark");
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "Why Us", id: "why-us" },
    { label: "Technology", id: "technology" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen section-dark text-foreground font-body">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-blur" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="Froston Logistics Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-heading text-lg text-foreground tracking-wide font-bold">
                Froston <span style={{ color: iceBlue }}>Logistics</span>
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  data-ocid={`nav.${link.id}.link`}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                data-ocid="nav.get_quote.button"
                onClick={() => scrollTo("contact")}
                className="btn-primary px-5 py-2 rounded-full text-sm font-semibold font-heading"
              >
                Get a Quote
              </button>
            </nav>

            <button
              type="button"
              data-ocid="nav.menu.toggle"
              className="md:hidden text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden nav-blur border-t border-border/40 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                data-ocid={`mobile.nav.${link.id}.link`}
                onClick={() => scrollTo(link.id)}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              data-ocid="mobile.nav.get_quote.button"
              onClick={() => scrollTo("contact")}
              className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold font-heading w-full"
            >
              Get a Quote
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-dark pt-16">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div
          className="absolute top-1/4 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, oklch(0.52 0.22 265 / 0.15) 30%, oklch(0.52 0.22 265 / 0.25) 50%, oklch(0.52 0.22 265 / 0.15) 70%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, oklch(0.52 0.22 265 / 0.1) 40%, oklch(0.52 0.22 265 / 0.2) 50%, oklch(0.52 0.22 265 / 0.1) 60%, transparent 100%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full frost-card">
            <Snowflake
              size={14}
              style={{ color: iceBlue, animationDuration: "4s" }}
              className="animate-spin"
            />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: iceBlue }}
            >
              Fast · Fresh · Reliable
            </span>
          </div>

          <h1
            className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight blue-glow-text"
            style={{ letterSpacing: "-0.02em" }}
          >
            You Chill.{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.67 0.16 240) 0%, oklch(0.78 0.1 250) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We Deliver.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl font-semibold mb-4 tracking-wide"
            style={{ color: silver }}
          >
            ❄️ Refrigerated Logistics — Precision. Care. Freshness.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            At Froston Logistics, we specialize in delivering
            temperature-sensitive goods with precision and care. Whether
            you&apos;re in food or retail — we ensure your products stay fresh
            from pickup to delivery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              data-ocid="hero.get_quote.button"
              onClick={() => scrollTo("contact")}
              className="btn-primary px-8 py-3.5 rounded-full text-base font-semibold font-heading"
            >
              Get a Quote Today
            </button>
            <button
              type="button"
              data-ocid="hero.services.button"
              onClick={() => scrollTo("services")}
              className="px-8 py-3.5 rounded-full text-base font-semibold font-heading border border-border hover:border-primary/60 text-muted-foreground hover:text-foreground transition-all"
            >
              Our Services →
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.155 0.042 252))",
          }}
        />
      </section>

      {/* SERVICES */}
      <section id="services" className="section-alt py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: iceBlue }}
            >
              What we do
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Our Key Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              data-ocid="services.item.1"
              className="frost-card rounded-xl p-8 text-center"
            >
              <div className="text-5xl mb-5">{services[0].icon}</div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                {services[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {services[0].desc}
              </p>
            </div>
            <div
              data-ocid="services.item.2"
              className="frost-card rounded-xl p-8 text-center"
            >
              <div className="text-5xl mb-5">{services[1].icon}</div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                {services[1].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {services[1].desc}
              </p>
            </div>
            <div
              data-ocid="services.item.3"
              className="frost-card rounded-xl p-8 text-center"
            >
              <div className="text-5xl mb-5">{services[2].icon}</div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                {services[2].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {services[2].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="section-dark py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: iceBlue }}
            >
              Our edge
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Why Choose Froston Logistics?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, idx) => (
              <div
                key={item.title}
                data-ocid={`why.item.${idx + 1}`}
                className="frost-card rounded-xl p-7"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3
                  className="font-heading font-bold text-lg mb-2"
                  style={{ color: "oklch(0.85 0.05 250)" }}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="section-alt py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: iceBlue }}
            >
              Powered by
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Technology We Use
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tech.map((t) => (
              <div
                key={t.title}
                data-ocid={t.ocid}
                className="frost-card rounded-xl p-7 text-center"
              >
                <div className="text-5xl mb-5">{t.icon}</div>
                <h3
                  className="font-heading font-semibold text-base leading-snug"
                  style={{ color: "oklch(0.88 0.04 250)" }}
                >
                  {t.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-dark py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: iceBlue }}
            >
              Reach out
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Get a Quote Today
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="frost-card rounded-xl p-8 flex flex-col gap-6">
              <h3
                className="font-heading font-bold text-2xl mb-2"
                style={{ color: silver }}
              >
                Contact Details
              </h3>

              <div>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-3"
                  style={{ color: iceBlue }}
                >
                  Phone Numbers
                </p>
                <div className="flex flex-col gap-2">
                  {phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone
                        size={15}
                        style={{ color: iceBlue }}
                        className="flex-shrink-0"
                      />
                      <span className="font-medium">{phone}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-3"
                  style={{ color: iceBlue }}
                >
                  Email
                </p>
                <a
                  href="mailto:support@froston.co.in"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail
                    size={15}
                    style={{ color: iceBlue }}
                    className="flex-shrink-0"
                  />
                  <span>support@froston.co.in</span>
                </a>
              </div>

              <div>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-3"
                  style={{ color: iceBlue }}
                >
                  Address
                </p>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin
                    size={15}
                    style={{ color: iceBlue }}
                    className="flex-shrink-0 mt-0.5"
                  />
                  <address className="not-italic leading-relaxed">
                    B-302, Gopala Apartment,
                    <br />
                    Ramtirath Marg, Lucknow,
                    <br />
                    Uttar Pradesh – 226001
                  </address>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="frost-card rounded-xl p-8">
              <h3
                className="font-heading font-bold text-2xl mb-6"
                style={{ color: silver }}
              >
                Send Us a Message
              </h3>
              <form
                data-ocid="contact.form"
                className="flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.name.input"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Company
                  </label>
                  <Input
                    id="contact-company"
                    data-ocid="contact.company.input"
                    placeholder="Your Company"
                    value={form.company}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, company: e.target.value }))
                    }
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.message.textarea"
                    placeholder="Tell us about your logistics needs..."
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="bg-secondary border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  data-ocid="contact.submit.button"
                  className="btn-primary border-0 rounded-full font-heading font-semibold py-3 text-base w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="border-t py-12 px-4 sm:px-6"
        style={{
          borderColor: "oklch(var(--border) / 0.4)",
          background: "oklch(0.12 0.038 250)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="Froston Logistics"
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="font-heading font-bold text-foreground">
                  Froston Logistics
                </p>
                <p className="text-xs" style={{ color: iceBlue }}>
                  You Chill. We Deliver.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Froston Logistics. All rights
                reserved.
              </p>
              <p className="text-xs text-muted-foreground/60">
                Built with ❤️ using{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-muted-foreground transition-colors underline underline-offset-2"
                >
                  caffeine.ai
                </a>
              </p>
            </div>

            <nav className="flex gap-6">
              {[
                { label: "Services", id: "services" },
                { label: "Why Us", id: "why-us" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
