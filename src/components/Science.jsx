// Science section

import React, { useEffect } from "react";
import MiniScience from "./MiniScience";
import Navbar from "./Navbar";
import Footer from "./Footer";

import ReactGA from "react-ga4"; // For Google Analytics

function Science() {


  useEffect(() => {
    ReactGA.send({ hitType: "pageview", title: "Displayed Science Page"});
  }, []);
  

  // Track the scroll to bottom event in Google Analysis
  const trackScrollEvent = () => {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition + windowHeight + 350 >= documentHeight) {
      ReactGA.send({ hitType: "event", eventCategory: "Scroll", eventAction: "Scrolled to the Bottom in Science" });
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", trackScrollEvent);
    return () => {
      document.removeEventListener("scroll", trackScrollEvent);
    };
  }, []);

  return (
    <section>
      <Navbar />
      <h1 className="science-h1">Science Information</h1>
      <article className="container science-div">
        <MiniScience
          scienceHeading="What Is Climate Change?"
          scienceFirstParagraph="Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, such as through variations in the solar cycle. But since the 1800s, human activities have been the main driver of climate change, primarily due to burning fossil fuels like coal, oil and gas."
          scienceSecondParagraph="Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures."
          scienceThirdParagraph="Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane. These come from using gasoline for driving a car or coal for heating a building, for example. Clearing land and forests can also release carbon dioxide. Landfills for garbage are a major source of methane emissions. Energy, industry, transport, buildings, agriculture and land use are among the main emitters."
          scienceImage="/pics/science1.PNG"
          miniScienceImgClass="miniScience-default-img"
        />

        <MiniScience
          scienceHeading="Every increase in global warming matters"
          scienceFirstParagraph="In a series of UN reports, thousands of scientists and government reviewers agreed that limiting global temperature rise to no more than 1.5°C would help us avoid the worst climate impacts and maintain a livable climate. Yet policies currently in place point to a 2.8°C temperature rise by the end of the century."
          scienceSecondParagraph="The emissions that cause climate change come from every part of the world and affect everyone, but some countries produce much more than others. The 100 least-emitting countries generate 3 per cent of total emissions."
          scienceThirdParagraph="The 10 countries with the largest emissions contribute 68 per cent. Everyone must take climate action, but people and countries creating more of the problem have a greater responsibility to act first."
          scienceImage="/pics/science2.PNG"
          miniScienceImgClass="miniScience-default-img"
        />

        <MiniScience
          scienceHeading="We face a huge challenge but already know many solutions"
          scienceFirstParagraph="Many climate change solutions can deliver economic benefits while improving our lives and protecting the environment.We have global agreements to guide process, such as the Sustainable Development Goals, the UN Framework Convention on Climate Change and the Paris Agreement."
          scienceSecondParagraph="Three broad categories of action are: cutting emissions, adapting to climate impacts and financing required adjustments."
          scienceThirdParagraph="Switching energy systems from fossil fuels to renewables like solar or wind will reduce the emissions driving climate change. But we have to start right now. While a growing coalition of countries is committing to net zero emissions by 2050, about half of emissions cuts must be in place by 2030 to keep warming below 1.5°C. Fossil fuel production must decline by roughly 6 per cent per year until 2030."
          scienceImage="/pics/science3.PNG"
          miniScienceImgClass="miniScience-third-img"
        />
      </article>
      <Footer />
    </section>
  );
}

export default Science;
