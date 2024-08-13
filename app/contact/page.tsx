"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Mail } from "react-feather";
import { useRef } from "react";

const personalEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID || "UNKNOWN";

  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const inputClasses =
    "w-full bg-background-primary/50 border border-text-primary/10 px-6 py-3 rounded-2xl font-light active:outline-none focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 focus:border-blue-400 transition-colors duration-200";

  function customValidation(event: any) {
    // Validating the form before submitting for empty fields

    function validateInput(input: any) {
      if (!input.value.trim()) {
        input.classList.add("!border-red-500");
        input.addEventListener("focus", () => {
          input.classList.remove("!border-red-500");
        });
        state.errors;
        event.preventDefault();
      }
    }
    if (!nameInputRef.current?.value.trim()) {
      validateInput(nameInputRef.current);
    }
    if (!emailInputRef.current?.value.trim()) {
      validateInput(emailInputRef.current);
    }
    if (!messageInputRef.current?.value.trim()) {
      validateInput(messageInputRef.current);
    } else {
      handleSubmit(event);
    }
  }

  const [state, handleSubmit, reset] = useForm(formId);

  if (!formId || formId === "UNKNOWN") {
    return (
      <div className="text-center bg-background-secondary/50 !bg-origin-border border border-text-primary/10 text-text-secondary w-full h-96 px-4 flex flex-col items-center justify-center rounded-3xl">
        <p className="text-sm text-text-primary mb-4 px-3 py-1 rounded-full bg-red-500/10 border border-red-500">
          Error: &apos;Form id not found&apos;
        </p>
        <p>
          The contact form is not available right now. Please try again later.
        </p>
        <p className="mt-2">
          You can instead email me at{" "}
          <a
            className="hover:text-text-primary transition-colors"
            href={`mailto:${personalEmail}`}
          >
            {personalEmail}
          </a>
        </p>
      </div>
    );
  }

  if (state.succeeded) {
    setTimeout(() => {
      reset();
    }, 15000);
    return (
      <div className="h-96 w-full bg-background-secondary/50 !bg-origin-border border border-text-primary/10 rounded-3xl text-center flex items-center justify-center">
        <p>
          Thank you so much for reaching out! I&apos;ll get back to you as soon
          as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className="bg-background-secondary/50 !bg-origin-border border border-text-primary/10 w-full h-96 p-4 rounded-3xl flex flex-col gap-4 items-center"
      onSubmit={customValidation}
    >
      <p aria-hidden className="border-red-500 border hidden">
        FOR SETUP. NOT TO BE RENDERED
      </p>
      <div className="flex flex-col gap-4 xl:flex-row w-full">
        <input
          className={inputClasses}
          ref={nameInputRef}
          id="name"
          placeholder="Name"
          type="text"
          name="name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          className={inputClasses}
          ref={emailInputRef}
          id="email"
          placeholder="Email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <textarea
        className={inputClasses + " h-full resize-none"}
        ref={messageInputRef}
        id="message"
        placeholder="Message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="bg-text-primary text-background-primary w-full py-3 rounded-full font-semibold hover:bg-text-primary/90 active:bg-text-primary/90 outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 focus:bg-text-primary/90 transition-colors"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="mx-auto px-8 lg:px-0 max-w-5xl font-mono flex flex-col gap-8 items-center justify-center min-h-[calc(100vh-6rem)] xl:min-h-[calc(100vh-9rem)] py-2">
      <ContactForm />
      <div className="p-3 border border-text-primary/10 bg-background-secondary/50 rounded-full flex gap-4 items-center text-sm xl:text-base">
        <div className="w-12 h-12 p-3  xl:w-14 xl:h-14 xl:p4 bg-sky-300 text-sky-950 rounded-full flex items-center justify-center">
          <Mail />
        </div>
        <div>
          <p className="font-medium text-text-primary/70">Email</p>
          <a
            href={`mailto:${personalEmail}`}
            className="hover:underline active:underline mr-4 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 focus:border-blue-400 focus:rounded transition-colors"
          >
            {personalEmail}
          </a>
        </div>
      </div>
    </main>
  );
}
