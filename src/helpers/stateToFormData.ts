export const formDataConverter = <T extends object>(
  state: T,
  excludeItem?: string,
) => {
  const formData = Object.keys(state).reduce((acc, key) => {
    if (excludeItem && key !== excludeItem) {
      acc.append(key, (state as any)[key]);
    } else {
      acc.append(key, (state as any)[key]);
    }
    return acc;
  }, new FormData());

  return formData;
};
