import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { education } from "@/types/education";

export default function EducationCard({ education }: { education: education }) {
  return (
    <Card>
      <CardHeader>
        <h1>{education.institution}</h1>
        <samp>{education.period}</samp>
      </CardHeader>
      <CardContent>
        <CardTitle>{education.course}</CardTitle>

        <CardDescription>{education.description}</CardDescription>
      </CardContent>

      <CardFooter>sertificate</CardFooter>
    </Card>
  );
}
