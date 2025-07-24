import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, Clock, Users } from "lucide-react";

const MetricsCards = () => {
  const metrics = [
    {
      title: "Total Items",
      value: "1,248",
      change: "+12% from last month",
      icon: TrendingUp,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      changeColor: "text-success"
    },
    {
      title: "Low Stock Items",
      value: "28",
      change: "-5% from last week",
      icon: AlertTriangle,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      changeColor: "text-destructive"
    },
    {
      title: "Pending Requests",
      value: "12",
      change: "Awaiting approval",
      icon: Clock,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      changeColor: "text-warning"
    },
    {
      title: "Active Vendors",
      value: "32",
      change: "All systems operational",
      icon: Users,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      changeColor: "text-success"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index} className="p-6">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-4">
                <div className={`${metric.iconBg} p-2 rounded-lg`}>
                  <Icon className={`h-6 w-6 ${metric.iconColor}`} />
                </div>
              </div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                {metric.title}
              </h3>
              <p className="text-3xl font-bold text-foreground mb-1">
                {metric.value}
              </p>
              <p className={`text-sm ${metric.changeColor}`}>
                {metric.change}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MetricsCards;