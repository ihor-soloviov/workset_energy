import { MouseEvent } from 'react';

export type StepItem = {
  title: string;
  icon?: React.ElementType;
  text?: string;
};

export type FormInitialValue = {
  propertyType: string;
  consultType: string;
  timePeriod: string;
  communicationType: string;
  kwpType: string;
  projectMessage: string;
  contactData: {
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    userPhone: string;
    userStreet: string;
    userPostcode: string;
  };
};

export type LeadStepProps = {
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
