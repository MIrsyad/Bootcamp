import { useState, useEffect } from 'react';

function validatingName(value) {
    var re = /^[a-z ,.'-]+$/i;
    return re.test(value);
}

export default function useNameValidation() {
    const [textName, setTextName] = useState('');
    const [isvalidName, setIsValidName] = useState(false);

    useEffect(() => {
        // console.log(textName);
        // console.log(validatingName(textName));
        setIsValidName(validatingName(textName));
    });

    return [isvalidName, setTextName]
}