import {useRouter} from 'next/router';
import { Layout } from '../../components/Layout';

const Events = () => {
  const router = useRouter();
  console.log(router);
  return (
    <Layout title='Slug'>
    <h1>My Event</h1>
    <h2>{router.query.slug}</h2>
    <button onClick={()=>router.push('/')}>Click</button>
    </Layout>
  )
}

export default Events;