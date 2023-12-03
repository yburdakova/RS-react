import styles from '../styles/home.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../hooks/redux';
import { UserCardItem } from '../components';

export const Home = () => {
  const {users} = useAppSelector((store) => store.userReducer);
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (users.length > 0) {
      setCheckedIndex(0);
      const timeoutId = setTimeout(() => {
        setCheckedIndex(null);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [users]);

  return (
    <>
      <section className="main-select">
        <h2>Select the form to fill out the data</h2>
        <nav>
          <button>
            <Link to="/controllable-form">
              Controllable Form
            </Link>
          </button>
          
          <button>
            <Link to="/uncontrollable-form">
              UnControllable Form
            </Link>
          </button>
        </nav>
      </section>
      <section className={styles.dataContainer}>
        {users.length ? 
          users.map((user, index) => (
            <div
              key={`user-${index}`}
              className={`
                ${ styles.userCard } 
                ${ checkedIndex === index ? styles.checked : ''}
              `}
            >
              <div className={styles.content}>
                <h2>{user.name}</h2>
                <UserCardItem title="Age" data={user.age}/>
                <UserCardItem title="Email" data={user.email}/>
                <UserCardItem title="Password" data={user.password}/>
                <UserCardItem title="Password confirmation" data={user.confirmPassword}/>
                <UserCardItem title="Gender" data={user.confirmPassword}/>
                <UserCardItem title="Password confirmation" data={user.gender}/>
                <UserCardItem title="Accept" data={user.accept ? ' 👍' : ' 👎'}/>
                <UserCardItem title="Country" data={user.country}/>
              </div>
              <div className={styles.imgBox}>
                <img src={user.picture} alt="user photo" />
              </div>
            </div>
          )) : ''
        }
      </section>

    </>
  );
};
