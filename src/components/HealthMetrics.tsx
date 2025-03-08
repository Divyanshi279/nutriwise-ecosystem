
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { Activity, Heart, Droplet, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample data for health metrics
const weeklyData = [
  { day: 'Mon', heartRate: 68, steps: 8400, sleep: 7.2, glucose: 95 },
  { day: 'Tue', heartRate: 72, steps: 10200, sleep: 6.8, glucose: 98 },
  { day: 'Wed', heartRate: 70, steps: 7800, sleep: 7.5, glucose: 92 },
  { day: 'Thu', heartRate: 74, steps: 9500, sleep: 6.5, glucose: 97 },
  { day: 'Fri', heartRate: 71, steps: 11000, sleep: 7.8, glucose: 93 },
  { day: 'Sat', heartRate: 69, steps: 6500, sleep: 8.2, glucose: 91 },
  { day: 'Sun', heartRate: 67, steps: 9200, sleep: 7.9, glucose: 94 },
];

const monthlyData = [
  { week: 'W1', heartRate: 70, steps: 9100, sleep: 7.3, glucose: 95 },
  { week: 'W2', heartRate: 69, steps: 8900, sleep: 7.5, glucose: 94 },
  { week: 'W3', heartRate: 71, steps: 9300, sleep: 7.1, glucose: 96 },
  { week: 'W4', heartRate: 68, steps: 9500, sleep: 7.8, glucose: 93 },
];

interface MetricCardProps {
  title: string;
  value: string | number;
  unit: string;
  change: number;
  icon: React.ReactNode;
  color: string;
}

const MetricCard = ({ title, value, unit, change, icon, color }: MetricCardProps) => {
  const isPositiveChange = change > 0;
  const isNeutralChange = change === 0;
  
  return (
    <Card className="border border-border/50 overflow-hidden">
      <div className={cn("h-1", color)} />
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <div className="flex items-baseline mt-1">
              <span className="text-2xl font-semibold">{value}</span>
              <span className="text-sm ml-1 text-muted-foreground">{unit}</span>
            </div>
          </div>
          <div className={cn("p-2 rounded-full", `bg-${color.split('-')[0]}-50`)}>
            {icon}
          </div>
        </div>
        <div className="mt-3">
          <span className={cn(
            "text-xs px-1.5 py-0.5 rounded",
            isPositiveChange ? "bg-green-50 text-green-600" : 
            isNeutralChange ? "bg-gray-50 text-gray-600" : 
            "bg-yellow-50 text-yellow-600"
          )}>
            {isPositiveChange ? '+' : isNeutralChange ? '±' : ''}{change}% from last week
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-border rounded-md shadow-sm">
        <p className="font-medium text-sm">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value} {entry.name === 'Sleep' ? 'hrs' : entry.name === 'Heart Rate' ? 'bpm' : entry.name === 'Glucose' ? 'mg/dL' : ''}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default function HealthMetrics() {
  return (
    <Card className="border-none shadow-sm bg-white/80 backdrop-blur-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">Health Metrics</CardTitle>
        <CardDescription>Track your vital health indicators</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <MetricCard 
            title="Heart Rate" 
            value={72} 
            unit="bpm" 
            change={-2.5} 
            icon={<Heart className="h-5 w-5 text-red-500" />} 
            color="bg-red-500" 
          />
          <MetricCard 
            title="Daily Steps" 
            value="9,345" 
            unit="steps" 
            change={4.2} 
            icon={<Activity className="h-5 w-5 text-blue-500" />} 
            color="bg-blue-500" 
          />
          <MetricCard 
            title="Sleep" 
            value={7.2} 
            unit="hours" 
            change={5.8} 
            icon={<Clock className="h-5 w-5 text-indigo-500" />} 
            color="bg-indigo-500" 
          />
          <MetricCard 
            title="Glucose" 
            value={94} 
            unit="mg/dL" 
            change={0} 
            icon={<Droplet className="h-5 w-5 text-green-500" />} 
            color="bg-green-500" 
          />
        </div>
        
        <Tabs defaultValue="weekly" className="space-y-4">
          <TabsList className="grid w-full max-w-xs grid-cols-2">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly" className="pt-2">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={weeklyData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="day" 
                    tick={{ fontSize: 12 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                    tickLine={false}
                  />
                  <YAxis 
                    yAxisId="left"
                    tick={{ fontSize: 12 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                    tickLine={false}
                  />
                  <YAxis 
                    yAxisId="right" 
                    orientation="right" 
                    domain={[5000, 12000]} 
                    tick={{ fontSize: 12 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="heartRate" 
                    name="Heart Rate"
                    stroke="#ef4444" 
                    strokeWidth={2}
                    dot={{ strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="steps" 
                    name="Steps"
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    dot={{ strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="sleep" 
                    name="Sleep"
                    stroke="#8b5cf6" 
                    strokeWidth={2}
                    dot={{ strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="glucose" 
                    name="Glucose"
                    stroke="#22c55e" 
                    strokeWidth={2}
                    dot={{ strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="monthly" className="pt-2">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="week" 
                    tick={{ fontSize: 12 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                    tickLine={false}
                  />
                  <YAxis 
                    yAxisId="left"
                    tick={{ fontSize: 12 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                    tickLine={false}
                  />
                  <YAxis 
                    yAxisId="right" 
                    orientation="right" 
                    domain={[8000, 10000]} 
                    tick={{ fontSize: 12 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="heartRate" 
                    name="Heart Rate"
                    stroke="#ef4444" 
                    strokeWidth={2}
                    dot={{ strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="steps" 
                    name="Steps"
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    dot={{ strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="sleep" 
                    name="Sleep"
                    stroke="#8b5cf6" 
                    strokeWidth={2}
                    dot={{ strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="glucose" 
                    name="Glucose"
                    stroke="#22c55e" 
                    strokeWidth={2}
                    dot={{ strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
