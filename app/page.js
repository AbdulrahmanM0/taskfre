import News from "@/_ui/news/News";
import Projects from "@/_ui/projects/Projects";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <svg
          className="w-[100px] h-[100px] text-gray-500 animate-bounce "
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <News />
      <Projects />
    </div>
  );
}
