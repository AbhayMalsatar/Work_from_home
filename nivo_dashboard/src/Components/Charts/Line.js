import { ResponsiveLine } from '@nivo/line';

import React from 'react'

export default function Line() {
    const data = [
        {
            "id": "japan",
            "color": "hsl(88, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 3
                },
                {
                    "x": "helicopter",
                    "y": 232
                },
                {
                    "x": "boat",
                    "y": 85
                },
                {
                    "x": "train",
                    "y": 44
                },
                {
                    "x": "subway",
                    "y": 234
                },
                {
                    "x": "bus",
                    "y": 132
                },
                {
                    "x": "car",
                    "y": 64
                },
                {
                    "x": "moto",
                    "y": 225
                },
                {
                    "x": "bicycle",
                    "y": 292
                },
                {
                    "x": "horse",
                    "y": 180
                },
                {
                    "x": "skateboard",
                    "y": 298
                },
                {
                    "x": "others",
                    "y": 29
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(15, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 66
                },
                {
                    "x": "helicopter",
                    "y": 73
                },
                {
                    "x": "boat",
                    "y": 64
                },
                {
                    "x": "train",
                    "y": 159
                },
                {
                    "x": "subway",
                    "y": 253
                },
                {
                    "x": "bus",
                    "y": 200
                },
                {
                    "x": "car",
                    "y": 108
                },
                {
                    "x": "moto",
                    "y": 200
                },
                {
                    "x": "bicycle",
                    "y": 177
                },
                {
                    "x": "horse",
                    "y": 125
                },
                {
                    "x": "skateboard",
                    "y": 247
                },
                {
                    "x": "others",
                    "y": 249
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(324, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 112
                },
                {
                    "x": "helicopter",
                    "y": 133
                },
                {
                    "x": "boat",
                    "y": 75
                },
                {
                    "x": "train",
                    "y": 1
                },
                {
                    "x": "subway",
                    "y": 93
                },
                {
                    "x": "bus",
                    "y": 129
                },
                {
                    "x": "car",
                    "y": 213
                },
                {
                    "x": "moto",
                    "y": 35
                },
                {
                    "x": "bicycle",
                    "y": 147
                },
                {
                    "x": "horse",
                    "y": 185
                },
                {
                    "x": "skateboard",
                    "y": 113
                },
                {
                    "x": "others",
                    "y": 52
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(195, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 120
                },
                {
                    "x": "helicopter",
                    "y": 43
                },
                {
                    "x": "boat",
                    "y": 118
                },
                {
                    "x": "train",
                    "y": 248
                },
                {
                    "x": "subway",
                    "y": 91
                },
                {
                    "x": "bus",
                    "y": 178
                },
                {
                    "x": "car",
                    "y": 299
                },
                {
                    "x": "moto",
                    "y": 283
                },
                {
                    "x": "bicycle",
                    "y": 243
                },
                {
                    "x": "horse",
                    "y": 111
                },
                {
                    "x": "skateboard",
                    "y": 200
                },
                {
                    "x": "others",
                    "y": 108
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(90, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 69
                },
                {
                    "x": "helicopter",
                    "y": 258
                },
                {
                    "x": "boat",
                    "y": 34
                },
                {
                    "x": "train",
                    "y": 217
                },
                {
                    "x": "subway",
                    "y": 213
                },
                {
                    "x": "bus",
                    "y": 169
                },
                {
                    "x": "car",
                    "y": 32
                },
                {
                    "x": "moto",
                    "y": 230
                },
                {
                    "x": "bicycle",
                    "y": 102
                },
                {
                    "x": "horse",
                    "y": 178
                },
                {
                    "x": "skateboard",
                    "y": 127
                },
                {
                    "x": "others",
                    "y": 271
                }
            ]
        }
    ];
    return (
        <div style={{height:350}} id='cha'>
        <ResponsiveLine
            data={data}
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
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            colors={{ scheme: 'category10' }}
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
        </div>
    )
}
