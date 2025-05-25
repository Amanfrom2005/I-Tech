import { useEffect, useRef } from "react";
import PagesTitle from "../components/PagesTitle";

import Img1 from "../assets/images/testonomials-img/img1.jpg";
import Img2 from "../assets/images/testonomials-img/img2.jpg";
import Img3 from "../assets/images/testonomials-img/img3.jpg";
import Img4 from "../assets/images/testonomials-img/img4.jpg";
import Img5 from "../assets/images/testonomials-img/img5.jpg";
import Img6 from "../assets/images/testonomials-img/img6.jpg";
import Img7 from "../assets/images/testonomials-img/img7.jpg";
import Img8 from "../assets/images/testonomials-img/img8.jpg";
import Img9 from "../assets/images/testonomials-img/img9.jpg";

// Testimonial data
const testimonials = [
  {
    quote: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    name: "Aman Prajapati",
    handle: "@AmanFrom2005",
    avatar: Img1,
  },
  {
    quote:
      "Excepteur consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit cillum. Reprehenderit fugiat amet aliqua in commodo minim sunt laborum.",
    name: "Sushmit Tembe",
    handle: "@sushmittembe",
    avatar: Img2,
  },
  {
    quote:
      "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditis repudiandae. Earum deserunt enim molestiae ipsum perferendis.",
    name: "Rohit Gupta",
    handle: "@rohitgupta",
    avatar: Img3,
  },
  {
    quote:
      "Anim sit consequat culpa commodo eu do nisi commodo ut aute aliqua. Laborum esse duis tempor consectetur officia mollit fugiat. Exercitation qui elit minim minim quis fugiat ex.",
    name: "Kundan Vishwakarma",
    handle: "@kundanvishwakarma",
    avatar: Img4,
  },
  {
    quote: "Distinctio facere aliquam est qui atque sint molestias ad. Fuga consequuntur asperiores voluptatum ipsum.",
    name: "Sakir Khan",
    handle: "@sakirKhan",
    avatar: Img5,
  },
  {
    quote:
      "Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.",
    name: "Leonard Krasner",
    handle: "@leonardkrasner",
    avatar: Img6,
  },
  {
    quote: "Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque.",
    name: "Dries Vincent",
    handle: "@driesvincent",
    avatar: Img7,
  },
  {
    quote:
      "Nam nesciunt dolorem dolor asperiores sint. Incidunt molestiae quis delenti vitae ut in earum delectus iusto.",
    name: "Tom Cook",
    handle: "@tomcook",
    avatar: Img8,
  },
  {
    quote:
      "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
    name: "Floyd Miles",
    handle: "@floydmiles",
    avatar: Img9,
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const node = sectionRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (node) {
      observer.observe(node)
    }

    return () => {
      if (node) {
        observer.unobserve(node)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto opacity-0">
     <PagesTitle title="Testimonials" paragraph="We have worked with thousands of amazing people"></PagesTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="clip-path flex flex-col justify-between bg-secondary p-6 rounded-[8px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
          >
            <p className="text-gray-700 relative">
              <span className="absolute -top-2 -left-2 text-primary text-4xl">"</span>
              <span className="relative z-10">{testimonial.quote}</span>
              <span className="absolute -bottom-6 -right-2 text-primary text-4xl">"</span>
            </p>
            <div className="flex items-center mt-8">
              <div className="relative overflow-hidden rounded-full h-12 w-12 mr-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-primary uppercase">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
