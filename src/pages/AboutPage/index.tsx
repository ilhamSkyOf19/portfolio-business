import HeaderPage from "../../components/Header";
import AboutView from "../../views/AboutView";

const AboutPage = () => {
  return (
    <>
      <HeaderPage
        title="Tentang Kami | Profil Tim Web Development IamDev"
        description="Kenali IamDev, tim pengembang web yang berfokus pada solusi digital modern, inovatif, dan berkualitas. Kami membantu bisnis berkembang melalui website profesional dan teknologi yang tepat."
      />

      <AboutView />
    </>
  );
};

export default AboutPage;
