import { useRouter } from 'next/router';
import { Flex } from '@mantine/core';
import BBF from '@/components/lifetimepass/bbf';
import AppShell from '@/components/Appshell';

export default function Component() {
  const router = useRouter();
  const id = router.query.id as string;

  let Content = null;
  if (id === 'bbf') {
    Content = <BBF />;
  }

  return (
    <AppShell isRegular noPadding={true}>
      <Flex bg="linear-gradient(180deg, #2647CD 0%, #0D2175 100%)">
        {Content}
      </Flex>
    </AppShell>
  );
}
