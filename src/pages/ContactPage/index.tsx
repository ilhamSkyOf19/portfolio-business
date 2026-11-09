import HeaderPage from "../../components/Header";
import ContactView from "../../views/ContactView";

const ContactPage = () => {
  return (
    <>
      <HeaderPage
        title="Contact - Mari Wujudkan Ide Digital Anda"
        description="Punya ide atau kebutuhan proyek digital? Hubungi IamDev untuk berdiskusi dan temukan solusi website, aplikasi, maupun sistem digital yang sesuai dengan kebutuhan Anda."
      />

      <ContactView />
    </>
  );
};

export default ContactPage;
