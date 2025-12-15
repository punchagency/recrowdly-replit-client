import BottomNav from "./BottomNav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans pb-24">
      <main className="max-w-md mx-auto min-h-screen bg-background relative shadow-2xl overflow-hidden">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
