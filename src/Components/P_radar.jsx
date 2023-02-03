import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useSelector } from 'react-redux';
import MaterialTable from 'material-table';
import { createTheme, ThemeProvider, Grid } from '@mui/material';

function P_radar(props) {
console.log(props.rdata)
  const defaultMaterialTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const start_d = useSelector((state) => state.masking.start_d)
  const datas =
  [
    { attributes:'Time Stamp', percentile_1: start_d , percentile_2: start_d  },
    { attributes:'CPU Utilisation', percentile_1 :props.rdata[0].value[0], percentile_2: props.rdata[1].value[0] },
    { attributes: 'Memory Utilisation', percentile_1: props.rdata[0].value[1], percentile_2: props.rdata[1].value[1] },
    { attributes: 'Disk Busy', percentile_1: props.rdata[0].value[2], percentile_2: props.rdata[1].value[2] },
    { attributes: 'Disk Weight', percentile_1: props.rdata[0].value[3], percentile_2: props.rdata[1].value[3] },
    { attributes: 'Cached', percentile_1: props.rdata[0].value[4], percentile_2: props.rdata[1].value[4] },
    { attributes: 'Dirty', percentile_1: props.rdata[0].value[5], percentile_2: props.rdata[1].value[5] },
    { attributes: 'txbytes', percentile_1: props.rdata[0].value[6], percentile_2: props.rdata[1].value[6] },
    { attributes: 'rxbytes', percentile_1: props.rdata[0].value[7], percentile_2: props.rdata[1].value[7] }

  ]

  const db = [
    { name: 'Cpu Utilization'},
    { name: 'memory utilization' },
    { name: 'disk busy' },
    { name: 'disk weighted' },
    { name: 'cached' },
    { name: 'dirty' },
    { name: 'tx bytes' },
    { name: 'rx bytes' }
  ]
  const option = {


    tooltip: { show: true },

    legend: {
      // data: props.names,
      data:props.names,
      orient: 'vertical',
      right:10,
      top: 3,
      textStyle: {
        color: '#ccc'
      }

    },
    grid: {
      backgroundColor: "#060706",
      show: true,
      borderColor: "#060706",
      shadowColor: "#060706",
      shadowBlur: 10,
    },




    radar: {
      center: ['50%', '50%'],
      axisLine: {
        color: "black",
      },
      splitLine: {
        show: false,
      },
      splitArea: {
        show: false,
      },



      // shape: 'circle',
      indicator: db
    },

    series: [
      {
        // name: 'Budget vs spending',
        type: 'radar',
        // data: props.guru
        data: props.rdata
      }
    ]
  };
  return (
    <div>
      {/* <CombineBars /> */}
      <ReactECharts
        option={option}
        style={{ height: 400,width:900 }}
      />
      <Grid sx={{ width:1170 }}>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable


          var columns={[
            { title: 'Attributes', field: 'attributes' },
            { title: 'Percentile', field: 'percentile_1' },
            { title: 'Percentile', field: 'percentile_2'}

          ]}

          data={datas}
          options={{
            tableLayout:'fixed',
            SortArrow: false,
            toolbar: false,
       
            pageSize: 5,
            paging:false,
            emptyRowsWhenPaging: false,
            rowsPerPageOptions:false,
            maxBodyHeight: 305
    



          }}
        /></ThemeProvider></Grid>
      </div>
  )
}

export default P_radar