import Header from "@/components/inventory/Header";
import DashboardActions from "@/components/inventory/DashboardActions";
import MetricsCards from "@/components/inventory/MetricsCards";
import InventoryChart from "@/components/inventory/InventoryChart";
import LowStockAlerts from "@/components/inventory/LowStockAlerts";
import RecentMovements from "@/components/inventory/RecentMovements";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 py-8">
        <DashboardActions />
        <MetricsCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <InventoryChart />
            <RecentMovements />
          </div>
          <div className="lg:col-span-1">
            <LowStockAlerts />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;