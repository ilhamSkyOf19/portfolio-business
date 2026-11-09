import { useEffect, useState } from "react";
import type { FieldValues, UseControllerReturn } from "react-hook-form";
import {
  formatNumberPhoneWithDash,
  unformatPhoneNumber,
} from "../../../../helpers/formatNumber";
import { cn } from "../../../../utils/cn";
import { IconAsterisk } from "@tabler/icons-react";

type Props<T extends FieldValues = any> = {
  name: string;
  label: string;
  placeholder: string;
  controller: UseControllerReturn<T>;
  handleClearError?: () => void;
};

export default function InputTelp<T extends FieldValues = any>({
  label,
  placeholder,
  controller,
  handleClearError,
  name,
}: Props<T>) {
  const { field } = controller;

  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    if (field.value !== undefined && field.value !== null) {
      setDisplayValue(formatNumberPhoneWithDash(String(field.value)));
      handleClearError?.();
    } else {
      setDisplayValue("");
    }
  }, [field.value]);

  return (
    <div className="w-full flex flex-col justify-start items-start gap-space-xs">
      <div className="w-full flex flex-row justify-between items-center">
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>

        <IconAsterisk size={10} className="text-error" />
      </div>

      <input
        id={name}
        type="text"
        value={displayValue}
        placeholder={placeholder}
        autoComplete="off"
        className={cn(
          "w-full bg-primary/5 h-12 rounded-lg ring-2 ring-transparent focus-within:ring-primary outline-none p-space-sm text-sm font-medium focus-within:bg-base-100 duration-200 placeholder:font-normal",
        )}
        onChange={(e) => {
          const raw = unformatPhoneNumber(e.target.value);

          setDisplayValue(formatNumberPhoneWithDash(raw));

          field.onChange(raw === "" ? null : raw);
        }}
        onBlur={field.onBlur}
        maxLength={18}
      />
    </div>
  );
}
