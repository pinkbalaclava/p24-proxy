import { useEffect, useState, useRef } from 'react';

const Index = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const widgetRef = useRef<HTMLDivElement>(null);

  // ✅ Inject widget + script on mount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      const existing = document.querySelector(
        'script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]'
      );
      if (existing) {
        document.body.removeChild(existing);
      }
    };
  }, []);

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ ElevenLabs ConvAI Widget */}
      <div ref={widgetRef}>
        <elevenlabs-convai agent-id="agent_01jxs6d8d7fs9vmgc3g26bxgm2"></elevenlabs-convai>
      </div>

      {/* ⬇️ Your existing UI continues */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold py-4">Your Property Listings</h1>
        </div>
      </header>
      {/* Add your listing grid or content below */}
    </div>
  );
};

export default Index;
