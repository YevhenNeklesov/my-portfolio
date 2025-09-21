import React from "react";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section class={s.contact}>
      <h1>Contact Me</h1>
      <p>If you’d like to work together or just say hi, drop me a message!</p>

      <form action="#" method="POST" class={s.form}>
        <div class={s.group}>
          <label for="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div class={s.group}>
          <label for="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class={s.group}>
          <label for="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Message subject"
          />
        </div>

        <div class={s.group}>
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button type="submit" class={s.button}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
