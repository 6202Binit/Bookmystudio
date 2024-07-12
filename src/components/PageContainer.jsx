import { Section1 } from "./landing-page/Section1";
import { Section2 } from "./landing-page/Section2";
import { Section3 } from "./landing-page/Section3";
import { Section4 } from "./landing-page/Section4";
import { Section5 } from "./landing-page/Section5";
import { Section6 } from "./landing-page/Section6";
import { Section7 } from "./landing-page/Section7";

const PageContainer = () => {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      {/* <Section6 /> */}
      {/* <Section7 /> */}
    </main>
  );
};

export default PageContainer;
