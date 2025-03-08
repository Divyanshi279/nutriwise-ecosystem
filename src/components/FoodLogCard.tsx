
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Check, Clock } from 'lucide-react';

interface FoodLogCardProps {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  time: string;
  image: string;
  aiConfidence: number;
  className?: string;
}

export default function FoodLogCard({ 
  name, 
  calories, 
  protein, 
  carbs, 
  fat, 
  time, 
  image, 
  aiConfidence,
  className
}: FoodLogCardProps) {
  // Confidence level indicator color
  const confidenceColor = 
    aiConfidence >= 90 ? 'bg-green-500' : 
    aiConfidence >= 70 ? 'bg-yellow-500' : 
    'bg-orange-500';
  
  return (
    <Card className={cn(
      "overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-md group",
      className
    )}>
      <div className="flex h-full">
        <div className="w-1/3 bg-muted relative overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2 flex items-center space-x-1 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
            <Clock className="h-3 w-3" />
            <span>{time}</span>
          </div>
        </div>
        
        <div className="w-2/3 p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-base">{name}</h3>
            <div className="flex items-center space-x-1">
              <div className={cn("h-2 w-2 rounded-full", confidenceColor)} />
              <span className="text-xs text-muted-foreground">{aiConfidence}% match</span>
            </div>
          </div>
          
          <div className="mt-2 text-sm text-muted-foreground font-medium">
            {calories} calories
          </div>
          
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Protein</span>
              <span className="text-sm font-medium">{protein}g</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Carbs</span>
              <span className="text-sm font-medium">{carbs}g</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Fat</span>
              <span className="text-sm font-medium">{fat}g</span>
            </div>
          </div>
          
          <div className="mt-3 flex justify-end">
            <div className="text-xs flex items-center text-green-600 bg-green-50 px-2 py-1 rounded-full">
              <Check className="h-3 w-3 mr-1" />
              Logged
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
