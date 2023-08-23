import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Stack } from '@mui/material';

const data = [
    "Copy of # Character methods",
    "Predefined→ functional-interfaces",
    "Regular expression:-",
    "Pojo class vs java-bean classes",
    "Python oops",
    "#multi threading :-",
    "jdbc",
    "Mysql",
    "collections",
    "interface",
    "abstract class",
    "Copy of #string methods",
    "collections(list)",
    "#string methods",
    "object refernce checking(2ways)",
    "class methods",
    "marker_interface",
    "String vs stringBuffer vs StringBuilder",
    "readers/printers",
    "oops concepts",
    "functional interface:",
    "scanner (read the data)",
    "binding",
    "polymorphism:",
    "jvm calls (order)",
    "inputStream/outputStreeam",
    "buffer input Stream Reader:-",
    "Java conversion",
    "Super vs this =======>difference",
    "ArrayList methods",
    "Copy of collections",
    "Array class methods",
    "object methods:-",
    "Generies",
    "Rules:static vs instance",
    "data getting from command prompt",
    
   
]


export const ToggleButtons=() =>{
  const [alignment, setAlignment] = React.useState('left');
  const handleAlignment = (event, newAlignment) => {
    console.log(newAlignment)
    setAlignment(newAlignment);

  };

  return (
    <Stack direction={"row"} spacing={2} onClick={handleAlignment}>
    <div style={{height:50,width:50,borderRadius:"50%",border:"solid",textAlign:"center",value:"1"}}>1</div>
    <div style={{height:50,width:50,borderRadius:"50%",border:"solid",textAlign:"center",value:"2"}}>2</div>
    <div style={{height:50,width:50,borderRadius:"50%",border:"solid",textAlign:"center",value:"3"}}>3</div>
    </Stack>
  );
}


