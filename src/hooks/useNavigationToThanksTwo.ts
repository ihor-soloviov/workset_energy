import { useRouter } from 'next/navigation';

export function useNavigateToThankYouTwo() {
  const router = useRouter();

  return () => {
    router.push('/thank-you-two');
  };
}
