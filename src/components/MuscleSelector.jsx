import React from 'react';

// List of available muscle groups
const muscleGroups = [
  'abdominals', 'biceps', 'calves', 'chest', 'glutes',
  'hamstrings', 'lats', 'quadriceps', 'triceps'
];

// MuscleSelector component used to choose a muscle group
function MuscleSelector({ selectedMuscle, onChange }) {
  return (
    <div className="mb-4">
      <label htmlFor="muscle-select" className="block mb-1 font-semibold">
        Choose a muscle group:
      </label>
      <select
        id="muscle-select"
        value={selectedMuscle}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
      >
        <option value="">-- Select a muscle --</option>
        {muscleGroups.map((muscle) => (
          <option key={muscle} value={muscle}>
            {muscle.charAt(0).toUpperCase() + muscle.slice(1).replace('_', ' ')}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MuscleSelector;
