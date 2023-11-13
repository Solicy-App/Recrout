export const formDataConverter = <T extends object>(
  state: T,
  excludeItem?: string,
) => {
  const formData = new FormData();

  for (const key of Object.keys(state)) {
    if (excludeItem && key === excludeItem) {
      continue;
    }

    formData.append(key, (state as any)[key]);
  }

  return formData;
};
