import { philosophyFeature } from "../../constants";
import PhilosophyFeature from "../molecules/PhilosophyFeature";

export default function PhilosophyFeatures() {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 p-0">
      {philosophyFeature.map((item) => (
        <li key={item.id} id="philosophy-features">
          <PhilosophyFeature
            icon={item.icon}
            heading={item.title}
            description={item.except}
          />
        </li>
      ))}
    </ul>
  );
}
