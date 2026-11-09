import { IconAsterisk } from "@tabler/icons-react";
import clsx from "clsx";
import type { FieldValues, UseControllerReturn } from "react-hook-form";
import { cn } from "../../../../utils/cn";

type Props<T extends FieldValues = any> = {
  label?: string;
  chooseList: { label: string; value: number | string | boolean }[];
  typeValueIsBoolean?: boolean;
  controller: UseControllerReturn<T>;
  placeholder: string;
};

export default function InputChoose<T extends FieldValues = any>({
  chooseList,
  controller,
  label,
  placeholder,
  typeValueIsBoolean,
}: Props<T>) {
  // field
  const { field, fieldState } = controller;

  return (
    <div
      className={cn(
        "w-full flex flex-col justify-start items-start",
        fieldState.error && "mb-3",
      )}
    >
      {/* label */}
      <div className="w-full text-base relative flex flex-row justify-between items-center">
        <div className="w-full flex flex-row justify-between items-center">
          <label htmlFor={""} className="text-sm font-medium">
            {label}
          </label>

          <IconAsterisk size={10} className="text-error" />
        </div>
      </div>

      <div
        className={clsx(
          "flex flex-row justify-start items-start rounded-xl w-full ring-2 ring-transparent focus-within:ring-primary h-12 overflow-hidden bg-primary/5 font-medium text-sm relative",
          label && "mt-2 ",
          fieldState.error && "border-error",
        )}
      >
        <div className="absolute w-full h-full bg-primary/5 z-10 pointer-events-none" />
        <select
          className={cn(
            "select w-full h-12 text-sm outline-none border-none rounded-xl px-space-sm ",
          )}
          value={
            typeValueIsBoolean && field.value !== undefined
              ? String(field.value)
              : field.value || ""
          }
          onChange={(e) => {
            const val = e.target.value;

            const selected = chooseList.find(
              (item) => String(item.value) === val,
            );

            field.onChange(selected?.value);
          }}
        >
          {/* place holder */}
          <option value="" disabled className={cn("text-base-content/50")}>
            {placeholder}
          </option>

          {chooseList.map((item, idx) => (
            <option key={idx} value={`${item.value}`} className={cn("text-sm")}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
