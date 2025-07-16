import React, { useState } from 'react';
import { CreditCard, FileText, Wrench, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Dialog from '../components/common/Dialog';

const TenantPortal = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
  const [isWaiverModalOpen, setIsWaiverModalOpen] = useState(false);

  // Mock data
  const tenantInfo = {
    name: 'John Doe',
    unit: 'Sunset Apartments - 3B',
    rent: 45000,
    balance: 0,
    leaseEnd: '2024-12-31',
  };

  const payments = [
    {
      id: 1,
      date: '2024-01-15',
      amount: 45000,
      method: 'M-Pesa',
      status: 'Completed',
      reference: 'MPX123456789',
    },
    {
      id: 2,
      date: '2023-12-15',
      amount: 45000,
      method: 'M-Pesa',
      status: 'Completed',
      reference: 'MPX987654321',
    },
  ];

  const maintenanceRequests = [
    {
      id: 1,
      title: 'Leaking faucet in kitchen',
      description: 'The kitchen faucet has been leaking for 2 days',
      status: 'In Progress',
      date: '2024-01-10',
      priority: 'Medium',
    },
    {
      id: 2,
      title: 'Broken light bulb in bedroom',
      description: 'Main bedroom light bulb needs replacement',
      status: 'Completed',
      date: '2024-01-05',
      priority: 'Low',
    },
  ];

  const waiverRequests = [
    {
      id: 1,
      reason: 'Late payment fee waiver',
      amount: 5000,
      status: 'Pending',
      date: '2024-01-08',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pending':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tenant Portal</h1>
          <p className="text-gray-600">Welcome, {tenantInfo.name}</p>
        </div>
      </div>

      {/* Tenant Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Unit</CardTitle>
            <FileText className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{tenantInfo.unit}</div>
            <p className="text-xs text-muted-foreground">
              Lease expires: {new Date(tenantInfo.leaseEnd).toLocaleDateString()}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Rent</CardTitle>
            <CreditCard className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">KES {tenantInfo.rent.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Due on 15th of each month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
            {tenantInfo.balance > 0 ? (
              <AlertCircle className="w-4 h-4 text-red-600" />
            ) : (
              <CheckCircle className="w-4 h-4 text-green-600" />
            )}
          </CardHeader>
          <CardContent>
            <div className={`text-lg font-bold ${tenantInfo.balance > 0 ? 'text-red-600' : 'text-green-600'}`}>
              KES {tenantInfo.balance.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              {tenantInfo.balance > 0 ? 'Outstanding balance' : 'Account up to date'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
            <Clock className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button 
                size="sm" 
                className="w-full"
                onClick={() => setIsPaymentModalOpen(true)}
              >
                Pay Rent
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="payments" className="space-y-4">
        <TabsList>
          <TabsTrigger value="payments">Payment History</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="waivers">Waivers</TabsTrigger>
        </TabsList>

        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Date</th>
                      <th className="text-left p-3">Amount</th>
                      <th className="text-left p-3">Method</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Reference</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment) => (
                      <tr key={payment.id} className="border-b">
                        <td className="p-3">{new Date(payment.date).toLocaleDateString()}</td>
                        <td className="p-3">KES {payment.amount.toLocaleString()}</td>
                        <td className="p-3">{payment.method}</td>
                        <td className="p-3">
                          <Badge className={getStatusColor(payment.status)}>
                            {payment.status}
                          </Badge>
                        </td>
                        <td className="p-3 font-mono text-xs">{payment.reference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Maintenance Requests</h3>
            <Button onClick={() => setIsMaintenanceModalOpen(true)}>
              <Wrench className="w-4 h-4 mr-2" />
              New Request
            </Button>
          </div>

          <div className="space-y-4">
            {maintenanceRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">{request.title}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">{request.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Badge className={getPriorityColor(request.priority)}>
                        {request.priority}
                      </Badge>
                      <Badge className={getStatusColor(request.status)}>
                        {request.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Submitted: {new Date(request.date).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="waivers" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Waiver Requests</h3>
            <Button onClick={() => setIsWaiverModalOpen(true)}>
              <FileText className="w-4 h-4 mr-2" />
              Request Waiver
            </Button>
          </div>

          <div className="space-y-4">
            {waiverRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">{request.reason}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">
                        Amount: KES {request.amount.toLocaleString()}
                      </p>
                    </div>
                    <Badge className={getStatusColor(request.status)}>
                      {request.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Submitted: {new Date(request.date).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Payment Modal */}
      <Dialog
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        title="Make Rent Payment"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Amount</label>
            <Input 
              type="number" 
              value={tenantInfo.rent} 
              readOnly
              className="bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <Input placeholder="254712345678" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Payment Method</label>
            <select className="w-full p-2 border rounded-md">
              <option>M-Pesa</option>
              <option>Bank Transfer</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-6">
          <Button variant="outline" onClick={() => setIsPaymentModalOpen(false)}>
            Cancel
          </Button>
          <Button>Pay Now</Button>
        </div>
      </Dialog>

      {/* Maintenance Modal */}
      <Dialog
        isOpen={isMaintenanceModalOpen}
        onClose={() => setIsMaintenanceModalOpen(false)}
        title="New Maintenance Request"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input placeholder="Brief description of the issue" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Priority</label>
            <select className="w-full p-2 border rounded-md">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <Textarea 
              placeholder="Detailed description of the maintenance issue"
              className="h-20"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-6">
          <Button variant="outline" onClick={() => setIsMaintenanceModalOpen(false)}>
            Cancel
          </Button>
          <Button>Submit Request</Button>
        </div>
      </Dialog>

      {/* Waiver Modal */}
      <Dialog
        isOpen={isWaiverModalOpen}
        onClose={() => setIsWaiverModalOpen(false)}
        title="Request Waiver"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Waiver Type</label>
            <select className="w-full p-2 border rounded-md">
              <option>Late payment fee</option>
              <option>Maintenance charge</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Amount</label>
            <Input type="number" placeholder="0" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Reason</label>
            <Textarea 
              placeholder="Explain why you're requesting this waiver"
              className="h-20"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-6">
          <Button variant="outline" onClick={() => setIsWaiverModalOpen(false)}>
            Cancel
          </Button>
          <Button>Submit Request</Button>
        </div>
      </Dialog>
    </div>
  );
};

export default TenantPortal;