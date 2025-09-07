import {
	BlogSection,
	ComprehensiveSection,
	HeroSection,
	HomeIntro,
	IndustriesSlider,
	TalkToExpert
} from "@/components";

// ---------------------------------------------------------------------

export default function Home() {
	return (
		<div id="home page" className="bg-white w-full flex flex-col items-center gap-16 md:gap-24 lg:gap-32 pb-12 md:pb-20">
			<HeroSection />
			<HomeIntro />
			<ComprehensiveSection />
			<IndustriesSlider />
			<TalkToExpert />
			<BlogSection />
		</div>
	);
}
