import HeaderPage from "../../components/Header";
import HomeView from "../../views/HomeView";

const HomePage = () => {
  return (
    <>
      <HeaderPage
        title="IamDev - Layanan Web Development Profesional"
        description="Temukan layanan web development IamDev, mulai dari pembuatan website profesional, company profile, landing page, hingga aplikasi web yang modern, responsif, dan sesuai kebutuhan bisnis."
      />

      <HomeView />
    </>
  );
};

export default HomePage;
