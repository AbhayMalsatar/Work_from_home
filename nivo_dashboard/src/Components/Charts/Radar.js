import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

export default function Radar() {
    const data = [
        {
            "taste": "fruity",
            "chardonay": 65,
            "carmenere": 113,
            "syrah": 30
        },
        {
            "taste": "bitter",
            "chardonay": 114,
            "carmenere": 54,
            "syrah": 88
        },
        {
            "taste": "heavy",
            "chardonay": 112,
            "carmenere": 28,
            "syrah": 20
        },
        {
            "taste": "strong",
            "chardonay": 70,
            "carmenere": 102,
            "syrah": 44
        },
        {
            "taste": "sunny",
            "chardonay": 22,
            "carmenere": 70,
            "syrah": 54
        }
    ];
    return (
        <div style={{ height: 380, width: 380 }} id='cha'>
            <ResponsiveRadar
                data={data}
                keys={['chardonay', 'carmenere', 'syrah']}
                indexBy="taste"
                valueFormat=">-.2f"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                borderColor={{ from: 'color' }}
                gridLabelOffset={36}
                dotSize={10}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={2}
                colors={{ scheme: 'category10' }}
                blendMode="multiply"
                motionConfig="wobbly"
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        translateX: -50,
                        translateY: -40,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: '#999',
                        symbolSize: 12,
                        symbolShape: 'circle',
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
