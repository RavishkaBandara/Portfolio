import AboutMe from "../AboutMe";
import MyBlog from "../Blog";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Certifications from "../Certifications";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";

export default function Home () {
    return (
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <Certifications />
            <MyPortfolio />
            <MyBlog />
            <ContactMe />
            <Footer />
        </>
    )
}