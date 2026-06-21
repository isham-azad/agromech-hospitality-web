import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CategoriesSlider from "@/components/CategoriesSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import WeHelp from "@/components/WeHelp";
import PopularProduct from "@/components/PopularProduct";
import Testimonials from "@/components/Testimonials";
import ClientsSection from "@/components/ClientsSection";
import RecentBlog from "@/components/RecentBlog";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
      <CategoriesSlider />
      <WhyChooseUs />
      <WeHelp />
      <PopularProduct />
      <ClientsSection />
      <Testimonials />
      {/* <RecentBlog /> */}
    </div>
  );
}
