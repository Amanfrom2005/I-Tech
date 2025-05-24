import React, { useState } from "react";
import { MapPin, Mail, Clock, Send } from "lucide-react";
import PagesTitle from "../components/PagesTitle";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container max-w-7xl">
        <PagesTitle title="Contact us"></PagesTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="clip-path bg-primary text-white p-8 flex flex-col items-center text-center">
          <div className="clip-path rounded-[4px] bg-secondary p-3  mb-4">  
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-secondary">1215 Lorem Ipsum, Ch 170080</p>
          <p className="text-secondary">Chandigarh, INDIA</p>
        </div>

        <div className="clip-path bg-primary text-white p-8 flex flex-col items-center text-center">
          <div className="clip-path rounded-[4px] bg-secondary p-3 mb-4">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">E-Mail</h3>
          <p className="text-secondary">info@loremipsum.com</p>
          <p className="text-secondary">yourmail@gmail.com</p>
        </div>

        <div className="clip-path bg-primary text-white p-8 flex flex-col items-center text-center">
          <div className="clip-path rounded-[4px] bg-secondary p-3 mb-4">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Office Time</h3>
          <p className="text-secondary">Mon - Thu 9:00 am - 4:00 pm</p>
          <p className="text-secondary">Thu - Mon 10:00 pm - 5:00 pm</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white m-auto lg:px-10 py-4 px-2 cursor-default">
          <h2 className="text-secondary text-2xl font-bold mb-8">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="clip-path w-full px-4 py-3 border bg-secondary transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail"
                  required
                  className="clip-path w-full px-4 py-3 border bg-secondary transition-all"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="clip-path w-full px-4 py-3 border bg-secondary transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="clip-path w-full px-4 py-3 border bg-secondary transition-all"
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Your Message"
                rows={5}
                required
                className="clip-path w-full px-4 py-3 border bg-secondary transition-all"
              ></textarea>
            </div>
            <button
              type="submit"
              className="clip-path bg-primary text-white px-6 py-3 font-medium flex items-center gap-2 hover:bg-secondary transition-colors"
            >
              Send Now <i className="bx bx-right-arrow" />
            </button>
          </form>
        </div>

        <div className="h-[400px] md:h-full min-h-[400px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.6073826753984!2d72.83084812478005!3d19.383310447028894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af677b2ca297%3A0xfa96494c4ea34039!2sI%20Tech%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1747202887453!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
