import React from "react";
import {Route,Switch,Redirect} from 'react-router-dom';
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import JuniorPlus from "./pages/JuniorPlus";
import Junior from "./pages/Junior";
import Home from "./pages/Home";

export const PATH = {
    HOME: "/",
    PRE_JUNIOR: "/pre-junior",
    JUNIORPLUS: "/JuniorPlus",
    JUNIOR: "/junior",
    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
            <Route path={PATH.HOME} exact render={() => <Home />}/>

            <Route path={PATH.PRE_JUNIOR} exact render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIORPLUS} exact render={() => <JuniorPlus/>}/>
                <Route path={PATH.JUNIOR} exact render={() => <Junior/>}/>
            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
