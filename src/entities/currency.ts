import JSBI from 'jsbi'

import { ChainId, SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on the target chain.
 *
 * The only instances of the base class `Currency` are native currencies such as Ether for Ethereum and xDAI for xDAI.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  public static readonly USD: Currency = new Currency(18, 'USD', 'US dollar')
  public static readonly ETHER: Currency = new Currency(18, 'ETH', 'Ether')
  public static readonly HARMONY: Currency = new Currency(18, 'ONE', 'ONE')
  public static readonly MATIC: Currency = new Currency(18, 'MATIC', 'MATIC')

  private static readonly NATIVE_CURRENCY: { [chainId in ChainId]: Currency } = {
    [ChainId.MAINNET]: Currency.ETHER,
    [ChainId.RINKEBY]: Currency.ETHER,
    [ChainId.HARMONY]: Currency.HARMONY,
    [ChainId.HARMONY_TESTNET]: Currency.HARMONY,
  }

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }

  public static isNative(currency: Currency): boolean {
    return Object.values(Currency.NATIVE_CURRENCY).indexOf(currency) >= 0
  }

  public static getNative(chainId: ChainId): Currency {
    return Currency.NATIVE_CURRENCY[chainId]
  }
}

export const USD = Currency.USD
export const ETHER = Currency.ETHER
export const HARMONY = Currency.HARMONY
