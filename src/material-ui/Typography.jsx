import React from "react"
import  {Typography}       from "@mui/material"
// Note:- https://mui.com/material-ui/customization/typography/
// Note:- typograpy-styles ==>https://mui.com/material-ui/customization/default-theme/
export const Typo =()=>{
       
       return  (<div>
              {/* h1-h6 */}
        <Typography variant="h1">       Responsive h3</Typography>
        <Typography variant="h2">       Responsive h3</Typography>
        <Typography variant="h3">       Responsive h3</Typography>
        <Typography variant="h4">       Responsive h3</Typography>
        <Typography variant="h5">       Responsive h3</Typography>
        <Typography variant="h6">       Responsive h3</Typography>
            {/* subtitle1,2 */}
        <Typography variant="subtitle1">Responsive h3</Typography>
        <Typography variant="subtitle2">Responsive h3</Typography>
           {/* body1,2 */}
        <Typography variant="body1">   Responsive h3  </Typography>
        <Typography variant="body2">   Responsive h3  </Typography>
        {/* btn-1 */}
        <Typography variant="button">  Responsive h3  </Typography>

        <Typography variant="caption"> Responsive h3  </Typography>  
        <Typography variant="overline">Responsive h3  </Typography>  

        {/* h1, h2, h3, h4, h5, and h6 ========>for headings of different levels.
            subtitle1 and subtitle2  =========>for subtitles.
            body1 and body2 ============>for regular body text.
            button ============>for button text.
            caption for smaller text ========>used in captions. 
       */}

       </div> )
}