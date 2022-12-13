// import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout'
import EventItem from '../components/EventItem';
import { API_URL } from '../config'
import Link from 'next/link';
export default function Home({ events }) {
  console.log(events);
  // const event = events.data; 
  // console.log(event[0].venue);
  return (
     <Layout>
      <h1>Upcoming Events</h1>
      {/* {event.length === 0 && <h3>No events to show</h3>}
      {event.map(item => <h3 key={item.id}>{item.name}</h3>)} */
      }
      {
       events.map((item) => (
        <EventItem key={item.id} evt={item}/>
       ) ) 
      }
      {events.length >0 && (
        <Link href='/events' className='btn-secondary'>View All</Link>
      )}
      </Layout> 
  )
}  
// export async function getServerSideProps(){
//   const res = await fetch(`${API_URL}/api/events`)
//   const events = await res.json();
//   // console.log(events);
//   return {
//     props:{ events }
//   } 
// }
export async function getStaticProps(){
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json();
  // console.log(events);
  const event = events.data;
  return {
    props:{events:event.slice(0,3)},
    revalidate: 1,
  }
}
