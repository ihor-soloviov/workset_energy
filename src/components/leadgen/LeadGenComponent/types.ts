export type FormInitialValue = {
  stepOne: string;
  stepTwo: string;
  stepThree: string;
  stepFour: string;
  stepFive: string;
  stepSix: { plz: string; ort: string; straße: string; housnummer: string };
  stepSeven: {
    name: string;
    email: string;
    telefonnummer: string;
    message: string;
  };
};

export type LeadStepProps = {
  formData: FormInitialValue;
  setFormData: (value: FormInitialValue) => void;
  step: number;
  setStep: (step: number) => void;
};
