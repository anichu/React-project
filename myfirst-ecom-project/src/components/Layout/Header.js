import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart, onHideCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals </h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes.main_image}>
        <img src={mealsImage} alt='meals' />
      </div>
    </Fragment>
  );
};

export default Header;
