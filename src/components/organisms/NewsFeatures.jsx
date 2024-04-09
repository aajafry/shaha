import { newsFeature } from "../../constants";
import NewsFeature from "../molecules/NewsFeature";

export default function NewsFeatures() {
  return (
    <ul className="flex flex-col gap-6">
      {newsFeature.map((item) => (
        <li key={item.id}>
          <NewsFeature
            title={item.title}
            date={item.date}
            interaction={item.interaction}
            path={item.path}
            animationId="news-features"
          />
        </li>
      ))}
    </ul>
  );
}
