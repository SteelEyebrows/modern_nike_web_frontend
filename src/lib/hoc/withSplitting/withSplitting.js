import * as React from "react";

const withSplitting = getComponent =>{
    class withSplitting extends React.Component {
        state={
            Splitted:null
        };
        constructor(props){
            super(props);
            getComponent().then(({default:Splitted})=>{
                this.setState({
                    Splitted
                });
            });
        }
        render(){
            const {Splitted} = this.state;
            if(!Splitted){
                return null;
            }
            return <Splitted {...this.props}/>;
        }
    }
    return withSplitting;
}
export default withSplitting;
