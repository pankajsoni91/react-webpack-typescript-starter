export function getDashboardData(): Promise<any>{
  return fetch('/api/test');
}