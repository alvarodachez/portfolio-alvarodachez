import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { useTranslation } from "react-i18next";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";
import { TranslateService } from "./TestLang";
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

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="4rem" />
          <Span>Alvaro Rueda</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>{tv()("projects")}</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>{tv()("tech")}</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>{tv()("about")}</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/alvarodachez">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/%C3%A1lvaro-rueda-s%C3%A1nchez-6812511a0/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <TranslateService />
    </Div3>
  </Container>
);

export default Header;
