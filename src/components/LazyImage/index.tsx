import { useState, type FC, type ImgHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "onLoad"> & {
  containerClassName?: string;
};

const LazyImage: FC<Props> = ({
  src,
  alt = "",
  className,
  containerClassName,
  loading = "lazy",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden bg-base-200", containerClassName)}
    >
      {/* Main Image */}
      <img
        {...props}
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(false)}
        className={cn(
          "w-full h-full object-cover transition-all duration-700 ease-out",
          isLoaded ? "blur-0 scale-100" : "blur-md scale-105",
          className,
        )}
      />
    </div>
  );
};

export default LazyImage;
