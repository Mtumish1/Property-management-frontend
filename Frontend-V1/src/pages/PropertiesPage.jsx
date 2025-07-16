import React, { useState } from 'react';
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Dialog from '../components/common/Dialog';

const PropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Mock data
  const properties = [
    {
      id: 1,
      name: 'Sunset Apartments',
      location: 'Westlands, Nairobi',
      type: 'Apartment',
      units: 24,
      occupied: 22,
      rent: 45000,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Garden View Homes',
      location: 'Karen, Nairobi',
      type: 'House',
      units: 8,
      occupied: 7,
      rent: 85000,
      status: 'Active',
    },
    {
      id: 3,
      name: 'City Center Plaza',
      location: 'CBD, Nairobi',
      type: 'Commercial',
      units: 15,
      occupied: 12,
      rent: 120000,
      status: 'Active',
    },
    {
      id: 4,
      name: 'Riverside Estate',
      location: 'Kiambu',
      type: 'Apartment',
      units: 36,
      occupied: 30,
      rent: 35000,
      status: 'Maintenance',
    },
  ];

  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'Inactive':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getOccupancyRate = (occupied, total) => {
    return Math.round((occupied / total) * 100);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Properties</h1>
          <p className="text-gray-600">Manage your property portfolio</p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Property
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Properties Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Properties</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Units</TableHead>
                <TableHead>Occupancy</TableHead>
                <TableHead>Rent Range</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProperties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell className="font-medium">{property.name}</TableCell>
                  <TableCell>{property.location}</TableCell>
                  <TableCell>{property.type}</TableCell>
                  <TableCell>{property.units}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span>{property.occupied}/{property.units}</span>
                      <Badge variant="secondary">
                        {getOccupancyRate(property.occupied, property.units)}%
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>KES {property.rent.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(property.status)}>
                      {property.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Property Modal */}
      <Dialog
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Property"
        size="lg"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Property Name</label>
              <Input placeholder="Enter property name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Property Type</label>
              <select className="w-full p-2 border rounded-md">
                <option>Select type</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Commercial</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <Input placeholder="Enter location" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Number of Units</label>
              <Input type="number" placeholder="0" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Base Rent</label>
              <Input type="number" placeholder="0" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea 
              className="w-full p-2 border rounded-md h-20" 
              placeholder="Property description"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-6">
          <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
            Cancel
          </Button>
          <Button>Add Property</Button>
        </div>
      </Dialog>
    </div>
  );
};

export default PropertiesPage;