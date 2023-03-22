import React from 'react';
import Image from '../components/Image.jsx';
import GetStartedBanner from '../assets/GetStartedBanner.svg';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import styles from './GetStarted.module.css';

function GetStarted() {
  return (
    <section className={ styles.container }>
      <Image src={ GetStartedBanner } alt="homem sentado" />
      <Title title='Get things done with TODo' />
      <p>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing. Maxime,
        tempore! Animi nemo aut atque,
        deleniti nihil dolorem repellendus.
      </p>
      <Button>
        Get Started
      </Button>
    </section>
  )
}

export default GetStarted;
