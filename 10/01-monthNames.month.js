module.exports = {
  months: [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ],
  name: function(number) { return this.months[number]; },
  number: function(string) { return this.months.indexOf(string); }
}