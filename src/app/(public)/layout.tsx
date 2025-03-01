import Header  from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Navigate from "@/components/navigation/navigation";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid bg-background min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <Navigate />
      {children}
      <Footer />
    </div>
  );
}