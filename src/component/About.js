import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p className="text-lg mb-4">
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean lacinia bibendum nulla sed consectetur.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3ONrcsf3qgz9CEHEbamRBMZ-OaBaI-dG1Q&s"
              alt="Team Member 1"
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold mb-2">John Doe</h3>
            <p className="text-lg mb-4">CEO & Founder</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZPWjCbYxbPzblGR8vOiL6bk3kmSVaoAzoQ&s"
              alt="Team Member 2"
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Jane Doe</h3>
            <p className="text-lg mb-4">CTO & Co-Founder</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3ONrcsf3qgz9CEHEbamRBMZ-OaBaI-dG1Q&s"
              alt="Team Member 3"
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Bob Smith</h3>
            <p className="text-lg mb-4">Marketing Manager</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
