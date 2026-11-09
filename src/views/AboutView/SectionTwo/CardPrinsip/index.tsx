import type { FC } from "react";

type Props = {
  number: number;
  title: string;
  description: string;
};
const CardPrinsip: FC<Props> = ({ description, number, title }) => {
  return (
    <div className="w-full rounded-2xl bg-surface-container-lowest h-40 p-space-sm flex flex-col justify-start items-start gap-space-xs shadow-sm">
      <div className="w-full flex flex-row justify-start items-start gap-space-xs">
        <div className="w-8 h-8 bg-primary rounded-full flex justify-center items-center shrink-0">
          <span className="font-medium text-white text-xs">{number}</span>
        </div>

        <span className="text-xl font-medium">{title}</span>
      </div>

      <p className="text-xs text-on-surface-variant leading-5">{description}</p>
    </div>
  );
};

export default CardPrinsip;
