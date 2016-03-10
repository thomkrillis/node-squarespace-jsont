/*!
 *
 * Predicate: greaterThanOrEqual
 * Evaluates a value to be greater than another
 *
 * @usage: {.greaterThanOrEqual? @index 2}
 *
 */
var util = require( "../util" );


module.exports = function ( data, ctx, args ) {
    args = util.getArgsProcessed( args, ctx );

    return ( args[ 0 ] >= args[ 1 ] );
};