import { IconAsterisk } from "@tabler/icons-react";
import type { FC } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  name: string;
  placeholder: string;
  label: string;
  rows?: number;
  register?: UseFormRegisterReturn;
};

const InputTextArea: FC<Props> = ({
  name,
  label,
  placeholder,
  rows = 4,
  register,
}) => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-space-xs">
      <div className="w-full flex flex-row justify-between items-center">
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>

        <IconAsterisk size={10} className="text-error" />
      </div>

      <textarea
        {...register}
        id={name}
        rows={rows}
        autoComplete="off"
        className="w-full bg-primary/5 min-h-32 rounded-lg ring-2 ring-transparent focus-within:ring-primary outline-none p-space-sm text-sm font-medium focus-within:bg-base-100 resize-y duration-200 placeholder:font-normal"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputTextArea;
