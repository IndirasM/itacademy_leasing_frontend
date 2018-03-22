import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'productFilter'})
export class ProductFilterPipe implements PipeTransform {
  transform(products: any[], brand: string): any[] {
    return products.filter(p => p.type === brand);
  }
}
