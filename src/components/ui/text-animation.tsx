export default function TextAniation({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <p className={`text-xs lg:text-base  ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="animate-waveLetter inline-block"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </p>
  );
}
