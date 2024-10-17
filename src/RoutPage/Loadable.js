
import styled from '@emotion/styled';
import { LinearProgress} from '@mui/material';
import React, { Suspense } from 'react'

const LoadWrapper = styled('div')({
    position: 'fixed',
    top : '0',
    left : '0',
    zIndex : 999,
    width : '100%'
   
})

const Loader = () => (
<LoadWrapper>
    <LinearProgress sx={{height:6}}/>
</LoadWrapper>
);

const Loadable =(Component) => (props) => (
    <Suspense fallback={<Loader/>}>
        <Component {...props}/>
    </Suspense>
);

export default Loadable;