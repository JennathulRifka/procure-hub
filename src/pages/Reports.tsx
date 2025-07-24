import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Calendar, TrendingUp, Package, DollarSign } from "lucide-react";
import Header from "@/components/inventory/Header";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const Reports = () => {
  const stockMovementData = [
    { month: "Jan", stockIn: 120, stockOut: 80 },
    { month: "Feb", stockIn: 150, stockOut: 110 },
    { month: "Mar", stockIn: 180, stockOut: 140 },
    { month: "Apr", stockIn: 160, stockOut: 120 },
    { month: "May", stockIn: 200, stockOut: 160 },
    { month: "Jun", stockIn: 220, stockOut: 180 }
  ];

  const categoryDistribution = [
    { name: "Electronics", value: 35, color: "#8B5CF6" },
    { name: "Office Supplies", value: 30, color: "#06B6D4" },
    { name: "Furniture", value: 20, color: "#10B981" },
    { name: "Others", value: 15, color: "#F59E0B" }
  ];

  const topItems = [
    { item: "Office Paper", requests: 25, totalCost: "$2,500" },
    { item: "Printer Ink", requests: 18, totalCost: "$1,800" },
    { item: "Laptops", requests: 12, totalCost: "$12,000" },
    { item: "Desk Chairs", requests: 10, totalCost: "$3,000" },
    { item: "Keyboards", requests: 8, totalCost: "$800" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <div className="flex space-x-4">
            <Select defaultValue="monthly">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Requests</p>
                  <p className="text-3xl font-bold">156</p>
                  <p className="text-sm text-green-600">+12% from last month</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Spend</p>
                  <p className="text-3xl font-bold">$45,280</p>
                  <p className="text-sm text-green-600">+8% from last month</p>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Processing Time</p>
                  <p className="text-3xl font-bold">3.2</p>
                  <p className="text-sm text-muted-foreground">days</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Approval Rate</p>
                  <p className="text-3xl font-bold">92%</p>
                  <p className="text-sm text-green-600">+3% from last month</p>
                </div>
                <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Stock Movement Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stockMovementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="stockIn" fill="#8B5CF6" name="Stock In" />
                  <Bar dataKey="stockOut" fill="#06B6D4" name="Stock Out" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inventory by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {categoryDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Requested Items */}
        <Card>
          <CardHeader>
            <CardTitle>Top Requested Items (This Month)</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Number of Requests</TableHead>
                  <TableHead>Total Cost</TableHead>
                  <TableHead>Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topItems.map((item, index) => (
                  <TableRow key={item.item}>
                    <TableCell className="font-medium">{item.item}</TableCell>
                    <TableCell>{item.requests}</TableCell>
                    <TableCell>{item.totalCost}</TableCell>
                    <TableCell>
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {index < 2 ? "High" : index < 4 ? "Medium" : "Low"}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Reports;