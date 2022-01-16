import { useEffect } from "react";

function Profile() {
  useEffect(function () {
    document.title = "Profile";
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">My Profile</h1>
      <p className="section-description">
        Hello, namaku Aldi Tegar Prakoso. Saat ini aku sedang belajar Front-End
        Developer menggunakan React.js. Jadi di tunggu ya untuk design Front-End
        kedepannya!
      </p>
    </section>
  );
}

export default Profile;
