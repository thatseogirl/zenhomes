import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("01.06", 0),
  createData("05.06", 600),
  createData("08.06", 900),
  createData("10.06", 1200),
  createData("12.06", 1500),
  createData("15.06", 2000),
  createData("18.06", 2500),
  createData("24.06", 3000),
  createData("27.06", 5500),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Tenants Dashboard</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}>
          <XAxis
            dataKey='time'
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}>
            <Label
              angle={270}
              position='left'
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}>
              Spendings ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type='monotone'
            dataKey='amount'
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
