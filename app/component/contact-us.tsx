export const meta = () => {
    return [
      { title: "Contact Us - Expense Tracker" },
      { name: "description", content: "Get in touch with us for any questions or support related to Expense Tracker." },
    ];
  };
  
  export default function ContactUsPage() {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Side Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
              <p className="mt-4 text-lg text-gray-600">
                We're here to help! If you have any questions, concerns, or feedback, feel free to reach out. Our team will get back to you as soon as possible.
              </p>
  
              <div className="mt-8 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Our Address</h2>
                  <p className="text-gray-600">123 Expense Tracker St, Finance City, USA</p>
                </div>
  
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Phone</h2>
                  <p className="text-gray-600">+1 (800) 123-4567</p>
                </div>
  
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Email</h2>
                  <p className="text-gray-600">support@expensetracker.com</p>
                </div>
              </div>
            </div>
  
            {/* Right Side Form */}
            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form action="/send-message" method="post" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your full name"
                  />
                </div>
  
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="you@example.com"
                  />
                </div>
  
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Subject of your message"
                  />
                </div>
  
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  