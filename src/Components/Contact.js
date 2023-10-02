// Import necessary libraries and components for the Contact component
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Booking from "./Booking";


const Contact = () => {
    // Create a reference to the form element
  const form = useRef();

   // Define state to manage the success message
  const [isSuccess, setIsSuccess] = useState(false);

  // Function to send an email when the form is submitted
  const sendEmail = (e) => {
    e.preventDefault();

     // Use EmailJS to send the form data
    emailjs
      .sendForm(
        "service_mnw2wq7",
        "template_rg15e1n",
        form.current,
        "yPrTI5tfvR7Axanre"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsSuccess(true);

          /// Reset the form and clear success message after 2 seconds
          setTimeout(() => {
            setIsSuccess(false);
            // form.current.reset();
          }, 2000);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
   
    <StyledContactForm>
    <Booking />
          {/* Display a success message if isSuccess is true */}

        {isSuccess ? (
            <SuccessMessage>Message sent successfully!</SuccessMessage>
        ) : (
           
       
 <form ref={form} onSubmit={sendEmail}>
      <h4>Please contact us, if you have any questions.</h4>
   <label>Name</label>
   <input type="text" name="user_name" />
   <label>Email</label>
   <input type="email" name="user_email" />
   <label>Message</label>
   <textarea name="message" />
   <input type="submit" value="Send" />
 </form> 
        )}
         
     
    </StyledContactForm>
  );
};

export default Contact;










// Styles for Contact component

const SuccessMessage = styled.div `
color: green;
font-weight: bold;
font-size: 2rem;
`
const StyledContactForm = styled.div`

@media screen and (max-width: 960px) {
    form label,
    form input,
    form textarea {
    max-width: 100%;
    }

}


  width: 100%;
//  border: 2px solid rgb(220, 220, 220);
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 padding: 2px;
 margin: 0 auto;
 flex-direction: column;



h4 {
    display: flex;
    align-self: center;
    min-width: 250px;
    max-width: 400px;
    padding: 6px;
    height: 50px;
    font-size: 1.2rem;
    color: white;
    background: #1c2237;
    
}
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    font-size: 1.5rem;
    background: #1c2237;
    color: white ;
    // border: 2px solid black;
    marging-top: 20px;

    input {
      align-self: center;
      width: 93%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
    //   border: 1px solid rgb(220, 220, 220);
    
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      align-self: center;
      width: 93%;
      max-width: 100%;
      min-width: 93%;
      max-height: 100%;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 2px solid rgb(220, 220, 220);
      font-size: 1rem;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
      color:white;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
    //   background: rgb(249, 105, 14);
      background: white;
      color: black;
      border: 4px solid red;
      border-radius: 180px;
      font-size: 1rem;
      width: 90%;
      margin-bottom: 40px;
    }
  }
`;
