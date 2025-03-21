import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:4001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (response.ok) {
        setMessage("Message sent successfully!");
        reset();  // Clear the form after successful submission
      } else {
        setMessage(result.error || "Something went wrong!");
      }
    } catch (error) {
      setMessage("Failed to send message. Try again later.");
      console.error("Error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="shadow-2xl p-7 rounded-md w-[600px]">
        <h3 className="font-bold text-lg">Contact Us</h3>
        
        {message && <p className="text-center text-green-600">{message}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          {/* Name */}
          <div>
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* Email */}
          <div>
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* Message */}
          <div>
            <span>Message</span>
            <br />
            <textarea
              placeholder="Enter your message"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("message", { required: true })}
            ></textarea>
            <br />
            {errors.message && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* Button */}
          <div className="flex justify-center mt-6">
            <button 
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
