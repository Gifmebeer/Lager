import AppShell from '@/components/Appshell';

export default function Template({ children }: { children: React.ReactNode }) {
  return <AppShell isLanding={true}>{children}</AppShell>;
}
