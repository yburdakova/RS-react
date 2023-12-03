import { Link, useNavigate } from "react-router-dom"
import styles from '../styles/form.module.css';
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { userSlice } from "../store/reducers/UserSlice";
import { IControllableForm, IForm } from "../constants/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import { schema } from "../constants/validateSchema";
import { convertImage } from "../utils/utils";



export const ControllableForm = () => {

  const {setUser} = userSlice.actions
  const actualData = useAppSelector((store) => store.userReducer.users);
  const countires = useAppSelector((store) => store.userReducer.countries);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [imagePreview, setImagePreview] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
  } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

  const handleSubmitForm = async (data: IForm) => {
    if (data.picture instanceof File) {
      const base64Image = await convertImage(data.picture);
      const newData: IControllableForm = { ...data, picture: base64Image };
      const newArrData: IControllableForm[] = [newData, ...actualData];
      dispatch(setUser(newArrData));
      navigate('/');
    } else {
      console.error('Invalid picture type');
    }
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0] instanceof File) {
      const file = event.target.files[0];
      setImagePreview(URL.createObjectURL(file));
      setValue('picture', file);
      trigger('picture');
    }
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setValue('password', password);
    trigger('password');
    trigger('confirmPassword');
  };

  return (
    <div className={styles.formContainer}>
    <button>
      <Link to="/">Back to Home</Link>
    </button>
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <h2><span className='accent'>Un</span>Controllable Form</h2>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor="name">
          Name: 
        </label>
        <input
          className={styles.textInput}
          {...register('name')} 
          id="name"
          />
        {errors.name && 
          <p className={`${styles.errorMessage} ${styles.show}`}>
            {errors.name.message}
          </p>
        }
    </div>

    <div className={`${styles.inputBox} ${styles.shortBox}` } >
      <label className={styles.label} htmlFor="age">
        Age:
      </label>
      <input
        className={styles.textInput}
        {...register('age')} 
        id="age"
        type="number"
      />
      {errors.age && (
        <p className={`${styles.errorMessage} ${styles.show}`}>
          {errors.age.message}
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
              {...register('gender')}
              type="radio"
              id="maleGender"
              name="gender"
              value="maleGender"
            />
          </label>
        </div>
        <div className={styles.genderBox}>
          <label className={styles.labelRadio} htmlFor="femaleGender">
            Female
            <input
              {...register('gender')}
              type="radio"
              id="femaleGender"
              name="gender"
              value="femaleGender"
          />
          </label>
        </div>
        <div className={styles.genderBox}>
          <label className={styles.labelRadio} htmlFor="otherGender">
            Other
            <input
              {...register('gender')}
              type="radio"
              id="otherGender"
              name="gender"
              value="otherGender"
          />
          </label>
        </div>
      </div>
      {errors.gender && (
        <p className={`${styles.errorMessage} ${styles.show}`}>
          {errors.gender.message}
        </p>
      )}
    </div>

    <div className={styles.inputBox}>
      <label className={styles.label} htmlFor="country">
        Country:
      </label>
      <input
        className={styles.textInput}
        {...register('country')}
        list="countries"
        name="country"
        id="country"
      />
      <datalist id="countries">
        {countires.map((country, index) => {
          return <option key={index} value={country} />;
        })}
      </datalist>
      {errors.country && (
        <p className={`${styles.errorMessage} ${styles.show}`}>
          {errors.country.message}
        </p>
        )}
    </div>

    <div className={styles.inputBox}>
      <label className={styles.label} htmlFor="picture">
        Picture
      </label>
      <input
        id="picture"
        type="file"
        onChange={(e) => {
          handleChangeFile(e);
        }}
      />
      {imagePreview && (
        <img className={styles.fileImage} src={imagePreview} alt="Preview" />
      )}
        {errors.picture && (
          <p className={`${styles.errorMessage}`}>{errors.picture.message}</p>
        )}
    </div>

    <div className={styles.inputBox}>
      <label className={styles.label} htmlFor="email">
        User&apos;s Email: 
      </label>
      <input
        className={styles.textInput}
        {...register('email')}
        id="email"
      />
      {errors.email && (
        <p className={`${styles.errorMessage} ${styles.show}`}>
        {errors.email.message}
        </p>
      )}
    </div>

    <div className={styles.inputBox}>
    <label className={styles.label} htmlFor="password">
        Password
      </label>
      <input
        className={styles.textInput}
        id="password"
        onChange={(e) => {
          handleChangePassword(e);
        }}
      />
      {errors.password && (
        <p className={`${styles.errorMessage} ${styles.show}`}>
          {errors.password.message}
        </p>
      )}
    </div>

    <div className={styles.inputBox}>
      <label className={styles.label} htmlFor="confirmPassword">
        Confirm password
      </label>
      <input
        className={styles.textInput}
        {...register('confirmPassword')}
        id="confirmPassword"
      />
      {errors.confirmPassword && (
        <p className={`${styles.errorMessage} ${styles.show}`}>
          {errors.confirmPassword.message}
        </p>
      )}
      
    </div>
  
    <div className={`${styles.inputBox} ${styles.shortBox}` }>
      <label className={styles.checkboxLabel} htmlFor="accept">
        I agree with something
      </label>
      <input
        {...register('accept')} 
        id="accept"
        type="checkbox"
      />
      {errors.accept && (
        <p className={`${styles.errorMessage} ${styles.show}`}>
          {errors.accept.message}
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
