import React from 'react';
import { MetaProvider } from '../../hook/useMetaData';
import { SurveyProvider } from '../../hook/useSurveyData'

import Main from '../main';
import { GlobalStyles} from '../../styles';

function App() {
    return (
        <div className="App">
            <>
            <MetaProvider>
                <SurveyProvider>
                    <GlobalStyles>
                        <Main/>
                    </GlobalStyles>
                </SurveyProvider>
            </MetaProvider>
            </>
        </div>
    );
}

export default App;
