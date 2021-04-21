import Search from './Component/Search';
import 'semantic-ui-css/semantic.min.css';
import Youtube from './Api/YoutubeApi';
import React from 'react';

class App extends React.Component{
    state = { videos : []};

   onSubmit = async (term) => {
       const list = await Youtube.get('/search', {
           params: {
               q: term
           }
       });
       console.log(list);
   };

    render() {
        return (
            <div>
                <div className="ui container">
                    <Search onFormSubmit={this.onSubmit}/>
                </div>
            </div>
        );
    }
}

export default App;
