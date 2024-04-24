import React, { useState } from 'react';

const ProgressSteps = ({ steps, renderStep }) => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const totalSteps = steps.length;
  const currentStep = steps[activeStep - 1];

  return (
    <div>
      <div>
        {renderStep(currentStep.step, nextStep, prevStep)}
      </div>
      <div>
      {renderStep()}

      </div>
    </div>
  );
};

export default ProgressSteps;
