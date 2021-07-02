import React from "react";
import { ResponsiveLine } from "@nivo/line";

const LineGraph = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    curve="catmullRom"
    axisTop={null}
    axisRight={null}
    enableGridX={true}
    enableGridY={false}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
    }}
    pointSize={10}
    pointColor={{ from: "color", modifiers: [] }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="y"
    pointLabelYOffset={-12}
    areaOpacity={0.5}
    useMesh={true}
    keys={["commits"]}
    colors={["#0275d8"]}
    transportation
    defs={[
      {
        id: "gradientC",

        type: "linearGradient",

        colors: [
          { offset: 0, color: "#007bff " },

          { offset: 100, color: "#ffffff" },
        ],
      },
    ]}
    fill={[{ match: "*", id: "gradientC" }]}
    animate={true}
    colorBy={"id"}
    lineWidth={2}
    dotSize={14}
    enableDots={false}
    dotColor="inherit:darker(0.3)"
    dotBorderWidth={2}
    dotBorderColor="#e65a14"
    enableDotLabel={true}
    dotLabel="y"
    dotLabelYOffset={-12}
    enableArea={true}
    motionStiffness={90}
    motionDamping={15}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default LineGraph;
