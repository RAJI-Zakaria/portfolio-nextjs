"use client";
import React, { useEffect, useState } from "react";
import { Button, Input, Textarea, Spinner } from "@nextui-org/react";
import clsx from "clsx";

const Contact = () => {
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (email.length > 0) setEmailInvalid(!validateEmail(email));
  }, [email]);

  const validateEmail = (email: string) => {
    // Regular expression for basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sanitizeInput = (input: string) => {
    // Simple sanitization to prevent XSS attacks
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
    if (isSending) return;
    setIsSending(true);

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }

    const sanitizedMessage = sanitizeInput(message);

    try {
      const response = await fetch("/api/send", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message: sanitizedMessage }),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setEmail("");
        setMessage("");
        setErrorMessage("");
      } else {
        setErrorMessage("Failed to send message, please try again.");
      }
    } catch (error) {
      setErrorMessage("Failed to send message, please try again.");
    }

    setIsSending(false);
  }

  return (
    <section
      id="contact"
      className="flex flex-col gap-4 my-40 px-5 pb-10 pt-20  xl:border bg-neutral-900 xl:border-neutral-700 rounded-2xl"
    >
      <div className="space-y-3 flex flex-col justify-center text-center">
        <h2 className="font-bold text-4xl md:text-4xl leading-normal">
          Get in touch
        </h2>
        <p className="md:text-center text-justify">
          Feel free to reach out if you have any exciting ideas or projects
          you&apos;d like to bring to life! <br className="hidden md:block" />
          Don&apos;t hesitate to share your vision—I&apos;m here to help turn it
          into reality.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full md:w-80 flex flex-col space-y-3 m-auto mt-8 mb-2  max-w-screen-lg sm:w-96"
      >
        {" "}
        {successMessage && (
          <div className="text-green-500 text-center">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-red-500 text-center">{errorMessage}</div>
        )}
        <Input
          type="email"
          variant="bordered"
          label="Email"
          name="email"
          value={email}
          isInvalid={emailInvalid}
          errorMessage={emailInvalid ? "Please enter a valid email" : ""}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorMessage("");
          }}
        />
        <Textarea
          label="Message"
          variant="bordered"
          placeholder="Write me a message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setErrorMessage("");
          }}
        />
        <Button
          radius="full"
          className={clsx("bg-gradient-to-tr  text-white shadow-lg", {
            "opacity-50 cursor-not-allowed": isSending,
            "from-pink-500 to-yellow-500": !isSending,
          })}
          type="submit"
          disabled={isSending}
        >
          {(isSending && <Spinner size="md" color="white" />) || "Send"}
        </Button>
      </form>
    </section>
  );
};

export default Contact;
