import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Sale } from '../../types';

interface SalesChartProps {
  sales: Sale[];
}

export default function SalesChart({ sales }: SalesChartProps) {
  const dailySales = sales.reduce((acc, sale) => {
    const date = new Date(sale.date).toLocaleDateString();
    acc[date] = (acc[date] || 0) + sale.total;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.entries(dailySales).map(([date, amount]) => ({
    date,
    amount,
  }));

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="amount" stroke="#4F46E5" fill="#818CF8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}