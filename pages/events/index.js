// import styles from '../styles/Home.module.css'
import { Layout } from '../../components/Layout'
import EventItem from '../../components/EventItem';
import { API_URL } from '../../config'
export default function EventsPage({ events }) {
  console.log(events);
  const event = events.data; 
  // console.log(event[0].venue);
  return (
     <Layout>
      <h1>Event</h1>
      {/* {event.length === 0 && <h3>No events to show</h3>}
      {event.map(item => <h3 key={item.id}>{item.name}</h3>)} */
      }
      {
       event.map((item) => (
        <EventItem key={item.id} evt={item}/>
       ) ) 
      }

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
  return {
    props:{events},
    revalidate: 1,
  }
}
