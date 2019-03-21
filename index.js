
class Driver {
  constructor(name, join_day) {
    this.name = name
    this.join_day = join_day
  }

  startDate() {
    let start_date = new Date(this.join_day);
    console.log(typeof start_date);
    return start_date;
  }

  yearsExperienceFromBeginningOf (start_year) {

  }
}
