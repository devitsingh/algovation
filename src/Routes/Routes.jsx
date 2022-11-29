import React from "react";
import Home from "../pages/users/Home.jsx";
import Question from "../pages/users/Question.jsx";
import Share from "../pages/users/Share.jsx";
import ViewAnswer from "../pages/users/ViewAnswer.jsx"
import Accpet from "../pages/friends/Accpet.jsx";
import Answer from "../pages/friends/Answer.jsx";
import Completed from "../pages/friends/Completed.jsx";
import Faq from "../pages/coomanPage/Faq.jsx";
import Contact from "../pages/coomanPage/Contact.jsx";
import PageNotFound from "../pages/coomanPage/PageNotFound.jsx";
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/question" exact component={Question} />
                <Route path="/share" exact component={Share} />
                <Route path="/view-answer" exact component={ViewAnswer} />
                <Route path="/accpet" exact component={Accpet} />
                <Route path="/answer" exact component={Answer} />
                <Route path="/completed" exact component={Completed} />
                <Route path="faq" exact component={Faq} />
                <Route path="contact" exact component={Contact} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </React.Fragment>
    )
}

export default Routes;