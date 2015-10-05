## Card number generator

Generate random credit/debit card numbers for testing purposes.

Usage from command line (globaly installed `npm i -g cardgen`):

> cardgen visa discover -n 5

> visa 4814371752577513  
> discover 6521713793937678  
> visa 4012795915725090  
> discover 6502205537914199  
> visa 4279615567473583  

Available vendor names are: `visa`, `master-card`, `diners-club`, `american-express`, `discover`, `jsb`. Multiply vendors are acceptable.

It is possible to add new vendor, have a look at examples into the `vendors` directory.

`-n` flag is for repeating, in case no provided cli will take it as a number of vendors provided.

For the node module usage example have a look at `bin/cardgen` file.

## FAQ

Q. What does this code `..for (; i --> 0 ;) {..` means?  
A. This is fancy way to write reverse loop, which is arguably looks better compared with classic version `..for(var i = array.length; i > 0; i--). In fact conscruction `-->` combination of two operators `--` and `>`, so every step `i` gets decrimented by 1 and compared if it is less then zero.

## TODO

- Split out cli and core generator as a separate modules
- Make use in browser and other enviroments

## Disclaimer

This software created, and ment to be used for testing purposes only.
