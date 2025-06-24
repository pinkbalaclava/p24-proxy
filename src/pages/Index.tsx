import { useEffect } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter } from 'lucide-react';

export default function Index() {
  useEffect(() => {
    // Remove any existing widgets
    const existingWidget = document.querySelector('elevenlabs-convai');
    if (existingWidget) existingWidget.remove();

    // Remove any existing scripts
    const existingScript = document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]');
    if (existingScript) existingScript.remove();

    // Inject the script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Inject the widget
    const widget = document.createElement('elevenlabs-convai');
    widget.setAttribute('agent-id', 'agent_01jxs6d8d7fs9vmgc3g26bxgm2');
    document.body.appendChild(widget);

    return () => {
      // Clean up
      const scriptToRemove = document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]');
      const widgetToRemove = document.querySelector('elevenlabs-convai');
      if (scriptToRemove) scriptToRemove.remove();
      if (widgetToRemove) widgetToRemove.remove();
    };
  }, []);

  // Mock property data - first property matches the PropertyDetails page
  const properties = [
    {
      id: '1',
      title: 'Stunning Family Home in Simbithi Eco Estate',
      price: 'R 4,200,000',
      location: 'Simbithi Eco Estate, Ballito',
      bedrooms: 4,
      bathrooms: 3,
      garages: 2,
      image: '/lovable-uploads/551b38b3-4326-4982-af32-dcd02b149160.png',
      type: 'For Sale'
    },
    {
      id: '2',
      title: 'Modern Apartment with Sea Views',
      price: 'R 2,800,000',
      location: 'Umhlanga Rocks, Durban',
      bedrooms: 3,
      bathrooms: 2,
      garages: 1,
      image: '/lovable-uploads/74502427-121d-4e45-92ff-dea85714b8ac.png',
      type: 'For Sale'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Property Listings</h1>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search properties..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Market Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{properties.length}</div>
                <div className="text-sm text-gray-600">Properties Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">R 3.5M</div>
                <div className="text-sm text-gray-600">Average Price</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">15%</div>
                <div className="text-sm text-gray-600">Price Growth (YoY)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </main>
    </div>
  );
}
