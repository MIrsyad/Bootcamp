import { useState, useEffect } from 'react';

function validatingPassword(value) {
  return value.length > 5 ? true : false;
}

export default function usePasswordValidation() {
  const [textPassword, setTextPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  useEffect(() => {
    // console.log(textPassword);
    setIsValidPassword(validatingPassword(textPassword));
  });

  return [isValidPassword, setTextPassword]
}