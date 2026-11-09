import { useController, useForm, useWatch } from "react-hook-form";
import type { ContactType } from "../../../../models/contact.type";
import { useMutation } from "@tanstack/react-query";
import { ADMIN_WA } from "../../../../constants/constant";
import { useTranslation } from "react-i18next";

const useContentTwo = () => {
  const { t } = useTranslation();

  const dataEstimasiBudget = t("contact.form.budgetOptions", {
    returnObjects: true,
  }) as {
    label: string;
    value: ContactType["estimasiBudget"];
  }[];

  const { register, control, setValue, handleSubmit } = useForm<ContactType>();

  const waController = useController({ control, name: "wa" });

  const jenisLayananController = useController({
    control,
    name: "jenisLayanan",
  });

  //   handle set value est. budget
  const handleSetEstimasitBudget = (value: ContactType["estimasiBudget"]) => {
    setValue("estimasiBudget", value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleisAgree = (value: boolean) => {
    setValue("isAgree", value);
  };

  const useWatchEstBudget = useWatch({
    control,
    name: "estimasiBudget",
  });

  const useWatchIsAgree = useWatch({
    control,
    name: "isAgree",
  });

  //   use mutation
  const { mutateAsync } = useMutation({
    mutationFn: async (data: ContactType) => {
      const estimasiBudget =
        dataEstimasiBudget.find((item) => item.value === data.estimasiBudget)
          ?.label ?? "-";

      const message = t("whatsapp.contactFormMessage", {
        nama: data.nama,
        email: data.email,
        wa: data.wa,
        jenisLayanan: data.jenisLayanan,
        estimasiBudget,
        pesan: data.pesan,
      });

      const whatsappUrl = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(message)}`;

      return whatsappUrl;
    },

    onSuccess: (url) => {
      window.open(url, "_blank", "noopener,noreferrer");
    },

    onError: (error) => {
      console.error("Gagal menyiapkan pesan WhatsApp:", error);
    },
  });

  //   handle submit
  const onSubmit = async (data: ContactType) => {
    if (!data.isAgree) return;
    await mutateAsync(data);
  };

  return {
    register,
    waController,
    handleSetEstimasitBudget,
    onSubmit,
    handleSubmit,
    jenisLayananController,
    useWatchEstBudget,
    handleisAgree,
    useWatchIsAgree,
    t,
    dataEstimasiBudget,
  };
};

export default useContentTwo;
