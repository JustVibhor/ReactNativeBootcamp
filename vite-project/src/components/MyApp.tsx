import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
import MyList from "./MyList";
import Navbar from "./Navbar";

export default function MyApp() {
  const items = [
    "Student 1",
    "Student 2",
    "Student 3",
    "Student 4",
    "Student 5",
  ];

  const [showAlert, setShowAlert] = useState(false);

  function handleItem() {
    setShowAlert(!showAlert);
  }

  return (
    <>
      <Navbar />
      <MyList items={items} heading="Cities" onSelectItem={handleItem} />
      <Button color="lksjdf" onClick={handleItem}>
        Press Me!
      </Button>

      {showAlert && <Alert onClick={handleItem}>My Alert</Alert>}
    </>
  );
}
