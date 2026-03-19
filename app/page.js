import News from "@/_ui/news/News";
import Projects from "@/_ui/projects/Projects";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="h-screen bg-gray-900"></div>
      <News />
      <Projects />
    </div>
  );
}
