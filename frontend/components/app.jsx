import React from 'react';
import WelcomePage from './welcome_page/welcome_page';



const app = () => { 
    return(
        <div>
        {/* <Route exact path="/" component={WelcomePage} /> */}
            <WelcomePage/>
        </div>
    )
    
}

export default app;