import {LitElement, html, customElement, property, css} from 'lit-element';
// import {MyForm} from './form';
// import {MyTable} from './employee-table';

@customElement('my-element')
export class MyElement extends LitElement {
  /**
   *
   */
  allDetails: any;
  constructor() {
    super();
    // this.saveDetails = this.saveDetails.bind(this);
    this.allDetails=[]
    this.addEventListener('my-button', ev=>{
      console.log("ev parent", ev.detail.message)
      this.allDetails=Array.from(ev.detail.message)
      console.log("data", this.allDetails)
      this.requestUpdate()
    })
  }

  static styles = css`
    :host {
      display: block;
      margin-left: 350px;
      padding: 16px;
      max-width: 800px;
    }
  `;

  // connectedCallback(){
  // }


  render() {
    return html`
      <h1>Employee Details</h1>
      <my-form saveDetails="${this.func}"></my-form>
      <my-table allDetails=${this.allDetails}></my-table>
    `;
  }

  // @property({type: Function})
   func=function saveDetails(event:any): any {
    event.preventDefault();
    console.log('Hi inside');
  }


}
