import CoverSection from "./_components/CoverSection";
import FaqSection from "./_components/FaqSection";
import ReviewsSection from "./_components/ReviewsSection";
import ToursSection from "./_components/ToursSection";
import TransferSection from "./_components/TransferSection";
import WhyUsSection from "./_components/WhyUsSection";

export default function Page() {
  return (
    <main className="w-full relative bg-[#f2f5ff]">
      <CoverSection />
      <ToursSection />
      <TransferSection />
      <ReviewsSection />
      <WhyUsSection />
      <FaqSection />
    </main>
  );
}
