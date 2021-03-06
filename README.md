## Card number generator

Generate random credit/debit card numbers for testing purposes.

Usage from command line (globally installed `npm i -g cardgen`):

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
A. This is fancy way to write reverse loop, which is arguably looks cleaner compared with classic version of it `..for(var i = array.length; i > 0; i--)`. In fact construction `-->` is combination of two operators `>` and `--`, so every step `i` get compared if it is still more than zero and decremented by one afteword.

## TODO

- Split out cli and core generator as a separate modules
- Make use in browser and other environments

## Disclaimer

This software created to be used for testing purposes only.
