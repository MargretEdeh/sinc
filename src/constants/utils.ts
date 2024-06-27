import logo1 from "../../public/logo1.png";
import logo2 from "../../public/logo2.png";
import logo3 from "../../public/logo3.png";
import logo4 from "../../public/logo4.png";
import logo5 from "../../public/logo5.png";
import logo6 from "../../public/logo6.png";
import logo7 from "../../public/logo7.png";
import logo8 from "../../public/logo8.png";
import logo9 from "../../public/logo9.png";
import logo10 from "../../public/logo10.png";
import logo11 from "../../public/logo11.png";
import logo12 from "../../public/logo12.png";
import logo13 from "../../public/logo13.png";
import logo14 from "../../public/logo14.png";
import logo15 from "../../public/logo15.png";
import logo16 from "../../public/logo16.png";
import logo17 from "../../public/logo17.png";
import logo18 from "../../public/logo18.png";
import logo19 from "../../public/logo19.png";
import logo20 from "../../public/logo20.png";
import logo21 from "../../public/logo21.png";
import logo22 from "../../public/logo22.png";
import logo23 from "../../public/logo23.png";
import logo24 from "../../public/logo24.png";
import logo25 from "../../public/logo25.png";
import logo26 from "../../public/logo26.png";
import logo27 from "../../public/logo27.png";
import logo28 from "../../public/logo28.png";
import logo29 from "../../public/logo29.png";
import logo30 from "../../public/logo30.png";
import logo31 from "../../public/logo31.png";
import logo32 from "../../public/logo32.png";
import logo33 from "../../public/logo33.png";
import logo34 from "../../public/logo34.png";
import logo35 from "../../public/logo35.png";
import logo36 from "../../public/logo36.png";
import logo37 from "../../public/logo37.png";
import logo38 from "../../public/logo38.png";
import logo39 from "../../public/logo39.png";
import logo40 from "../../public/logo40.png";
import logo41 from "../../public/logo41.png";
import logo42 from "../../public/logo42.png";
import logo43 from "../../public/logo43.png";
import logo44 from "../../public/logo44.png";
import logo45 from "../../public/logo45.png";
import logo46 from "../../public/logo46.png";
import logo47 from "../../public/logo47.png";
import logo48 from "../../public/logo48.png";

import small from "../../public/small.png";
import small2 from "../../public/small2.png";
import small3 from "../../public/small3.png";
import small4 from "../../public/small4.png";
import small5 from "../../public/small5.png";

export const cardData = [
  {
    content:"Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.",
    imgs: small,
    top: "Application and Selection",
  },
   
  {
    content:"If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.",
    imgs: small2,
    top: "Alignment Meeting and Proposal Submission",
  },
  {
    content:"Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.",
    imgs: small3,
    top: "Negotiation and Agreement",
  },
  {
    content:"Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members.Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration.",
    imgs: small4,
    top: "Onboarding and Integration",
  },
  {
    content:"To foster ongoing success, we've established a system for regular check-ins. These sessions will allow us to monitor your progress, gather feedback, and collectively work towards continuous improvement. We appreciate your interest in joining our EIR program and contributing to the vibrant SINC Partners community. Start your application process today and be a part of our journey in shaping the future of innovation.",
    imgs: small5,
    top: "Regular Check-ins and Evaluations",
  },
];

export interface Link {
  href: string;
  label: string;
  nestedRoutes?: NestedRoute[];
}

export interface NestedRoute {
  href: string;
  label: string;
}

const links: Link[] = [
  { href: "/about", label: "About" },
  { href: "/sip", label: "SIP" },
  { href: "/Studio", label: "Studio" },
  { href: "/SEEQ", label: "SEEQ" },
  { href: "/Platforms", label: "Platforms" },
  { href: "/Initiatives", label: "Initiatives" },
  { href: "/More ", label: "More " },
];

export default links;

export const imgs = [
  { id: 1, src: logo1, alt: "Logo 1" },
  { id: 2, src: logo2, alt: "Logo 2" },
  { id: 3, src: logo3, alt: "Logo 3" },
  { id: 4, src: logo4, alt: "Logo 4" },
  { id: 5, src: logo5, alt: "Logo 5" },
  { id: 6, src: logo6, alt: "Logo 6" },
  { id: 7, src: logo7, alt: "Logo 7" },
  { id: 8, src: logo8, alt: "Logo 8" },
  { id: 9, src: logo9, alt: "Logo 9" },
  { id: 10, src: logo10, alt: "Logo 10" },
  { id: 11, src: logo11, alt: "Logo 11" },
  { id: 12, src: logo12, alt: "Logo 12" },
  { id: 13, src: logo13, alt: "Logo 13" },
  { id: 14, src: logo14, alt: "Logo 14" },
  { id: 15, src: logo15, alt: "Logo 15" },
  { id: 16, src: logo16, alt: "Logo 16" },
  { id: 17, src: logo17, alt: "Logo 17" },
  { id: 18, src: logo18, alt: "Logo 18" },
  { id: 19, src: logo19, alt: "Logo 19" },
  { id: 20, src: logo20, alt: "Logo 20" },
  { id: 21, src: logo21, alt: "Logo 21" },
  { id: 22, src: logo22, alt: "Logo 22" },
  { id: 23, src: logo23, alt: "Logo 23" },
  { id: 24, src: logo24, alt: "Logo 24" },
  { id: 25, src: logo25, alt: "Logo 25" },
  { id: 26, src: logo26, alt: "Logo 26" },
  { id: 27, src: logo27, alt: "Logo 27" },
  { id: 28, src: logo28, alt: "Logo 28" },
  { id: 29, src: logo29, alt: "Logo 29" },
  { id: 30, src: logo30, alt: "Logo 30" },
  { id: 31, src: logo31, alt: "Logo 31" },
  { id: 32, src: logo32, alt: "Logo 32" },
  { id: 33, src: logo33, alt: "Logo 33" },
  { id: 34, src: logo34, alt: "Logo 34" },
  { id: 35, src: logo35, alt: "Logo 35" },
  { id: 36, src: logo36, alt: "Logo 36" },
  { id: 37, src: logo37, alt: "Logo 37" },
  { id: 38, src: logo38, alt: "Logo 38" },
  { id: 39, src: logo39, alt: "Logo 39" },
  { id: 40, src: logo40, alt: "Logo 40" },
  { id: 41, src: logo41, alt: "Logo 41" },
  { id: 42, src: logo42, alt: "Logo 42" },
  { id: 43, src: logo43, alt: "Logo 43" },
  { id: 44, src: logo44, alt: "Logo 44" },
  { id: 45, src: logo45, alt: "Logo 45" },
  { id: 46, src: logo46, alt: "Logo 46" },
  { id: 47, src: logo47, alt: "Logo 47" },
  { id: 48, src: logo48, alt: "Logo 48" },
];
