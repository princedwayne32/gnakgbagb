import { useState, useRef, useEffect } from 'react';
import { useFetchCrypto } from '../hooks/useFetchCrypto';
import MarketChart from '../components/MarketChart';

const Home = () => {
  const { loading, error } = useFetchCrypto();
  const [search, setSearch] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // Automatically focus the search bar on load
    inputRef.current?.focus();
  }, []);

  if (loading) return <div className="p-10 text-white text-center">Scanning Blockchain...</div>;
  if (error) return <div className="p-10 text-red-500 text-center">Error: {error}</div>;

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search coins..."
        className="w-full p-3 mb-6 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <MarketChart />
      {/* Add coin list rendering here */}
    </div>
  );
};
export default Home;