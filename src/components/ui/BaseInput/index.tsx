import React from 'react';
import './base-input.styled.scss';

interface Props {
  label?: string;
  initialInputValue: string;
  onChange: any;
  type: string;
  id: string;
  placeholder: string;
}

const BaseInput: React.FC<Props> = ({
  label,
  initialInputValue,
  onChange,
  type,
  id,
  placeholder,
}) => {
  return (
    <div className="base-input">
      {label && <label className="base-input__label">{label}</label>}
      <input
        className="base-input__input"
        type={type}
        id={id}
        placeholder={placeholder}
        value={initialInputValue}
        onChange={onChange}
      />
    </div>
  );
};

export default BaseInput;
