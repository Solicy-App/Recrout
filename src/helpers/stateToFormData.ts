export const formDataConverter = <T extends object>(
  state: T,
  excludeItem?: string,
) => {
  const formData = Object.keys(state).reduce((formData, key) => {
    if (excludeItem && key !== excludeItem) {
      formData.append(key, (state as any)[key]);
    } else {
      formData.append(key, (state as any)[key]);
    }
    return formData;
  }, new FormData());

  return formData;
};
