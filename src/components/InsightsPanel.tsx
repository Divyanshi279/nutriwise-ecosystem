
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, ArrowRight, Lightbulb, TrendingUp, AlertTriangle } from "lucide-react";

interface InsightCardProps {
  title: string;
  description: string;
  tags: string[];
  priority?: 'low' | 'medium' | 'high';
  icon?: React.ReactNode;
}

const InsightCard = ({ title, description, tags, priority = 'medium', icon }: InsightCardProps) => {
  const priorityStyles = {
    low: "bg-blue-50 text-blue-600",
    medium: "bg-yellow-50 text-yellow-600",
    high: "bg-red-50 text-red-600"
  };
  
  return (
    <Card className="border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-md group">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 p-2 rounded-full bg-primary/10 text-primary">
            {icon || <Lightbulb className="h-4 w-4" />}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-base">{title}</h3>
              <Badge variant="outline" className={priorityStyles[priority]}>
                {priority} priority
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="text-xs font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function InsightsPanel() {
  return (
    <Card className="border-none shadow-sm bg-white/80 backdrop-blur-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              AI Health Insights
              <span className="animate-pulse-subtle">
                <Sparkles className="h-5 w-5 text-primary opacity-90" />
              </span>
            </CardTitle>
            <CardDescription>Personalized AI-generated health recommendations</CardDescription>
          </div>
          <div className="hidden sm:block">
            <Button variant="outline" size="sm" className="text-xs h-8 gap-1">
              <Brain className="h-3.5 w-3.5" />
              Refresh Insights
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <InsightCard 
          title="Optimize Sleep Quality"
          description="Your sleep pattern shows increased wake events between 2-3 AM. Consider reducing screen time 1 hour before bed and maintaining a consistent sleep schedule."
          tags={["Sleep", "Circadian Rhythm", "Wearable Data"]}
          priority="medium"
          icon={<TrendingUp className="h-4 w-4" />}
        />
        
        <InsightCard 
          title="Nutrient Deficiency Risk"
          description="Based on your food logs, you've been consistently low in Vitamin D and magnesium. Consider adding fatty fish, eggs, and leafy greens to your diet."
          tags={["Nutrition", "Vitamins", "Deficiency"]}
          priority="high"
          icon={<AlertTriangle className="h-4 w-4" />}
        />
        
        <InsightCard 
          title="Activity Pattern Improvement"
          description="Your steps have been consistent but concentrated in the morning. Distributing activity throughout the day can improve metabolism and energy levels."
          tags={["Activity", "Metabolism", "Energy"]}
          priority="low"
          icon={<Brain className="h-4 w-4" />}
        />
      </CardContent>
      
      <CardFooter className="pt-2 pb-4">
        <Button variant="outline" className="w-full">
          View All Insights
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
