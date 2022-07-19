import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="h-screen w-full p-8 flex justify-center items-center bg-teal-100"
    >
      <form
        method="POST"
        action={process.env.REACT_APP_FORM}
        target="_blank"
        rel="noreferrer"
        className="w-full max-w-[600px] flex flex-col"
      >
        <div className="pb-2">
          <p className="inline font-bold text-4xl border-b-4 border-rose-500 text-teal-500">Contact</p>
          <p className="py-4 text-teal-500">
            Submit the form below or send me an email - kubiakmilosz91@gmail.com
          </p>
        </div>
        <input type="text" name="name" placeholder="Name" className="p-2 bg-slate-50 outline-teal-500"/>
        <input type="email" name="email" placeholder="Email" className="my-2 p-2 bg-slate-50 outline-teal-500"/>
        <textarea className="p-2 bg-slate-50 outline-teal-500" name="message" rows="5" placeholder="Message"></textarea>
        <button className="text-rose-100 bg-rose-500 rounded-lg hover:scale-125 hover:bg-teal-500 hover:text-teal-100 animate-bounce px-4 py-4 my-8 mx-auto flex items-center duration-200">Contact me</button>
      </form>
    </div>
  );
};

export default Contact;
