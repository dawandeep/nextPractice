import Link from "next/link";
import styles from '../styles/Footer.module.css';
import React from 'react'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>Copyright &copy; DJ Events 2021</p>
        <p>
            <Link href='/about'>About this Project</Link>
        </p>
    </footer>
  )
}

