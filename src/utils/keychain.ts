import KeyChain, { Result } from 'react-native-keychain';

type Credentials = {
  username: string;
  password: string;
};
export const getCredentials = async (): Promise<KeyChain.UserCredentials | boolean | null> => {
  try {
    return await KeyChain.getGenericPassword();
  } catch (error) {
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
    console.error('Error setting credentials:', error);
    return false;
  }
};

export const clearCredentials = async (): Promise<boolean> => {
  try {
    return await KeyChain.resetGenericPassword();
  } catch (error) {
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
    console.error('Error updating password:', error);
  }
};

export const setPasscode = async (passcode: string): Promise<boolean | Result> => {
  try {
    return await KeyChain.setGenericPassword('passcode', passcode);
  } catch (error) {
    console.error('Error setting passcode:', error);
    return false;
  }
};

export const getPasscode = async (): Promise<string | null> => {
  try {
    const credentials = await KeyChain.getGenericPassword();
    if (credentials && credentials.password) {
      return credentials.password;
    }
    return null;
  } catch (error) {
    console.error('Error fetching passcode:', error);
    return null;
  }
};

export const activateBiometricsAuth = async (): Promise<boolean> => {
  try {
    await KeyChain.setGenericPassword('biometric-auth-status', 'true');
    return true;
  } catch (error) {
    console.error('Error activating biometric authentication:', error);
    return false;
  }
};
