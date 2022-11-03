import React from "react";
import Home from "../pages/users/Home.jsx";
import Question from "../pages/users/Question.jsx";
import Share from "../pages/users/Share.jsx";
import ViewAnswer from "../pages/users/ViewAnswer.jsx"
import Accpet from "../pages/friends/Accpet.jsx";
import Answer from "../pages/friends/Answer.jsx";
import Completed from "../pages/friends/Completed.jsx";
import About from "../pages/coomonPage/About.jsx";
import Trems from "../pages/coomonPage/Trems.jsx";
import Faq from "../pages/coomonPage/Faq.jsx";
import Social from "../pages/coomonPage/Social.jsx";
import Contact from "../pages/coomonPage/Contact.jsx";
import Privacy from "../pages/coomonPage/Privacy.jsx";
import PageNotFound from "../pages/coomonPage/PageNotFound.jsx";
import { Route, Switch} from 'react-router-dom';

const Routes = () => {
            return  (
                        <>
                                        <Switch>

                                                        // user side Routes
                                                        <Route path="/" exact  component={Home} />
                                                        <Route path="/question" exact component={Question} />
                                                        <Route path="/share" exact component={Share} />
                                                        <Route path="/view-answer" exact component={ViewAnswer}/>

                                                        // Friends side Routes
                                                        <Route path="/accpet" exact component={Accpet} />
                                                        <Route path="/answer" exact component={Answer} />
                                                        <Route path="/completed" exact component={Completed} />

                                                        // Coomon Pages
                                                        <Route path="/about" exact component={About} />
                                                        <Route path="/privacy" exact component={Privacy} />
                                                        <Route path="trems-&-conditions" exact component={Trems} />
                                                        <Route path="faq" exact component={Faq} />
                                                        <Route path="social" exact component={Social} />
                                                        <Route path="contact" exact component={Contact} />
                                                        <Route path="*" component={PageNotFound} />
                                        </Switch>
                        
                        </>
            )
}

export default Routes;