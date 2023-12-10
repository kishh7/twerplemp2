import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../src/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import './Signup.css';
import choox from './img/choox.jpg'; 

const Signup = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
};

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
  
    try {
      
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);

      const date = new Date().getTime();
            const storageRef = ref(storage, `${data.displayName + date}`);
            await uploadBytesResumable(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);

            await updateProfile(res.user, {
              displayName: data.displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              ...data, 
              timeStamp: serverTimestamp(),
              photoURL: downloadURL,
            });
    
       navigate('/'); 
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
      
    return (
      <div className="formContainerfor">
      <div className="formWrapper">
        <span className="logo">Sign up</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
        <input id='displayName' onChange={handleInput} required type="text" placeholder="display name" />
                    <input id='email' onChange={handleInput} required type="email" placeholder="email" />
                    <input id='password' onChange={handleInput} required type="password" placeholder="password" />
          <input 
                                type="file"
                                id="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                style={{ display: "none" }}
                            />
          <label htmlFor="file">
            <img src={
                            file
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        } alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/" style={{color:"black"}}>Login</Link>
        </p>
      </div>
    </div>
  );
};


export default Signup;