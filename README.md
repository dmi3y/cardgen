## Card number generator

Generate random credit/debit card numbers for testing purposes.

Usage:

> cardgen visa discover -n 5

> visa 4814371752577513  
> discover 6521713793937678  
> visa 4012795915725090  
> discover 6502205537914199  
> visa 4279615567473583  

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
