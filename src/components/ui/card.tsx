import React from 'react';
import { cn } from '@/lib/utils'; 
import { DataCardProps } from '@/types/dataCard';
import { TrendingUp, TrendingDown } from 'lucide-react';

// Interfaces
export interface CardProps {
  children: React.ReactNode;
  className?: string; 
}

export interface CardHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export interface CardBodyProps {
  children: React.ReactNode;
  className?: string; 
}

// Main Card Container
const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-white shadow-md rounded-lg p-6 border border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

// Card Header
const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={cn("mb-4", className)}>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  );
};

// Card Body
const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
  return <div className={cn("text-gray-700", className)}>{children}</div>;
};

// DataCard Component
const DataCard: React.FC<DataCardProps> = ({
  title,
  description,
  value,
  changePercentage,
  changeType,
  className,
}) => {
  return (
    <Card className={cn("p-6", className)}>
      <CardHeader title={title} subtitle={description} />
      <CardBody>
        <div className="flex items-center justify-between">
          <p className="lg:text-3xl sm:text-2xl font-bold text-orange-500">{value}</p>
          <div className={cn(
            "flex items-center justify-center px-3 py-1 mx-2 rounded-full text-sm font-medium",
            changeType === 'increase' ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'
          )}>
            {changeType === 'increase' ? (
              <TrendingUp 
                className='mx-1'
              />
            ) : (
              <TrendingDown 
                className='mx-1'
              />
            )}
            {changePercentage}%
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export { Card, CardHeader, CardBody, DataCard };