import { Dispatch, MouseEvent, SetStateAction } from 'react';

export type StepItem = {
  title: string;
  text?: string;
  icon?: React.ElementType;
  iconMob?: React.ElementType;
  iconDesk?: React.ElementType;
  iconDeskWhite?: React.ElementType;
  className?: string;
};

export type FormInitialValue = {
  kWp: string;
  componentsList: string[];

  contactData: {
    userName: string;
    userPhone: string;
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
  leadId?: number | null;
  setLeadId?: Dispatch<SetStateAction<number | null>>;
};
