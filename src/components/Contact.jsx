import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactSection(props) {
  return (
    <section
      style={{ color: props.color }}
      className=" scroll-mt-50 lg:pb-40 py-16 px-4"
      id="contact"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 style={{ color: props.color }} className="text-4xl font-bold mb-6">
          Contact Me
        </h2>
        <p className=" mb-12" style={{ color: props.color }}>
          You can reach me through the following methods:
        </p>

        <div className="  grid grid-cols-2 justify-center md:grid-cols-2 gap-11 text-left ">
          <div className="flex items-center lg:ml-30 ml-l md:ml-17 space-x-4">
            <FaPhone style={{ color: "#06b6d4" }} className=" text-2xl" />
            <span className="text-lg">+000000000</span>
          </div>
          <div className="flex items-center lg:ml-30 ml-l md:ml-17 space-x-4">
            <FaEnvelope style={{ color: "#06b6d4" }} className=" text-2xl" />
            <span className="text-lg">@example.com</span>
          </div>
          <div className="flex items-center lg:ml-30 ml-l md:ml-17 space-x-4">
            <FaMapMarkerAlt
              style={{ color: "#06b6d4" }}
              className=" text-2xl"
            />
            <span className="text-lg">Your Location</span>
          </div>
          <div className="flex items-center lg:ml-30 ml-l md:ml-17 space-x-4">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-lg  hover:text-cyan-500"
            >
              <FaLinkedin style={{ color: "#06b6d4" }} className="text-2xl" />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="flex items-center lg:ml-30 ml-l md:ml-17  space-x-4">
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-lg hover:text-cyan-500"
            >
              <FaGithub style={{ color: "#06b6d4" }} className="text-2xl" />
              <span>GitHub</span>
            </a>
          </div>
          <div className="flex items-center lg:ml-30 ml-l md:ml-17 space-x-4">
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-lg hover:text-cyan-500"
            >
              <FaWhatsapp style={{ color: "#06b6d4" }} className="text-2xl" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
