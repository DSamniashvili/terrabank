import themes from 'theme/themes';

type DarkProps<T> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [K in keyof T]: K extends `${infer Prefix}_dark` ? K : never;
}[keyof T];

type PropsWithoutDark<T> = Omit<T, DarkProps<T>>;

export type ThemeState = {
  theme: 'default' | keyof PropsWithoutDark<typeof themes>;
  darkMode: boolean | null;
};

export type ThemePayload = {
  payload: Partial<ThemeState>;
};
