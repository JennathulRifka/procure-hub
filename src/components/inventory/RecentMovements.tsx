import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Filter, Download } from "lucide-react";

const RecentMovements = () => {
  const movements = [
    {
      item: "Laptop Chargers",
      category: "Electronics",
      type: "Stock In",
      quantity: "+25",
      date: "12 Oct 2023",
      time: "09:30 AM",
      requestor: "Sarah Johnson",
      department: "IT Department",
      status: "Completed",
      action: "View Details"
    },
    {
      item: "Printer Paper",
      category: "Office Supplies",
      type: "Stock Out",
      quantity: "-15",
      date: "10 Oct 2023",
      time: "02:15 PM",
      requestor: "Robert Smith",
      department: "Marketing",
      status: "Completed",
      action: "View Details"
    },
    {
      item: "Office Chairs",
      category: "Furniture",
      type: "Purchase Request",
      quantity: "10",
      date: "9 Oct 2023",
      time: "11:45 AM",
      requestor: "James Wilson",
      department: "HR Department",
      status: "Pending Approval",
      action: "Approve / Reject"
    },
    {
      item: "Whiteboards",
      category: "Office Supplies",
      type: "Stock In",
      quantity: "+5",
      date: "8 Oct 2023",
      time: "03:20 PM",
      requestor: "Michael Brown",
      department: "Sales",
      status: "Completed",
      action: "View Details"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-success text-success-foreground">Completed</Badge>;
      case "Pending Approval":
        return <Badge className="bg-warning text-warning-foreground">Pending Approval</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getActionButtons = (status: string, action: string) => {
    if (status === "Pending Approval") {
      return (
        <div className="flex space-x-2">
          <Button size="sm" className="bg-success text-success-foreground hover:bg-success/90">
            Approve
          </Button>
          <Button size="sm" variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
            Reject
          </Button>
        </div>
      );
    }
    return (
      <Button variant="ghost" size="sm" className="text-primary">
        {action}
      </Button>
    );
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Inventory Movements</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Requestor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {movements.map((movement, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div>
                    <div className="font-medium">{movement.item}</div>
                    <div className="text-sm text-muted-foreground">{movement.category}</div>
                  </div>
                </TableCell>
                <TableCell>{movement.type}</TableCell>
                <TableCell className={movement.quantity.startsWith('+') ? 'text-success' : movement.quantity.startsWith('-') ? 'text-destructive' : 'text-foreground'}>
                  {movement.quantity}
                </TableCell>
                <TableCell>
                  <div>
                    <div>{movement.date}</div>
                    <div className="text-sm text-muted-foreground">{movement.time}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{movement.requestor}</div>
                    <div className="text-sm text-muted-foreground">{movement.department}</div>
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(movement.status)}</TableCell>
                <TableCell>{getActionButtons(movement.status, movement.action)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
          <span>Showing 1 to 4 of 24 entries</span>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentMovements;