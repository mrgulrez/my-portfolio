  import React, { useEffect, useRef } from "react";
  import TagCloud from "TagCloud";
  import "./TextSphere.css";
  
  const TextSphere = () => {
    const containerRef = useRef(null);
  
    useEffect(() => {
      const container = containerRef.current;
      const texts = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Java",
        "Data Structures",
        "Algorithms",
        "Full Stack Developer",
        "MySql",
        "Insomnia",
        "Python",
        "GIT",
        "DJango",
        'Figma',
        'Tailwind',
        'Rest APIs',
        'GitHub',
        'Bootstrap',
        'Linux',
      ];

      function radiusValue() {
        var radii;
        if (window.screen.width <= 778) {
          radii = 170;
        } else {
          radii = 290;
        }
        return radii;
      }
      const options = {
        radius: radiusValue(),
        maxSpeed: "fast",
        initSpeed: "normal",
        keep: true,
        loop: true,
        lockX: true,
        lockY: true,
      };
  
      TagCloud(container, texts, options);
  
      return () => {
        TagCloud(container, [], {});
      };
    }, []);
  
    return (
      <div className="text-sphere">
        <span className="tagcloud" ref={containerRef}></span>
      </div>
    );
  };
  
  export default TextSphere;