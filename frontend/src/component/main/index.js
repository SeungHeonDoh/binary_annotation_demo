import React, { useContext } from 'react';
import {SurveyContext} from '../../hook/useSurveyData';
import {RenderArea, Container} from '../../styles';

import Tutorial from '../surveys/tutorial';
import Intro from '../surveys/intro';
import CheckSubmit from '../surveys/checkSubmit'
import Finish from "../surveys/finish";


export default function Main() {
    const Context = useContext(SurveyContext);
    const { checkRender, tutorialRender, surveyRender, tutorialIndex } = Context;
    
    let contents;
    if(surveyRender === false){
        contents = <Intro/>
    }else if(tutorialRender === true){
        contents = <Tutorial TutorialIndex = {tutorialIndex}/>
    }else if(checkRender === true){
        contents = <CheckSubmit/>
    }else{
        contents = <Finish/>
    }

    return(
        <RenderArea>
            <Container> 
                {contents}
            </Container>
        </RenderArea>
    );
}