export class LeaseData {
  assetType: string;
  carBrand: string;
  carModel: string;
  years: string;
  enginePower: string;
  assetPrice: string;
  advancePaymentPercentage: string;
  advancePaymentAmount: string;
  leasePeriod: string;
  margin: string;
  contractFee: string;
  paymentDate: string;
  leaseType: string;
}

export class BackLeaseData {
    assetType: string;
    carBrand: string;
    carModel: string;
    years: string;
    enginePower: string;
    assetPrice: string;
    advancePaymentPercentage: string;
    advancePaymentAmount: string;
    leasePeriod: string;
    margin: string;
    contractFee: string;
    paymentDate: string;
    leaseType: string;
    applicationDate: string;
    status: string;
    id: string;

    constructor(lease, status) {
      this.assetType = lease.assetType;
      this.carBrand = lease.carBrand;
      this.carModel = lease.carModel;
      this.years = lease.years;
      this.enginePower = lease.enginePower;
      this.assetPrice = lease.assetPrice;
      this.advancePaymentPercentage = lease.advancePaymentPercentage;
      this.advancePaymentAmount = lease.advancePaymentAmount;
      this.leasePeriod = lease.leasePeriod;
      this.margin = lease.margin;
      this.contractFee = lease.contractFee;
      this.paymentDate = lease.paymentDate;
      this.leaseType = lease.leaseType;
      this.applicationDate = lease.applicationDate;
      this.status = status;
      this.id = lease.id;
    }
  }
