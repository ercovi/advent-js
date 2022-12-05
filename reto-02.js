function countHours(year, holidays) {
  let extraHours = 0;
  if(!!holidays){
    holidays.forEach((day) => {
      const currentDay = new Date(`${day}/${year}`).getDay();
      if(currentDay === 6 || currentDay === 0) return;
      extraHours = extraHours + 2;
    })
  }
  return extraHours;
}
