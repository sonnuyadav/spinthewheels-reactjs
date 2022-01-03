import React from "react";
import Base from "../../base";

export default class Scores extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
 
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("https://formula.itnfd.com/api/getscore")
            .then((res) => res.json())
            .then((json) => {
               const needToParse = JSON.stringify(json);
                let viewData = JSON.parse(needToParse);
                var result =JSON.parse(viewData).map(function(o) {
                    return o;
                  });
              this.setState({
                    items: result,
                    DataisLoaded: true
                });
            })
    }
 render() {
    const { DataisLoaded, items } = this.state;
   if (!DataisLoaded) return <div>
        <h1>Pleses wait some time.... </h1> </div> ;
    return (
    <Base>
      <>
      <div className="container">
	  <div className="row">
		<div className="span5">
            <table className="table table-striped table-condensed">
                  <thead>
                  <tr>
                      <th>Name</th>
                      <th>Food Item </th>
                      <th>Date</th>
                   </tr>
              </thead>   
              <tbody>
             {
                items.map((item) => ( 
                <tr key = { item.id }>
               <td>{ item.name }</td>
               <td>{ item.item }</td>
               <td>{ item.doe }</td>
               </tr>
                ))
            }
             </tbody>
            </table>
            </div>
	</div>
</div> 
      </>
    </Base>
);

}
}
