import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daza-charts-test',
  templateUrl: './daza-charts-test.component.html',
  styleUrls: ['./daza-charts-test.component.css']
})
export class DazaChartsTestComponent implements OnInit {
  scatter_single_axis_chart_data: any = { 
    title: null,
    xAxis: ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a','10a','11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'],
    yAxis: ['Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
    data: [[0,0,5],[0,1,20],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]],
  };
  pie_chart_data = {
    title: 'Countries',
    data: [
        { "name": "Germany", "value": 335 },
        { "name": "France", "value": 310 },
        { "name": "Canada", "value": 800 },
        { "name": "Russia", "value": 135 },
        { "name": "USA", "value": 1548  }
    ],
  };
  bar_chart_data = {
    title: 'Countries',
    data: [
        { "name": "Germany", "value": 335 },
        { "name": "France", "value": 310 },
        { "name": "Canada", "value": 800 },
        { "name": "Russia", "value": 135 },
        { "name": "USA", "value": 1548  }
    ],
  };
  radar_chart_data = {
    title: 'Bancos',
    indicator: [
      { name: '（Administration）', max: 15},
      { name: '（Development）', max: 15},
      { name: '（Marketing）', max: 15}
    ],
    data: [
    {
      name: 'Banco BISA',
      value: [2.6, 5.9, 9.0],
    },
    {
      name: 'Banco BCP',
      value: [3.9, 5.9, 11.1],
    },
    {
      name: 'Banco BNB',
      value: [4.9, 8.9, 11.1],
    }
]};
  othersVal = 400;
  newOptions = {};
  // newOptions = {
  //   color: ['#800000', '#ff0000', '#800080', '#F970E4'],
  //   title: {
  //     text: 'this.chartData.title',
  //     right: 'center',
  //     top: 'bottom'
  //   },
  //   legend: {
  //     selectedMode: false,
  //     textStyle: {
  //       color: '#02FB3B',
  //       fontStyle: 'normal',
  //       fontWeight: 'normal',
  //       fontFamily: 'sans-serif'
  //     }
  //   },
  //   // tooltip: {
  //   //   trigger: 'item',
  //   //   formatter: '{a} <br/>{b} : <b>{c}</b>',
  //   // },
  // }

  multiple_xaxis_chart_data = {
    title: 'Bancos',
    xAxisData: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
      'enero'
    ],
    data: [
    {
      title: 'Banco BISA',
      data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
    },
    {
      title: 'Banco BCP',
      data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
    },
    {
      title: 'Banco BNB',
      data:  [4.9, 8.9, 11.1, 13.7, 48.5, 69.2, 255.6, 46.6, 70.2, 18.4, 14.3, 0.7],
    }
]};

candlestick_chart_data = {
  title: "Candlestick",
  data: {
    title: 'Depósitos',
    data: [
    ['2013/1/23'],
    ['2013/1/24', 2320.26,2320.26,2287.3,2362.94],
    ['2013/1/25', 2300,2291.3,2288.26,2308.38],
    ['2013/1/28', 2295.35,2346.5,2295.35,2346.92],
    ['2013/1/29', 2347.22,2358.98,2337.35,2363.8],
    ['2013/1/30', 2360.75,2382.48,2347.89,2383.76],
    ['2013/1/31', 2383.43,2385.42,2371.23,2391.82],
    ['2013/2/1', 2377.41,2419.02,2369.57,2421.15],
    ['2013/2/4', 2425.92,2428.15,2417.58,2440.38],
    ['2013/2/5', 2411,2433.13,2403.3,2437.42],
    ['2013/2/6', 2432.68,2434.48,2427.7,2441.73],
    ['2013/2/7', 2430.69,2418.53,2394.22,2433.89],
    ['2013/2/8', 2416.62,2432.4,2414.4,2443.03],
    ['2013/2/18', 2441.91,2421.56,2415.43,2444.8],
    ['2013/2/19', 2420.26,2382.91,2373.53,2427.07],
    ['2013/2/20', 2383.49,2397.18,2370.61,2397.94],
    ['2013/2/21', 2378.82,2325.95,2309.17,2378.82],
    ['2013/2/22', 2322.94,2314.16,2308.76,2330.88],
    ['2013/2/25', 2320.62,2325.82,2315.01,2338.78],
    ['2013/2/26', 2313.74,2293.34,2289.89,2340.71],
    ['2013/2/27', 2297.77,2313.22,2292.03,2324.63],
    ['2013/2/28', 2322.32,2365.59,2308.92,2366.16],
    ['2013/3/1', 2364.54,2359.51,2330.86,2369.65],
    ['2013/3/4', 2332.08,2273.4,2259.25,2333.54],
    ['2013/3/5', 2274.81,2326.31,2270.1,2328.14],
    ['2013/3/6', 2333.61,2347.18,2321.6,2351.44],
    ['2013/3/7', 2340.44,2324.29,2304.27,2352.02],
    ['2013/3/8', 2326.42,2318.61,2314.59,2333.67],
    ['2013/3/11', 2314.68,2310.59,2296.58,2320.96],
    ['2013/3/12', 2309.16,2286.6,2264.83,2333.29],
    ['2013/3/13', 2282.17,2263.97,2253.25,2286.33],
    ['2013/3/14', 2255.77,2270.28,2253.31,2276.22],
    ['2013/3/15', 2269.31,2278.4,2250,2312.08],
    ['2013/3/18', 2267.29,2240.02,2239.21,2276.05],
    ['2013/3/19', 2244.26,2257.43,2232.02,2261.31],
    ['2013/3/20', 2257.74,2317.37,2257.42,2317.86],
    ['2013/3/21', 2318.21,2324.24,2311.6,2330.81],
    ['2013/3/22', 2321.4,2328.28,2314.97,2332],
    ['2013/3/25', 2334.74,2326.72,2319.91,2344.89],
    ['2013/3/26', 2318.58,2297.67,2281.12,2319.99],
    ['2013/3/27', 2299.38,2301.26,2289,2323.48],
    ['2013/3/28', 2273.55,2236.3,2232.91,2273.55],
    ['2013/3/29', 2238.49,2236.62,2228.81,2246.87],
    ['2013/4/1', 2229.46,2234.4,2227.31,2243.95],
    ['2013/4/2', 2234.9,2227.74,2220.44,2253.42],
    ['2013/4/3', 2232.69,2225.29,2217.25,2241.34],
    ['2013/4/8', 2196.24,2211.59,2180.67,2212.59],
    ['2013/4/9', 2215.47,2225.77,2215.47,2234.73],
    ['2013/4/10', 2224.93,2226.13,2212.56,2233.04],
    ['2013/4/11', 2236.98,2219.55,2217.26,2242.48],
    ['2013/4/12', 2218.09,2206.78,2204.44,2226.26],
    ['2013/4/15', 2199.91,2181.94,2177.39,2204.99],
    ['2013/4/16', 2169.63,2194.85,2165.78,2196.43],
    ['2013/4/17', 2195.03,2193.8,2178.47,2197.51],
    ['2013/4/18', 2181.82,2197.6,2175.44,2206.03],
    ['2013/4/19', 2201.12,2244.64,2200.58,2250.11],
    ['2013/4/22', 2236.4,2242.17,2232.26,2245.12],
    ['2013/4/23', 2242.62,2184.54,2182.81,2242.62],
    ['2013/4/24', 2187.35,2218.32,2184.11,2226.12],
    ['2013/4/25', 2213.19,2199.31,2191.85,2224.63],
    ['2013/4/26', 2203.89,2177.91,2173.86,2210.58],
    ['2013/5/2', 2170.78,2174.12,2161.14,2179.65],
    ['2013/5/3', 2179.05,2205.5,2179.05,2222.81],
    ['2013/5/6', 2212.5,2231.17,2212.5,2236.07],
    ['2013/5/7', 2227.86,2235.57,2219.44,2240.26],
    ['2013/5/8', 2242.39,2246.3,2235.42,2255.21],
    ['2013/5/9', 2246.96,2232.97,2221.38,2247.86],
    ['2013/5/10', 2228.82,2246.83,2225.81,2247.67],
    ['2013/5/13', 2247.68,2241.92,2231.36,2250.85],
    ['2013/5/14', 2238.9,2217.01,2205.87,2239.93],
    ['2013/5/15', 2217.09,2224.8,2213.58,2225.19],
    ['2013/5/16', 2221.34,2251.81,2210.77,2252.87],
    ['2013/5/17', 2249.81,2282.87,2248.41,2288.09],
    ['2013/5/20', 2286.33,2299.99,2281.9,2309.39],
    ['2013/5/21', 2297.11,2305.11,2290.12,2305.3],
    ['2013/5/22', 2303.75,2302.4,2292.43,2314.18],
    ['2013/5/23', 2293.81,2275.67,2274.1,2304.95],
    ['2013/5/24', 2281.45,2288.53,2270.25,2292.59],
    ['2013/5/27', 2286.66,2293.08,2283.94,2301.7],
    ['2013/5/28', 2293.4,2321.32,2281.47,2322.1],
    ['2013/5/29', 2323.54,2324.02,2321.17,2334.33],
    ['2013/5/30', 2316.25,2317.75,2310.49,2325.72],
    ['2013/5/31', 2320.74,2300.59,2299.37,2325.53],
    ['2013/6/3', 2300.21,2299.25,2294.11,2313.43],
    ['2013/6/4', 2297.1,2272.42,2264.76,2297.1],
    ['2013/6/5', 2270.71,2270.93,2260.87,2276.86],
    ['2013/6/6', 2264.43,2242.11,2240.07,2266.69],
    ['2013/6/7', 2242.26,2210.9,2205.07,2250.63],
    ['2013/6/13', 2190.1,2148.35,2126.22,2190.1]
  ]
}
}
ma = [5,10]

sunburst_chart_data = [{
  name: 'Grandpa',
  children: [{
      name: 'Uncle Leo',
      value: 15,
      children: [{
          name: 'Cousin Jack',
          value: 2
      }, {
          name: 'Cousin Mary',
          value: 5,
          children: [{
              name: 'Jackson',
              value: 2
          }]
      }, {
          name: 'Cousin Ben',
          value: 4
      }]
  }, {
      name: 'Aunt Jane',
      children: [{
          name: 'Cousin Kate',
          value: 4
      }]
  }, {
      name: 'Father',
      value: 10,
      children: [{
          name: 'Me',
          value: 5,
          itemStyle: {
              color: 'red'
          }
      }, {
          name: 'Brother Peter',
          value: 1
      }]
  }]
}, {
  name: 'Mike',
  children: [{
      name: 'Uncle Dan',
      children: [{
          name: 'Cousin Lucy',
          value: 3
      }, {
          name: 'Cousin Luck',
          value: 4,
          children: [{
              name: 'Nephew',
              value: 2
          }]
      }]
  }]
}, {
  name: 'Nancy',
  children: [{
      name: 'Uncle Nike',
      children: [{
          name: 'Cousin Betty',
          value: 1
      }, {
          name: 'Cousin Jenny',
          value: 2
      }]
  }]
}];

polar_punch_card_data = {
  title: 'Polar Punch Card',
  angleAxis: ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
  '7a', '8a', '9a','10a','11a',
  '12p', '1p', '2p', '3p', '4p', '5p',
  '6p', '7p', '8p', '9p', '10p', '11p'],
  radiusAxis: ['Saturday', 'Friday', 'Thursday',
  'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
  data: [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]]

}
bar_y_category_stack = {
  title: 'Bar y Category Stack Chart',
  yAxis: ['Saturday', 'Friday', 'Thursday',
  'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
  data: [
    {
      title: 'Banco BISA',
      values: [320, 302, 301, 334, 390, 330, 320]   
    },
    {
      title: 'Banco BCP',
      values: [120, 132, 101, 134, 90, 230, 210]    
    },
    {
      title: 'Banco BNB',
      values: [220, 182, 191, 234, 290, 330, 310]   
    }
]
};

  constructor() { }

  ngOnInit() {
  }

}
