
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NutritionTracker from "./NutritionTracker";
import HealthMetrics from "./HealthMetrics";
import InsightsPanel from "./InsightsPanel";

export default function Dashboard() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-24 pb-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight animate-fade-in">Welcome Back, Alex</h1>
        <p className="text-muted-foreground mt-1 animate-fade-up">Here's your health overview for today, July 18, 2023</p>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-background/50 backdrop-blur-sm border">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          <TabsTrigger value="metrics">Health Metrics</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <NutritionTracker />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <HealthMetrics />
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <InsightsPanel />
          </div>
        </TabsContent>
        
        <TabsContent value="nutrition" className="animate-fade-in">
          <NutritionTracker />
        </TabsContent>
        
        <TabsContent value="metrics" className="animate-fade-in">
          <HealthMetrics />
        </TabsContent>
        
        <TabsContent value="insights" className="animate-fade-in">
          <InsightsPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
}
