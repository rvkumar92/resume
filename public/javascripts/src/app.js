import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Resume from './components/Resume';
import resumeContext from './data/resume.json';
ReactDOM.render(<Resume sourceData={resumeContext}/>,document.getElementById('resume-content'));
