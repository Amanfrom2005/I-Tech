import { Activity, ArrowRight, CheckCircle, ClapperboardIcon, Cloud, Code, GitFork, Github, Lock, Settings, SmilePlusIcon } from "lucide-react";
import PagesTitle from "../components/PagesTitle";
import Img1 from "../assets/images/teachers-imgs/img1.webp";
import Img2 from "../assets/images/teachers-imgs/img2.webp";
import Img3 from "../assets/images/teachers-imgs/img3.webp";

export default function TechTraining() {
  return (
    <>
    <PagesTitle title="Courses & Techears"  paragraph="Chose any IT courses you want & learn from the best teachers in our institute" ></PagesTitle>
      <section className="min-h-screen bg-white cursor-default">
        <div className="container mx-auto px-4 py-12 md:py-20">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Instructors Column */}
            <div className="space-y-4 animate-fade-in">
              {instructors.map((instructor, index) => (
                <div
                  key={instructor.name}
                  className="clip-path bg-primary p-6 flex items-center gap-6 transform transition-all duration-500 hover:translate-x-2"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                    <img
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl md:text-2xl font-bold">{instructor.name}</h3>
                    <div className="flex items-center gap-1 text-sm md:text-base">
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                      <span>
                        {instructor.experience} yrs. experience • {instructor.courses} courses
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Column */}
            <div className="space-y-6 animate-fade-in animation-delay-300">
              <div className="text-primary font-semibold">Top-tier training</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tackle tech trends with the best in the industry
              </h1>
              <p className="text-gray-700 text-lg">
                Learn from real experts. Our author list is highly curated with 91% of them backed by at least 10 years
                experience in their field. Cast a wide learning net or develop a highly specialized learning path,
                reassured that you're getting top notch, up-to-speed insights.
              </p>
              <div>
                <a href="#" className="inline-flex items-center text-primary font-semibold group">
                  View course library
                  <i className="bx bx-right-arrow ml-2 h-5 w-5 text-primary transform transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className="bg-white p-6 rounded-lg shadow-sm border border-Lgray-100 hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`clip-path w-12 h-12 rounded-[4px] flex items-center justify-center mb-4 ${category.bgColor}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a href="#" className={`inline-flex items-center ${category.textColor} font-semibold group`}>
                  {category.linkText}
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const instructors = [
  {
    name: "Priyanshu sir",
    experience: "25",
    courses: "4",
    image: Img1,
  },
  {
    name: "Rohit sir",
    experience: "24",
    courses: "94",
    image: Img2,
  },
  {
    name: "Parth sir",
    experience: "35",
    courses: "31",
    image: Img3,
  },
]

const categories = [
  {
    title: "AI + Data",
    description:
      "Work smarter (not harder) with artificial intelligence and keep up with Claude AI and more in this rapidly growing tech field.",
    linkText: "Generate AI skills",
    icon: <Settings className="h-6 w-6 text-white" />,
    bgColor: "bg-pink-500",
    textColor: "text-pink-500",
  },
  {
    title: "Software dev",
    description:
      "Build fluency in languages like C#, Java, Angular, and JavaScript and keep evolving as they do to develop efficiently.",
    linkText: "Speak software dev",
    icon: <Code className="h-6 w-6 text-white" />,
    bgColor: "bg-indigo-500",
    textColor: "text-indigo-500",
  },
  {
    title: "Cloud + IT Ops",
    description:
      "From AWS to Google Cloud and everything in between, expand your cloud clout for down-to-earth professional returns.",
    linkText: "Conquer the cloud",
    icon: <Cloud className="h-6 w-6 text-white" />,
    bgColor: "bg-orange-500",
    textColor: "text-orange-500",
  },
  {
    title: "Security",
    description:
      "Stop cyber attacks in their tracks and secure critical skills to position yourself as the expert at keeping data under lock and key.",
    linkText: "Lock down security learning",
    icon: <Lock className="h-6 w-6 text-white" />,
    bgColor: "bg-emerald-500",
    textColor: "text-emerald-500",
  },
  {
    title: "Marketing",
    description:
      "Master digital marketing strategies from SEO to social media and data-driven campaign optimization.",
    linkText: "Boost marketing skills",
    icon: <Activity className="h-6 w-6 text-white" />,
    bgColor: "bg-primary",
    textColor: "text-emerald-500",
  },
  {
    title: "Git + Github",
    description:
      "Master version control, collaborative workflows, and CI/CD pipelines with industry-standard tools.",
    linkText: "Commit to Git mastery",
    icon: <Github className="h-6 w-6 text-white" />,
    bgColor: "bg-secondary",
    textColor: "text-emerald-500",
  },
  {
    title: "Animation & VFX",
    description:
      "Create stunning visuals and motion graphics using industry-standard animation tools and techniques.",
    linkText: "Animate your future",
    icon: <ClapperboardIcon className="h-6 w-6 text-white" />,
    bgColor: "bg-red-500",
    textColor: "text-emerald-500",
  },
  {
    title: "Internship",
    description:
      "Get career-ready with resume building, technical interview practice, and real-world project experience.",
    linkText: "Launch your career",
    icon: <SmilePlusIcon className="h-6 w-6 text-white" />,
    bgColor: "bg-yellow-500",
    textColor: "text-emerald-500",
  },
]
