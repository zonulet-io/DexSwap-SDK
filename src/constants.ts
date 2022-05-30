import JSBI from 'jsbi'
import MULTICALL_ABI from './abis/multicall.json'
import STAKING_REWARDS_FACTORY_ABI from './abis/staking-rewards-distribution-factory.json'
import STAKING_REWARDS_DISTRIBUTION_ABI from './abis/staking-rewards-distribution.json'
import {
  rinkeby as coreRinkeby,
  mainnet as coreMainnet,
  harmony_testnet as coreHarmony_Testnet,
  harmony as coreHarmony,
} from '../coreContracts.json'
import {
  rinkeby as peripheryRinkeby,
  mainnet as peripheryMainnet,
  harmony_testnet as peripheryHarmony_Testnet,
  harmony as peripheryHarmony,
} from '../routerContracts.json'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  RINKEBY = 4,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: coreMainnet.factory,
  [ChainId.RINKEBY]: coreRinkeby.factory,
  [ChainId.HARMONY]: coreHarmony.factory,
  [ChainId.HARMONY_TESTNET]: coreHarmony_Testnet.factory,

}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: peripheryMainnet.router,
  [ChainId.RINKEBY]: peripheryRinkeby.router,
  [ChainId.HARMONY]: peripheryHarmony.router,
  [ChainId.HARMONY_TESTNET]: peripheryHarmony_Testnet.router,
}

export const STAKING_REWARDS_FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000001234',
  [ChainId.RINKEBY]: '0x709db16a6ef437197938256460c49183dc36ca4d',
  [ChainId.HARMONY]: '0x1b551f670dF0c98413483003c33A2300ED8A4d0C',
  [ChainId.HARMONY_TESTNET]: '0x15b61cc2ac17e9826277b3ff41aa2644a774daab',
}

export const INIT_CODE_HASH = '0x95ed020ecc18bb40fead050319f6a769b5e582067c1224bb03b29877fcf10625'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _25 = JSBI.BigInt(25)
export const SECONDS_IN_YEAR = JSBI.BigInt(31536000)
export const _30 = JSBI.BigInt(30)
export const _100 = JSBI.BigInt(100)
export const _1000 = JSBI.BigInt(1000)
export const _10000 = JSBI.BigInt(10000)

export const defaultSwapFee = _25
export const defaultProtocolFeeDenominator = FIVE

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

const MULTICALL_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
  [ChainId.HARMONY]: '0xdfF73dA7cC9e8DbAA77998F81E7AcB4D7384d88B',
  [ChainId.RINKEBY]: '0x8c9E7447ABE0607a610a1C3E7cCC1A7B51f729C2',
  [ChainId.HARMONY_TESTNET]: '0xD76bF711EC7FA3740fC0ddae1A7CB648E77604e8',
}

export { MULTICALL_ABI, MULTICALL_ADDRESS, STAKING_REWARDS_FACTORY_ABI, STAKING_REWARDS_DISTRIBUTION_ABI }
