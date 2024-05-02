import { useRouter } from 'next/navigation';

export function useNavigateToThankYou() {
  const router = useRouter();

  return () => {
    router.push('/thank-you');
  };
}
