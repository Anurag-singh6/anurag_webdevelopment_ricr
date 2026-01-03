import React, { useState } from "react";

const contact = () => {
  const [contactData, setdata] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
  });

  const [isLoading, setloading] = useState(false);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata((previousdata) => ({ ...previousdata, [name]: value }));
  };

  const handleClearform = () => {
    setdata({
      fullname: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    try {
      console.log(contactData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setloading(false);
    }
    handleClearform();
  };

  return (
    <>
      <div className="text-center">
        <h1>Contact Us</h1>
        <div className="container">
          <form onReset={handleClearform} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={contactData.fullname}
                onChange={handlechange}
                placeholder="Enter your Full Name"
                className="text-primary"
              />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                value={contactData.email}
                onChange={handlechange}
                placeholder="Enter your email"
                className="text-primary"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={contactData.phone}
                onChange={handlechange}
                placeholder="Enter your phone number"
                className="text-primary"
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={contactData.city}
                onChange={handlechange}
                placeholder="Enter your city"
                className="text-primary"
              />
              <div>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={contactData.subject}
                  onChange={handlechange}
                  placeholder="Enter your Full Name"
                  className="text-primary"
                />
              </div>
              <button className="btn btn-primary">
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default contact;
