import React, { useState } from "react";

function Tabs() {
  const [active, setActive] = useState(3);
  const tabs = ["الإطلالات", "الإطلالات", "الإطلالات", "الإطلالات", "الإطلالات"];
  const sk = 20;
  const H = 50;

  const W = 1000;
  const getPoints = (i) => {
    const isRight = i === 0;
    const pad = 1;
    const s = (sk / 100) * W;

    if (isRight) return `${s},${pad} ${W - pad},${pad} ${W - pad},${H - pad} ${pad},${H - pad}`;
    return `${s},${pad} ${W - pad},${pad} ${W - s},${H - pad} ${pad},${H - pad}`;
  };
  return (
    <div className="flex" style={{ direction: "rtl" }}>
      {tabs.map((tab, i) => {
        const isActive = i === active;
        return (
          <div
            key={i}
            onClick={() => setActive(i)}
            className="relative flex-1 cursor-pointer"
            style={{ height: H }}
          >
            <svg
              className="absolute inset-0 w-[105%] h-full"
              viewBox={`0 0 ${1000} ${H}`}
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points={getPoints(i)}
                fill={isActive ? "#0e6b53" : "transparent"}
                stroke="#3d4755"
                strokeWidth={isActive ? "0" : "2"}
              />
            </svg>

            {/* Label */}
            <div
              className="absolute inset-0 flex items-center justify-center text-clamp-20 3xl:text-clamp-26 font-semibold"
              style={{ color: isActive ? "#fff" : "#2d3748" }}
            >
              {tab}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;