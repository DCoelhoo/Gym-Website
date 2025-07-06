import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const API_KEY = '9766b01e426342478df4c7bab9e876d3';

export default function Nutrition() {
  const [mealPlan, setMealPlan] = useState(null);
  const [openDay, setOpenDay] = useState(null);

  useEffect(() => {
    async function fetchPlan() {
      const res = await fetch(
        `https://api.spoonacular.com/mealplanner/generate?timeFrame=week&targetCalories=2000&apiKey=${API_KEY}`
      );
      const data = await res.json();
      setMealPlan(data.week);
    }

    fetchPlan();
  }, []);

  if (!mealPlan) return <p className="mt-8 text-center">A carregar plano nutricional...</p>;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">Plano Nutricional da Semana</h1>

      <div className="space-y-4">
        {Object.entries(mealPlan).map(([day, info]) => {
          const isOpen = openDay === day;
          return (
            <div
              key={day}
              className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenDay(isOpen ? null : day)}
                className="flex w-full cursor-pointer items-center justify-between bg-gray-50 px-6 py-4 text-left transition hover:bg-gray-100"
              >
                <div>
                  <h2 className="text-xl font-semibold capitalize">{day}</h2>
                  <p className="text-sm text-gray-600">
                    {info.meals.length} refeições – {Math.round(info.nutrients.calories)} kcal
                  </p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t bg-white px-6 py-4">
                  <ul className="space-y-2">
                    {info.meals.map(meal => (
                      <li key={meal.id} className="border-b pb-2">
                        <a
                          href={`https://spoonacular.com/recipes/${meal.title
                            .toLowerCase()
                            .replace(/\s+/g, '-')}-${meal.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {meal.title}
                        </a>{' '}
                        – {meal.readyInMinutes} min
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-gray-500">
                    <strong>Totais:</strong> {Math.round(info.nutrients.calories)} kcal,{' '}
                    {info.nutrients.protein}g proteína, {info.nutrients.carbohydrates}g carbs,{' '}
                    {info.nutrients.fat}g gordura
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
