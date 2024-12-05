// Default admin access code - in production, this should be stored securely
export const ADMIN_ACCESS_CODE = 'ADMIN123';

export function validateAdminAccessCode(code: string): boolean {
  return code === ADMIN_ACCESS_CODE;
}