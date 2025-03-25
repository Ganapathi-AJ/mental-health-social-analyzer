"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  {
    name: "Jan",
    sleep: 30,
    anxiety: 40,
    depression: 25,
    stress: 35,
    selfharm: 5,
    distress: 20,
  },
  {
    name: "Feb",
    sleep: 35,
    anxiety: 45,
    depression: 22,
    stress: 32,
    selfharm: 3,
    distress: 18,
  },
  {
    name: "Mar",
    sleep: 32,
    anxiety: 50,
    depression: 28,
    stress: 38,
    selfharm: 4,
    distress: 23,
  },
  {
    name: "Apr",
    sleep: 28,
    anxiety: 48,
    depression: 30,
    stress: 42,
    selfharm: 6,
    distress: 25,
  },
  {
    name: "May",
    sleep: 33,
    anxiety: 52,
    depression: 27,
    stress: 36,
    selfharm: 4,
    distress: 22,
  },
  {
    name: "Jun",
    sleep: 38,
    anxiety: 45,
    depression: 24,
    stress: 31,
    selfharm: 3,
    distress: 20,
  },
];

export default function PostsAnalysisChart() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Mental Health Indicators Over Time</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sleep" fill="#8884d8" name="Sleep Issues" />
              <Bar dataKey="anxiety" fill="#82ca9d" name="Anxiety" />
              <Bar dataKey="depression" fill="#ffc658" name="Depression" />
              <Bar dataKey="stress" fill="#ff8042" name="Stress" />
              <Bar dataKey="selfharm" fill="#ff3366" name="Self Harm" />
              <Bar dataKey="distress" fill="#a374db" name="Distress" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
