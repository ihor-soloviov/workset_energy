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
  formData: FormInitialValue;
  setFormData: (value: FormInitialValue) => void;
  step: number;
  setStep: (step: number) => void;
  handlePrevStepClick?: () => void;
};
