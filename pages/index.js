import { useEffect, useState } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb"; // nextJs runs this line in server
import MeetupList from "../components/meetups/MeetupList";

// import Layout from "../components/layout/Layout";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 5, 12345 Some City",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 10, 12345 Some City",
//     description: "This is a second meetup!",
//   },
// ];

function HomePage(props) {
  //1
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//       //4
//     },
//   };
// }

2;
export async function getStaticProps() {
  // fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://mmdseq:f$0ciethY@cluster0.l7w3g.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  //find method will find all the documents in that collection
  // read more about find() in:  https://www.geeksforgeeks.org/mongodb-db-collection-find-method/

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
      //3
      revalidate: 1,
    },
  };
}

export default HomePage;

//1
//   const [loadedMeetups, setLoadedMeetups] = useState([]);

//   useEffect(() => {
//     // send a http request and fetch data
//     // here we have 2 render cycle and nextjs serverside rendering render only in first cycle at firest cycle loadedMeetup is empty if you look the source cole its empty
//     // next js does not wait for fetch
//     // in fact page pre-render is the fist snapshot when the component render , if route re-rendered
//     setLoadedMeetups(DUMMY_MEETUPS);
//   }, []);

//   return <MeetupList meetups={loadedMeetups} />;

// 2
// only in page folder works
// Two forms of Pre-Rendering - Static Generation - Server=side Rendering
// static Generation  below

// before render page gets static Props
// this code never run on client machines

// so then we dont neet to use useEffect bcz we get data through props

//---------------------
//3
// if props changes too much we cant re render server very much and we should use revalidate,in here atleast will re generate every 10 seconds if there are requst for this page if your data changes every hour you cas set this to 3600

// re-render for any request comming
// with context you can ger every request data and response

// 4
// we dont need revalidate bzc its ganna re-render for every incoming request

// if we have data that changes multipul time every seconds or we need the data of http req use getServerSideProps but for authentication for example use getStaticProps
