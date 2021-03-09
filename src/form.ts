import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('my-form')
export class MyForm extends LitElement {
  /**
   *
   */
  formData: any;
  constructor() {
    super();
    // this.saveDetails=this.saveDetails.bind(this)
    // this.attachShadow({ mode: 'closed' });
    this.change = this.change.bind(this);
    this.formData = [];
  }

  @property()
  saveDetails = function saveDetails() {};

  render() {
    return html`
      <form>
        <label for="name">Name</label>
        <input
          type="text"
          id="fname"
          name="fname"
          @change=${this.change}
        /><br /><br />
        <label for="city">city</label>
        <input
          type="text"
          id="city"
          name="city"
          @change=${this.change}
        /><br /><br />
        <label for="phone">phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          @change=${this.change}
        /><br /><br />
        <button @click="${this.handleclick}">Save</button>
      </form>
    `;
  }
  firstUpdated(changedProperties) {
    // e.preventDefault()
    console.log('hi');
    let event = new CustomEvent('my-event', {
      detail: {
        message: 'Something important happened',
      },
    });
    this.dispatchEvent(event);
  }

  change(event: any) {
    var count=0
    var countany=0
    console.log('event change', event);
    let formDat = {
      name: event.path[0].name,
      value: event.path[0].value,
    };
    console.log('formData', formDat);
    if(this.formData.length===0){
      console.log("form*********", this.formData)
      this.formData.push(formDat);

    }else {
      this.formData.every((element:any, index:any) => {
        console.log("ele index", element, index)
        if(element.name===event.path[0].name){
          count+1

          console.log("element value", element.value,count)
          element.value=event.path[0].value
          console.log('this formData dqwdqwdqw', this.formData);
          return false
        }
        else{
          countany+=1
          console.log("inside", this.formData, countany)
          this.formData.push(formDat);
         return false
  
        }
      });

    }
    console.log('this formData', this.formData);
  }

  handleclick(e: any) {
    e.preventDefault();
    console.log('e child', e);
    // var fname=this.shadowRoot.getElementById("#fname")
    // var fname=document.getElementsByTagName('my-element')
    // console.log("fname", fname)
    let myEvent = new CustomEvent('my-button', {
      detail: {message: this.formData},
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }
}
