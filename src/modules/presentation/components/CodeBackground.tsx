import React from "react";
import { CodeBackground } from "../styled/components/CodeBackground";

const CodeBackgroundContent: React.FC = () => {
  return (
    <CodeBackground>
      <pre>
        {`

slideNavButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = index;
    slides[currentSlideIndex].classList.add('active');
  });
});
`}
      </pre>
      <pre style={{ marginTop: 100, marginLeft: "40%" }}>
        {`const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
`}
      </pre>
    </CodeBackground>
  );
};

export default CodeBackgroundContent;
