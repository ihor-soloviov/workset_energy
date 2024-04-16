export type FormInitialValue = {
  propertyType: string;
  kWhConsumption: string;
  roofBuiltTime: string;
  roofType: string;
  solarSizesArea: string;
  pvPlanForm: {
    postcode: string;
    location: string;
    street: string;
    houseNumber: string;
  };
  contactData: {
    userName: string;
    userEmail: string;
    userPhone: string;
    userComment: string;
  };
};

export type LeadStepProps = {
  formData: FormInitialValue;
  setFormData: (value: FormInitialValue) => void;
  step: number;
  setStep: (step: number) => void;
};
