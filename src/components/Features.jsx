import React from "react";

const Features = () => {
  return (
    <section id="features" className="px-6 md:px-12 lg:px-20 py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Why Use Task Master?</h2>
        <p className="text-gray-400 mt-3">
          Everything you need to manage your daily workflow.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Easy Task Creation</h3>
          <p className="text-gray-400">
            Add tasks quickly with a simple and clean interface.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
          <p className="text-gray-400">
            See completed and pending work clearly.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Stay Organized</h3>
          <p className="text-gray-400">
            Keep your tasks in one place and manage your day better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;