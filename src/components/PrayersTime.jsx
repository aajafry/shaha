import SectionHeading from "./molecules/SectionHeading";
import PrayerLists from "./organisms/PrayerLists";

export default function PrayersTime() {
  return (
    <div className="prayers-time-wrapper">
      <div className="flex-center flex-col gap-6 text-center p-6">
        <SectionHeading
          heading="Prayers Time"
          subheading="Prayer Times in Bangladesh"
          peragraph="Donec pharetra, felis sed tincidunt tincidunt, risus lacus luctus
              justo, nec accumsan ante quam et turpis. Donec pulvinar metus vel
              felis placerat gravida. Aliquam molestie aliquet mi."
          animationClasses="prayer-g-grow"
        />
      </div>

      <div className="rounded shadow relative overflow-hidden light-bg-main dark:dark-bg-main mt-20 sm:mt-24">
        {/* <div className="h-full w-full absolute -z-10 bg-main"></div> */}
        <div className="p-10">
          <PrayerLists />
        </div>
      </div>
    </div>
  );
}
