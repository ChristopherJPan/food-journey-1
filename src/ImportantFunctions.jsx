import React, { useState } from 'react';

const ImportantFunctions = {};

ImportantFunctions.useFormInput = (initialVal) => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // edge case for empty string, send null value to error out
  // if (value === '') setValue(null);
  // returning object of attributes for inputs
  
  return {
    value,
    onChange: handleChange
  }
};
export default ImportantFunctions;
// export * from ...;