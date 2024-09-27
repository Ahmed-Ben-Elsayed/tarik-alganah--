import React, { useEffect, useState } from "react";
import img1 from "../../img/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg";
import "../contact/contact.css";
import { Formik, useFormik } from "formik";
import axios from "axios";
import emailjs from "emailjs-com";
export const Contact = () => {
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      telephone: "",
      message: "",
    },
    onSubmit: async (values) => {
      setSending(true);
      setSuccessMessage("");
      setErrorMessage("");
      try {
        await emailjs.send(
          "service_ln3xfpv",
          "template_4xcjehv",
          {
            name: values.name,
            lastname: values.lastname,
            useremail: values.email,
            phone: values.telephone,
            message: values.message,
          },
          "5wc999QOqweNc5hEd"
        );
        setSuccessMessage("تم ارسال الرساله !");
        formik.resetForm();
      } catch (error) {
        setErrorMessage("Failed to send message. Please try again.");
      } finally {
        setSending(false);
        useEffect(()=>{
            setTimeout(()=>{
                setSuccessMessage("");
                setErrorMessage("");
            },3000)
        },[Contact])
      }

    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Your name is Required";
      }
      if (!values.lastname) {
        errors.lastname = "Your lastname is Required";
      }
      if (!values.telephone) {
        errors.telephone = "Your phone number is Required";
      }
      if (!values.message) {
        errors.message = "Your message is Required";
      }

      if (!values.email) {
        errors.email = "Your email is Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
  });
  return (
    <>
      <div className="contact">
        <h1>تواصل معنا </h1>
        <div className="con">
          <form action="" method="post" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="name"
              id="fname"
              placeholder="الاسم الاول "
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ? (
              <p className="error">{formik.errors.name}</p>
            ) : null}
            <input
              type="text"
              name="lastname"
              id="fname"
              placeholder="الاسم الثانى"
              onChange={formik.handleChange}
              value={formik.values.lastname}
            />
            {formik.errors.lastname ? (
              <p className="error">{formik.errors.lastname}</p>
            ) : null}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="البريد الألكترونى "
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <p className="error">{formik.errors.email}</p>
            ) : null}
            <input
              type="text"
              name="telephone"
              id="phone"
              placeholder="رقم الهاتف "
              onChange={formik.handleChange}
              value={formik.values.telephone}
              maxLength={11}
            />
            {formik.errors.telephone ? (
              <p className="error">{formik.errors.telephone}</p>
            ) : null}
            <textarea
              name="message"
              id="message"
              placeholder="اكتب رسالتك "
              onChange={formik.handleChange}
              value={formik.values.message}
            ></textarea>
            {formik.errors.message ? (
              <p className="error">{formik.errors.message}</p>
            ) : null}
            <input
              className="btn-12"
              type="submit"
              value={sending ? "جارى الارسال ....." : "ارسال "}
              disabled={sending}
            />
          { <p className="success">{successMessage}</p>}
          { <p className="error">{errorMessage}</p>}{" "}
          </form>
          <div className="im">
            <img src={img1} alt="" srcSet={img1} />
          </div>
        </div>
      </div>
    </>
  );
};
