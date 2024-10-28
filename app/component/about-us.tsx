export const meta = () => {
    return [
      { title: "About Us - Expense Tracker" },
      { name: "description", content: "Learn more about Expense Tracker and our mission to help you manage your finances efficiently." },
    ];
  };
  
  export default function AboutPage() {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        {/* Main Content Wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
            <p className="mt-4 text-lg text-gray-600">
              Our mission is to help individuals and businesses take control of their finances with ease and clarity.
            </p>
          </div>
  
          {/* Content Sections */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Section 1: Who We Are */}
            <div>
              <h2 className="text-2xl font-bold text-indigo-600">Who We Are</h2>
              <p className="mt-4 text-gray-600">
                ExpenseTracker is a comprehensive platform designed to simplify the way you manage your finances. 
                Whether you're tracking personal expenses or managing business finances, we offer tools to help 
                you stay organized and achieve your financial goals.
              </p>
            </div>
  
            {/* Section 2: Our Mission */}
            <div>
              <h2 className="text-2xl font-bold text-indigo-600">Our Mission</h2>
              <p className="mt-4 text-gray-600">
                Our mission is to empower individuals and small businesses to take control of their financial future. 
                By providing a simple yet powerful interface, we aim to make financial management easy, efficient, and accessible to everyone.
              </p>
            </div>
  
            {/* Section 3: Our Values */}
            <div>
              <h2 className="text-2xl font-bold text-indigo-600">Our Values</h2>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>Transparency: We believe in open and honest financial management.</li>
                <li>Accessibility: Financial tracking should be easy for everyone.</li>
                <li>Innovation: We continuously improve our platform to meet your needs.</li>
                <li>Customer Focus: Your financial success is our top priority.</li>
              </ul>
            </div>
  
            {/* Section 4: Our History */}
            <div>
              <h2 className="text-2xl font-bold text-indigo-600">Our History</h2>
              <p className="mt-4 text-gray-600">
                Founded in 2023, ExpenseTracker started with the goal of creating a modern, user-friendly solution 
                for personal and business financial management. Over the past year, we've grown into a trusted 
                platform for users worldwide.
              </p>
            </div>
          </div>
  
          {/* Call to Action Section */}
          <div className="mt-16 bg-indigo-600 text-white py-10 rounded-lg text-center">
            <h2 className="text-3xl font-bold">Ready to Take Control of Your Finances?</h2>
            <p className="mt-4">
              Join thousands of users who are using ExpenseTracker to simplify their financial management today.
            </p>
            <div className="mt-6">
              <a
                href="/features"
                className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-200 transition"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  