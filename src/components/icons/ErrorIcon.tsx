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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 14v2H9v-2h2Zm0-9v7H9V5h2Z"
      />
    </svg>
  );
}
