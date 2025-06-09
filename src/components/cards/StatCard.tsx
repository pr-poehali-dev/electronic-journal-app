import Icon from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  iconName: string;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatCard = ({
  title,
  value,
  iconName,
  description,
  trend,
}: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
          {trend && (
            <div className="flex items-center mt-2">
              <Icon
                name={trend.isPositive ? "TrendingUp" : "TrendingDown"}
                className={trend.isPositive ? "text-green-500" : "text-red-500"}
                size={16}
              />
              <span
                className={`text-sm font-medium ml-1 ${
                  trend.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {Math.abs(trend.value)}%
              </span>
            </div>
          )}
        </div>
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon name={iconName} className="text-primary" size={24} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
