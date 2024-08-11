import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const Link = ({ page, selectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      //   className={`${selectedPage === lowerCasePage ? "text-black" : ""} hover:text-white`}
      className={`${selectedPage === lowerCasePage ? "text-black" : ""} hover:bg-primary-500 w-[100px] py-4 text-center transition duration-300 hover:text-white`}
    >
      {page}
    </AnchorLink>
  );
};
export default Link;
