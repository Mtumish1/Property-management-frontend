import React, { useState } from 'react';
import { Plus, Search, Filter, MoreHorizontal, Download, Eye, RefreshCw } from 'lucide-react';
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

const PaymentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSTKModalOpen, setIsSTKModalOpen] = useState(false);

  // Mock data
  const payments = [
    {
      id: 1,
      tenant: 'John Doe',
      unit: 'Sunset Apartments - 3B',
      amount: 45000,
      method: 'M-Pesa',
      status: 'Completed',
      date: '2024-01-15',
      reference: 'MPX123456789',
    },
    {
      id: 2,
      tenant: 'Jane Smith',
      unit: 'Garden View Homes - H2',
      amount: 85000,
      method: 'Bank Transfer',
      status: 'Completed',
      date: '2024-01-14',
      reference: 'BT987654321',
    },
    {
      id: 3,
      tenant: 'Mike Johnson',
      unit: 'City Center Plaza - S5',
      amount: 120000,
      method: 'M-Pesa',
      status: 'Pending',
      date: '2024-01-13',
      reference: 'MPX555666777',
    },
    {
      id: 4,
      tenant: 'Sarah Wilson',
      unit: 'Riverside Estate - A12',
      amount: 35000,
      method: 'M-Pesa',
      status: 'Failed',
      date: '2024-01-12',
      reference: 'MPX888999000',
    },
  ];

  const filteredPayments = payments.filter(payment =>
    payment.tenant.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.unit.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.reference.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getMethodColor = (method) => {
    switch (method) {
      case 'M-Pesa':
        return 'bg-green-100 text-green-800';
      case 'Bank Transfer':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
          <p className="text-gray-600">Track and manage all payments</p>
        </div>
        <Button onClick={() => setIsSTKModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Initiate STK Push
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search payments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Payments Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tenant</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Reference</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.tenant}</TableCell>
                  <TableCell>{payment.unit}</TableCell>
                  <TableCell>KES {payment.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getMethodColor(payment.method)}>
                      {payment.method}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(payment.status)}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                  <TableCell className="font-mono text-sm">{payment.reference}</TableCell>
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
                          <Download className="w-4 h-4 mr-2" />
                          Download Receipt
                        </DropdownMenuItem>
                        {payment.status === 'Pending' && (
                          <DropdownMenuItem>
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Check Status
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* STK Push Modal */}
      <Dialog
        isOpen={isSTKModalOpen}
        onClose={() => setIsSTKModalOpen(false)}
        title="Initiate STK Push"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Select Tenant</label>
            <select className="w-full p-2 border rounded-md">
              <option>Select tenant</option>
              <option>John Doe - Sunset Apartments 3B</option>
              <option>Jane Smith - Garden View Homes H2</option>
              <option>Mike Johnson - City Center Plaza S5</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <Input placeholder="254712345678" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Amount (KES)</label>
            <Input type="number" placeholder="0" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <Input placeholder="Rent payment for January 2024" />
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-6">
          <Button variant="outline" onClick={() => setIsSTKModalOpen(false)}>
            Cancel
          </Button>
          <Button>Send STK Push</Button>
        </div>
      </Dialog>
    </div>
  );
};

export default PaymentsPage;