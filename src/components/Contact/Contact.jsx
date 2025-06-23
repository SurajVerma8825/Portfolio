import { useState } from 'react';
import Title from '../Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (username === '') return setErrMsg('Username is required!');
    if (phoneNumber === '') return setErrMsg('Phone number is required!');
    if (email === '') return setErrMsg('Please give your Email!');
    if (!emailValidation(email)) return setErrMsg('Give a valid Email!');
    if (subject === '') return setErrMsg('Please give your Subject!');
    if (message === '') return setErrMsg('Message is required!');

    const formData = new FormData();
    formData.append('access_key', '8f9c6d70-a7cc-4de0-8aae-7fbf0800714e');
    formData.append('username', username);
    formData.append('phoneNumber', phoneNumber);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSuccessMsg(`Thank you dear ${username}, your message was sent!`);
        setUsername('');
        setPhoneNumber('');
        setEmail('');
        setSubject('');
        setMessage('');
        setErrMsg('');
      } else {
        setErrMsg('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      setErrMsg('Something went wrong. Try again later.');
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-8 xl:px-8 pb-12 bg-gradient-to-br from-[#fef3f3] via-[#f6e9ff] to-[#e6fbfc] transition-all duration-500"
    >
      <div className="flex justify-center items-center text-center pt-6">
        <Title title="CONTACT US" />
      </div>
      <div className="w-full flex flex-col lgl:flex-row gap-10">
        <ContactLeft />

        {/* Contact Form */}
        <div className="w-full lgl:w-[60%] h-full py-12 px-6 md:px-10 bg-white/60 border border-white/30 backdrop-blur-lg rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
          <form onSubmit={handleSend} className="flex flex-col gap-5">
            {(errMsg || successMsg) && (
              <p
                className={`py-3 px-4 text-center text-sm font-medium rounded-lg ${
                  errMsg
                    ? 'bg-red-100 text-red-600'
                    : 'bg-green-100 text-green-600'
                } shadow-sm`}
              >
                {errMsg || successMsg}
              </p>
            )}

            <div className="flex flex-col lgl:flex-row gap-6">
              <div className="w-full flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="contactInput bg-white/80 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg px-4 py-2"
                  placeholder="John Doe"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="contactInput bg-white/80 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg px-4 py-2"
                  placeholder="+91 XXXXX-XXXXX"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contactInput bg-white/80 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg px-4 py-2"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="contactInput bg-white/80 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg px-4 py-2"
                placeholder="What is this about?"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="contactTextArea bg-white/80 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg px-4 py-2"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-[#ff0080] hover:bg-[#ff2e96] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 uppercase tracking-wider"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
