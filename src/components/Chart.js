import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryLegend,
  VictoryGroup
} from "victory";


const wincTheme = {
  area: {
    style: {
      data: {
        fill: "#212121"
      },
      labels: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: "#90A4AE",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      axisLabel: {
        textAnchor: "middle",
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      grid: {
        fill: "none",
        stroke: "none"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: "#90A4AE",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      tickLabels: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  bar: {
    style: {
      data: {
        fill: "#4a90e2",
        padding: 0,
        strokeWidth: 0
      },
      labels: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 8,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 20
  },
  boxplot: {
    style: {
      max: {
        padding: 8,
        stroke: "#455A64",
        strokeWidth: 1
      },
      maxLabels: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      median: {
        padding: 8,
        stroke: "#455A64",
        strokeWidth: 1
      },
      medianLabels: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      min: {
        padding: 8,
        stroke: "#455A64",
        strokeWidth: 1
      },
      minLabels: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      q1: {
        padding: 8,
        fill: "#455A64"
      },
      q1Labels: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      q3: {
        padding: 8,
        fill: "#455A64"
      },
      q3Labels: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    boxWidth: 20,
    width: 350,
    height: 350,
    padding: 50
  },
  candlestick: {
    style: {
      data: {
        stroke: "#455A64"
      },
      labels: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    candleColors: {
      positive: "#ffffff",
      negative: "#455A64"
    },
    width: 350,
    height: 350,
    padding: 50
  },
  chart: {
    width: 800,
    height: 300,
    padding: 50
  },
  errorbar: {
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#455A64",
        strokeWidth: 2
      },
      labels: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  group: {
    colorScale: [
      "#f4511e",
      "#77DD77",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    width: 350,
    height: 350,
    padding: 50
  },
  legend: {
    colorScale: [
      "#f4511e",
      "#77DD77",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      title: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 5,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    }
  },
  line: {
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#455A64",
        strokeWidth: 2
      },
      labels: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  pie: {
    colorScale: [
      "#f4511e",
      "#77DD77",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    style: {
      data: {
        padding: 8,
        stroke: "#ECEFF1",
        strokeWidth: 1
      },
      labels: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 20,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  scatter: {
    style: {
      data: {
        fill: "#455A64",
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: {
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  stack: {
    colorScale: [
      "#f4511e",
      "#77DD77",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    width: 350,
    height: 350,
    padding: 50
  },
  tooltip: {
    style: {
      fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
      fontSize: 12,
      letterSpacing: "normal",
      padding: 5,
      fill: "#455A64",
      stroke: "transparent",
      strokeWidth: 0,
      pointerEvents: "none"
    },
    flyoutStyle: {
      stroke: "#212121",
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: {
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 5,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
        pointerEvents: "none"
      },
      flyout: {
        stroke: "#212121",
        strokeWidth: 1,
        fill: "#f0f0f0",
        pointerEvents: "none"
      }
    },
    width: 350,
    height: 350,
    padding: 50
  }
};

const Chart = function(props) {

  const getAverage = (array) => {
    let sum = array.reduce((total, item) => item += total)
    let average = Math.round((sum / array.length) * 100) / 100
    return average
  }

  const gemMoeilijkheidPerOpdracht= (opdrachtId) => {
    const alleReviews = props.data.Reviews.filter(review => review.opdrachtId === opdrachtId)
    const alleReviewsMoeilijkheid = alleReviews.map(item => item.moeilijkheid)
    const gemiddeldeMoeilijkheid = getAverage(alleReviewsMoeilijkheid)
    return gemiddeldeMoeilijkheid
  }

  const gemLeukheidPerOpdracht = (opdrachtId) => {
    const alleReviews = props.data.Reviews.filter(review => review.opdrachtId === opdrachtId)
    const alleReviewsLeukheid = alleReviews.map(item => item.leukheid)
    const gemiddeldeLeukheid = getAverage(alleReviewsLeukheid)
    return gemiddeldeLeukheid
  }

  const alleOpdrachtenGrafiek = props.data.Opdrachten.map(opdracht => {
    const moeilijkheidGemiddeld = gemMoeilijkheidPerOpdracht(opdracht.id)
    const leukheidGemiddeld = gemLeukheidPerOpdracht(opdracht.id)
    return({id: opdracht.id, opdracht: opdracht.name, moeilijkheid: moeilijkheidGemiddeld, leukheid: leukheidGemiddeld})

  })

  const alleStudentenGrafiek = props.data.Students.map(student => {
    const moeilijkheidGemiddeld= gemMoeilijkheidPerOpdracht(student.id)
    const leukheidGemiddeld = gemLeukheidPerOpdracht(student.id)
    return({id:student.id, student: student.name, moeilijkheid: moeilijkheidGemiddeld, leukheid: leukheidGemiddeld})
  })

  const assignmentRatingAverageWithLabels = alleOpdrachtenGrafiek.map(avg => ({
    opdracht: avg.opdracht,
    moeilijkheid: avg.moeilijkheid,
    leukheid: avg.leukheid,
    label: `Opdracht ${
      avg.opdracht
    }, moeilijkheid: ${avg.moeilijkheid.toFixed(
      1
    )}, leukheid: ${avg.leukheid.toFixed(1)}`
  }));
  const studentRatingAverageWithLabels = alleStudentenGrafiek.map(avg => ({
    student: avg.student,
    moeilijkheid: avg.moeilijkheid,
    leukheid: avg.leukheid,
    label: `Student ${
      avg.student
    }, moeilijkheid: ${avg.moeilijkheid.toFixed(
      1
    )}, leukheid: ${avg.leukheid.toFixed(1)}`
  }));
  
  return(
    <>
    <p>Gemiddelde per student van alle opdrachten</p>
    <VictoryChart width= {2000} height= {300} domainPadding={15} theme={wincTheme}>
    <VictoryLegend x={900} y={0}
  orientation="horizontal"
  gutter={20}
  style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
  data={[
    { name: "Leuk", symbol:{fill: "#77DD77", type:"square"}},
    { name: "Moeilijk", symbol:{fill: "#F4511", type:"square"}},
  ]}
/>
      <VictoryGroup offset={20}>

        <VictoryBar
          labelComponent={<VictoryTooltip constrainToVisibleArea/>}
          data={studentRatingAverageWithLabels}
          x="student"
          y="moeilijkheid"
          style={{
                data: {
                  visibility: props.checked.moeilijkBox ? "visible" : "hidden",
                },
              }}
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={studentRatingAverageWithLabels.map(
            avg => avg.student
          )}
        />
        <VictoryBar
          labelComponent={<VictoryTooltip constrainToVisibleArea/>}
          data={studentRatingAverageWithLabels}
          x="student"
          y="leukheid"
          style={{
                data: {
                  visibility: props.checked.leukBox ? "visible" : "hidden",
                },
              }}
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={studentRatingAverageWithLabels.map(
            avg => avg.student
          )}
        />
      </VictoryGroup>
      <VictoryAxis
        style={{tickLabels:{angle:20}}}
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={studentRatingAverageWithLabels.map(
          avg => avg.student
        )}
      />
      <VictoryAxis dependentAxis />
    </VictoryChart>
    <p>Gemiddelde score per opdracht van alle studenten</p>
    <VictoryChart width= {2000} height= {300} domainPadding={15} theme={wincTheme}>
    <VictoryLegend x={900} y={0}
  orientation="horizontal"
  gutter={20}
  style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
  data={[
    { name: "Leuk", symbol:{fill: "#77dd77", type:"square"}},
    { name: "Moeilijk", symbol:{fill: "#f4511e", type:"square"}},
  ]}
/>
      <VictoryGroup offset={20}>

        <VictoryBar
          labelComponent={<VictoryTooltip constrainToVisibleArea/>}
          data={assignmentRatingAverageWithLabels}
          x="opdracht"
          y="moeilijkheid"
          style={{
                data: {
                  visibility: props.checked.moeilijkBox ? "visible" : "hidden",
                },
              }}
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignmentRatingAverageWithLabels.map(
            avg => avg.opdracht
          )}
        />
        <VictoryBar
          labelComponent={<VictoryTooltip constrainToVisibleArea/>}
          data={assignmentRatingAverageWithLabels}
          x="opdracht"
          y="leukheid"
          style={{
                data: {
                  visibility: props.checked.leukBox ? "visible" : "hidden",
                },
              }}
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignmentRatingAverageWithLabels.map(
            avg => avg.opdracht
          )}
        />
      </VictoryGroup>
      <VictoryAxis
      style={{tickLabels:{angle:20}}}
      />
      <VictoryAxis dependentAxis />
    </VictoryChart>
    <p>Opdrachten van moeilijk ➡️ makkelijk</p>
    <VictoryChart width= {2000} height= {300} domainPadding={15} theme={wincTheme}>
    <VictoryBar
      labelComponent={<VictoryTooltip constrainToVisibleArea/>}
      data={assignmentRatingAverageWithLabels}
      x="opdracht"
      y="moeilijkheid"
      sortOrder="descending"
      sortKey="y"

      tickValues={[1, 2, 3, 4, 5]}
      tickFormat={assignmentRatingAverageWithLabels.map(
        avg => avg.opdracht
      )}
    />
    <VictoryAxis
    style={{tickLabels:{angle:20}}}

    />
    <VictoryAxis dependentAxis />
    </VictoryChart>
    <p>Opdrachten van leuk ➡️ minst leuk</p>
    <VictoryChart width= {2000} height= {300} domainPadding={15} theme={wincTheme}>
    <VictoryBar
      labelComponent={<VictoryTooltip constrainToVisibleArea/>}
      data={assignmentRatingAverageWithLabels}
      x="opdracht"
      y="leukheid"
      sortOrder="descending"
      sortKey="y"

      tickValues={[1, 2, 3, 4, 5]}
      tickFormat={assignmentRatingAverageWithLabels.map(
        avg => avg.opdracht
      )}
    />
    <VictoryAxis
    style={{tickLabels:{angle:20}}}

    />
    <VictoryAxis dependentAxis />
    </VictoryChart>
    </>
)};

export default Chart
