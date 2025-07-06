import React, { useEffect, useState } from 'react';
import MuscleSelector from '../components/MuscleSelector';

function TrainingPlans() {
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [exercises, setExercises] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const difficulties = ['beginner', 'intermediate', 'expert'];

  // Fetch exercises from API whenever a new muscle is selected
  useEffect(() => {
    const fetchExercises = async () => {
      if (!selectedMuscle) return;

      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/exercises?muscle=${selectedMuscle}`,
          {
            headers: {
              'X-Api-Key': 'H5G5yark1yOSXKCPr/QN1w==8lSFSzSAMejHUq3c', // Use env variable in production
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setExercises(data);
        } else {
          console.error('Failed to fetch exercises');
          setExercises([]);
        }
      } catch (error) {
        console.error('API error:', error);
      }
    };

    fetchExercises();
  }, [selectedMuscle]);

  // Filter exercises by selected difficulty
  const filteredExercises = exercises.filter((exercise) =>
    difficulty ? exercise.difficulty === difficulty : true
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Workout Plans</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Muscle selection */}
        <div className="flex-1">
          <MuscleSelector
            selectedMuscle={selectedMuscle}
            onChange={setSelectedMuscle}
          />
        </div>

        {/* Difficulty selection */}
        <div className="flex-1 ">
          <label className="block font-semibold mb-1">Difficulty:</label>
          <select
            className="w-full border rounded px-3 py-2 cursor-pointer"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">All</option>
            {difficulties.map((level) => (
              <option key={level} value={level} className='cursor-pointer'>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Exercise List */}
      <div className="space-y-4">
        {filteredExercises.length > 0 ? (
          filteredExercises.map((exercise, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 border hover:shadow-md transition duration-200"
            >
              <h2 className="text-lg font-bold mb-1">{exercise.name}</h2>
              <p className="text-sm text-gray-600 mb-2 italic">
                {exercise.difficulty.charAt(0).toUpperCase() +
                  exercise.difficulty.slice(1)}{' '}
                • {exercise.type}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {exercise.instructions.length > 500
                  ? `${exercise.instructions.slice(0, 500)}...`
                  : exercise.instructions}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No exercises found.
          </p>
        )}
      </div>
    </div>
  );
}

export default TrainingPlans;
