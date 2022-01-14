import React from "react";

import { useTranslation } from "react-i18next";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
let count = 0;
let t1;

const tv = () => {
  if (count == 0) {
    const { t } = useTranslation();
    count = count + 1;
    t1 = t;
    return t;
  }

  return t1;
};
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        {tv()("welcome")} <br></br>
        {tv()("personalPortfolio")}
      </SectionTitle>
      <SectionText>{tv()("presentation")}</SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/alvarodachez")}
      >
        {tv()("learnMore")}
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
