import React, { useState, useEffect } from 'react';
import BaseInput from 'components/ui/BaseInput';
import BaseButton from 'components/ui/BaseButton';
import './search-form.styled.scss';

interface Props {
  initialInputValue: string;
  onSubmit: (inputValue: string) => void;
  loading: boolean;
}

const SearchForm: React.FC<Props> = ({
  initialInputValue,
  onSubmit,
  loading,
}) => {
  const [inputValue, setInputValue] = useState(initialInputValue);

  useEffect(() => {
    setInputValue(initialInputValue);
  }, [initialInputValue]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return;
    onSubmit(inputValue);
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <BaseInput
        type="text"
        id="searchInput"
        placeholder="Enter username"
        initialInputValue={inputValue}
        onChange={onChange}
      />
      <BaseButton label="Search" type="submit" loading={loading} />
    </form>
  );
};

export default SearchForm;
