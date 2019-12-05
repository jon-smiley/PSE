import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ResponsiveLine } from '@nivo/line'
import { ResponsiveRadar } from '@nivo/radar'
import { Panel, Layout } from 'smiley-design'
import styling from '../graphs/graphStyling.css'

class GraphPanel extends Component {
    render(){
      const { children, type } = this.props;
      
      var data = [
            {
              "id": "japan",
              "color": "hsl(153, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 160
                },
                {
                  "x": "helicopter",
                  "y": 197
                },
                {
                  "x": "boat",
                  "y": 283
                },
                {
                  "x": "train",
                  "y": 135
                },
                {
                  "x": "subway",
                  "y": 156
                },
                {
                  "x": "bus",
                  "y": 45
                },
                {
                  "x": "car",
                  "y": 215
                },
                {
                  "x": "moto",
                  "y": 19
                },
                {
                  "x": "bicycle",
                  "y": 242
                },
                {
                  "x": "horse",
                  "y": 29
                },
                {
                  "x": "skateboard",
                  "y": 201
                },
                {
                  "x": "others",
                  "y": 146
                }
              ]
            },
            {
              "id": "france",
              "color": "hsl(31, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 265
                },
                {
                  "x": "helicopter",
                  "y": 177
                },
                {
                  "x": "boat",
                  "y": 271
                },
                {
                  "x": "train",
                  "y": 264
                },
                {
                  "x": "subway",
                  "y": 92
                },
                {
                  "x": "bus",
                  "y": 127
                },
                {
                  "x": "car",
                  "y": 51
                },
                {
                  "x": "moto",
                  "y": 40
                },
                {
                  "x": "bicycle",
                  "y": 118
                },
                {
                  "x": "horse",
                  "y": 155
                },
                {
                  "x": "skateboard",
                  "y": 74
                },
                {
                  "x": "others",
                  "y": 208
                }
              ]
            },
            {
              "id": "us",
              "color": "hsl(272, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 182
                },
                {
                  "x": "helicopter",
                  "y": 149
                },
                {
                  "x": "boat",
                  "y": 223
                },
                {
                  "x": "train",
                  "y": 173
                },
                {
                  "x": "subway",
                  "y": 50
                },
                {
                  "x": "bus",
                  "y": 108
                },
                {
                  "x": "car",
                  "y": 217
                },
                {
                  "x": "moto",
                  "y": 293
                },
                {
                  "x": "bicycle",
                  "y": 193
                },
                {
                  "x": "horse",
                  "y": 249
                },
                {
                  "x": "skateboard",
                  "y": 204
                },
                {
                  "x": "others",
                  "y": 155
                }
              ]
            },
            {
              "id": "germany",
              "color": "hsl(80, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 95
                },
                {
                  "x": "helicopter",
                  "y": 274
                },
                {
                  "x": "boat",
                  "y": 107
                },
                {
                  "x": "train",
                  "y": 81
                },
                {
                  "x": "subway",
                  "y": 192
                },
                {
                  "x": "bus",
                  "y": 140
                },
                {
                  "x": "car",
                  "y": 64
                },
                {
                  "x": "moto",
                  "y": 174
                },
                {
                  "x": "bicycle",
                  "y": 265
                },
                {
                  "x": "horse",
                  "y": 234
                },
                {
                  "x": "skateboard",
                  "y": 269
                },
                {
                  "x": "others",
                  "y": 243
                }
              ]
            },
            {
              "id": "norway",
              "color": "hsl(140, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 84
                },
                {
                  "x": "helicopter",
                  "y": 219
                },
                {
                  "x": "boat",
                  "y": 205
                },
                {
                  "x": "train",
                  "y": 73
                },
                {
                  "x": "subway",
                  "y": 246
                },
                {
                  "x": "bus",
                  "y": 221
                },
                {
                  "x": "car",
                  "y": 178
                },
                {
                  "x": "moto",
                  "y": 228
                },
                {
                  "x": "bicycle",
                  "y": 47
                },
                {
                  "x": "horse",
                  "y": 224
                },
                {
                  "x": "skateboard",
                  "y": 42
                },
                {
                  "x": "others",
                  "y": 248
                }
              ]
            }
          ]
      var dataSector = [
            {
              "taste": "fruity",
              "chardonay": 59,
              "carmenere": 56,
              "syrah": 29
            },
            {
              "taste": "bitter",
              "chardonay": 22,
              "carmenere": 102,
              "syrah": 109
            },
            {
              "taste": "heavy",
              "chardonay": 92,
              "carmenere": 55,
              "syrah": 58
            },
            {
              "taste": "strong",
              "chardonay": 32,
              "carmenere": 39,
              "syrah": 95
            },
            {
              "taste": "sunny",
              "chardonay": 78,
              "carmenere": 65,
              "syrah": 37
            }
          ]
        
      return(
        <Layout>
            <Panel>
                <h4>{ children }</h4>
                <div className='heightMax'>
                    <ResponsiveLine
                        data={data}
                        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                        xScale={{ type: 'point' }}
                        yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'transportation',
                            legendOffset: 36,
                            legendPosition: 'middle'
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'count',
                            legendOffset: -40,
                            legendPosition: 'middle'
                        }}
                        colors={{ scheme: 'nivo' }}
                        pointSize={10}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabel="y"
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
            </Panel>
            <Panel>
                <h4>SectorGraph</h4>
                <div className='heightMax'>
                    <ResponsiveRadar
                        data={dataSector}
                        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
                        indexBy="taste"
                        maxValue="auto"
                        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                        curve="linearClosed"
                        borderWidth={2}
                        borderColor={{ from: 'color' }}
                        gridLevels={5}
                        gridShape="circular"
                        gridLabelOffset={36}
                        enableDots={true}
                        dotSize={10}
                        dotColor={{ theme: 'background' }}
                        dotBorderWidth={2}
                        dotBorderColor={{ from: 'color' }}
                        enableDotLabel={true}
                        dotLabel="value"
                        dotLabelYOffset={-12}
                        colors={{ scheme: 'nivo' }}
                        fillOpacity={0.25}
                        blendMode="multiply"
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                        isInteractive={true}
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
            </Panel>
        </Layout>
      )
    }
  }
  
  // type will pass through the graph subject (crypto or stock)
  GraphPanel.propTypes = {
    type : PropTypes.string
  }
  
  export default GraphPanel