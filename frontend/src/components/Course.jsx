import React from 'react'
import { Link } from "react-router-dom";
import Cards from "./Cards";
import list from '../../public/list.json'

function Course() {
  return (
    <div>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28">
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Welcome to bookStore, your ultimate online destination for discovering, exploring, and purchasing books across all genres. Whether you’re a passionate reader, a student seeking academic resources, or someone looking for the perfect gift, we’ve got something for everyone. Our carefully curated collection ensures that you find the best reads, from timeless classics to modern bestsellers. With a seamless browsing experience, affordable pricing, and fast delivery, Book Haven is designed to make your reading journey effortless and enjoyable. Dive into a world of stories, knowledge, and imagination—because every great adventure starts with a book!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Course
