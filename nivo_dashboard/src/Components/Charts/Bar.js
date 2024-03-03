import React from 'react';
import { ResponsiveBar } from '@nivo/bar';


function Bar() {
    const data = [
        {
            "country": "AD",
            "hot dog": 58,
            "hot dogColor": "hsl(234, 70%, 50%)",
            "burger": 118,
            "burgerColor": "hsl(164, 70%, 50%)",
            "sandwich": 193,
            "sandwichColor": "hsl(310, 70%, 50%)",
            "kebab": 110,
            "kebabColor": "hsl(327, 70%, 50%)",
            "fries": 72,
            "friesColor": "hsl(80, 70%, 50%)",
            "donut": 187,
            "donutColor": "hsl(11, 70%, 50%)"
        },
        {
            "country": "AE",
            "hot dog": 31,
            "hot dogColor": "hsl(223, 70%, 50%)",
            "burger": 139,
            "burgerColor": "hsl(91, 70%, 50%)",
            "sandwich": 193,
            "sandwichColor": "hsl(146, 70%, 50%)",
            "kebab": 189,
            "kebabColor": "hsl(150, 70%, 50%)",
            "fries": 80,
            "friesColor": "hsl(87, 70%, 50%)",
            "donut": 22,
            "donutColor": "hsl(75, 70%, 50%)"
        },
        {
            "country": "AF",
            "hot dog": 181,
            "hot dogColor": "hsl(237, 70%, 50%)",
            "burger": 71,
            "burgerColor": "hsl(272, 70%, 50%)",
            "sandwich": 118,
            "sandwichColor": "hsl(97, 70%, 50%)",
            "kebab": 23,
            "kebabColor": "hsl(357, 70%, 50%)",
            "fries": 6,
            "friesColor": "hsl(229, 70%, 50%)",
            "donut": 103,
            "donutColor": "hsl(246, 70%, 50%)"
        },
        {
            "country": "AG",
            "hot dog": 130,
            "hot dogColor": "hsl(95, 70%, 50%)",
            "burger": 49,
            "burgerColor": "hsl(62, 70%, 50%)",
            "sandwich": 195,
            "sandwichColor": "hsl(197, 70%, 50%)",
            "kebab": 78,
            "kebabColor": "hsl(315, 70%, 50%)",
            "fries": 134,
            "friesColor": "hsl(141, 70%, 50%)",
            "donut": 138,
            "donutColor": "hsl(87, 70%, 50%)"
        },
        {
            "country": "AI",
            "hot dog": 171,
            "hot dogColor": "hsl(27, 70%, 50%)",
            "burger": 124,
            "burgerColor": "hsl(231, 70%, 50%)",
            "sandwich": 144,
            "sandwichColor": "hsl(25, 70%, 50%)",
            "kebab": 61,
            "kebabColor": "hsl(82, 70%, 50%)",
            "fries": 124,
            "friesColor": "hsl(206, 70%, 50%)",
            "donut": 134,
            "donutColor": "hsl(184, 70%, 50%)"
        },
        {
            "country": "AL",
            "hot dog": 150,
            "hot dogColor": "hsl(284, 70%, 50%)",
            "burger": 143,
            "burgerColor": "hsl(154, 70%, 50%)",
            "sandwich": 187,
            "sandwichColor": "hsl(64, 70%, 50%)",
            "kebab": 67,
            "kebabColor": "hsl(267, 70%, 50%)",
            "fries": 34,
            "friesColor": "hsl(83, 70%, 50%)",
            "donut": 63,
            "donutColor": "hsl(21, 70%, 50%)"
        },
        {
            "country": "AM",
            "hot dog": 113,
            "hot dogColor": "hsl(18, 70%, 50%)",
            "burger": 98,
            "burgerColor": "hsl(273, 70%, 50%)",
            "sandwich": 162,
            "sandwichColor": "hsl(6, 70%, 50%)",
            "kebab": 96,
            "kebabColor": "hsl(315, 70%, 50%)",
            "fries": 145,
            "friesColor": "hsl(232, 70%, 50%)",
            "donut": 103,
            "donutColor": "hsl(243, 70%, 50%)"
        }
    ]

    return (
        <div style={{height:380}} id='cha'>
            <ResponsiveBar
                data={data}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
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
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32,
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40,
                    truncateTickAt: 0
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
            />
        </div>
    )
}

export default Bar
