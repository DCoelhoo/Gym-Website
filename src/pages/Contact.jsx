import React from 'react';

// Contact/About page for GymX
function Contact() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      {/* Page title */}
      <h1 className="mb-10 text-center text-4xl font-bold">About the Gym</h1>

      {/* About text section */}
      <div className="mb-12 space-y-6 leading-relaxed text-gray-700 text-justify">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend fringilla lectus
          vitae vestibulum. Praesent ornare dolor urna, non porttitor justo blandit sit amet. Nunc
          porta tempor nisl, vel suscipit dolor pharetra vel. Nam massa mi, semper eget auctor sit
          amet, euismod in velit. Etiam elementum sagittis libero, ac rutrum sem consequat vel.
          Etiam eget rhoncus massa, non tempus lacus. Nullam enim ligula, varius non dignissim a,
          rhoncus id purus. Ut mattis laoreet enim, non varius nisl posuere et. In ante tellus,
          sodales sit amet scelerisque eget, interdum in justo. Integer sed elit dui. Aliquam porta
          blandit imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <p>
          Aliquam erat volutpat. Suspendisse massa nulla, pulvinar in ex et, ullamcorper rhoncus
          arcu. Donec fermentum urna aliquam vulputate blandit. Proin aliquet elit vel tortor
          vehicula, eu egestas nisi semper. Cras ultricies libero a aliquam auctor. Etiam et iaculis
          elit, non dapibus neque. Sed ultricies nec urna ac tristique.
        </p>
        <p>
          Vivamus turpis nisl, tempus a eleifend non, porta eu risus. Ut aliquam mollis maximus.
          Cras auctor sapien quis consequat vestibulum. Mauris porta, enim pellentesque dapibus
          finibus, nulla diam scelerisque neque, in suscipit neque mauris vel dui. Aliquam et lacus
          mauris. Nam pulvinar tempor ante non sodales.
        </p>
      </div>

      {/* Contact information */}
      <h2 className="mb-6 text-3xl font-semibold">Contact Information</h2>
      <div className="mb-10 space-y-2 text-gray-800">
        <p>
          <strong>Address:</strong> Example Street nº123, Lisbon
        </p>
        <p>
          <strong>Phone:</strong> +351 912 345 678
        </p>
        <p>
          <strong>Email:</strong> geral@gymexample.com
        </p>
      </div>

      {/* Contact form */}
      <h2 className="mb-4 text-3xl font-semibold">Send Us a Message</h2>
      <form className="space-y-4">
        {/* Name field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        {/* Message field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
