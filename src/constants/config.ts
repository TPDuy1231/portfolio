type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
 hero: {
  name: string;
  p: string[];
  cvUrl: string;
};
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Phuong Duy — Portfolio",
    fullName: "Phuong Duy",
    email: "vusocap11315@gmail.com",
  },
 hero: {
  name: "Phuong Duy",
  p: ["I build responsive websites,", "user interfaces and web applications."],
  cvUrl: "/cv/CV_TranPhuongDuy.pdf",
},
  contact: {
    p: "Get in touch",
    h2: "Contact",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
 sections: {
  about: {
    p: "Introduction",
    h2: "About me",
    content: `I'm a Frontend Developer with hands-on experience in HTML,
    CSS, JavaScript, and React.js. I build responsive, user-friendly
    interfaces with reusable components and cross-device compatibility.
    My experience also includes customizing PHP-based websites and
    working with MySQL across different industries. I'm passionate
    about learning modern web technologies and turning ideas into
    practical web experiences.`,
  },
  experience: {
    p: "What I have done so far",
    h2: "Work Experience",
  },
  feedbacks: {
    p: "What others say",
    h2: "Testimonials.",
  },
  works: {
    p: "My work",
    h2: "Projects",
    content: `These projects showcase my experience developing and
    customizing websites across industries, including fashion,
    interior design, beauty, and marketing. They highlight my skills
    in responsive UI implementation, website customization, and
    building features that meet each business's needs using HTML,
    CSS, JavaScript, PHP, and MySQL.`,
  },
},
};
