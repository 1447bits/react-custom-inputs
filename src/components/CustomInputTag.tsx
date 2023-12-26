import React, { useState, ChangeEvent } from 'react';

interface CustomInputProps {
    type: string;
}

const CustomInputTag: React.FC<CustomInputProps> = ({ type }) => {
    const [value, setValue] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const sanitizedValue = event.target.value.replace(/[^\d.]/g, '');

        const formattedValue =
            type === 'percentage'
                ? sanitizedValue
                : sanitizedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        setValue(formattedValue);
    };

    return (
        <div>
            <input
                className='customInputTag'
                type="text"
                value={`${type === 'currency' ? '$' : ''}${value}${type === 'percentage' ? '%' : ''}`}
                onChange={handleInputChange}
                placeholder={type === 'currency' ? 'Enter amount' : ''}
            />
        </div>
    );
};

export default CustomInputTag;
