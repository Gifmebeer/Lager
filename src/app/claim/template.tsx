import AppShell from '@/components/Appshell';

export default function Template({ children }: { children: React.ReactNode }) {
  return <AppShell noPadding={true}>{children}</AppShell>;
}
