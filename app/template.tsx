import { PageTransition } from "@/components/animation/PageTransition";

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return <PageTransition>{children}</PageTransition>;
}
