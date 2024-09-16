export const getFromLocalStorage = (key: string): any => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setInLocalStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
