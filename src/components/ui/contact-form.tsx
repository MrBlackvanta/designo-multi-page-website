"use client";

import type { SubmitEvent } from "react";
import { useState } from "react";
import Button from "./button";
import Field from "./field";

type FieldName = "name" | "email" | "phone" | "message";

type FieldSpec = {
  name: FieldName;
  label: string;
  type?: "text" | "email" | "tel";
  multiline?: boolean;
  required?: boolean;
};

const fields: FieldSpec[] = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "message", label: "Your Message", multiline: true, required: true },
];

const blank: Record<FieldName, string> = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const emailShape = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function findErrors(values: Record<FieldName, string>) {
  const errors: Partial<Record<FieldName, string>> = {};

  if (!values.name.trim()) errors.name = "Can’t be empty";

  const email = values.email.trim();
  if (!email) errors.email = "Can’t be empty";
  else if (!emailShape.test(email))
    errors.email = "Please use a valid email address";

  if (!values.message.trim()) errors.message = "Can’t be empty";

  return errors;
}

type ContactFormProps = {
  className?: string;
};

export default function ContactForm({ className }: ContactFormProps) {
  const [values, setValues] = useState(blank);
  const [submitCount, setSubmitCount] = useState(0);
  const [sentCount, setSentCount] = useState(0);
  const [sentShown, setSentShown] = useState(false);

  const errors = submitCount > 0 ? findErrors(values) : {};

  const handleValueChange = (name: FieldName, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setSentShown(false);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const found = findErrors(values);
    const firstInvalid = fields.find(({ name }) => found[name])?.name;

    if (firstInvalid) {
      setSubmitCount((count) => count + 1);
      const control = event.currentTarget.elements.namedItem(firstInvalid);
      if (control instanceof HTMLElement) control.focus();
      return;
    }

    setValues(blank);
    setSubmitCount(0);
    setSentCount((count) => count + 1);
    setSentShown(true);
  };

  return (
    <form noValidate onSubmit={handleSubmit} className={className}>
      <div className="space-y-6.25">
        {fields.map(({ name, label, type, multiline, required }) => (
          <Field
            key={name}
            id={`contact-${name}`}
            name={name}
            label={label}
            type={type}
            multiline={multiline}
            required={required}
            value={values[name]}
            error={errors[name]}
            submitCount={submitCount}
            onValueChange={(value) => handleValueChange(name, value)}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center md:mt-6 md:justify-end">
        <Button type="submit" ground="dark">
          Submit
        </Button>
      </div>

      {sentCount > 0 ? (
        <p
          key={sentCount}
          role="status"
          data-shown={sentShown ? "" : undefined}
          className="v-message mt-6"
        >
          Thanks! Your details look good. This static demo doesn’t send
          anything.
        </p>
      ) : null}
    </form>
  );
}
