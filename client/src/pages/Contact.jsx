import React from 'react';

const Contact = () => {
  return (
    <div className=" bg-green-200 min-h-screen from  flex flex-col items-center p-6">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 shadow-xl rounded-xl overflow-hidden border border-gray-200">
        
        <div className=" bg-green-50 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-green-800">Contact Information</h2>
          <p className="text-gray-700">Fill up the form and our team will get back to you within 24 hours.</p>

          <div className="text-green-900 space-y-2">
            <p>📞 <a href="tel:+919425010528" className="text-green-800 hover:underline">+91 94250 10528</a></p>
            <p>📧 <a href="mailto:meditechremedies16@gmail.com" className="text-green-800 hover:underline">Eventplanners@gmail.com</a></p>
            <p>📍 Ambernath East, Dist. Thane, Maharashtra</p>
            <p><strong>Correspondence Address:</strong><br />4th floor RICR , Minal mall , Bhopal 462021</p>
          </div>

          <a 
            href="https://wa.me/919425010528" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
            target="_blank" rel="noopener noreferrer"
          >
            Order Now via WhatsApp
          </a>
        </div>


        <div className="  bg-green-50 p-6 space-y-4">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="border p-2 rounded" />
              <input type="email" placeholder="Your Email" className="border p-2 rounded" />
            </div>
            <input type="text" placeholder="Subject" className="border p-2 w-full rounded" />
            <textarea rows="5" placeholder="Your Message" className="border p-2 w-full rounded"></textarea>
            <button 
              type="submit" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;