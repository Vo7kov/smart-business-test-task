export type Inputs = {
  [key: string]: string;
};

export type InputChange = {
  name: keyof Inputs;
  value: string;
};
