import React from "react";

// Component
import ProjectItem from "./ProjectItem";

// Evsu Emap Images
import emapHome from "../../assets/evsu-emap/home.png";
import emapLogin from "../../assets/evsu-emap/login.png";
import emapDashboard from "../../assets/evsu-emap/dashboard.png";

// Zekiel Lending
import zekielLogin from "../../assets/zekiel-lending/login.jpg";
import zekielDashboard from "../../assets/zekiel-lending/dashboard.jpg";
import zekielUsers from "../../assets/zekiel-lending/users.jpg";
import zekielUserdata from "../../assets/zekiel-lending/user-data.jpg";

// Tanauan Images
import tanauanLogin from "../../assets/tanauan-reservation/login.png";
import tanauanRegister from "../../assets/tanauan-reservation/register.png";
import tanauanDashboard1 from "../../assets/tanauan-reservation/dashboard1.png";
import tanauanDashboard2 from "../../assets/tanauan-reservation/dashboard1.png";

// Tech Ecommerce
import techHome from "../../assets/tech-eccomerce/home.png";
import techProdcuts from "../../assets/tech-eccomerce/products.png";
import techCart from "../../assets/tech-eccomerce/cart.png";

// Landing Pages
import landingpage1 from "../../assets/landing-pages/landingpage1.png";
import landingpage2 from "../../assets/landing-pages/landingpage2.png";
import landingpage3 from "../../assets/landing-pages/landingpage3.png";

const Projects = () => {
  const myProjects = [
    {
      title: "Zekiel Lending",
      images: [zekielLogin, zekielDashboard, zekielUsers, zekielUserdata],
      description: `
      Zekiel Lending is a custom-made financial management app that helps track lending activities. 
      The app functions as a digital ledger that records loans, borrowers, and interest rates, 
      making it easy to keep track of lending transactions. 
      `,

      techStack: ["Express JS", "Mongo DB", "React Native", "Native Base"],
      github: "https://github.com/MKemmx/zekiel-lending-mobile",
      liveSite: "#",
    },
    {
      title: "EVSU Emap",
      images: [emapHome, emapLogin, emapDashboard],
      description: `
        Mobile App Map Directory of EVSU Main Campus" 
        offers a solution to the complex navigation of a large campus by providing a map that tracks the user's 
        location and provides directions to their destination. We also included a News and Updates tool to keep 
        users informed about campus events.
      `,

      techStack: [
        "HTML",
        "CSS",
        "React JS",
        "Material-UI V5",
        "Express JS",
        "Mongo DB",
      ],
      github: "https://github.com/MKemmx/emap-frontend",
      liveSite: "https://emap-evsu.vercel.app/",
    },
    {
      title: "Tanauan Civic Center Reservation System",
      images: [
        tanauanLogin,
        tanauanRegister,
        tanauanDashboard1,
        tanauanDashboard2,
      ],
      description: `
      The Tanauan Civic Center Reservation System is an online platform that simplifies the reservation process for the civic center. 
      Customers can easily book their desired dates and times, making event planning hassle-free.
        `,
      techStack: [
        "HTML",
        "CSS",
        "React JS",
        "Tailwind CSS",
        "Express JS",
        "Mongo DB",
      ],
      github: "https://github.com/MKemmx",
      liveSite: "https://tanauan-civic-center-reservation.vercel.app/",
    },
    {
      title: "Tech Ecommerce",
      images: [techHome, techProdcuts, techCart],
      description: `
        Tech Ecommerce is a minimalist e-commerce app that allows users to add products 
        to their cart. Its simple and intuitive design offers a user-friendly shopping experience.
        `,
      techStack: ["HTML", "CSS", "React JS"],
      github: "https://github.com/MKemmx/eccomerce-front-end",
      liveSite: "https://tech-ecommerce.vercel.app/",
    },
    {
      title: "Landing Pages",
      images: [landingpage1, landingpage2, landingpage3],
      description:
        "Front-end Mentor landing page challeges and other random site.",
      techStack: ["HTML", "SCSS", "Javascript"],
      github: "https://github.com/MKemmx/Book-Mark-Landing-Page",
      liveSite:
        "https://fronted-mentor-landing-page-clone-fronted-mentor.vercel.app/",
    },
  ];

  return (
    <section id="projects">
      {/* <div  className="h-0 md:h-[1vh]"></div> */}
      <div className="w-full text-white ">
        <div className="container flex items-center flex-col justify-center mx-auto h-auto py-10 my-14 min-h-[90vh]">
          <h1 className="pt-5 md:pt-12 text-3xl font-bold text-[#FBAE3C] mr-auto mb-10">
            Projects
          </h1>
          <div className="space-y-12 md:space-y-24">
            {myProjects.map((item, index) => {
              const isOdd = index % 2 === 0;
              return <ProjectItem item={item} isOdd={isOdd} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
