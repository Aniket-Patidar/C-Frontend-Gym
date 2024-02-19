import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const router = useRouter();
  let { id } = router.query;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  var MsgData = [
    {
      message: "I want to buy this packet 1 month Package , please contact us",
    },
    {
      message: "I want to buy this packet  4 month Package, please contact us",
    },
    {
      message: "I want to buy this packet  6 month Package, please contact us",
    },
    {
      message:
        "I want to buy this packet  12 month Package , please contact us",
    },
  ];

  useEffect(() => {
    id = parseInt(id);
    if (id && id < MsgData.length) {
      setFormData((prevData) => ({
        ...prevData,
        ...MsgData[id],
      }));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://sheetdb.io/api/v1/ikfz0ghau9j4e", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        toast.success("We will contact you soon!"); // Notify success
      } else {
        toast.error("Please try again later."); // Notify failure
      }
    } catch (error) {
      console.error("Error submitting the form:", error); // Log error
      toast.error("An error occurred. Please try again later."); // Notify error
    }

    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };
  return (
    <div>
      <>
        {/* source https://tailblocks.cc/ */}
        <section className="body-font relative bg-c1 text-white ">
          <Link href="/">
            <IoIosArrowBack className="font-semibold text-2xl absolute top-5 left-3 cursor-pointer iconsOpacity" />
          </Link>
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder={0}
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.380256349964!2d77.40270107503481!3d23.265628907214715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c683cc88a3d9b%3A0xd1efdc39648f68c8!2sNadra%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1708316222242!5m2!1sen!2sin"
              />


              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1 text-black">Nadra Bus Stand bhopal</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-red-500 leading-relaxed">
                    aniketPatidar76@email.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-lg mb-1 font-medium title-font">
                Contact Us
              </h2>
              <p className="leading-relaxed mb-5">
                We are thrilled to hear from you! Please fill out the form below
                and we will get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full  bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="  w-full   bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="number" className="leading-7 text-sm">
                    Phone number
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                    className="w-full bg-white required rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    placeholder="Enter your message here"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg cool-button"
                >
                  Submit
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p>
            </div>
          </div>
        </section>
      </>
      <ToastContainer></ToastContainer>
    </div>
  );
};
export default ContactUs;
