import InputChoose from "../../../../components/ui/input/InputChoose";
import InputTelp from "../../../../components/ui/input/InputTelp";
import InputText from "../../../../components/ui/input/InputText";
import InputTextArea from "../../../../components/ui/input/InputTextArea";
import type { ContactType } from "../../../../models/contact.type";
import { cn } from "../../../../utils/cn";
import useContentTwo from "./useContentTwo";
const dataChooseLayanan: {
  label: string;
  value:
    | "Landing Page Profesional"
    | "Sistem & Aplikasi Bisnis"
    | "Aplikasi Mobile"
    | "Aplikasi Desktop"
    | "Full Custom Development";
}[] = [
  {
    label: "Landing Page Profesional",
    value: "Landing Page Profesional",
  },
  {
    label: "Sistem & Aplikasi Bisnis",
    value: "Sistem & Aplikasi Bisnis",
  },
  {
    label: "Aplikasi Mobile",
    value: "Aplikasi Mobile",
  },
  {
    label: "Aplikasi Desktop",
    value: "Aplikasi Desktop",
  },
  {
    label: "Full Custom Development",
    value: "Full Custom Development",
  },
];

const ContentTwo = () => {
  const {
    handleSetEstimasitBudget,
    jenisLayananController,
    handleSubmit,
    onSubmit,
    register,
    waController,
    useWatchEstBudget,
    handleisAgree,
    useWatchIsAgree,
    dataEstimasiBudget,
    t,
  } = useContentTwo();

  return (
    <div className="w-full md:flex-3 bg-base-100 shadow-md rounded-xl p-8 flex flex-col justify-start items-start">
      {/* title */}
      <div className="w-full flex flex-col justify-start items-start gap-1.5">
        <h2 className="text-2xl font-medium">{t("contact.form.title")}</h2>
        <span className="text-sm text-base-content/80">
          {t("contact.form.descriptions")}
        </span>
      </div>

      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full mt-space-md flex flex-col justify-between items-start"
      >
        <div className="w-full flex flex-col justify-start items-start gap-space-sm">
          <div className="w-full flex md:flex-row flex-col justify-start items-start gap-space-sm">
            <InputText
              register={register("nama")}
              name="nama"
              label={t("contact.form.fullName")}
              type="text"
              placeholder={t("contact.form.fullNamePlaceholder")}
            />
            <InputText
              register={register("email")}
              name="email"
              label="Email"
              type="email"
              placeholder={t("contact.form.emailPlaceholder")}
            />
          </div>

          <div className="w-full flex md:flex-row flex-col justify-start items-start gap-space-sm">
            <InputTelp<ContactType>
              name="wa"
              label={t("contact.form.whatsapp")}
              controller={waController}
              placeholder={t("contact.form.whatsappPlaceholder")}
            />

            {/* budget */}
            <InputChoose<ContactType>
              chooseList={dataChooseLayanan}
              controller={jenisLayananController}
              placeholder={t("contact.form.servicePlaceholder")}
              label={t("contact.form.serviceType")}
            />
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-space-xs">
            <div className="w-full flex flex-row justify-between items-center">
              <span className="text-sm font-medium">
                {t("contact.form.budget")}
              </span>
              <span className="text-xs">
                {t("contact.form.service.Placeholder")}
              </span>
            </div>
            <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-space-xs">
              {dataEstimasiBudget.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSetEstimasitBudget(item.value)}
                  className={cn(
                    "col-span-1 h-12 rounded-xl text-xs font-semibold text-center",
                    useWatchEstBudget === item.value
                      ? "bg-primary text-white"
                      : "bg-primary/5 hover:bg-primary/10 duration-200",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <InputTextArea
            register={register("pesan")}
            label={t("contact.form.message")}
            name="pesan"
            placeholder={t("contact.form.messagePlaceholder")}
            rows={10}
          />
        </div>

        <div className="w-full flex flex-col justify-start items-start mt-space-md md:mt-0">
          <label className="w-full flex flex-row justify-start items-start gap-space-xs cursor-pointer">
            <input
              type="checkbox"
              checked={useWatchIsAgree}
              onChange={(e) => handleisAgree(e.target.checked)}
              className="w-4 h-4 shrink-0 accent-primary cursor-pointer mt-1"
            />

            <span className="text-xs text-base-content/70 leading-5">
              {t("contact.form.agreement")}
            </span>
          </label>

          <button
            type="submit"
            className="w-full flex justify-center items-center bg-primary h-12 rounded-xl text-sm font-semibold text-white mt-space-sm hover:bg-primary-light duration-200"
          >
            {t("contact.form.submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContentTwo;
