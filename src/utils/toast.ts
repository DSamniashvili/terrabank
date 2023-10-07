let loader: any | null = null;

export const saveToastRef = (ref: any) => {
  loader = ref;
};

export const openToast = (message: string, type?: 'error' | 'success' | 'warning') => {
  loader?.start(message, type);
};

export const closeToast = () => {
  loader?.stop();
};
