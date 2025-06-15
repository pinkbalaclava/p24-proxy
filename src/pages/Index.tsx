
import { useState } from "react";
import { Search, MapPin, Bed, Bath, Car, Heart, Grid, List, SlidersHorizontal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const properties = [
    {
      id: 1,
      price: "R 2,950,000",
      title: "3 Bedroom House",
      location: "Ballito, KwaZulu-Natal",
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      agent: "John Smith Properties",
      type: "House"
    },
    {
      id: 2,
      price: "R 1,850,000",
      title: "2 Bedroom Apartment",
      location: "Umhlanga, KwaZulu-Natal",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      agent: "Coastal Properties",
      type: "Apartment"
    },
    {
      id: 3,
      price: "R 4,200,000",
      title: "4 Bedroom House",
      location: "Dolphin Coast, KwaZulu-Natal",
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      agent: "Premium Estates",
      type: "House"
    },
    {
      id: 4,
      price: "R 3,100,000",
      title: "3 Bedroom Townhouse",
      location: "Salt Rock, KwaZulu-Natal",
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      agent: "Ocean View Properties",
      type: "Townhouse"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/551b38b3-4326-4982-af32-dcd02b149160.png" 
                alt="Property24" 
                className="h-8"
              />
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Buy</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Rent</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Sell</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Commercial</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Register</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by area, suburb or address"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                defaultValue="Ballito and Dolphin Coast"
              />
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-4">
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Townhouse</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Min Price</option>
                <option>R 500,000</option>
                <option>R 1,000,000</option>
                <option>R 2,000,000</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Max Price</option>
                <option>R 2,000,000</option>
                <option>R 5,000,000</option>
                <option>R 10,000,000</option>
              </select>
              <Button className="bg-orange-500 hover:bg-orange-600 px-6">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-80 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Refine Search</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Bedrooms</label>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
                        >
                          {num}+
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Bathrooms</label>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4].map((num) => (
                        <button
                          key={num}
                          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
                        >
                          {num}+
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Parking</label>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4].map((num) => (
                        <button
                          key={num}
                          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
                        >
                          {num}+
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Popular Areas</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-600 hover:underline">Ballito</a>
                  <a href="#" className="block text-blue-600 hover:underline">Umhlanga</a>
                  <a href="#" className="block text-blue-600 hover:underline">Salt Rock</a>
                  <a href="#" className="block text-blue-600 hover:underline">Dolphin Coast</a>
                  <a href="#" className="block text-blue-600 hover:underline">La Mercy</a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Property Listings */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Properties for Sale</h1>
                <p className="text-gray-600 mt-1">Showing 1-20 of 1,847 results in Ballito and Dolphin Coast</p>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                    <option>Relevance</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                </div>
                <div className="flex border border-gray-300 rounded">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Property Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}>
              {properties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={viewMode === 'list' ? 'flex' : ''}>
                    <div className={`relative ${viewMode === 'list' ? 'w-80' : ''}`}>
                      <img
                        src={property.image}
                        alt={property.title}
                        className={`w-full object-cover ${viewMode === 'list' ? 'h-48' : 'h-48'}`}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                        onClick={() => toggleFavorite(property.id)}
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            favorites.has(property.id) 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-gray-600'
                          }`} 
                        />
                      </Button>
                    </div>
                    <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-gray-900">{property.price}</h3>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {property.type}
                        </span>
                      </div>
                      <h4 className="font-medium text-gray-800 mb-1">{property.title}</h4>
                      <p className="text-gray-600 text-sm mb-3 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {property.location}
                      </p>
                      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Bed className="h-4 w-4 mr-1" />
                          {property.bedrooms}
                        </div>
                        <div className="flex items-center">
                          <Bath className="h-4 w-4 mr-1" />
                          {property.bathrooms}
                        </div>
                        <div className="flex items-center">
                          <Car className="h-4 w-4 mr-1" />
                          {property.parking}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-500">{property.agent}</p>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button size="sm" className="bg-blue-600">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <span className="px-2">...</span>
                <Button variant="outline" size="sm">93</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
