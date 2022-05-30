import { Price } from './fractions/price';
import { TokenAmount } from './fractions/tokenAmount';
import { BigintIsh } from '../constants';
import { Token } from './token';
import { ChainId } from '../constants';
import { RoutablePlatform } from './routable-platform';
import { LiquidityMiningCampaign } from './liquidity-mining-campaign';
export declare class Pair {
    readonly liquidityToken: Token;
    private readonly tokenAmounts;
    readonly swapFee: BigintIsh;
    readonly protocolFeeDenominator: BigintIsh;
    readonly platform: RoutablePlatform;
    liquidityMiningCampaigns: LiquidityMiningCampaign[];
    /**
     * Returns true if the two pairs are equivalent, i.e. have the same address (calculated using create2).
     * @param other other pair to compare
     */
    equals(other: Pair): boolean;
    static getAddress(tokenA: Token, tokenB: Token, platform?: RoutablePlatform): string;
    constructor(tokenAmountA: TokenAmount, tokenAmountB: TokenAmount, swapFee?: BigintIsh, protocolFeeDenominator?: BigintIsh, platform?: RoutablePlatform, liquidityMiningCampaigns?: LiquidityMiningCampaign[]);
    /**
     * Returns true if the token is either token0 or token1
     * @param token to check
     */
    involvesToken(token: Token): boolean;
    /**
     * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
     */
    get token0Price(): Price;
    /**
     * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
     */
    get token1Price(): Price;
    /**
     * Return the price of the given token in terms of the other token in the pair.
     * @param token token to return price of
     */
    priceOf(token: Token): Price;
    /**
     * Returns the chain ID of the tokens in the pair.
     */
    get chainId(): ChainId;
    get token0(): Token;
    get token1(): Token;
    get reserve0(): TokenAmount;
    get reserve1(): TokenAmount;
    reserveOf(token: Token): TokenAmount;
    getOutputAmount(inputAmount: TokenAmount): [TokenAmount, Pair];
    getInputAmount(outputAmount: TokenAmount): [TokenAmount, Pair];
    getLiquidityMinted(totalSupply: TokenAmount, tokenAmountA: TokenAmount, tokenAmountB: TokenAmount): TokenAmount;
    getLiquidityValue(token: Token, totalSupply: TokenAmount, liquidity: TokenAmount, feeOn?: boolean, kLast?: BigintIsh): TokenAmount;
}
