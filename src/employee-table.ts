
import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('my-table')
export class MyTable extends LitElement {
  /**
   *
   */
  constructor() {
    super();
    this.allDetails=[]
    this.tabledata=this.tabledata.bind(this)
  }

@property({type:Array})
allDetails=[]

    render(){
        return html`
        <table>
        <thead>
        <tr>
        <th>Name</th>
        <th>City</th>
        <th>Phone</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        ${this.tabledata()}
        </tr>
        </tbody>
        </table>
      `
    }

tabledata(){
  console.log("rerender", this.allDetails)
  return this.allDetails.map((val:any)=>{
    return html `
    <td>${val.value}</td>
    `
    console.log(val)

  })
}

}

