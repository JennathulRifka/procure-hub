import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const InventoryChart = () => {
  const data = [
    { category: "Office Supplies", currentStock: 350, minThreshold: 100 },
    { category: "Electronics", currentStock: 150, minThreshold: 80 },
    { category: "Furniture", currentStock: 220, minThreshold: 60 },
    { category: "Kitchen", currentStock: 90, minThreshold: 70 },
    { category: "Cleaning", currentStock: 160, minThreshold: 80 },
    { category: "Stationery", currentStock: 280, minThreshold: 100 },
    { category: "Paper Products", currentStock: 320, minThreshold: 120 },
    { category: "Misc", currentStock: 110, minThreshold: 50 }
  ];

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Inventory Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="category" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Legend />
              <Bar 
                dataKey="currentStock" 
                fill="hsl(var(--primary))" 
                name="Current Stock"
                radius={[2, 2, 0, 0]}
              />
              <Bar 
                dataKey="minThreshold" 
                fill="hsl(var(--destructive))" 
                name="Min Threshold"
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryChart;