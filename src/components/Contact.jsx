import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="h-screen w-full p-8 flex justify-center items-center bg-gradient-to-br from-yellow-100 to-amber-300"
    >
      <form
        method="POST"
        action={process.env.REACT_APP_FORM}
        target="_blank"
        rel="noreferrer"
        className="w-full max-w-[600px] flex flex-col"
      >
        <div className="pb-2">
          <p className="inline font-bold text-4xl border-b-4 border-amber-600 text-amber-500">Contact</p>
          <p className="py-6 text-lg text-amber-500">
            Submit the form below if you have any questions 👍
          </p>
        </div>
        <input type="text" name="name" placeholder="Name" className="p-2 bg-slate-50 outline-amber-500"/>
        <input type="email" name="email" placeholder="Email" className="my-2 p-2 bg-slate-50 outline-amber-500"/>
        <textarea className="p-2 bg-slate-50 outline-amber-500" name="message" rows="5" placeholder="Message"></textarea>
        <button className="w-[50%] mx-auto rounded-md mt-6 bg-gradient-to-br from-amber-500 to-yellow-400 text-slate-50 px-6 py-4 my-4 hover:scale-125 duration-300 text-xl font-bold cursor-pointer">Contact me</button>
      </form>
    </div>
  );
};

export default Contact;
