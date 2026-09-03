export default function ErrorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      {...props}
    >
      <circle cx="10" cy="10" r="10" fill="#fff" />
      <path fill="currentColor" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
    </svg>
  );
}
