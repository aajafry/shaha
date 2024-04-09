import { serviceFeature } from "../../constants";
import ServiceFeature from "../molecules/ServiceFeature";

export default function ServiceFeatures() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-12 py-8">
      {serviceFeature.map((item) => (
        <li key={item.id} id="service-features">
          <ServiceFeature
            icon={item.icon}
            heading={item.title}
            description={item.except}
          />
        </li>
      ))}
    </ul>
  );
}
