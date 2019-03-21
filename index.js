
class Driver {
  constructor(name, join_day) {
    this.name = name
    this.join_day = join_day
    this.startDate = new Date(this.join_day)
  }

  yearsExperienceFromBeginningOf (year) {
    let exp = (year - this.startDate)/1000;
    exp /= (60*60*24);
    return Math.abs(Math.round(exp/365.25));
  }
}
