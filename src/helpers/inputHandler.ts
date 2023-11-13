export const handleInputChange = <T>(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  changeState: React.Dispatch<React.SetStateAction<T>>,
) => {
  const { name, value } = e.target;
  changeState(prevValues => ({ ...prevValues, [name]: value }));
};
