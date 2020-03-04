import React from "react";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";


// import {Area, AreaChart, Line, LineChart, ResponsiveContainer} from "recharts";

const Synfin = ({match}) => {
    return(
        <div className="dashboard animated slideInUpTiny animation-duration-3">
            <ContainerHeader match={match} title={<IntlMessages id="sidebar.dashboard.synfin"/>}/>
        </div>
    )

}

export default Synfin;