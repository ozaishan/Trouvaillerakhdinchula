// HeroSection.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import AboutUsFooter from "@/components/ui/aboutusfooter";

const Navbar = () => {
  return (
    <nav className="bg-slate-950 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-white text-lg font-bold">Trouvaille</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const servicesData = [
  {
    title: "Code Generation",
    description: "Generate code using descriptive text",
    image: "/codegeneration.png",
  },
  {
    title: "Music Generation",
    description: "turn your prompt into music",
    image: "/musicgeneration.png",
  },
  {
    title: "Video Generation",
    description: "Turn your prompt into video",
    image: "/videogeneration.png",
  },
  {
    title: "Text Generation",
    description: "advanced conversation model",
    image: "/textgeneration.png",
  },
  {
    title: "Image Generation",
    description: "Turn your prompt into image",
    image: "/imagegeneration.png",
  },
 
];

const peopleData = [
  {
    name: "Bigyan",
    image: "/bigyan.jpg",
    email: "bigyan.pradhan1717@gmail.com",
    number: "+977 9863483355",
  },
  {
    name: "Love",
    image: "/love.jpg",
    email: "sainju.love69@gmail.com",
    number: "+977 9818948794",
  },
  {
    name: "Ishan",
    image: "/ishan.jpg",
    email: "ojhaishan007@gmail.com",
    number: "+977 9742550050",
  },
  {
    name: "Sushant",
    image: "/sushant.jpg",
    email: "sushantbasnet01@gmail.com",
    number: "+977 9810128919",
  },
];

const HeroSection = () => {
  const sectionStyle = {
    backgroundColor: "#000",
    color: "#fff",
  };

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Head>
        <style>{`
          body {
            background-color: #000;
            color: #fff;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </Head>
      <Navbar />

{/* Our Services Section */}
<section id="services" style={sectionStyle}>
  <h1 className="text-5xl font-bold text-center text-purple-700 py-4 md:text-7xl mb-0">
    Our Services
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
    {servicesData.map((service, index) => (
      <div key={index} className="text-center mb-8 md:mb-0">
        <div
          style={{
            width: "100%",
            maxWidth: "300px", // Adjusted maximum width
            height: "300px", // Adjusted height
            overflow: "hidden",
            borderRadius: "8px",
            margin: "0 auto",
          }}
        >
          <Image
            src={service.image}
            alt={service.title}
            width={300} // Adjusted width
            height={300} // Adjusted height
            className="rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-bold mt-4 mb-1">  <span className="font-semibold text-teal-600">{service.title}</span></h2>
        <p className="text-lg">{service.description}</p>
      </div>
    ))}
  </div>
</section>
 {/* Meet Our Supervisor Section */}
<section id="supervisor" style={sectionStyle}>
  <h1 className="text-5xl font-bold text-center text-purple-700 py-4 md:text-7xl mb-0">
     Meet Our Supervisor
  </h1>
  <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-3 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
    <div className="md:mt-2 md:w-1/2">
    </div>
    <div className="md:mt-2 md:w-4/5 ">
      <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Sushil Nepal</h1>
      <p className="text-lg mt-5 mb-6 md:text-2xl">
         <span className="font-semibold text-teal-600">Assistant Professor</span> <br />
         <span className="font-semibold text-teal-600">Kathmandu University, Nepal</span> <br />
         <span className="font-semibold text-teal-600">sushilnepal@ku.edu.np</span>
      </p>
    </div>
  </div>
</section>


      {/* Meet Our Developers Section */}
      <section id="home" style={sectionStyle}>
        <h1 className="text-5xl font-bold text-center text-purple-700 py-4 md:text-7xl mb-0">
          Meet Our Developers
        </h1>
        {peopleData.map((person, index) => (
          <div
            key={index}
            className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-3 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left"
          >
            <div className="md:mt-2 md:w-1/2">
              <Image
                src={person.image}
                alt={person.name}
                width={325}
                height={325}
                className="rounded-full shadow-2xl"
              />
            </div>
            <div className="md:mt-2 md:w-2/5">
              <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">{`Hi, I'm ${person.name}!`}</h1>
              <p className="text-lg mt-4 mb-6 md:text-2xl">
                Email:{" "}
                <span className="font-semibold text-teal-600">{person.email}</span>{" "}
                <br />
                Number:{" "}
                <span className="font-semibold text-teal-600">{person.number}</span>
              </p>
            </div>
          </div>
        ))}
      </section>
      <AboutUsFooter />
    </div>
  );
};

export default HeroSection;
