
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Car, Home } from 'lucide-react';

export default function PropertyDetails() {
  const { id } = useParams();

  // Mock property data based on the Property24 listing
  const property = {
    id: id || '1',
    title: 'Stunning Family Home in Simbithi Eco Estate',
    price: 'R 4,200,000',
    location: 'Simbithi Eco Estate, Ballito, KwaZulu-Natal',
    bedrooms: 4,
    bathrooms: 3,
    garages: 2,
    size: '320 sqm',
    erfSize: '800 sqm',
    images: [
      '/lovable-uploads/551b38b3-4326-4982-af32-dcd02b149160.png',
      '/lovable-uploads/74502427-121d-4e45-92ff-dea85714b8ac.png'
    ],
    description: 'This magnificent family home is situated in the prestigious Simbithi Eco Estate, offering luxury living with breathtaking views. The property features spacious living areas, modern finishes, and beautiful outdoor entertainment spaces perfect for family living.',
    features: [
      'Sea views',
      'Golf course access',
      'Security estate',
      'Modern kitchen',
      'Swimming pool',
      'Garden',
      'Double garage',
      'Study/Office'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="mb-4"
          >
            ← Back to Listings
          </Button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{property.location}</span>
          </div>
          <div className="text-2xl font-bold text-green-600">{property.price}</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {property.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Property image ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Property Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Property Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {property.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="justify-center">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Bedrooms</span>
                  </div>
                  <span className="font-semibold">{property.bedrooms}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Bathrooms</span>
                  </div>
                  <span className="font-semibold">{property.bathrooms}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Car className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Garages</span>
                  </div>
                  <span className="font-semibold">{property.garages}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Home className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Floor Size</span>
                  </div>
                  <span className="font-semibold">{property.size}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Home className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Erf Size</span>
                  </div>
                  <span className="font-semibold">{property.erfSize}</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
                <CardDescription>Get more information about this property</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full">View Contact Details</Button>
                <Button variant="outline" className="w-full">Schedule Viewing</Button>
                <Button variant="outline" className="w-full">Request Callback</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
