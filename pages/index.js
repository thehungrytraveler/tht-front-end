import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRef, useState } from 'react';
import axios from "axios"


export default function Home() {
  const handleSubmit = e => {
    // Prevent the default submit and page reload
    e.preventDefault()
    console.log('prompt ', prompt);
    // Handle validations
    axios
      .get("https://tht-service.onrender.com/web/processText", { params: {text:prompt } })
      //.get("http://localhost:3000/web/processText", { params: {text:prompt } })
      .then((response) => {
        console.log("return came")
        console.log(response.data)
        setAnswer(response.data);
        // Handle response
      })
  }

  const [prompt, setPrompt] = useState()
  const [answer, setAnswer] = useState()

  const inputRef = useRef(null);

  const [updated, setUpdated] = useState('');

  const handleClick = () => {
    // 👇 "inputRef.current.value" is input value
    setUpdated(inputRef.current.value);
  };

  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to TheHungryTraveler!
        </h1>
        <div>
        <label>
      Write your prompts:
      <br/>
      <textarea id="prompt" name="prompt" value={prompt} rows={4} cols={100} onChange={e => setPrompt(e.target.value)}/>
    </label>

    <br/>

      <button onClick={handleSubmit}>Submit</button>
      <br/><br/>
      <label>
      Answer:
      <br/><br/>
      <textarea id="answer" name="answer" value={answer}  rows={20} cols={100} />
    </label>
    </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TheHungryTraveler.
        </a>
      </footer>
    </div>
  )
}
