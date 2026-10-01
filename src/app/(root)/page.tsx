import { useTranslations } from "next-intl";
import Herosection from "../components/homePage/hero";
import Features from "../components/homePage/Features";



function page() {
  const t = useTranslations("homepage");
  return (
    <div className=" mt-20 "
    >
    <Herosection/>
    <Features/>
    </div>
  )
}

export default page