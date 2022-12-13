import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/404.module.css';
export const NotFoundPage = () => {
  return (
    <Layout title='Page not found'>
    <div className={styles.error}>
        <h1>404</h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href='/'>Go Back Home</Link>
    </div>  
 </Layout>
  )
}
