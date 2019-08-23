import * as constansts from "./constants";
import * as actions from "./balance";

it("creates an action to set the balance", () => {
  const balance = 0;

  const expectedAction = { type: constansts.SET_BALANCE, balance };

  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it("creates an action to deposit into the balance", () => {
  const deposit = 10;

  const expectedAction = { type: constansts.DEPOSIT, deposit };

  expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it("creates an action to substract from the balance", () => {
  const withdrawal = 10;

  const expectedAction = { type: constansts.WITHDRAW, withdrawal };

  expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
});
