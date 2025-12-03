import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
      
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^([^\s@]+)@([^\s@]+)\.([^\s@]+)$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

    const handleSubmit = (e) => {
      
    e.preventDefault();
    const v = validate();
    setErrors(v);

    if (Object.keys(v).length === 0) {
      setSubmitted(true);
      
     toast.success(
       "Thank you for contacting ToyTales! Your message has been successfully send."
     );

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        subscribe: false,
      });

      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-20 text-gray-800">
      <h1 className="text-3xl font-bold text-[#258184] mb-8 text-center">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md"
      >
        {/* Name */}
        <div>
          <label className="text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border p-3 focus:ring-2 focus:ring-[#258184] ${
              errors.name ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border p-3 focus:ring-2 focus:ring-[#258184] ${
              errors.email ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-200 p-3 focus:ring-2 focus:ring-[#258184]"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="text-sm font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#258184]"
          />
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="text-sm font-medium">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            className={`mt-1 block w-full rounded-md border p-3 focus:ring-2 focus:ring-[#258184] ${
              errors.message ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div className="w-full flex col-span-full justify-center items-center">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-[#e54768] text-white px-5 py-2 rounded-md font-semibold shadow hover:opacity-95 transition"
          >
            {submitted ? "Sent ✓" : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
