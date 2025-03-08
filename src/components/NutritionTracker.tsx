
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Camera, ArrowRight } from "lucide-react";
import FoodLogCard from "./FoodLogCard";
import { Progress } from "@/components/ui/progress";

export default function NutritionTracker() {
  // Sample food log data
  const foodLogs = [
    {
      id: 1,
      name: "Greek Yogurt with Berries",
      calories: 220,
      protein: 18,
      carbs: 24,
      fat: 8,
      time: "8:30 AM",
      image: "https://images.unsplash.com/photo-1514823419719-6699c420f2a5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300",
      aiConfidence: 94
    },
    {
      id: 2,
      name: "Grilled Chicken Salad",
      calories: 350,
      protein: 32,
      carbs: 15,
      fat: 14,
      time: "12:45 PM",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300",
      aiConfidence: 88
    }
  ];

  // Nutrition summary data
  const dailyGoals = {
    calories: { consumed: 1250, goal: 2200 },
    protein: { consumed: 85, goal: 120 },
    carbs: { consumed: 135, goal: 220 },
    fat: { consumed: 45, goal: 70 }
  };

  const getPercentage = (consumed: number, goal: number) => {
    return Math.min(Math.round((consumed / goal) * 100), 100);
  };

  return (
    <Card className="border-none shadow-sm bg-white/80 backdrop-blur-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl font-semibold">Nutrition Tracker</CardTitle>
          <CardDescription>Log and track your daily nutrition</CardDescription>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="text-xs h-8">
            <Camera className="h-3.5 w-3.5 mr-1" />
            Scan Food
          </Button>
          <Button size="sm" className="text-xs h-8">
            <Plus className="h-3.5 w-3.5 mr-1" />
            Add Meal
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">Today's Summary</h3>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Calories</span>
                  <span className="font-medium">{dailyGoals.calories.consumed} / {dailyGoals.calories.goal} kcal</span>
                </div>
                <Progress value={getPercentage(dailyGoals.calories.consumed, dailyGoals.calories.goal)} className="h-2" />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Protein</span>
                    <span className="font-medium">{dailyGoals.protein.consumed}g</span>
                  </div>
                  <Progress value={getPercentage(dailyGoals.protein.consumed, dailyGoals.protein.goal)} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Carbs</span>
                    <span className="font-medium">{dailyGoals.carbs.consumed}g</span>
                  </div>
                  <Progress value={getPercentage(dailyGoals.carbs.consumed, dailyGoals.carbs.goal)} className="h-2 bg-purple-100" indicatorClassName="bg-purple-500" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Fat</span>
                    <span className="font-medium">{dailyGoals.fat.consumed}g</span>
                  </div>
                  <Progress value={getPercentage(dailyGoals.fat.consumed, dailyGoals.fat.goal)} className="h-2 bg-yellow-100" indicatorClassName="bg-yellow-500" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-nutrihealth-100 to-wellness-100 rounded-lg p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-medium">AI Nutrition Insight</h3>
              <p className="text-sm mt-1 text-muted-foreground">Based on your recent food logs and health metrics</p>
            </div>
            <div className="mt-4">
              <p className="text-sm">Your protein intake has been consistent this week. Consider adding more complex carbs like quinoa or sweet potatoes to optimize your energy levels during workouts.</p>
              <Button variant="link" className="mt-2 p-0 h-auto text-sm text-primary flex items-center">
                View detailed analysis
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">Today's Food Log</h3>
            <Button variant="ghost" size="sm" className="text-xs h-7">
              View All Logs
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {foodLogs.map(food => (
              <FoodLogCard
                key={food.id}
                name={food.name}
                calories={food.calories}
                protein={food.protein}
                carbs={food.carbs}
                fat={food.fat}
                time={food.time}
                image={food.image}
                aiConfidence={food.aiConfidence}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
