import { eventsFeature } from "../../constants";
import EventFeature from "../molecules/EventFeature";

export default function EventsFeatures() {
  return (
    <ul className="flex flex-col gap-6">
      {eventsFeature.map((item) => (
        <li key={item.id}>
          <EventFeature
            date={item.date.split(" ")[0] + "<br />" + item.date.split(" ")[1]}
            title={item.title}
            location={item.location}
            time={item.time}
            path={item.path}
            animationId="event-features"
          />
        </li>
      ))}
    </ul>
  );
}
