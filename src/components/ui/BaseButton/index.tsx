import React from 'react';
import Loader from 'components/ui/Loader';
import './base-button.styled.scss';

interface Props {
  label: string;
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  loading?: boolean;
}

const BaseButton: React.FC<Props> = ({
  label,
  onClick,
  type,
  disabled,
  loading,
}) => {
  return (
    <button
      className="button"
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {!loading && label}
      {loading && <Loader color="#fff" size={20} />}
    </button>
  );
};

export default BaseButton;
