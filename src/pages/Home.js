import { useEffect } from "react";

function Home() {
  useEffect(function () {
    document.title = "Home";
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Welcome to my profile</h1>
      <p className="section-description">
        You can find more information about me on this website
      </p>
    </section>
  );
}
export default Home;
