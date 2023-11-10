export const resetForm = <T>(obj: T): T => {
  for (const prop in obj) {
    if (typeof obj[prop] === 'string') {
      (obj[prop] as string) = '';
    } else if (typeof obj[prop] === 'boolean') {
      (obj[prop] as boolean) = false;
    }
  }
  return obj;
};
