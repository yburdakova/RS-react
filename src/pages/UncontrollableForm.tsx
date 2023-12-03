import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../styles/form.module.css';
import { FormFieldsTypes, IUncontrollableForm } from '../constants/types';
import { countries } from '../constants/countries';
import { ValidationError } from 'yup';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { convertImage } from '../utils/utils';
import { userSlice } from '../store/reducers/UserSlice';
import { schema } from '../constants/validateSchema';

export const UncontrollableForm = () => {

  const [error, setError] = useState<Record<string, string | undefined>>({});

  const [imagePreview, setImagePreview] = useState<string>('');
  const [imageObject, setImageObject] = useState<File>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {setUser} = userSlice.actions
  const actualData = useAppSelector((store) => store.userReducer.users);

  const nameField = useRef<HTMLInputElement>(null);
  const ageField = useRef<HTMLInputElement>(null);
  const genderMailField = useRef<HTMLInputElement>(null);
  const genderFemailField = useRef<HTMLInputElement>(null);
  const genderOtherField = useRef<HTMLInputElement>(null);
  const countryField = useRef<HTMLInputElement>(null);
  const pictureField = useRef<HTMLInputElement>(null);
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const confirmPasswordField = useRef<HTMLInputElement>(null);
  const acceptField = useRef<HTMLInputElement>(null);

  function validateData(data: IUncontrollableForm) {
    try {
      schema.validateSync(data, { abortEarly: false });
      return true;
    } catch (error) {
      if (error instanceof ValidationError) {
        const validationError: Record<string, string> = {};
        error.inner.forEach((err) => {
          if (typeof err.path === 'string') {
            validationError[err.path] = err.message;
          }
        });
        setError(validationError);
        if (Object.keys(validationError).length === 0) {
          return false;
        }
      }
    }
  }

  const handleChangeInput = (fieldName: FormFieldsTypes) => {
    setError((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[fieldName];
      return updatedErrors;
    });
  };
  

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0] instanceof File) {
      const file = event.target.files[0];
      setImagePreview(URL.createObjectURL(file));
      setImageObject(file);
    }
  };
  

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const data:IUncontrollableForm = {
      accept: acceptField.current?.checked,
      age: Number(ageField.current?.value),
      confirmPassword: confirmPasswordField.current?.value,
      country: countryField.current?.value,
      email: emailField.current?.value,
      gender: genderMailField.current?.checked
        ? 'maleGender'
        : genderFemailField.current?.checked
        ? 'femaleGender'
        : 'otherGender',
      name: nameField.current?.value,
      password: passwordField.current?.value,
      picture: imageObject,
      id: actualData.length + 1,
    };

    const isValidate = await validateData(data);
    if (isValidate && data.picture) {
      const base64Image = await convertImage(data.picture);
      const newData = { ...data, picture: base64Image };
      const newArrayData = [newData, ...actualData];
      dispatch(setUser(newArrayData));
      navigate('/');
    }
  }

  return (
    <div className={styles.formContainer}>
      <button>
        <Link to="/">Back to Home</Link>
      </button>
      <form onSubmit={(e) => handleSubmitForm(e)}>
        <h2><span className='accent'>Un</span>Controllable Form</h2>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="name">
            Name: 
          </label>
          <input
            className={styles.textInput}
            id="name"
            ref={nameField}
            onChange={() => handleChangeInput('name')}
            />
          {error.name && 
            <p className={`${styles.errorMessage} ${styles.show}`}>
              {error['name']}
            </p>
          }
      </div>

      <div className={`${styles.inputBox} ${styles.shortBox}` } >
        <label className={styles.label} htmlFor="age">
          Age:
        </label>
        <input
          className={styles.textInput}
          id="age"
          type="number"
          ref={ageField}
          onChange={() => handleChangeInput('age')}
        />
        {error.age && (
          <p className={`${styles.errorMessage} ${styles.show}`}>
            {error['age']}
          </p>
        )}
      </div>

      <div className={styles.inputBox}>
        <p className={styles.label}>Gender:</p>
        <div className={styles.radioBox}>
          <div className={styles.genderBox}>
            <label className={styles.labelRadio} htmlFor="maleGender">
              Male
              <input
              type="radio"
              id="maleGender"
              name="gender"
              value="maleGender"
              ref={genderMailField}
              onChange={() => handleChangeInput('gender')}
            />
            </label>
          </div>

          <div className={styles.genderBox}>
            
            <label className={styles.labelRadio} htmlFor="femaleGender">
              Female
              <input
              type="radio"
              id="femaleGender"
              name="gender"
              value="femaleGender"
              ref={genderFemailField}
              onChange={() => handleChangeInput('gender')}
            />
            </label>
          </div>
          <div className={styles.genderBox}>
            <label className={styles.labelRadio} htmlFor="otherGender">
              Other
              <input
              type="radio"
              id="otherGender"
              name="gender"
              value="otherGender"
              ref={genderOtherField}
              onChange={() => handleChangeInput('gender')}
            />
            </label>
          </div>
        </div>
        {error.gender && (
          <p className={`${styles.errorMessage} ${styles.show}`}>
            {error['gender']}
          </p>
        )}
      </div>

      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor="country">
          Country:
        </label>
          <input
            className={styles.textInput}
            list="countries"
            name="country"
            id="country"
            ref={countryField}
            onChange={() => handleChangeInput('country')}
          />
          <datalist id="countries">
            {countries.map((el, i) => {
              return <option key={i} value={el} />;
            })}
          </datalist>
        {error.country && (
          <p className={`${styles.errorMessage} ${styles.show}`}>
            {error['country']}
          </p>
        )}
      </div>

      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor="picture">
          Picture:
        </label>
        <input
          id="picture"
          type="file"
          ref={pictureField}
          onChange={(e) => {
            handleChangeInput('picture')
            handleFileChange(e);
          }}
        />
        {imagePreview && (
          <img className={styles.fileImage} src={imagePreview} alt="Preview" />
        )}
        {error.picture && typeof error.picture === 'string' && (
          <p className={`${styles.errorMessage}`}>{error.picture}</p>
        )}
      </div>

      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor="email">
          User&apos;s Email: 
        </label>
        <input
          className={styles.textInput}
          id="email"
          ref={emailField}
          onChange={() => handleChangeInput('email')}
        />
        {error.email && (
          <p className={`${styles.errorMessage} ${styles.show}`}>
            {error['email']}
          </p>
        )}
      </div>

      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor="password">
          User&apos;s Password
        </label>
        <input
          className={styles.textInput}
          id="password"
          ref={passwordField}
          onChange={() => handleChangeInput('password')}
        />
        {error.password && (
          <p className={`${styles.errorMessage} ${styles.show}`}>
            {error['password']}
          </p>
        )}
      </div>

      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor="confirmPassword">
          Confirm password
        </label>
        <input
          className={styles.textInput}
          id="confirmPassword"
          ref={confirmPasswordField}
          onChange={() => handleChangeInput('confirmPassword')}
        />
        {error.confirmPassword && (
          <p className={`${styles.errorMessage} ${styles.show}`}>
            {error['confirmPassword']}
          </p>
        )}
      </div>

      <div className={`${styles.inputBox} ${styles.shortBox}` }>
        <label className={styles.checkboxLabel} htmlFor="accept">
          I agree with something
        </label>
        <input
          id="accept"
          type="checkbox"
          ref={acceptField}
          onChange={() => handleChangeInput('accept')}
        />
        {error.accept && (
          <p className={`${styles.errorMessage} ${styles.show}`}>
            {error['accept']}
          </p>
        )}
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
      </form>
    </div>
    
  )
}
