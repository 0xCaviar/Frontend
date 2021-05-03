import { isAddress } from '@ethersproject/address'
import { useWeb3React } from '@web3-react/core'
import { useMemo } from 'react'
import {
    getERC20Contract, getMasterChefContract
} from '../utils/contractHelpers'
import useWeb3 from './useWeb3'


export const useERC20 = (address) => {
    const web3 = useWeb3()
    return useMemo(() => {
        if (!isAddress(address)) return null
        return getERC20Contract(address, web3)
    }, [address, web3])
}

export const useMasterChef = (address) => {
    const web3 = useWeb3()
    const { chainId } = useWeb3React()
    return useMemo(() => getMasterChefContract(address, web3, chainId), [address, web3, chainId])
}

