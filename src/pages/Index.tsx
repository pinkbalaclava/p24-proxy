import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    // Remove any existing widgets
    const existingWidget = document.querySelector('elevenlabs-convai');
    if (existingWidget) existingWidget.remove();

    // Inject the correct script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Inject your correct widget tag
    const widget = document.createElement('elevenlabs-convai');
    widget.setAttribute('agent-id', 'agent_01jxs6d8d7fs9vmgc3g26bxgm2');
    document.body.appendChild(widget);

    return () => {
      // Clean up
      script.remove();
      widget.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Other content */}
    </div>
  );
}
