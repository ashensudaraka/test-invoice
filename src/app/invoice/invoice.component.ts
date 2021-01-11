import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  model: any = {};
  fieldArray: Array<any> = [];
  newAttribute: any = {};
  invoiceFieldArray: Array<any> = [];
  invoiceNewAttribute: any = {};
  invoiceDateFormat: string;
  issueDateFormat: string;
  methods: string = '';
  clientType: string = '';
  bussinessName: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  streetAddress: string = '';
  addressLine2: string = '';
  city: string = '';
  state: string = '';
  postal: string = '';
  telephone: string = '';
  mobile: string = '';
  country: string = '';
  addShippment: string;
  addShippmentResponse: string;
  invoiceNumber: string = '';
  invoiceDate: string = '';
  issueDate: string = '';
  paymentTerms: string = '';

  constructor() { }

  ngOnInit(): void {
    this.getTodayDate();
  }

  //Getting client details inputs
  saveClientDetails() {
    alert("Client details have been saved successfully.");
  }

  //Getting todays date
  getTodayDate() {
    let d = new Date();
    var formattedDate;
    formattedDate = d.getFullYear().toString() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
    return formattedDate;
  }

  //For Client details
  //Adding new line for item list table
  addFieldValue() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  //Deleting selected line
  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }
  deleteNewFieldValue(index) {
    this.newAttribute.splice(index, 1);
  }

  //For Invoice details
  //Adding new line for item list table
  addInvoiceFieldValue() {
    this.invoiceFieldArray.push(this.invoiceNewAttribute);
    this.invoiceNewAttribute = {};
  }

  //Deleting selected line
  deleteInvoiceFieldValue(index) {
    this.invoiceFieldArray.splice(index, 1);
  }
  deleteInvoiceNewFieldValue(index) {
    this.invoiceNewAttribute.splice(index, 1);
  }

  getInvoiceDetails() {

    if (this.invoiceDateFormat != undefined) {
      this.invoiceDate = this.invoiceDateFormat['day'] + "/" + this.invoiceDateFormat['month'] + "/" + this.invoiceDateFormat['year'];
    }

    if (this.issueDateFormat != undefined) {
      this.issueDate = this.issueDateFormat['day'] + "/" + this.issueDateFormat['month'] + "/" + this.issueDateFormat['year'];
    }

    //Creating response
    if (this.model.addShipingAddress == true) {
      this.addShippmentResponse = "Yes";
    }
    else {
      this.addShippmentResponse = "No";
    }

    this.printInputs();

  }

  //Printing all inputs in console
  printInputs() {
    console.log("======CLIENT DETAILS======");
    console.log("Method: " + this.methods);
    console.log("Client Type: " + this.model.type);
    console.log("Business Name: " + this.model.businessName);
    console.log("First Name: " + this.model.firstName);
    console.log("Last Name: " + this.model.lastName);
    console.log("Email: " + this.model.email);
    console.log("Street Address: " + this.model.streetAddress);
    console.log("Address Line 2: " + this.model.addressLine2);
    console.log("City: " + this.model.city);
    console.log("State: " + this.model.state);
    console.log("Postal: " + this.model.postal);
    console.log("Telephone: " + this.model.telephone);
    console.log("Mobile: " + this.model.mobile);
    console.log("Country: " + this.model.country);
    console.log("Add Shipping: " + this.model.addShippmentResponse);
    console.log();
    console.log("======INVOICE DETAILS======");
    console.log("Invoice Number: " + this.invoiceNumber);
    console.log("Invoice Date: " + this.invoiceDate);
    console.log("Issue Date: " + this.issueDate);
    console.log("Payment Terms: " + this.paymentTerms);
    console.log();
    console.log("======ITEM DETAILS======");
    console.log(this.fieldArray);

  }

}
