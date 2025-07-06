import React, { useEffect, useState } from 'react';
import MuscleSelector from '../components/MuscleSelector';

function TrainingPlans() {
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [exercises, setExercises] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const difficulties = ['beginner', 'intermediate', 'expert'];

  useEffect(() => {
    const fetchExercises = async () => {
      if (!selectedMuscle) return;

      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/exercises?muscle=${selectedMuscle}`,
          {
            headers: {
              'X-Api-Key': 'H5G5yark1yOSXKCPr/QN1w==8lSFSzSAMejHUq3c',
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setExercises(data);
        } else {
          console.error('Erro ao buscar exercícios');
          setExercises([]); // Limpa lista em caso de erro
        }
      } catch (error) {
        console.error('Erro ao buscar dados da API', error);
      }
    };

    fetchExercises();
  }, [selectedMuscle]);

  // Aplica o filtro por dificuldade
  const filteredExercises = exercises.filter((exercise) =>
    difficulty ? exercise.difficulty === difficulty : true
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Planos de Treino</h1>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <MuscleSelector
            selectedMuscle={selectedMuscle}
            onChange={setSelectedMuscle}
          />
        </div>

        <div className="flex-1">
          <label className="block font-semibold mb-1">Dificuldade:</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">Todas</option>
            {difficulties.map((level) => (
              <option key={level} value={level}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Lista de exercícios */}
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
            Nenhum exercício encontrado.
          </p>
        )}
      </div>
    </div>
  );
}

export default TrainingPlans;
