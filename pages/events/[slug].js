import Link from 'next/link';
import {useRouter} from 'next/router';
import Image from "next/image";
import {FaPencilAlt,FaTimes} from "react-icons/fa"
import { Layout } from '../../components/Layout';
import { API_URL } from '../../config';
import styles from '../../styles/Event.module.css';
export default function EventsPage({evt}){
  const deleteEvent=(e)=>{
    console.log('delete');
  }
  return (
    <Layout>
    <div className={styles.event}>
      <div className={styles.controls}>
         <Link href={`/events/edit/${evt.id}`}><FaPencilAlt/>Edit Event</Link>
         <Link href='#' className={styles.delete} onClick={deleteEvent}><FaTimes/>Delete Event</Link>
      </div>
    </div>
    <span>
      {evt.date} at {evt.time}
    </span>
    <h1>{evt.name}</h1>
    {evt.image && (
      <div className={styles.image}>
        <Image src={evt.image} width={960} height={600}/>
      </div>
    )}
    <h3>Performers:</h3>
    <p>{evt.performers}</p>
    <h3>Description:</h3>
    <p>{evt.description}</p>
    <h3>Venue:{evt.venue}</h3>
    <p>{evt.address}</p>
    <Link href='/events' className={styles.back}>
      {'<'}Go Back
    </Link>
    </Layout>
  )
}
export async function getStaticPaths(){
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  const event = events.data;
  const paths = event.map(evt =>({
    params:{slug: evt.slug}
  }))
  return {
    paths,
    fallback: true
  }
}
export async function getStaticProps({params:{slug}}){
  console.log(slug);
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  const eventt = events.data;
  return {
    props: {
      // evt: events[0]
      evt:eventt[0],
    },
    revalidate:1
  }
}

// export async function getServerSideProps({query:{slug}}){
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const events = await res.json();
//   const event = events.data;

//   // console.log(slug);
//   return {
//     props: {
//       // events:{}
//       evt: events[0]
//     }
//   }
// }