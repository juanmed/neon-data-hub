import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <main className={`min-h-screen pt-16 ${className ?? ""}`}>
      <div className="container mx-auto px-6 py-12">{children}</div>
    </main>
  );
}
