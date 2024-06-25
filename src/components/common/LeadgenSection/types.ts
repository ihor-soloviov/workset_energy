import { MouseEvent } from 'react';

export type StepItem = {
  title: string;
  icon?: React.ElementType;
  text?: string;
};
export type LeadgenComponentProps = {
  step: number;
  setStep: (step: number) => void;
};

export type FormInitialValue = {
  propertyType: string;
  consultType: string;
  timePeriod: string;
  communicationType: string;
  contactData: {
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    userPhone: string;
    userPostcode: string;
  };
  projectMessage: string;
};

export type LeadStepProps = {
  isLoading?: boolean;
  handlePrevStepClick?: () => void;
  handleNextStepClick: (stepValue: string | null, key: string) => void;
};

export type LeadStepListProps = {
  handleItemClick: (e: MouseEvent<HTMLLIElement>, itemValue: string) => void;
  stepValue: null | string;
};

export type LeadFormProps = {
  formData: FormInitialValue;
  setFormData: (value: FormInitialValue) => void;
  step: number;
  setStep: (step: number) => void;
  handlePrevStepClick?: () => void;
};
