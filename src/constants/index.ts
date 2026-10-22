import type {
  TNavLink,
  TService,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  vinasoftware,
  trungdungmedia,
  futuredecor,
  jendybeauty,
  artkeymarketing,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Responsive Web Design",
    icon: backend,
  },
  {
    title: "Website Customization",
    icon: creator,
  },
];

const experiences: TExperience[] = [
  {
    title: "Web Developer",
    companyName: "Vinasoftware",
    icon: vinasoftware,
    iconBg: "#f0d76a",
    date: "October 2025 - July 2026",
    points: [
      "Developed and customized over 40 websites across different industries using the company's existing PHP-based source code.",
      "Implemented responsive user interfaces using HTML, CSS, JavaScript, and jQuery to match design requirements.",
      "Customized website layouts, components, and features to meet each business's specific needs.",
      "Worked with PHP and MySQL to implement and maintain website functionality and manage data.",
      "Participated in requirement analysis, UI implementation, testing, and deployment.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Trung Dung Media",
    description:
      "A fashion and media website. Contributed to customizing layouts, implementing responsive interfaces, and adapting website features to business requirements.",
    image: trungdungmedia,
    sourceCodeLink: "https://trungdungmedia.vn/",
  },
  {
    name: "FUTURE DECOR",
    description:
      "An interior design and construction website. Contributed to implementing responsive page layouts and customizing components to showcase the company's services and projects.",
    image: futuredecor,
    sourceCodeLink: "https://futuredecor.vn/",
  },
  {
    name: "JENDY BEAUTY",
    description:
      "A beauty and cosmetics e-commerce website. Contributed to customizing the storefront interface and website features to support the business's product presentation and sales needs.",
    image: jendybeauty,
    sourceCodeLink: "https://jendybeauty.com.vn/",
  },
  {
    name: "ARTKEY MARKETING",
    description:
      "An exhibition and event landing page. Contributed to building responsive sections and customizing layouts to present the company's marketing and event services.",
    image: artkeymarketing,
    sourceCodeLink: "https://artkeymarketing.com/",
  },
];

export { services, experiences, testimonials, projects };
