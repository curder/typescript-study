export namespace price {
  export function format(price: number) {
    return `$${price.toFixed(2)}`;
  }

}

export namespace date {
  export function format(date: Date) {
    return date.toLocaleDateString();
  }
}
