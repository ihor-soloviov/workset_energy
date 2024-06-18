import { Navigate } from '@/types/navigate';
import { useRouter } from 'next/navigation';

export function useNavigateTo(route: Navigate) {
  const router = useRouter();

  return () => {
    router.push(route);
  };
}
