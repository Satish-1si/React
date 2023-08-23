import React from 'react'
import { Button,ButtonGroup,IconButton,Stack} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';


//Note:-https://mui.com/material-ui/api/button/ 
//Note:-https://mui.com/material-ui/api/stack/
export const Btn =()=> {
  return (
    <div>
      {/*  variant="text" */}
        <Stack spacing={6}>
       <Stack  direction={"row"} spacing={6}>
       <Button color="primary"   variant="text">Text</Button>
       <Button color="secondary" variant="text">Text</Button>
       <Button color="warning"   variant="text">Text</Button>
       <Button color="error"     variant="text">Text</Button>
       <Button color="info"      variant="text">Text</Button>
       </Stack>
         {/*  variant="contained" */}
       <Stack direction={"row"} spacing={6}>
       <Button color="primary"   variant="contained">contained</Button>
       <Button color="secondary" variant="contained">contained</Button>
       <Button color="warning"   variant="contained">contained</Button>
       <Button color="error"     variant="contained">contained</Button>
       <Button color="info"      variant="contained">contained</Button>
       </Stack>
        {/* variant="outlined" */}
       <Stack  direction={"row"} spacing={6}>
       <Button color="primary"   variant="outlined">outlined</Button>
       <Button color="secondary" variant="outlined">outlined</Button>
       <Button color="warning"   variant="outlined">outlined</Button>
       <Button color="error"     variant="outlined">outlined</Button>
       <Button color="info"      variant="outlined">outlined</Button>
       </Stack>
        {/* size="large,..." */}
       <Stack direction={"row"} display="block" spacing={6}>
        <Button color="primary"   size="large" variant="contained">medium</Button>
        <Button color="secondary" size="medium" variant="contained">large</Button>
        <Button color="warning"   size="small" variant="contained">small</Button>
       </Stack>
        {/* startIcon={<passTheIconComponent/>} || endIcon={<passTheIconComponent/>}  */}
       <Stack direction={"row"} spacing={6}>
       <Button color="secondary"  startIcon={<SendIcon/>} variant="contained">start-Icon</Button>
       <Button color="success"  endIcon={<SendIcon/>}   variant="contained"  >end-Icon  </Button>
       </Stack>
        {/* disable -->prop */}
       <Stack direction={"row"} spacing={6}>
       <Button color="warning" disabled variant="contained">disabled-Btn</Button>
       </Stack>
      {/* button -->link */}
       <Stack direction={"row"} spacing={6}>
       <Button color="error"  target="_blank" endIcon={<SendIcon/>} variant="contained" href='https://chat.openai.com/'>Link</Button>
       </Stack>
        {/* IconButton */}
       <Stack direction={"row"} spacing={6}>
         <IconButton color="info" size="large">
             <SendIcon/>
        </IconButton>
       </Stack>
         {/* Button Group ==>group of btns ==>send props at a time */}
       <Stack direction={"row"}  >
             <ButtonGroup 
                color="error"
                variant='contained'
                size="medium"
                orientation='vertical' 
                aria-label="alignment button group"
              >
                        <Button onClick={()=>alert("satish manepalli")} >Group_btn_component</Button>
                        <Button >Group_btn_component</Button>
                        <Button >Group_btn_component</Button>
             </ButtonGroup>
       </Stack>

       </Stack>
    </div>
  )
}
//'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | string

