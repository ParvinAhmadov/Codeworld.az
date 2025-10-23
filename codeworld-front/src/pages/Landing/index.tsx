import CourseCard from "../../components/CourseCard";
import HeroSection from "../../components/HeroSection";
import ScholarshipsSection from "../../components/ScholarshipsSection";
import TeachersSection from "../../components/TeachersSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <CourseCard />
      <TeachersSection />
      <ScholarshipsSection/>
    </div>
  );
};

export default LandingPage;
