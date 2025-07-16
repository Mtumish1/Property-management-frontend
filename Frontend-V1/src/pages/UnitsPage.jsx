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

const UnitsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const units = [
    {
      id: 1,
      number: '3B',
      property: 'Sunset Apartments',
      type: '2 Bedroom',
      rent: 45000,
      status: 'Occupied',
      tenant: 'John Doe',
      leaseEnd: '2024-12-31',
    },
    {
      id: 2,
      number: 'H2',
      property: 'Garden View Homes',
      type: '3 Bedroom House',
      rent: 85000,
      status: 'Occupied',
      tenant: 'Jane Smith',
      leaseEnd: '2025-02-28',
    },
    {
      id: 3,
      number: 'S5',
      property: 'City Center Plaza',
      type: 'Shop',
      rent: 120000,
      status: 'Occupied',
      tenant: 'Mike Johnson',
      leaseEnd: '2025-01-31',
    },
    {
      id: 4,
      number: 'A12',
      property: 'Riverside Estate',
      type: '1 Bedroom',
      rent: 35000,
      status: 'Vacant',
      tenant: null,
      leaseEnd: null,
    },
    {
      id: 5,
      number: '1A',
      property: 'Sunset Apartments',
      type: '2 Bedroom',
      rent: 45000,
      status: 'Maintenance',
      tenant: null,
      leaseEnd: null,
    },
  ];

  const filteredUnits = units.filter(unit =>
    unit.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    unit.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
    unit.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    unit.tenant?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Occupied':
        return 'bg-green-100 text-green-800';
      case 'Vacant':
        return 'bg-yellow-100 text-yellow-800';
      case 'Maintenance':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Units</h1>
          <p className="text-gray-600">Manage individual property units</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Unit
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search units..."
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

      {/* Units Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Units</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Unit Number</TableHead>
                <TableHead>Property</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Rent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tenant</TableHead>
                <TableHead>Lease End</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUnits.map((unit) => (
                <TableRow key={unit.id}>
                  <TableCell className="font-medium">{unit.number}</TableCell>
                  <TableCell>{unit.property}</TableCell>
                  <TableCell>{unit.type}</TableCell>
                  <TableCell>KES {unit.rent.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(unit.status)}>
                      {unit.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {unit.tenant ? unit.tenant : <span className="text-gray-400">-</span>}
                  </TableCell>
                  <TableCell>
                    {unit.leaseEnd ? (
                      new Date(unit.leaseEnd).toLocaleDateString()
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
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
                          Edit Unit
                        </DropdownMenuItem>
                        {unit.status === 'Vacant' && (
                          <DropdownMenuItem>
                            <Plus className="w-4 h-4 mr-2" />
                            Add Tenant
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete Unit
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
    </div>
  );
};

export default UnitsPage;