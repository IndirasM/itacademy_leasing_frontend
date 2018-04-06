export class ScheduleOfContributionData {
    leaseType: string;
    assetPrice: string;
    advancePaymentPercentage: string;
    advancePaymentAmount: string;
    leasePeriod: string;
    margin: string;
    contractFee: string;
    paymentDate: string;
}


export class ScheduleOfContributionDataPromise {
    leaseType: string;
    assetPrice: string;
    advancePaymentPercentage: string;
    advancePaymentAmount: string;
    leasePeriod: string;
    margin: string;
    contractFee: string;
    paymentDate: string;

    constructor(data) {
      this.assetPrice = data.assetPrice;
      this.advancePaymentPercentage = data.advancePaymentPercentage;
      this.advancePaymentAmount = data.advancePaymentAmount;
      this.leasePeriod = data.leasePeriod;
      this.margin = data.margin;
      this.contractFee = data.contractFee;
      this.paymentDate = data.paymentDate;
    }
  }
