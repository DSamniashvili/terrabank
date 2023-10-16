export interface PasswordLoginBaseProps {
  handleLogin?: () => Promise<void>;
}

export type FormValues = {
  username: string;
  password: string;
  save: boolean;
};
