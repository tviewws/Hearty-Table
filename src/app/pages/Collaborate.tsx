import { useState } from "react";
import { PageTransition } from "../components/PageTransition";
import emailjs from "@emailjs/browser";

function InputField({
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const borderColor = focused ? "#C8C4BE" : "#4A4845";
  const color = "#E8E4DE";
  const placeholderStyle = "rgba(255,255,255,0.28)";

  return (
    <div style={{ position: "relative", paddingBottom: "1px" }}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: `1px solid ${borderColor}`,
          outline: "none",
          fontFamily: "var(--font-sans)",
          fontSize: "0.9rem",
          color,
          fontWeight: 300,
          paddingBottom: "0.85rem",
          letterSpacing: "0.03em",
          transition: "border-color 0.3s ease",
          caretColor: color,
        }}
      />
      <style>{`input::placeholder, textarea::placeholder { color: ${placeholderStyle}; }`}</style>
    </div>
  );
}

export function Collaborate() {
  const SERVICE_ID = "service_r8ug7lf";
  const PUBLIC_KEY = "x0aTl9NHPhD_NzaFg";
  const TEMPLATE_ID = "template_i2o70y8";

  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [regEmail, setRegEmail] = useState("");
  const [regSent, setRegSent] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleContactSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }
    setIsSending(true);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      form_type: "Collaboration",
      name: form.name,
      email: form.email,
      type: form.type || "General Inquiry",
      message: form.message,
    }, PUBLIC_KEY)
      .then(() => { setFormSent(true); setIsSending(false); setForm({ name: "", email: "", type: "", message: "" }); })
      .catch((err) => { console.error("EmailJS Error:", err); alert("Failed to send message."); setIsSending(false); });
  };

  const handleReserveSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!regEmail) return;
    setIsSending(true);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      form_type: "Reservation",
      name: "New Subscriber",
      email: regEmail,
      type: "Waitlist",
      message: "User has requested first-access notifications for the next Gather dinner.",
    }, PUBLIC_KEY)
      .then(() => { setRegSent(true); setIsSending(false); setRegEmail(""); })
      .catch((err) => { console.error("EmailJS Error:", err); setIsSending(false); });
  };

  return (
    <PageTransition>
      <div className="min-h-screen" style={{ backgroundColor: "#2C2B29" }}>

        {/* ── HERO HEADER ── */}
        <header
          className="relative overflow-hidden"
          style={{
            minHeight: "52vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: "5rem",
            paddingTop: "10rem",
            borderBottom: "1px solid #3A3835",
            backgroundColor: "#2C2B29",
          }}
        >
          <p style={{
            fontFamily: "var(--font-serif)",
            letterSpacing: "0.3em",
            fontSize: "0.65rem",
            color: "#8A8680",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}>Hearty Table</p>

          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
            letterSpacing: "0.15em",
            color: "#E8E4DE",
            fontWeight: 300,
            lineHeight: 1.05,
            textAlign: "center",
            marginBottom: "2.5rem",
          }}>
            LET'S BUILD<br />SOMETHING
          </h1>

          <div style={{ width: "40px", height: "1px", backgroundColor: "#4A4845", marginBottom: "2.5rem" }} />

          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
            fontStyle: "italic",
            color: "#B0ACA6",
            fontWeight: 300,
            maxWidth: "480px",
            textAlign: "center",
            lineHeight: 1.8,
          }}>
            A platform for collaboration, storytelling,<br />and a new narrative for Kenyan cuisine.
          </p>
        </header>

        {/* ── WHO WE WANT TO HEAR FROM ── */}
        <section style={{ backgroundColor: "#1A1A18", borderBottom: "1px solid #2A2A28" }}>
          <div className="max-w-6xl mx-auto px-4 md:px-12 grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: "✦", label: "Chefs", desc: "Young and emerging culinary talent ready to redefine Kenyan cuisine." },
              { icon: "◈", label: "Farmers", desc: "Local producers and growers who share our commitment to the land." },
              { icon: "◇", label: "Creatives", desc: "Photographers, writers, and artists who want to tell this story." },
              { icon: "○", label: "Partners", desc: "Organisations aligned with culture, youth, and community impact." },
            ].map((item, i) => (
              <div key={i} className="text-center py-10 md:py-14 px-4 md:px-6" style={{
                borderRight: i < 3 ? "1px solid #2A2A28" : "none",
                borderBottom: "none",
              }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "1rem", color: "#4A4A48", marginBottom: "1.25rem", letterSpacing: "0.1em" }}>
                  {item.icon}
                </div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.85rem", letterSpacing: "0.15em", color: "#E5E1D8", fontWeight: 400, marginBottom: "0.75rem" }}>
                  {item.label}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", lineHeight: 1.85, color: "#6B6760", fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT FORM ── */}
        <section className="py-16 md:py-32 px-4 md:px-12" style={{ backgroundColor: "#2C2B29" }}>
          <div className="max-w-2xl mx-auto">
            <p style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.25em",
              fontSize: "0.65rem",
              color: "#8A8680",
              textTransform: "uppercase",
              marginBottom: "2.5rem",
            }}>Get in Touch</p>

            {formSent ? (
              <div style={{ paddingTop: "4rem" }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", color: "#4A4845", letterSpacing: "0.5em", marginBottom: "2rem" }}>✦</div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontStyle: "italic", color: "#E8E4DE", fontWeight: 300, lineHeight: 1.7, marginBottom: "1rem" }}>
                  We've received your message.
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 2, color: "#8A8680", fontWeight: 300 }}>
                  We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <InputField placeholder="Your Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <InputField type="email" placeholder="Email Address" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                <div>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid #4A4845",
                      outline: "none",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      color: form.type ? "#E8E4DE" : "rgba(255,255,255,0.28)",
                      fontWeight: 300,
                      paddingBottom: "0.85rem",
                      cursor: "pointer",
                      appearance: "none",
                      letterSpacing: "0.03em",
                    }}
                  >
                    <option value="" disabled style={{ color: '#2C2B29' }}>I am a…</option>
                    <option value="chef" style={{ color: '#2C2B29' }}>Chef</option>
                    <option value="farmer" style={{ color: '#2C2B29' }}>Farmer / Producer</option>
                    <option value="creative" style={{ color: '#2C2B29' }}>Creative</option>
                    <option value="partner" style={{ color: '#2C2B29' }}>Organisation / Partner</option>
                    <option value="other" style={{ color: '#2C2B29' }}>Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: `1px solid ${focused ? "#C8C4BE" : "#4A4845"}`,
                      outline: "none",
                      resize: "none",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      color: "#E8E4DE",
                      fontWeight: 300,
                      paddingBottom: "0.85rem",
                      letterSpacing: "0.03em",
                      transition: "border-color 0.3s ease",
                    }}
                  />
                </div>
                <div style={{ paddingTop: "1rem" }}>
                  <button
                    onClick={handleContactSubmit}
                    disabled={isSending}
                    style={{
                      background: "transparent",
                      border: "1px solid #C8C4BE",
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.22em",
                      color: "#C8C4BE",
                      padding: "1rem 3rem",
                      cursor: isSending ? "not-allowed" : "pointer",
                      textTransform: "uppercase",
                      transition: "background 0.3s ease, color 0.3s ease",
                      opacity: isSending ? 0.6 : 1,
                    }}
                    onMouseEnter={e => { if (!isSending) { e.currentTarget.style.background = "#C8C4BE"; e.currentTarget.style.color = "#2C2B29"; } }}
                    onMouseLeave={e => { if (!isSending) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C8C4BE"; } }}
                  >
                    {isSending ? "Sending..." : "Send Message →"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── COME DINE WITH US ── */}
        <section style={{ backgroundColor: "#1A1A18" }}>
          <div className="max-w-4xl mx-auto px-4 md:px-12 text-center" style={{ paddingTop: "6rem", paddingBottom: "7rem" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "1rem", color: "#3E3E3C", letterSpacing: "0.8em", marginBottom: "3rem" }}>✦ ✦ ✦</div>
            <p style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.3em", fontSize: "0.6rem", color: "#6B6760", textTransform: "uppercase", marginBottom: "1.75rem" }}>
              The Next Gather
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "0.12em",
              color: "#E5E1D8",
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}>
              COME<br />DINE WITH US
            </h2>
            <div style={{ width: "40px", height: "1px", backgroundColor: "#3E3E3C", margin: "0 auto 2.5rem" }} />
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
              fontStyle: "italic",
              color: "#9B9890",
              fontWeight: 300,
              lineHeight: 1.8,
              maxWidth: "420px",
              margin: "0 auto 3.5rem",
            }}>
              Reserve your place at the next Gather dinner. Be the first to know when the table opens.
            </p>

            {regSent ? (
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontStyle: "italic", color: "#C8C4B8", fontWeight: 300, letterSpacing: "0.04em" }}>
                You're on the list. We'll be in touch.
              </p>
            ) : (
              <div style={{
                display: "flex",
                alignItems: "flex-end",
                maxWidth: "480px",
                margin: "0 auto",
                borderBottom: "1px solid #3E3E3C",
                paddingBottom: "0.85rem",
              }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    color: "#E5E1D8",
                    fontWeight: 300,
                    letterSpacing: "0.03em",
                    caretColor: "#E5E1D8",
                  }}
                />
                <button
                  onClick={handleReserveSubmit}
                  disabled={isSending}
                  style={{
                    background: "none",
                    border: "none",
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.25em",
                    color: isSending ? "#3E3E3C" : "#6B6760",
                    cursor: isSending ? "not-allowed" : "pointer",
                    textTransform: "uppercase",
                    paddingLeft: "1.5rem",
                    whiteSpace: "nowrap",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={e => !isSending && (e.currentTarget.style.color = "#E5E1D8")}
                  onMouseLeave={e => !isSending && (e.currentTarget.style.color = "#6B6760")}
                >
                  {isSending ? "Wait..." : "Reserve →"}
                </button>
              </div>
            )}

            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "#4A4A48", marginTop: "1.5rem", letterSpacing: "0.05em", fontWeight: 300 }}>
              No commitments. Just first access.
            </p>
          </div>
        </section>

        {/* ── FOOTER STRIP ── */}
        <div style={{ borderTop: "1px solid #3A3835", backgroundColor: "#2C2B29" }}>
          <p className="text-center py-10" style={{
            fontFamily: "var(--font-serif)",
            letterSpacing: "0.25em",
            fontSize: "0.65rem",
            color: "#8A8680",
            textTransform: "uppercase",
          }}>Hearty Table · Nairobi, Kenya</p>
        </div>

      </div>
    </PageTransition>
  );
}