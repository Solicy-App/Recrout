export const formDataConverter = <T extends Record<string, unknown>>(
  state: any,
  excludeItem?: keyof T,
): FormData => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(state)) {
    if (excludeItem && key === excludeItem) {
      continue;
    }

    formData.append(key, String(value));
  }

  return formData;
};
