import { Button } from 'bootstrap';
import React from 'react'
// import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  return (
    <div>
         <Button
               variant="contained"
               sx={{ margin: 4,  borderRadius: 3  }}
              >
                {" < "} back{" "}
              </Button>
    </div>
  )
}

// onClick={() => {
//     navigate("/Cards");
