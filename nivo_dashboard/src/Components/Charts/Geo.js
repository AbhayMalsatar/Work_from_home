import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo'

export default function Geo() {
    const data = [
        {
            "id": "AFG",
            "value": 595073
        },
        {
            "id": "AGO",
            "value": 456014
        },
        {
            "id": "ALB",
            "value": 597243
        },
        {
            "id": "ARE",
            "value": 66763
        },
        {
            "id": "ARG",
            "value": 785137
        },
        {
            "id": "ARM",
            "value": 758092
        },
        {
            "id": "ATA",
            "value": 524936
        },
        {
            "id": "ATF",
            "value": 584216
        },
        {
            "id": "AUT",
            "value": 634825
        },
        {
            "id": "AZE",
            "value": 147082
        },
        {
            "id": "BDI",
            "value": 870122
        },
        {
            "id": "BEL",
            "value": 749991
        },
        {
            "id": "BEN",
            "value": 152022
        },
        {
            "id": "BFA",
            "value": 644694
        },
        {
            "id": "BGD",
            "value": 956154
        },
        {
            "id": "BGR",
            "value": 435820
        },
        {
            "id": "BHS",
            "value": 145666
        },
        {
            "id": "BIH",
            "value": 969316
        },
        {
            "id": "BLR",
            "value": 641336
        },
        {
            "id": "BLZ",
            "value": 283904
        },
        {
            "id": "BOL",
            "value": 738856
        },
        {
            "id": "BRN",
            "value": 597736
        },
        {
            "id": "BTN",
            "value": 300509
        },
        {
            "id": "BWA",
            "value": 490317
        },
        {
            "id": "CAF",
            "value": 941842
        },
        {
            "id": "CAN",
            "value": 603598
        },
        {
            "id": "CHE",
            "value": 411674
        },
        {
            "id": "CHL",
            "value": 637407
        },
        {
            "id": "CHN",
            "value": 945947
        },
        {
            "id": "CIV",
            "value": 685354
        },
        {
            "id": "CMR",
            "value": 569945
        },
        {
            "id": "COG",
            "value": 213385
        },
        {
            "id": "COL",
            "value": 422878
        },
        {
            "id": "CRI",
            "value": 814405
        },
        {
            "id": "CUB",
            "value": 152471
        },
        {
            "id": "-99",
            "value": 93328
        },
        {
            "id": "CYP",
            "value": 753417
        },
        {
            "id": "CZE",
            "value": 402731
        },
        {
            "id": "DEU",
            "value": 484039
        },
        {
            "id": "DJI",
            "value": 225176
        },
        {
            "id": "DNK",
            "value": 174269
        },
        {
            "id": "DOM",
            "value": 94410
        },
        {
            "id": "DZA",
            "value": 113245
        },
        {
            "id": "ECU",
            "value": 520966
        },
        {
            "id": "EGY",
            "value": 295421
        },
        {
            "id": "ERI",
            "value": 445374
        },
        {
            "id": "ESP",
            "value": 476256
        },
        {
            "id": "EST",
            "value": 528851
        },
        {
            "id": "ETH",
            "value": 258348
        },
        {
            "id": "FIN",
            "value": 998463
        },
        {
            "id": "FJI",
            "value": 239966
        },
        {
            "id": "FLK",
            "value": 294092
        },
        {
            "id": "FRA",
            "value": 924451
        },
        {
            "id": "GAB",
            "value": 757011
        },
        {
            "id": "GBR",
            "value": 138968
        },
        {
            "id": "GEO",
            "value": 342629
        },
        {
            "id": "GHA",
            "value": 876831
        },
        {
            "id": "GIN",
            "value": 84312
        },
        {
            "id": "GMB",
            "value": 673775
        },
        {
            "id": "GNB",
            "value": 842573
        },
        {
            "id": "GNQ",
            "value": 175786
        },
        {
            "id": "GRC",
            "value": 444126
        },
        {
            "id": "GTM",
            "value": 605100
        },
        {
            "id": "GUY",
            "value": 382758
        },
        {
            "id": "HND",
            "value": 844917
        },
        {
            "id": "HRV",
            "value": 249850
        },
        {
            "id": "HTI",
            "value": 493603
        },
        {
            "id": "HUN",
            "value": 570380
        },
        {
            "id": "IDN",
            "value": 795879
        },
        {
            "id": "IND",
            "value": 870559
        },
        {
            "id": "IRL",
            "value": 99541
        },
        {
            "id": "IRN",
            "value": 412710
        },
        {
            "id": "IRQ",
            "value": 470284
        },
        {
            "id": "ISL",
            "value": 776253
        },
        {
            "id": "ISR",
            "value": 415528
        },
        {
            "id": "ITA",
            "value": 171162
        },
        {
            "id": "JAM",
            "value": 583254
        },
        {
            "id": "JOR",
            "value": 703993
        },
        {
            "id": "JPN",
            "value": 803793
        },
        {
            "id": "KAZ",
            "value": 259671
        },
        {
            "id": "KEN",
            "value": 39703
        },
        {
            "id": "KGZ",
            "value": 411597
        },
        {
            "id": "KHM",
            "value": 852031
        },
        {
            "id": "OSA",
            "value": 442430
        },
        {
            "id": "KWT",
            "value": 384156
        },
        {
            "id": "LAO",
            "value": 950391
        },
        {
            "id": "LBN",
            "value": 195840
        },
        {
            "id": "LBR",
            "value": 320159
        },
        {
            "id": "LBY",
            "value": 698712
        },
        {
            "id": "LKA",
            "value": 817361
        },
        {
            "id": "LSO",
            "value": 743762
        },
        {
            "id": "LTU",
            "value": 149031
        },
        {
            "id": "LUX",
            "value": 615654
        },
        {
            "id": "LVA",
            "value": 439177
        },
        {
            "id": "MAR",
            "value": 844457
        },
        {
            "id": "MDA",
            "value": 584313
        },
        {
            "id": "MDG",
            "value": 673496
        },
        {
            "id": "MEX",
            "value": 906229
        },
        {
            "id": "MKD",
            "value": 915560
        },
        {
            "id": "MLI",
            "value": 290658
        },
        {
            "id": "MMR",
            "value": 602460
        },
        {
            "id": "MNE",
            "value": 767064
        },
        {
            "id": "MNG",
            "value": 547590
        },
        {
            "id": "MOZ",
            "value": 688696
        },
        {
            "id": "MRT",
            "value": 623216
        },
        {
            "id": "MWI",
            "value": 791960
        },
        {
            "id": "MYS",
            "value": 873796
        },
        {
            "id": "NAM",
            "value": 350682
        },
        {
            "id": "NCL",
            "value": 939755
        },
        {
            "id": "NER",
            "value": 223184
        },
        {
            "id": "NGA",
            "value": 56869
        },
        {
            "id": "NIC",
            "value": 601428
        },
        {
            "id": "NLD",
            "value": 815883
        },
        {
            "id": "NOR",
            "value": 351886
        },
        {
            "id": "NPL",
            "value": 961276
        },
        {
            "id": "NZL",
            "value": 954797
        },
        {
            "id": "OMN",
            "value": 627342
        },
        {
            "id": "PAK",
            "value": 90314
        },
        {
            "id": "PAN",
            "value": 180598
        },
        {
            "id": "PER",
            "value": 522111
        },
        {
            "id": "PHL",
            "value": 700859
        },
        {
            "id": "PNG",
            "value": 227515
        },
        {
            "id": "POL",
            "value": 13581
        },
        {
            "id": "PRI",
            "value": 332906
        },
        {
            "id": "PRT",
            "value": 477942
        },
        {
            "id": "PRY",
            "value": 61624
        },
        {
            "id": "QAT",
            "value": 630329
        },
        {
            "id": "ROU",
            "value": 438297
        },
        {
            "id": "RUS",
            "value": 848656
        },
        {
            "id": "RWA",
            "value": 513991
        },
        {
            "id": "ESH",
            "value": 808598
        },
        {
            "id": "SAU",
            "value": 160181
        },
        {
            "id": "SDN",
            "value": 663616
        },
        {
            "id": "SDS",
            "value": 339636
        },
        {
            "id": "SEN",
            "value": 94252
        },
        {
            "id": "SLB",
            "value": 958152
        },
        {
            "id": "SLE",
            "value": 447017
        },
        {
            "id": "SLV",
            "value": 813439
        },
        {
            "id": "ABV",
            "value": 612129
        },
        {
            "id": "SOM",
            "value": 591545
        },
        {
            "id": "SRB",
            "value": 805202
        },
        {
            "id": "SUR",
            "value": 40522
        },
        {
            "id": "SVK",
            "value": 165375
        },
        {
            "id": "SVN",
            "value": 755335
        },
        {
            "id": "SWZ",
            "value": 578901
        },
        {
            "id": "SYR",
            "value": 702840
        },
        {
            "id": "TCD",
            "value": 71525
        },
        {
            "id": "TGO",
            "value": 198926
        },
        {
            "id": "THA",
            "value": 280657
        },
        {
            "id": "TJK",
            "value": 628067
        },
        {
            "id": "TKM",
            "value": 957072
        },
        {
            "id": "TLS",
            "value": 390429
        },
        {
            "id": "TTO",
            "value": 496
        },
        {
            "id": "TUN",
            "value": 846024
        },
        {
            "id": "TUR",
            "value": 774995
        },
        {
            "id": "TWN",
            "value": 195286
        },
        {
            "id": "TZA",
            "value": 584227
        },
        {
            "id": "UGA",
            "value": 141503
        },
        {
            "id": "UKR",
            "value": 811908
        },
        {
            "id": "URY",
            "value": 461715
        },
        {
            "id": "USA",
            "value": 317090
        },
        {
            "id": "UZB",
            "value": 636095
        },
        {
            "id": "VEN",
            "value": 606879
        },
        {
            "id": "VNM",
            "value": 822642
        },
        {
            "id": "VUT",
            "value": 212937
        },
        {
            "id": "PSE",
            "value": 467481
        },
        {
            "id": "YEM",
            "value": 960275
        },
        {
            "id": "ZAF",
            "value": 585402
        },
        {
            "id": "ZMB",
            "value": 256985
        },
        {
            "id": "ZWE",
            "value": 541826
        },
        {
            "id": "KOR",
            "value": 3446
        }
    ]
    return (
        <div  style={{height:380}} id='cha'>
            <ResponsiveChoropleth
                data={data}
                features="/* please have a look at the description for usage */"
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[0, 1000000]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                enableGraticule={true}
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
                legends={[
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
                        itemTextColor: '#444444',
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000000',
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
