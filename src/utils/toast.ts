let loader: any | null = null;

export const saveToastRef = (ref: any) => {
  loader = ref;
};

export const openToast = (errorMessage: string) => {
  loader?.start(errorMessage);
};

export const closeToast = () => {
  loader?.stop();
};

// usage openToast('message');
