pragma ton-solidity >= 0.58.0;

pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import "./abstract/MultiTokenWalletWithDeployRetry.sol";
import './abstract/RoyaltySupport.sol';

import "./MultiTokenWalletPlatform.sol";

import "./libraries/TokenGas.sol";
import "./libraries/NftGas.sol";

contract MultiTokenWallet is 
    MultiTokenWalletWithDeployRetry,
    RoyaltySupport
{

    constructor() public {
        revert();
    }

    function onCodeUpgrade(TvmCell data) private {
        tvm.resetStorage();

		(
			uint256 id,
			address collection,
            address owner,
            address remainingGasTo,
            TvmCell params,
            TvmCell platformCode
        ) = abi.decode(data, (
            uint256,
            address,
            address,
            address,
            TvmCell,
            TvmCell
        ));

        _platformCode = platformCode;

		(
            address nft,
			uint128 balance,
			uint128 remainOnNft,
            uint128 indexDeployValue,
            uint128 indexDestroyValue,
            TvmCell codeIndex,
            address royaltyAddress,
            uint128 royalty,
            bool notify,
            TvmCell payload
        ) = abi.decode(params, (
            address,
            uint128,
            uint128,
            uint128,
            uint128,
            TvmCell,
            address,
            uint128,
            bool,
            TvmCell
        ));

        _initWalletBase(owner, collection, nft, id, balance, remainOnNft, notify, payload, remainingGasTo);
        _initWalletDestroyable();
        _initRoyalty(royaltyAddress, royalty);
        _initIndexes(indexDeployValue, indexDestroyValue, codeIndex, collection, owner, balance > 0);
    }

    function _deployToken(
        TvmCell tokenState,
        uint128 deployWalletValue,
        address remainingGasTo
    ) 
        override
        internal
        view
        returns (address)
    {
        TvmCell empty;
        TvmCell params = abi.encode(
            _nft,
			uint128(0),
            uint128(TokenGas.TARGET_TOKEN_BALANCE),
            uint128(NftGas.INDEX_DEPLOY_VALUE),
            uint128(NftGas.INDEX_DESTROY_VALUE),
            _codeIndex,
            _royaltyAddress,
            _royalty,
            false,
            empty
		);

        address tokenAddr = new MultiTokenWalletPlatform {
            stateInit: tokenState,
            value: deployWalletValue,
            flag: MsgFlag.SENDER_PAYS_FEES
        }(tvm.code(), params, _owner, remainingGasTo);

        return tokenAddr;
    }
}