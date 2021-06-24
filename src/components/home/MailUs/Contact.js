import React, { useState, useEffect } from "react";
import "./app2.css";
import  db  from "../newsletter/firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
        
      <input
        placeholder="Your Name"
          
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      
      <input
              placeholder="Your Email"
              className="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      
      <textarea
              placeholder="Your Message"
              className="msg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
              type="submit"
              className="submit"
        style={{ background: loader ? "#ccc" : "black", borderRadius:"20px 20px 20px 20px" }}
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Contact;
