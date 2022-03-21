import React, { FC, useState, useEffect, useMemo, useRef } from 'react';
import { Button } from '../../atoms';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  setValueToParent?: (name: string, value: string) => void;
  type?: string;
  name?: string;
  extraClasses?: string;
  extraLabelClasses?: string;
  extraInputClasses?: string;
  errorMessage?: string;
  isReset?: boolean;
}

const Input: FC<InputProps> = ({
  label = '',
  placeholder = '',
  value = '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setValueToParent = () => {},
  name = '',
  type = 'text',
  extraClasses = '',
  extraLabelClasses = '',
  extraInputClasses = '',
  errorMessage = '',
  isReset = false,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setValueToParent(name, inputValue);
  }, [inputValue]);

  useEffect(() => {
    setInputValue('');
  }, [isReset]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`flex flex-col ${extraClasses}`}>
      <label className={`${extraLabelClasses}`} htmlFor={name}>
        {label} <span className="text-red-700">*</span>
      </label>
      <input
        className={`p-2 mt-2 rounded ${extraInputClasses}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
      {errorMessage && (
        <p className="text-red-500 text-xs italic">{errorMessage}</p>
      )}
    </div>
  );
};

const isValidEmail = (value: string) =>
  // eslint-disable-next-line no-useless-escape
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IJobApplyFormProps {
  jobApplyApiUrl: string;
}

export const JobApplyForm: FC<IJobApplyFormProps> = ({ jobApplyApiUrl }) => {
  const initialFormValues = {
    fname: '',
    lname: '',
    email: '',
  };
  const [checked, setChecked] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [resumeFile, setResumeFile] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const [isResetInput, setIsResetInput] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const submitForm = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { fname, lname, email } = formValues;
    console.log(resumeFile);
    if (fname && lname && isValidEmail(email)) {
      setIsError(false);
      console.log('Valid form');
      const formData = JSON.stringify({
        firstName: fname,
        lastName: lname,
        email: email,
      });
      fetch(jobApplyApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: formData,
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          handleFormReset();
        })
        .catch((err) => console.log('Error while apply job', err));
    } else {
      setIsError(true);
    }
  };

  const handleFormReset = () => {
    setIsResetInput(true);
    setFormValues(initialFormValues);
    setChecked(false);
    setIsError(false);
    setResumeFile(null);
    if (fileRef && fileRef.current) {
      fileRef.current.value = '';
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target as HTMLInputElement;
    console.log(fileInput.files);
    setResumeFile(fileInput.files?.[0]);
  };

  const extraInputClasses = useMemo(() => {
    if (!isError) return initialFormValues;
    const borderClass = 'border border-red-500';
    return {
      fname: formValues.fname === '' ? borderClass : '',
      lname: formValues.lname === '' ? borderClass : '',
      email: !isValidEmail(formValues.email) ? borderClass : '',
    };
  }, [formValues, isError]);

  const errorMessage = useMemo(() => {
    if (!isError) return initialFormValues;
    const requiredMessage = 'Dit veld is verplicht.';
    const inValidEmail = 'Vul een geldig emailadres in';
    return {
      fname: formValues.fname === '' ? requiredMessage : '',
      lname: formValues.lname === '' ? requiredMessage : '',
      email:
        formValues.email === ''
          ? requiredMessage
          : !isValidEmail(formValues.email)
          ? inValidEmail
          : '',
    };
  }, [formValues, isError]);

  return (
    <form className=" bg-content grid gap-y-8 lg:gap-x-8 lg:grid-cols-2 px-2 lg:px-10 py-16">
      <Input
        label="Voornaam"
        placeholder="Voer uw voornaam in"
        name="fname"
        setValueToParent={handleInputChange}
        extraInputClasses={extraInputClasses.fname}
        errorMessage={errorMessage.fname}
        isReset={isResetInput}
      />
      <Input
        label="Achternaam"
        placeholder="Voer uw achternaam in"
        name="lname"
        setValueToParent={handleInputChange}
        extraInputClasses={extraInputClasses.lname}
        errorMessage={errorMessage.lname}
        isReset={isResetInput}
      />
      <Input
        extraClasses="lg:col-start-1 lg:col-end-3"
        label="Email"
        placeholder="Voer uw email in"
        name="email"
        setValueToParent={handleInputChange}
        extraInputClasses={extraInputClasses.email}
        errorMessage={errorMessage.email}
        isReset={isResetInput}
      />
      <div className="flex flex-col lg:col-start-1 lg:col-end-3">
        <label htmlFor="upload-file">CV:</label>
        <span className="p-2 mt-2 rounded bg-white">
          <input
            ref={fileRef}
            type="file"
            accept="application/pdf"
            name="upload-file"
            onChange={handleFileChange}
          />
        </span>
      </div>
      <div className="flex lg:col-start-1 lg:col-end-3">
        <div className="mr-4">
          <input
            className="p-2 mt-2 rounded"
            type="checkbox"
            name="apply-checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </div>
        <label htmlFor="apply-checkbox" className="text-red-700">
          Hierbij geef ik toestemming aan qualogy om mijn persoonsgegevens te
          verwerken en mij ook het komende jaar te mogen benaderen voor een
          vacature. Deze toestemming kan ik op een later moment altijd weer
          intrekken. *
        </label>
      </div>
      <Button disabled={!checked} type="gradient" action={(e) => submitForm(e)}>
        Solliciteren
      </Button>
    </form>
  );
};
