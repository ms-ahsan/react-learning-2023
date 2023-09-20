/* eslint-disable react/prop-types */
import Spinner from './Spinner';
import Message from './Message';
import styles from './CityList.module.css';
import CityItem from './CityItem';

export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message='Add your city by clicking on a city on the map' />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}