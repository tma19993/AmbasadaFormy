declare const brand: unique symbol;

export type BrandType<T,BrandName> = T & {[brand]: BrandName};