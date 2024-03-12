import { LandingPage } from '@/components/landing';
import Appshell from '@/components/Appshell';

export default function Home() {
  return (
    <Appshell isLanding={true}>
      <LandingPage />
    </Appshell>
  );
}
