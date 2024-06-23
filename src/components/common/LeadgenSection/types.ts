import { MouseEvent } from 'react';

export type StepItem = {
  title: string;
  text?: string;
  icon?: React.ElementType;
  className?: string;
};
export type LeadgenComponentProps = {
  step: number;
  setStep: (step: number) => void;
};

export type FormInitialValue = {
  kWp: string;
  componentsList: string[];

  contactData: {
    userName: string;
    userPhone: string;
  };
  extraContactData: {
    userPostcode: string;
    userEmail: string;
    userMessage: string;
  };
};

export type LeadStepProps = {
  isLoading?: boolean;
  handlePrevStepClick?: () => void;
  handleNextStepClick: (
    stepValue: string | string[] | null,
    key: string,
  ) => void;
};

export type LeadStepListProps = {
  handleItemClick: (e: MouseEvent<HTMLLIElement>, itemValue: string) => void;
  stepValue: null | string | string[];
};

export type LeadFormProps = {
  formData: FormInitialValue;
  setFormData: (value: FormInitialValue) => void;
  step: number;
  setStep: (step: number) => void;
  handlePrevStepClick?: () => void;
};
