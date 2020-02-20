import React from 'react';
import ReactDOM from 'react-dom';
import SampleHeader from './components/sample-header';

const title = 'React / Webpack / Less Starter';

const app = (title) => (
    <React.Fragment>
        <SampleHeader></SampleHeader>
        <p>{title}</p>
    </React.Fragment>
);

ReactDOM.render(
    app(title),
    document.getElementById('app')
);


module.hot.accept();
