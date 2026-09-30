import { useTranslations } from "next-intl";



function page() {
  const t = useTranslations("home");
  return (
    <div className=" mt-20 "
    ><h1>{t("title")}</h1></div>
  )
}

export default page