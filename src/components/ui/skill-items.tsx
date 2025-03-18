const skillStyles = [
  "bg-blue-600",
  "bg-green-600",
  "bg-purple-600",
  "bg-red-600",
  "bg-yellow-500",
  "bg-pink-600",
];
interface SkillItemsProps {
  skill: string;
  index: number;
}

export default function SkillItems({ skill, index }: SkillItemsProps) {
  return (
    <span
      className={`${skillStyles[index % skillStyles.length]} text-foreground px-3 py-1 rounded-lg shadow-md font-medium`}
    >
      {skill}
    </span>
  );
}
