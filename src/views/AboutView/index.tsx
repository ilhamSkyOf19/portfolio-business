import useScrollToHash from "../../hooks/useScrollToHash";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const AboutView = () => {
  useScrollToHash();
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default AboutView;
