import { useTranslations } from "next-intl";
import Herosection from "../components/homePage/hero";
import Features from "../components/homePage/Features";
import Categories from "../components/homePage/Categories";
export const metadata ={
  title:"homepage"
}


function page() {
  const t = useTranslations("homepage");
  return (
    <div className=" mt-20 h-fit w-full "
    >
    <Herosection/>
    <Features/>
    <Categories/>
    </div>
  )
}

export default page