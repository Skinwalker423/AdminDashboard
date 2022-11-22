import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { mockGeographyData } from '../data/mockData'
import { geoFeatures } from '../data/mockGeoFeatures'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'

const GeoChart = ({isDashBoard = false}) => {

    const {palette} = useTheme();
    const colors = tokens(palette.mode);

  return (
    <ResponsiveChoropleth
        data={mockGeographyData}
        features={geoFeatures.features}
        theme={{
            legends: {
                text: {
                    fill: colors.greenAccent[200]
                },
                title: {
                    text: {
                        fill: colors.greenAccent[300],
                    },
                },
            },
            tooltip: {
                container: {
                    color: colors.primary[500]
                }
            },
            textColor: colors.greenAccent[300]
        }}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashBoard ? 40 : 150}
        projectionTranslation={isDashBoard ? [0.49, .6] : [ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CAN'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'CHN'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'ATA'
                },
                id: 'gradient'
            }
        ]}
        legends={isDashBoard ? [] : [
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.gray[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: colors.greenAccent[300],
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default GeoChart