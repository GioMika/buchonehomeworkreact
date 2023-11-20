import SecOurClients from "./SecOurClients"
import SecReviews from "./SecReviews"
import SectionAbout from "./SectionAbout"
import SectionHome from "./SectionHome"
import SectionService from "./SectionService"


function Main() {

    return(
        <main>
                <SectionHome />
                <SectionService />
                <SectionAbout />
                <SecOurClients />
                <SecReviews />

        </main>
    )
}

export default Main