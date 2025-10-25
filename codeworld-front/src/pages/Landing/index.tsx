import CourseCard from "../../components/CourseCard";
import HeroSection from "../../components/HeroSection";
import ScholarshipsSection from "../../components/ScholarshipsSection";
import TeachersSection from "../../components/TeachersSection";
import TestimonialsSlider from "../../components/TestimonialsSlider";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <CourseCard />
      <TeachersSection />
      <ScholarshipsSection />
      <TestimonialsSlider />
    </div>
  );
};

export default LandingPage;
