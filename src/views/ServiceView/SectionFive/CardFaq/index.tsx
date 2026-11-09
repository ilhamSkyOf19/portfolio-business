import { IconChevronDown } from "@tabler/icons-react";
import { type FC } from "react";

type Props = {
  id: number;
  question: string;
  answer: string[];
  points?: string[];
  isActive?: boolean;
  setIsActive: (value: number) => void;
};
const CardFaq: FC<Props> = ({
  answer,
  id,
  question,
  points,
  isActive,
  setIsActive,
}) => {
  return (
    <div className="w-full rounded-xl bg-base-100 flex flex-col justify-start items-start gap-space-sm shadow-sm">
      <button
        className="w-full flex flex-row justify-between items-center p-space-sm"
        type="button"
        onClick={() => setIsActive(id)}
      >
        <span className="text-lg font-medium text text-left">{question}</span>

        <IconChevronDown size={24} className="text-primary shrink-0" />
      </button>

      {isActive && (
        <div className="w-full flex flex-col justify-start items-start gap-space-xs px-space-sm pb-space-sm">
          <span className="text-sm text-base-content leading-6">{answer}</span>

          {points && (
            <ul className="list-disc list-outside pl-space-sm text-sm space-y-1">
              {points.map((item, index) => (
                <li key={index} className="leading-6">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default CardFaq;
