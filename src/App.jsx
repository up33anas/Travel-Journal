import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        // img={entry.img}
        // title={entry.title}
        // country={entry.country}
        // googleMapsLink={entry.googleMapsLink}
        // dates={entry.dates}
        // text={entry.text}
        entry={entry} // shorthand
        // we can use {...entry} in place of the above line. If we do so, we can use all the properties in this form in Entry component: props.img
      />
    );
  });

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}
