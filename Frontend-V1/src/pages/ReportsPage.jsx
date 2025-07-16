import React, { useState } from 'react';
import { Download, Calendar, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const ReportsPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  // Mock data
  const revenueData = [
    { month: 'Jan', revenue: 450000, expenses: 120000 },
    { month: 'Feb', revenue: 520000, expenses: 135000 },
    { month: 'Mar', revenue: 480000, expenses: 128000 },
    { month: 'Apr', revenue: 610000, expenses: 150000 },
    { month: 'May', revenue: 550000, expenses: 140000 },
    { month: 'Jun', revenue: 670000, expenses: 160000 },
  ];

  const occupancyData = [
    { month: 'Jan', rate: 92 },
    { month: 'Feb', rate: 89 },
    { month: 'Mar', rate: 95 },
    { month: 'Apr', rate: 88 },
    { month: 'May', rate: 93 },
    { month: 'Jun', rate: 96 },
  ];

  const summaryStats = [
    {
      title: 'Total Revenue',
      value: 'KES 3.28M',
      change: '+12%',
      trend: 'up',
      icon: TrendingUp,
    },
    {
      title: 'Total Expenses',
      value: 'KES 833K',
      change: '+5%',
      trend: 'up',
      icon: TrendingUp,
    },
    {
      title: 'Net Profit',
      value: 'KES 2.45M',
      change: '+18%',
      trend: 'up',
      icon: TrendingUp,
    },
    {
      title: 'Avg Occupancy',
      value: '92.2%',
      change: '+2%',
      trend: 'up',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600">Financial insights and analytics</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>{' '}
                from last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue vs Expenses Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue vs Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`KES ${value.toLocaleString()}`, '']} />
              <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
              <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Occupancy Rate Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Occupancy Rate Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={occupancyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}%`, 'Occupancy Rate']} />
              <Line type="monotone" dataKey="rate" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Property Performance Table */}
      <Card>
        <CardHeader>
          <CardTitle>Property Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Property</th>
                  <th className="text-left p-2">Revenue</th>
                  <th className="text-left p-2">Occupancy</th>
                  <th className="text-left p-2">Expenses</th>
                  <th className="text-left p-2">Net Income</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Sunset Apartments</td>
                  <td className="p-2">KES 1.08M</td>
                  <td className="p-2">92%</td>
                  <td className="p-2">KES 240K</td>
                  <td className="p-2">KES 840K</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Garden View Homes</td>
                  <td className="p-2">KES 680K</td>
                  <td className="p-2">88%</td>
                  <td className="p-2">KES 150K</td>
                  <td className="p-2">KES 530K</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">City Center Plaza</td>
                  <td className="p-2">KES 1.44M</td>
                  <td className="p-2">80%</td>
                  <td className="p-2">KES 320K</td>
                  <td className="p-2">KES 1.12M</td>
                </tr>
                <tr>
                  <td className="p-2">Riverside Estate</td>
                  <td className="p-2">KES 1.05M</td>
                  <td className="p-2">83%</td>
                  <td className="p-2">KES 280K</td>
                  <td className="p-2">KES 770K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsPage;