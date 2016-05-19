import React, {Component} from 'react';
import moment from 'moment';
var WorkItem = React.createClass({
    getWorkDates(){
        var startDate = moment(this.props.workitem.from).format("MMM,YYYY");
        return <span>{startDate} - {this.props.workitem.to}</span>
    },
    render(){
        console.log(this.props.workitem.workSummary[0].angular[0]);
        return(
            <div>
                <h4>{this.props.workitem.position},{this.props.workitem.company}</h4>
                <p style={{color:"#777b79"}}>{this.getWorkDates()}</p>
                <p style={{fontWeight:600,fontSize:'12px'}}>{this.props.workitem.workSummary[0].java[0].header}</p>
                <p>Developed services for a telecommunication system using Java.
                  The services were exposed for consumption using SOAP.</p>
                <p style={{fontWeight:600,fontSize:'12px'}}>{this.props.workitem.workSummary[0].angular[0].header}</p>
                <p>Built an AngularJS application to project a list of Master data tables in to a datagrid.
                The goal of the project was to simplify the task of performing CRUD operations on a selected table.
                The project initially used Angular ng-grid and was later moved onto ag-grid</p>
              <p style={{fontWeight:600,fontSize:'12px'}}>{this.props.workitem.workSummary[0].css[0].header}</p>
              <p>Working on a project to externalize whole CSS for a bespoke CRM application.
                Responsiveness, tidying the CSS, and creating a common header , footer & common design for modules are some of the key tasks involved in the project</p>
            </div>
        )
    }
});

export default WorkItem;
