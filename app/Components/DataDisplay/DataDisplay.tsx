"use client";

import { FC, useState } from 'react';

interface DataItem {
  id: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
}

const DataDisplay: FC = () => {
  const [data, setData] = useState<DataItem>({ id: 0, name: '', weight: 0, sprites: { front_default: '' } });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleFetchData = async () => {
    setStatus('loading');
    
    try {
      const response = await fetch(' https://pokeapi.co/api/v2/pokemon/hypno');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const items = await response.json();
      setData(items);
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Data Items</h2>
        <button
          onClick={handleFetchData}
          disabled={status === 'loading'}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 
                   disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {status === 'loading' ? 'Loading...' : 'Fetch A pokemon'}
        </button>
      </div>

      {status === 'loading' && (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin h-8 w-8 border-4 border-black border-t-transparent rounded-full"></div>
        </div>
      )}

      {status === 'error' && (
        <div className="text-red-600 p-8 text-center">
          Failed to load data. Please try again.
        </div>
      )}

      {status === 'success' && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
         
            <div 
              key={data.id}
              className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-2">{data.name}</h3>
                      <p className="text-gray-600">{data.weight}</p>
                      <img src={data.sprites.front_default} alt={data.name} />
            </div>

        </div>
      )}
    </div>
  );
};

export default DataDisplay; 