import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock } from "lucide-react";

const LowStockAlerts = () => {
  const alerts = [
    {
      item: "Office Paper (A4)",
      unitsLeft: 25,
      minThreshold: 50,
      status: "critical",
      icon: AlertTriangle
    },
    {
      item: "Toner Cartridges",
      unitsLeft: 2,
      minThreshold: 5,
      status: "critical",
      icon: AlertTriangle
    },
    {
      item: "Staples (Box)",
      unitsLeft: 12,
      minThreshold: 15,
      status: "warning",
      icon: Clock
    },
    {
      item: "Hand Sanitizer",
      unitsLeft: 8,
      minThreshold: 10,
      status: "warning",
      icon: Clock
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Low Stock Alerts</CardTitle>
        <Button variant="ghost" size="sm" className="text-primary">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert, index) => {
          const Icon = alert.icon;
          const statusColor = alert.status === "critical" ? "text-destructive" : "text-warning";
          const bgColor = alert.status === "critical" ? "bg-red-50" : "bg-yellow-50";
          
          return (
            <div key={index} className={`p-4 rounded-lg border ${bgColor}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon className={`h-5 w-5 ${statusColor}`} />
                  <div>
                    <h4 className="font-medium text-foreground">{alert.item}</h4>
                    <p className="text-sm text-muted-foreground">
                      {alert.unitsLeft} units left • Min: {alert.minThreshold}
                    </p>
                  </div>
                </div>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Order
                </Button>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default LowStockAlerts;