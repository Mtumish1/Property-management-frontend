import React, { useState } from 'react';
import { Download, Eye, Calendar, DollarSign, TrendingUp, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LandlordPortal = () => {
  const [selectedProperty, setSelectedProperty] = useState('all');

  // Mock data
  const properties = [
    {
      id: 1,
      name: 'Sunset Apartments',
      units: 24,
      occupied: 22,
      monthlyRevenue: 1080000,
      yearlyRevenue: 12960000,
    },
    {
      id: 2,
      name: 'Garden View Homes',
      units: 8,
      occupied: 7,
      monthlyRevenue: 595000,
      yearlyRevenue: 7140000,
    },
  ];

  const statements = [
    {
      id: 1,
      period: 'December 2023',
      property: 'Sunset Apartments',
      grossRent: 1080000,
      expenses: 240000,
      commission: 108000,
      netAmount: 732000,
      status: 'Paid',
    },
    {
      id: 2,
      period: 'November 2023',
      property: 'Sunset Apartments',
      grossRent: 1080000,
      expenses: 220000,
      commission: 108000,
      netAmount: 752000,
      status: 'Paid',
    },
    {
      id: 3,
      period: 'December 2023',
      property: 'Garden View Homes',
      grossRent: 595000,
      expenses: 150000,
      commission: 59500,
      netAmount: 385500,
      status: 'Paid',
    },
  ];

  const totalRevenue = properties.reduce((sum, prop) => sum + prop.monthlyRevenue, 0);
  const totalUnits = properties.reduce((sum, prop) => sum + prop.units, 0);
  const totalOccupied = properties.reduce((sum, prop) => sum + prop.occupied, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Landlord Portal</h1>
          <p className="text-gray-600">View your property statements and earnings</p>
        </div>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          Download Statement
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
            <Building className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{properties.length}</div>
            <p className="text-xs text-muted-foreground">
              {totalUnits} total units
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round((totalOccupied / totalUnits) * 100)}%</div>
            <p className="text-xs text-muted-foreground">
              {totalOccupied} of {totalUnits} units
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES {totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Gross rental income
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Payment</CardTitle>
            <Calendar className="w-4 h-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES 732K</div>
            <p className="text-xs text-muted-foreground">
              December 2023
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="statements" className="space-y-4">
        <TabsList>
          <TabsTrigger value="statements">Statements</TabsTrigger>
          <TabsTrigger value="properties">Properties</TabsTrigger>
        </TabsList>

        <TabsContent value="statements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Statements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Period</th>
                      <th className="text-left p-3">Property</th>
                      <th className="text-left p-3">Gross Rent</th>
                      <th className="text-left p-3">Expenses</th>
                      <th className="text-left p-3">Commission</th>
                      <th className="text-left p-3">Net Amount</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statements.map((statement) => (
                      <tr key={statement.id} className="border-b">
                        <td className="p-3 font-medium">{statement.period}</td>
                        <td className="p-3">{statement.property}</td>
                        <td className="p-3">KES {statement.grossRent.toLocaleString()}</td>
                        <td className="p-3">KES {statement.expenses.toLocaleString()}</td>
                        <td className="p-3">KES {statement.commission.toLocaleString()}</td>
                        <td className="p-3 font-medium">KES {statement.netAmount.toLocaleString()}</td>
                        <td className="p-3">
                          <Badge className="bg-green-100 text-green-800">
                            {statement.status}
                          </Badge>
                        </td>
                        <td className="p-3">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="properties" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((property) => (
              <Card key={property.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {property.name}
                    <Badge variant="secondary">
                      {property.occupied}/{property.units} units
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Occupancy Rate</span>
                      <span className="font-medium">
                        {Math.round((property.occupied / property.units) * 100)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Monthly Revenue</span>
                      <span className="font-medium">
                        KES {property.monthlyRevenue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Yearly Revenue</span>
                      <span className="font-medium">
                        KES {property.yearlyRevenue.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LandlordPortal;