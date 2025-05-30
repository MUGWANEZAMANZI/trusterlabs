import { AnimatedNavbar } from "@/components/navbar";
import { AnimatedFooter } from "@/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedNavbar />
      <main className="flex-1">{children}</main>
      <AnimatedFooter />
    </div>
  );
}
