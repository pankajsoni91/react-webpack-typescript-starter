export function getDashboardData(): Promise<any>{
  return fetch('/api').then(res=>res.json());
}