import { type FC } from "react";
import { Helmet } from "react-helmet";

// props
type Props = {
  title: string;
  description?: string;
};
const HeaderPage: FC<Props> = ({ title, description }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>

      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default HeaderPage;
