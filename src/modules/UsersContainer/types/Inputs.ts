export type Inputs = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

export type InputChange = {
  name: keyof Inputs;
  value: string;
};
