var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let MyTable = class MyTable extends LitElement {
    /**
     *
     */
    constructor() {
        super();
        this.allDetails = [];
        this.allDetails = [];
        this.tabledata = this.tabledata.bind(this);
    }
    render() {
        return html `
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
      `;
    }
    tabledata() {
        console.log("rerender", this.allDetails);
        return this.allDetails.map((val) => {
            return html `
    <td>${val.value}</td>
    `;
            console.log(val);
        });
    }
};
__decorate([
    property({ type: Array })
], MyTable.prototype, "allDetails", void 0);
MyTable = __decorate([
    customElement('my-table')
], MyTable);
export { MyTable };
//# sourceMappingURL=employee-table.js.map