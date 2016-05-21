import React, {Component} from 'react';
import Constants from '../Constants';
import moment from 'moment';
var WorkItem = React.createClass({
    getWorkDates(){
        var startDate = moment(this.props.workitem.from).format("MMM,YYYY");
        return <span>{startDate} - {this.props.workitem.to}</span>
    },
    render(){
      const fontWeight = Constants.FONT_WEIGHT, fontSize = Constants.FONT_SIZE;
        return(
            <div>
              <h4>{this.props.workitem.position},{this.props.workitem.company}</h4>
                <p style={{color:"#777b79"}}>{this.getWorkDates()}</p>
                <p style={{fontWeight,fontSize}}>{this.props.workitem.workSummary[0].java[0].header}</p>
                <p>{this.props.workitem.workSummary[0].java[0].content}</p>
                <p style={{fontWeight,fontSize}}>{this.props.workitem.workSummary[0].angular[0].header}</p>
                <p>{this.props.workitem.workSummary[0].angular[0].content}</p>
              <p style={{fontWeight,fontSize}}>{this.props.workitem.workSummary[0].css[0].header}</p>
              <p>{this.props.workitem.workSummary[0].css[0].content}</p>
            </div>
        )
    }
});

export default WorkItem;
