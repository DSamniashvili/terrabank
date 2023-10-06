import KeyChain from 'react-native-keychain';

type Credentials = {
  username: string;
  password: string;
};
export const getCredentials = () => KeyChain.getGenericPassword();

export const setCredentials = ({ username, password }: Credentials) =>
  KeyChain.setGenericPassword(username, password);

export const clearCredentials = () => KeyChain.resetGenericPassword();

export const ifCredentialsSetPassword = async (password: string) => {
  const user = await KeyChain.getGenericPassword();
  if (user) {
    const { username } = user;
    KeyChain.setGenericPassword(username, password);
  }
};
