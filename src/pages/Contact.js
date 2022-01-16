import { useEffect } from "react";

function Contact() {
  useEffect(function () {
    document.title = "Contact";
  });
  return (
    <section className="section">
      <h1 className="section-title">Contact</h1>
      <p className="section-description">
        Kamu dapat menghubungi saya melalui kontak di bawah ini :
      </p>
      <ul>
        <li>FB: Aldi Tegar Prakoso</li>
      </ul>
    </section>
  );
}

export default Contact;
