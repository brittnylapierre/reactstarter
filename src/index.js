import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';//relative path for own component

const YT_API_KEY = 'AIzaSyBo0sjKytv20IyoQOFsewOfAN94VE-M_MU';
//Create a new component, this component should produce some html

//const es2016 -> it's a constant 
const App = () => {
    return (
        <div> 
            <SearchBar/> 
        </div>
    );//this is jsx
}
//now you can do <App></App> or <App/> to create an instance of app
//take this component's generated html and put it in the DOM
ReactDOM.render(<App/>, document.querySelector('.app')); //instantiate your component then send it to the dom in the target container, the root node of the entire applicaton