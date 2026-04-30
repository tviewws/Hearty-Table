import { useState } from "react";
import { PageTransition } from "../components/PageTransition";
import emailjs from "@emailjs/browser";

function InputField({
  type = "text",
  placeholder,
  value,
  onChange,
  dark = false,
}: {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  dark?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const borderColor = dark
    ? focused ? "#E5E1D8" : "#3E3E3C"
    : focused ? "#2C2C2C" : "#D8D4C8";
  const color = dark ? "#E5E1D8" : "#2C2C2C";
  const placeholderStyle = dark ? "rgba(255,255,255,0.25)" : "#9B9690";

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
  // --- CONFIGURATION: REPLACE THESE WITH YOUR DASHBOARD VALUES ---
  const SERVICE_ID = "service_r8ug7lf";
  const PUBLIC_KEY = "x0aTl9NHPhD_NzaFg";
  const TEMPLATE_ID = "template_i2o70y8"; // Use the ID for the template we just styled

  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [regEmail, setRegEmail] = useState("");
  const [regSent, setRegSent] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [focused, setFocused] = useState(false);

  // Logic for the main "Get in Touch" form
  const handleContactSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    setIsSending(true);

    const templateParams = {
      form_type: "Collaboration",
      name: form.name,
      email: form.email,
      type: form.type || "General Inquiry",
      message: form.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setFormSent(true);
        setIsSending(false);
        setForm({ name: "", email: "", type: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Failed to send message. Please check your IDs.");
        setIsSending(false);
      });
  };

  // Logic for the "Next Gather" reservation footer
  const handleReserveSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!regEmail) return;

    setIsSending(true);

    const templateParams = {
      form_type: "Reservation",
      name: "New Subscriber",
      email: regEmail,
      type: "Waitlist",
      message: "User has requested first-access notifications for the next Gather dinner.",
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setRegSent(true);
        setIsSending(false);
        setRegEmail("");
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setIsSending(false);
      });
  };

  return (
    <PageTransition>
      <div className="min-h-screen" style={{ backgroundColor: "#F2EFE9" }}>

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
            borderBottom: "1px solid #C8C4BE",
          }}
        >
          <p style={{
            fontFamily: "var(--font-serif)",
            letterSpacing: "0.3em",
            fontSize: "0.65rem",
            color: "#9B9690",
            textTransform: "uppercase",
            marginBottom: "2rem",
            position: "relative",
          }}>
            Hearty Table
          </p>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              letterSpacing: "0.15em",
              color: "#2C2C2C",
              fontWeight: 300,
              lineHeight: 1.05,
              textAlign: "center",
              position: "relative",
              marginBottom: "2.5rem",
            }}
          >
            LET'S BUILD<br />SOMETHING
          </h1>

          <div style={{ width: "40px", height: "1px", backgroundColor: "#C8C4BE", position: "relative", marginBottom: "2.5rem" }} />

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
              fontStyle: "italic",
              color: "#6B6760",
              fontWeight: 300,
              maxWidth: "480px",
              textAlign: "center",
              lineHeight: 1.8,
              position: "relative",
            }}
          >
            A platform for collaboration, storytelling,<br />and a new narrative for Kenyan cuisine.
          </p>
        </header>

        {/* ── WHO WE WANT TO HEAR FROM ── */}
        <section style={{ backgroundColor: "#1E1E1C", borderBottom: "1px solid #2A2A28" }}>
          <div
            className="max-w-6xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { icon: "✦", label: "Chefs", desc: "Young and emerging culinary talent ready to redefine Kenyan cuisine." },
              { icon: "◈", label: "Farmers", desc: "Local producers and growers who share our commitment to the land." },
              { icon: "◇", label: "Creatives", desc: "Photographers, writers, and artists who want to tell this story." },
              { icon: "○", label: "Partners", desc: "Organisations aligned with culture, youth, and community impact." },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center py-10 md:py-14 px-6"
                style={{
                  borderBottom: i < 3 ? "1px solid #2A2A28" : "none"
                }}
              >
                <style>
                  {`@media (min-width: 1024px) {
                  .text-center:nth-child(${i + 1}) {
                    border-right: ${i < 3 ? '1px solid #2A2A28' : 'none'} !important;
                    border-bottom: none !important;
                  }
                }`}
                </style>
                <div style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1rem",
                  color: "#4A4A48",
                  marginBottom: "1.25rem",
                  letterSpacing: "0.1em",
                }}>
                  {item.icon}
                </div>
                <p style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.15em",
                  color: "#E5E1D8",
                  fontWeight: 400,
                  marginBottom: "0.75rem",
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.78rem",
                  lineHeight: 1.85,
                  color: "#9B9690",
                  fontWeight: 300,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT FORM ── */}
        <section className="py-16 md:py-32 px-4 md:px-12">
          <div className="max-w-2xl mx-auto">
            <p style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.25em",
              fontSize: "0.65rem",
              color: "#9B9690",
              textTransform: "uppercase",
              marginBottom: "2.5rem",
            }}>
              Get in Touch
            </p>

            {formSent ? (
              <div style={{ paddingTop: "4rem" }}>
                <div style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.5rem",
                  color: "#C8C4BE",
                  letterSpacing: "0.5em",
                  marginBottom: "2rem",
                }}>
                  ✦
                </div>
                <p style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                  color: "#2C2C2C",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}>
                  We've received your message.
                </p>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  lineHeight: 2,
                  color: "#9B9690",
                  fontWeight: 300,
                }}>
                  We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <InputField
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <InputField
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
                <div>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid #D8D4C8",
                      outline: "none",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      color: form.type ? "#2C2C2C" : "#9B9690",
                      fontWeight: 300,
                      paddingBottom: "0.85rem",
                      cursor: "pointer",
                      appearance: "none",
                      letterSpacing: "0.03em",
                    }}
                  >
                    <option value="" disabled>I am a…</option>
                    <option value="chef">Chef</option>
                    <option value="farmer">Farmer / Producer</option>
                    <option value="creative">Creative</option>
                    <option value="partner">Organisation / Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={{ position: "relative" }}>
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
                      borderBottom: `1px solid ${focused ? "#2C2C2C" : "#D8D4C8"}`,
                      outline: "none",
                      resize: "none",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      color: "#2C2C2C",
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
                      border: "1px solid #2C2C2C",
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.22em",
                      color: "#2C2C2C",
                      padding: "1rem 3rem",
                      cursor: isSending ? "not-allowed" : "pointer",
                      textTransform: "uppercase",
                      transition: "background 0.3s ease, color 0.3s ease",
                      opacity: isSending ? 0.6 : 1,
                    }}
                    onMouseEnter={e => {
                      if (!isSending) {
                        e.currentTarget.style.background = "#2C2C2C";
                        e.currentTarget.style.color = "#F2EFE9";
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isSending) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#2C2C2C";
                      }
                    }}
                  >
                    {isSending ? "Sending..." : "Send Message →"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── COME DINE WITH US — registration ── */}
        <section style={{ backgroundColor: "#1E1E1C" }}>
          <div
            className="max-w-4xl mx-auto px-12 text-center"
            style={{ paddingTop: "6rem", paddingBottom: "7rem" }}
          >
            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: "1rem",
              color: "#3E3E3C",
              letterSpacing: "0.8em",
              marginBottom: "3rem",
            }}>
              ✦ ✦ ✦
            </div>

            <p style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.3em",
              fontSize: "0.6rem",
              color: "#6B6760",
              textTransform: "uppercase",
              marginBottom: "1.75rem",
            }}>
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
              <div style={{ paddingTop: "1rem" }}>
                <p style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  color: "#C8C4B8",
                  fontWeight: 300,
                  letterSpacing: "0.04em",
                }}>
                  You're on the list. We'll be in touch.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "0",
                  maxWidth: "480px",
                  margin: "0 auto",
                  borderBottom: "1px solid #3E3E3C",
                  paddingBottom: "0.85rem",
                }}
              >
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

            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              color: "#4A4A48",
              marginTop: "1.5rem",
              letterSpacing: "0.05em",
              fontWeight: 300,
            }}>
              No commitments. Just first access.
            </p>
          </div>
        </section>

        {/* ── FOOTER STRIP ── */}
        <div style={{ borderTop: "1px solid #C8C4BE" }}>
          <p className="text-center py-10" style={{
            fontFamily: "var(--font-serif)",
            letterSpacing: "0.25em",
            fontSize: "0.65rem",
            color: "#9B9690",
            textTransform: "uppercase",
          }}>
            Hearty Table · Nairobi, Kenya
          </p>
        </div>

      </div>
    </PageTransition>
  );
}