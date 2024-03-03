import React from 'react';
import { ResponsiveRadialBar } from '@nivo/radial-bar'

export default function RadialBar() {
    const data = [
        {
            "id": "Supermarket",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 271
                },
                {
                    "x": "Fruits",
                    "y": 203
                },
                {
                    "x": "Meat",
                    "y": 114
                },
                {
                    "x": "Fish",
                    "y": 4
                }
            ]
        },
        {
            "id": "Combini",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 31
                },
                {
                    "x": "Fruits",
                    "y": 124
                },
                {
                    "x": "Meat",
                    "y": 110
                },
                {
                    "x": "Fish",
                    "y": 116
                }
            ]
        },
        {
            "id": "Online",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 70
                },
                {
                    "x": "Fruits",
                    "y": 72
                },
                {
                    "x": "Meat",
                    "y": 154
                },
                {
                    "x": "Fish",
                    "y": 245
                }
            ]
        }
    ];
    return (
        <div style={{ height: 380, width: 450 }} id='cha'>
             <ResponsiveRadialBar
        data={data}
        valueFormat=">-.2f"
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        colors={{ scheme: 'category10' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '2.7'
                ]
            ]
        }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: 5,
                translateY: 10,
                itemsSpacing: 6,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
        </div>
    )
}
