import { useRouter } from 'next/router';
import BBF from '@/components/lifetimepass/bbf';
import AppShell from '@/components/Appshell';

export default function Component() {
  const router = useRouter();
  const id = router.query.id as string;

  let Content = null;
  if (id === 'bbf') {
    Content = <BBF />;
  }

  return <AppShell noPadding={true}>{Content}</AppShell>;
}
