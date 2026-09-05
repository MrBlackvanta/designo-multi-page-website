import { ErrorIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { ChangeEvent } from "react";

type FieldProps = {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  multiline?: boolean;
  required?: boolean;
  value: string;
  error?: string;
  submitCount: number;
  onValueChange: (value: string) => void;
};

export default function Field({
  id,
  name,
  label,
  type = "text",
  multiline = false,
  required = false,
  value,
  error,
  submitCount,
  onValueChange,
}: FieldProps) {
  const errorId = `${id}-error`;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => onValueChange(event.target.value);

  const control = {
    id,
    name,
    value,
    required,
    placeholder: label,
    onChange: handleChange,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: cn(
      "v-focus text-field placeholder:text-black/95 min-w-0 flex-1 bg-transparent p-0",
      multiline ? "h-22.5 resize-none" : "h-6.5",
    ),
  };

  return (
    <div className="relative flex items-start ps-[4.2%] pe-2 pb-3 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-black after:content-[''] focus-within:after:h-0.75 motion-safe:after:transition-[height]">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      {multiline ? (
        <textarea {...control} rows={3} />
      ) : (
        <input {...control} type={type} />
      )}

      {error ? (
        <p
          key={submitCount}
          id={errorId}
          role="alert"
          className="text-error font-sans-italic flex shrink-0 items-center gap-2.25 italic"
        >
          {error}
          <ErrorIcon className="shrink-0" />
        </p>
      ) : null}
    </div>
  );
}
