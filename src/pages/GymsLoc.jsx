import React from 'react';

const gyms = [
  {
    id: 1,
    name: 'Iron Haven Gym',
    city: 'New York, USA',
    address: '123 Muscle Ave, Manhattan',
    services: ['Weights', 'Cardio', 'CrossFit'],
  },
  {
    id: 2,
    name: 'FlexZone Fitness',
    city: 'London, UK',
    address: '78 King Street, Soho',
    services: ['Yoga', 'Pilates', 'Strength Training'],
  },
  {
    id: 3,
    name: 'Pulse Factory',
    city: 'Berlin, Germany',
    address: '22 Kraftwerkstrasse, Mitte',
    services: ['HIIT', 'Bootcamp', 'Personal Training'],
  },
  {
    id: 4,
    name: 'ZenBody Studio',
    city: 'Tokyo, Japan',
    address: '9-4 Wellness Rd, Shibuya',
    services: ['Meditation', 'Stretching', 'Tai Chi'],
  },
  {
    id: 5,
    name: 'Atlas Club',
    city: 'Lisbon, Portugal',
    address: '45 Rua do Fitness, Bairro Alto',
    services: ['Strength & Conditioning', 'Nutrition Counseling'],
  },
];

function GymsLoc() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Gyms</h1>

      <div className="space-y-4">
        {gyms.map((gym) => (
          <div
            key={gym.id}
            className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">{gym.name}</h2>
            <p className="text-sm text-gray-600">{gym.address}, {gym.city}</p>
            <p className="mt-2 text-sm">
              <strong>Services:</strong> {gym.services.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GymsLoc;
