import { Icons } from "@/components/icons";

export default function SocIcons() {
  return (
    <div className="h-12 w-full flex items-center justify-center gap-4 animate-scaleUp">
      <a
        href="https://github.com/rolandiartmeladze"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon group"
      >
        <Icons.github className="size-10 hover:scale-110" />
      </a>
      <a
        href="https://www.linkedin.com/in/roland-artmeladze/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon group"
      >
        <Icons.linkedin className="size-10 text-blue-700 hover:scale-110" />{" "}
      </a>
    </div>
  );
}
