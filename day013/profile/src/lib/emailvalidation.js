import { useState, useEffect } from 'react';

function validatingEmail(value) {
  var re = /\S+@\S+\.\S+/;
  return re.test(value);
}

// function validatingPassword() {
//   return 'value'.length > 6 ? true : false;
// }

export default function useValidation() {
  const [textEmail, setTextEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    // console.log(textEmail);
    setIsValidEmail(validatingEmail(textEmail));
  });

  return [isValidEmail, setTextEmail]
}