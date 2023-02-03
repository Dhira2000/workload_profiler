import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box";
import moment from "moment/moment";
import { useSelector } from "react-redux";

function getWeeksAfter(date, amount) {
  return date ? date.add(amount, "week") : undefined;
}

export default function MinMaxDateRangePicker() {
  
  const start_d=useSelector((state)=>state.masking.start_d)
  const end_d=useSelector((state)=>state.masking.end_d)

  console.log(start_d)

  const start_date=moment(start_d,'YYYY-MM-DD[T]HH:mm:ss').format('MM/DD/YYYY');
  const end_date=moment(end_d,'YYYY-MM-DD[T]HH:mm:ss').format('MM/DD/YYYY');
  // console.log((moment(start_d).format('MM/DD/YYYY')))

  const [value, setValue] = React.useState([null,null]);
  const handle=()=>{
    setValue([start_date,end_date])
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        value={value}
        // maxDate={getWeeksAfter(value[0], 4)}
        maxDate={end_date}
        minDate={start_date}
      
        onChange={handle}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            {/* <Box sx={{ mx: 1 }}>to</Box> */}
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}