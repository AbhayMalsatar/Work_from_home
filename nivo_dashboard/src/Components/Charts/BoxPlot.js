import React from 'react';
import { ResponsiveBoxPlot } from '@nivo/boxplot';


export default function BoxPlot() {
    const data = [
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 3.567096624734851
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 3.9517494049436257
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.6455293688386865
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.608998426427508
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.557564411505007
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.114598446959017
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.539107293091243
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.438539392003429
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.10818287391824
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 3.2758082367294246
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.5471050161829245
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.090467350816462
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 3.9234910325074503
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.370887098821994
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.807638845878986
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.303684266007143
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.458391102159869
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.356524543801353
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.427212058067793
        },
        {
            "group": "Alpha",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 6.9365344438129615
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 4.923797527020437
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 6.491496542472246
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.429050313016289
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 6.28857896017299
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 6.186833517659687
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.825420102261054
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 6.1265916049272855
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 6.6539487963769455
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 7.065422480507724
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 6.161672764029052
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.049708881035141
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.6435400433659355
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 6.866696731034677
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 6.005626034682988
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.987551559676849
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.076818750080942
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.829053560342553
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 4.121331572014618
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 4.241708294541765
        },
        {
            "group": "Alpha",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 6.9156054514021195
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 9.334425969232411
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 7.719837981565976
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 10.26477112098981
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 7.32792714321028
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 9.281299223943979
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 7.178108751676582
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 7.502171361954636
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 7.871943578301906
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 9.299162060075956
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 9.295686745507027
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 8.74758782392214
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 8.66615655398095
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 8.082618191853213
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 10.257227780815121
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 10.499626799246684
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 8.057688000919743
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 8.066345190986437
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 9.307631482982845
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 8.94019873207092
        },
        {
            "group": "Beta",
            "subgroup": "A",
            "mu": 8,
            "sd": 1.4,
            "n": 20,
            "value": 6.851088001188372
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 7.484357672603162
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 7.9233744914868005
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 8.220145351739637
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 7.141261948243882
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 6.609431666229084
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 5.967110186262149
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 8.386541217127323
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 6.069360710419651
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 8.893211341488131
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 7.482513212447001
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 9.474122992072903
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 8.483571948541504
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 6.374794080984556
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 9.692661912877256
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 7.7634273439551515
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 8.30150149408573
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 7.692114370357369
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 9.755704649218888
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 5.5396700454432075
        },
        {
            "group": "Beta",
            "subgroup": "B",
            "mu": 7.5,
            "sd": 1.4,
            "n": 20,
            "value": 8.300642639526135
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.591073314500157
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 3.3100503463779005
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.8352335781709135
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.4247229035315865
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.16007416586793
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.432413835254495
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.93531239774295
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 6.640884696976794
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.330820693447308
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 7.189376862846119
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 7.314445841177028
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.722401164031948
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 3.361963807813387
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.439292868444401
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.716650102899132
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 6.176860115339859
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 3.1324395149382305
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.014279065615623
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.589841018588618
        },
        {
            "group": "Gamma",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.998660053427059
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 5.496014570175121
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 8.062396331272868
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 5.173729619161842
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 6.53187751378355
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 10.158205116064511
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 7.584407960709951
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 5.980680898922643
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 7.766728754656959
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 8.132249410180227
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 4.848728352935013
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 5.939470381237206
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 8.24397294365117
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 7.349688427659836
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 8.817392583633753
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 5.712789445110388
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 9.498507303193968
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 5.83668471291918
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 6.874180283724494
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 8.477767504118747
        },
        {
            "group": "Gamma",
            "subgroup": "B",
            "mu": 7.2,
            "sd": 1.8,
            "n": 20,
            "value": 7.908696455055408
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 2.9546735264178046
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 3.7642319075006956
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.412897650928272
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 6.268010779118693
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.110141194638934
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.250717402990066
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.3520415399477335
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.757875743879452
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.475985937354528
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.569615973027383
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.8189674012185755
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.194845715245687
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 6.372273506430055
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.767876966205531
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 8.444743468480226
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 6.259062298206749
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 5.425186548165305
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.551750522030078
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.313494684589977
        },
        {
            "group": "Delta",
            "subgroup": "A",
            "mu": 5,
            "sd": 1,
            "n": 20,
            "value": 4.3337333238920746
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.6713654463827226
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.586849484488135
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 6.117842407289563
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 7.200216794216826
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.939174402248286
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 6.129746988623084
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 7.220575063012038
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.46758495129345
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 6.259739576272953
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 6.970878888135455
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 7.078945495705872
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 4.962909672026642
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.992820503693803
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 4.802960073852616
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.891120681020314
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 6.317749399255254
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.041039563454953
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 7.231974832991513
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 4.715592316686707
        },
        {
            "group": "Delta",
            "subgroup": "B",
            "mu": 6,
            "sd": 1,
            "n": 20,
            "value": 5.453350673907052
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 6.795613065462448
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 3.4954097722697943
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 3.961234191901167
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 4.65690935601222
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 5.271392991531947
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 3.949233020740032
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 10.21729410913613
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 3.6838093316677334
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 3.8708625572385884
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 5.531711767131429
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 3.5087622200241166
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 4.415261708824276
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 4.381074227666006
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 4.6162510850426735
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 3.454406019071864
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 3.90554238377639
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 6.083104862961383
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 3.6065307306674996
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 5.399686684651362
        },
        {
            "group": "Epsilon",
            "subgroup": "A",
            "mu": 5,
            "sd": 1.4,
            "n": 20,
            "value": 3.8261311143907957
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 7.34662333621689
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 4.096459402692757
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 5.939187738966972
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 6.091091323078951
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 3.0375302177830297
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 2.516342950733793
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 6.065734325889363
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 6.94171251501758
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 7.002629527766825
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 4.463173223158508
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 8.008863606397515
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 6.3436847916205625
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 5.268290338740306
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 5.049548528277421
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 4.9676156096243815
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 4.330163401973892
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 5.301038942823165
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 4.956875318102075
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 3.9500136794372
        },
        {
            "group": "Epsilon",
            "subgroup": "B",
            "mu": 6,
            "sd": 3,
            "n": 20,
            "value": 7.439795918915232
        }
    ]
    return (
        <div s style={{ height: 380, width: 650 }} id='cha'>
            <ResponsiveBoxPlot
                data={data}
                margin={{ top: 60, right: 140, bottom: 60, left: 60 }}
                minValue={0}
                maxValue={10}
                subGroupBy="subgroup"
                padding={0.12}
                enableGridX={true}
                axisTop={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: 36,
                    truncateTickAt: 0
                }}
                axisRight={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: 0,
                    truncateTickAt: 0
                }}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'group',
                    legendPosition: 'middle',
                    legendOffset: 32,
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'value',
                    legendPosition: 'middle',
                    legendOffset: -40,
                    truncateTickAt: 0
                }}
                colors={{ scheme: 'category10' }}
                borderRadius={2}
                borderWidth={2}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.3
                        ]
                    ]
                }}
                medianWidth={2}
                medianColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.3
                        ]
                    ]
                }}
                whiskerEndSize={0.6}
                whiskerColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.3
                        ]
                    ]
                }}
                motionConfig="stiff"
                legends={[
                    {
                        anchor: 'right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemWidth: 60,
                        itemHeight: 20,
                        itemsSpacing: 3,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        symbolSize: 20,
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
