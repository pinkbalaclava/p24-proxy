
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  image: string;
  type: string;
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  garages,
  image,
  type
}: PropertyCardProps) {
  return (
    <Link to={`/property/${id}`} className="block hover:transform hover:scale-105 transition-transform duration-200">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <Badge className="absolute top-2 left-2 bg-blue-600">
            {type}
          </Badge>
        </div>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
            <span className="text-lg font-bold text-green-600 ml-2">{price}</span>
          </div>
          <CardDescription className="flex items-center text-sm">
            <MapPin className="h-3 w-3 mr-1" />
            {location}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Car className="h-4 w-4 mr-1" />
              <span>{garages}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
