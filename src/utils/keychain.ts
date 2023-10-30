import KeyChain, { Result } from 'react-native-keychain';

const PASSCODE_SERVICE = 'passcodeService';
const PASSWORD_SERVICE = 'passwordService';

type Credentials = {
  username: string;
  password: string;
};

// user + pass
export const getCredentials = async (): Promise<KeyChain.UserCredentials | boolean | null> => {
  try {
    return await KeyChain.getGenericPassword();
  } catch (error) {
    console.error('Error fetching credentials:', error);
    return null;
  }
};

// user + pass
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

// user + pass
export const clearCredentials = async (): Promise<boolean> => {
  try {
    return await KeyChain.resetGenericPassword();
  } catch (error) {
    console.error('Error clearing credentials:', error);
    return false;
  }
};

// only pass when there's a username
export const setPasswordWhenUsername = async (password: string): Promise<void> => {
  try {
    const credentials = await KeyChain.getGenericPassword();
    if (credentials && credentials.username) {
      const { username } = credentials;
      await KeyChain.setGenericPassword(username, password);
    } else {
      console.warn('No existing credentials found. Password not updated.');
    }
  } catch (error) {
    console.error('Error updating password:', error);
  }
};

export const setPassword = async (password: string): Promise<boolean | Result> => {
  try {
    return await KeyChain.setGenericPassword('password', password, {
      service: PASSWORD_SERVICE,
    });
  } catch (error) {
    console.error('Error setting password:', error);
    return false;
  }
};

export const getPassword = async (): Promise<string | null> => {
  try {
    const credentials = await KeyChain.getGenericPassword({ service: PASSWORD_SERVICE });
    if (credentials && credentials.password) {
      return credentials.password;
    }
    return null;
  } catch (error) {
    console.error('Error fetching password:', error);
    return null;
  }
};

export const setPasscode = async (passcode: string): Promise<boolean | Result> => {
  try {
    return await KeyChain.setGenericPassword('passcode', passcode, {
      service: PASSCODE_SERVICE,
    });
  } catch (error) {
    console.error('Error setting passcode:', error);
    return false;
  }
};

export const getPasscode = async (): Promise<string | null> => {
  try {
    const credentials = await KeyChain.getGenericPassword({ service: PASSCODE_SERVICE });
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
