import { Button } from "@/components/ui/button";
import { Plus, Download } from "lucide-react";

const DashboardActions = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-foreground">Inventory Dashboard</h1>
      <div className="flex space-x-4">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          New Purchase Request
        </Button>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
};

export default DashboardActions;