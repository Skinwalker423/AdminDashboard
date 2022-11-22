import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { mockLineData } from '../data/mockData'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'

const LineChart = ({isDashBoard = false}) => {

  const {palette} = useTheme();
  const colors = tokens(palette.mode);

  return (
    <ResponsiveLine
        data={mockLineData}
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.gray[100]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.gray[100],
                        strokeWidth: 1,

                    },
                    text: {
                        fill: colors.gray[100]
                    }
                },
                legend: {
                    text: {
                        fill: colors.gray[100]
                    }
                },
            },
            legends: {
                text: {
                    fill: colors.gray[100]
                }
            },
            tooltip: {
                container: {
                    color: colors.primary[500]
                }
            }
        }}
        colors={isDashBoard ? {datum: 'color'} : {scheme: 'nivo'}}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve='catmullRom'
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashBoard ? undefined : 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickValues: 5,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashBoard ? undefined : 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default LineChart