import ContentOne from "./ContentOne";
import ContentTwo from "./ContentTwo";

const SectionTwo = () => {
  return (
    <section className="w-full bg-surface-container flex flex-col justify-start items-start px-space-sm md:px-space-md py-space-lg">
      <div className="w-full flex flex-col md:flex-row justify-start items-stretch gap-space-md">
        <ContentOne />

        {/* formulir */}
        <ContentTwo />
      </div>
    </section>
  );
};

export default SectionTwo;
