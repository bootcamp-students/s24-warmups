function nbMonths(
  start_price_old,
  start_price_new,
  saving_per_month,
  percent_loss_by_month
) {
  let months = 0;
  let saved_money = 0;
  let old_car_price = start_price_old;
  let new_car_price = start_price_new;
  let current_percent_loss = percent_loss_by_month;

  while (old_car_price + saved_money < new_car_price) {
    months += 1;
    if (months % 2 === 0) {
      current_percent_loss += 0.5;
    }
    old_car_price -= old_car_price * (current_percent_loss / 100);
    new_car_price -= new_car_price * (current_percent_loss / 100);
    saved_money += saving_per_month;
  }

  let leftover_money = Math.round(old_car_price + saved_money - new_car_price);

  return [months, leftover_money];
}

/*
    Ember's Feedback:
    - Good work!
    - Not sure why the variables are snake_case instead of being camelCase, which is the JS industry convention.
*/
