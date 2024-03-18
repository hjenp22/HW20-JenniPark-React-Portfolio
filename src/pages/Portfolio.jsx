import Project from "../components/Project";


export default function Portfolio() {
  // use an object for the project
  const projects = [
    {
      id: 1,
      name: "NETFLEX",
      githubLink: "https://github.com/Project2Team1GPR/NETFLEX",
      deployedLink: "https://project2-team1-netflex.onrender.com/login",
      image: '../images/NetFlex.jpeg',
    },
    {
        id: 2,
        name: "ORM E-Commerce Back End",
        githubLink: "https://github.com/hjenp22/ORM-E-Commerce-Back-End-HW13",
        deployedLink: "https://project2-team1-netflex.onrender.com/login", //need to render
        image: '../images/NetFlex.jpeg',
      },
      {
        id: 3,
        name: "Server Side API Weather Dashboard",
        githubLink: "https://github.com/hjenp22/Server-SideAPI-Weather-Dashboard",
        deployedLink: "https://project2-team1-netflex.onrender.com/login", //need to render
        image: '../images/NetFlex.jpeg',
      },
    //add 4 more
    //https://github.com/hjenp22/ORM-E-Commerce-Back-End-HW13
  ];

  return (
    <>
      <div>
        <div className="container mt-5 mb-5 p-3 py-md-5 px-md-3 portfolio-container">
          <h1>Portfolio</h1>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {projects.map((project) => (
              <div key={project.id} className="col">
                <Project
                  name={project.name}
                  githubLink={project.githubLink}
                  deployedLink={project.deployedLink}
                  image={project.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}