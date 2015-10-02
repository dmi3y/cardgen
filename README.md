## Card number generator

Generate random credit/debit card numbers for testing purposes.

Usage:

> cardgen visa -n 5

> visa 4200584476931582
> visa 4375899903700809
> visa 4125408147317991
> visa 4536946768772336
> visa 4838780577779264

Available vendor names are: `visa`, `master-card`, `dinners-club`, `american-express`, `discover`, `jsb`. Multiply vendors are acceptable.

It is possible to add new vendor, have a look at examples into the `vendors` directory.

`-n` flag is for repeating, in case no provided cli will take it as a number of vendors provided.

## TODO

- Get rid of Sugar
- Expand cli capabilities
- Split out cli and core generator as a separate modules
- Make use in browser and other enviroments

## Disclaimer

This software created, and ment to be used for testing purposes only.
