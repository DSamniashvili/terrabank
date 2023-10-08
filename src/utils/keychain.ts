import KeyChain, { Result } from 'react-native-keychain';

type Credentials = {
  username: string;
  password: string;
};
export const getCredentials = async (): Promise<KeyChain.UserCredentials | boolean | null> => {
  try {
    return await KeyChain.getGenericPassword();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching credentials:', error);
    return null;
  }
};

export const setCredentials = async ({
  username,
  password,
}: Credentials): Promise<boolean | Result> => {
  try {
    return await KeyChain.setGenericPassword(username, password);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error setting credentials:', error);
    return false;
  }
};

export const clearCredentials = async (): Promise<boolean> => {
  try {
    return await KeyChain.resetGenericPassword();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error clearing credentials:', error);
    return false;
  }
};

export const ifCredentialsSetPassword = async (password: string): Promise<void> => {
  try {
    const credentials = await KeyChain.getGenericPassword();
    if (credentials) {
      const { username } = credentials;
      await KeyChain.setGenericPassword(username, password);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error updating password:', error);
  }
};
