import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    page:string
    selectedPage: SelectedPage
    setSelectedPage:(value:SelectedPage) => void             //void means no return value
}

const Link = ({page, selectedPage, setSelectedPage, }: Props) => {

    const lowerCasePage= page.toLowerCase().replace(/ /g, "") as SelectedPage         //replace removes all spaces in the string, eg-OurClasses

  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}      
          transition duration-500 hover:text-primary-300
        ` }                                                                           //giving different color to selected page
        href= {`#${lowerCasePage}`}
        onClick={()=>setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link