declare global {
  interface Date {
    subtract: (value: number) => Date;
  }
}

Date.prototype.subtract = function (value: number) {
  const date = new Date();
  date.setDate(this.getDate() - value);
  return date;
};

export {};
