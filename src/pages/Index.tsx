import { useEffect, useRef, useState } from 'react';

const Index = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  // ✅ Ref to hold widget container
  const widgetRef = useRef<HTMLDivElement>(null);

  // ✅ Inject widget + script on mount
  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.innerHTML = `
        <elevenlabs-convai agent-id="agent_01jxs6d8d7fs9vmgc3g26bxgm2"></elevenlabs-convai>
      `;
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      if (widgetRef.current) {
        widgetRef.current.innerHTML = '';
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
      {/* ✅ Injected container for ElevenLabs ConvAI Widget */}
      <div ref={widgetRef} />

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-semibold text-gray-900">My Property Grid</h1>
        </div>
      </header>

      {/* ...rest of your component */}
    </div>
  );
};

export default Index;
