import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      <h1>About Our Bookstore</h1>
      <p>
        Welcome to <strong className="text-pink-500">bookStore</strong>, your one-stop destination for a vast collection of books across all genres.
        Whether you're a fiction lover, a mystery enthusiast, or a student looking for academic resources, we've got
        something for everyone!
      </p>
      <h2>Our Mission</h2>
      <p>
        At <span className="text-pink-500">bookStore</span>, we strive to provide book lovers with a seamless and enjoyable experience. Our goal is to
        make books accessible to everyone, fostering a culture of reading and knowledge-sharing.
      </p>
      <h2>Why Choose Us?</h2>
      <ul style={{ textAlign: "left", margin: "auto", maxWidth: "600px" }}>
        <li>Wide range of books from various genres and authors.</li>
        <li>Easy-to-use interface for browsing and purchasing.</li>
        <li>Affordable prices and great deals.</li>
        <li>Fast and reliable delivery.</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        Have questions or need help? Reach out to us at <strong>support@bookhaven.com</strong> or follow us on our social
        media channels for the latest updates.
      </p>
      <Link to="/">
        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default About;
