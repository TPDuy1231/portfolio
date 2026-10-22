import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
  from_name: form.name,
  to_name: config.html.fullName,
  from_email: form.email,
  to_email: config.html.email,
  message: form.message,
},
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
  variants={slideIn("right", "tween", 0.2, 1)}
  className="bg-black-100 flex flex-1 flex-col justify-center rounded-2xl p-8"
>
  <p className="text-secondary text-sm uppercase tracking-wider">
    Let's connect
  </p>

  <h3 className="mt-3 text-3xl font-bold text-white">
    Contact Information
  </h3>

  <p className="text-secondary mt-4 leading-7">
    Feel free to reach out to discuss a project or a job opportunity.
  </p>

  <div className="mt-8 flex flex-col gap-6">
    <div>
      <p className="text-secondary mb-2 text-sm">Email</p>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=vusocap11315@gmail.com"
        className="break-all text-lg text-white hover:underline"
      >
        vusocap11315@gmail.com
      </a>
    </div>

    <div>
      <p className="text-secondary mb-2 text-sm">Phone</p>
      <a
        href="tel:+84332560596"
        className="text-lg text-white hover:underline"
      >
        033 256 0596
      </a>
    </div>
  </div>

  <div className="mt-10 flex flex-wrap gap-4">

    <a
      href="https://www.facebook.com/phuongduy.tran.900"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-tertiary rounded-xl px-6 py-3 font-medium text-white transition-colors hover:bg-[#915eff]"
    >
      Facebook ↗
    </a>
  </div>
</motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
