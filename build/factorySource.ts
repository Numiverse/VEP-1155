const cantBeEvilAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"_licenseVersion","type":"uint8"}],"outputs":[]},{"name":"getLicenseURI","inputs":[],"outputs":[{"name":"value0","type":"string"}]},{"name":"getLicenseName","inputs":[],"outputs":[{"name":"value0","type":"string"}]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"licenseVersion","inputs":[],"outputs":[{"name":"licenseVersion","type":"uint8"}]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"licenseVersion","type":"uint8"}]} as const
const indexAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"collection","type":"address"}],"outputs":[]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"collection","type":"address"},{"name":"owner","type":"address"},{"name":"nft","type":"address"}]},{"name":"destruct","inputs":[{"name":"gasReceiver","type":"address"}],"outputs":[]}],"data":[{"key":1,"name":"_nft","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_nft","type":"address"},{"name":"_collection","type":"address"},{"name":"_owner","type":"address"}]} as const
const indexBasisAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"collection","type":"address"}]},{"name":"destruct","inputs":[{"name":"gasReceiver","type":"address"}],"outputs":[]}],"data":[{"key":1,"name":"_collection","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_collection","type":"address"}]} as const
const multiTokenCollectionAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"codeNft","type":"cell"},{"name":"codeToken","type":"cell"},{"name":"codeIndex","type":"cell"},{"name":"codeIndexBasis","type":"cell"},{"name":"ownerAddress","type":"address"},{"name":"json","type":"string"},{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"mintNft","inputs":[{"name":"answerId","type":"uint32"},{"name":"nftOwner","type":"address"},{"name":"json","type":"string"},{"name":"remainingGasTo","type":"address"}],"outputs":[{"name":"value0","type":"uint256"},{"name":"value1","type":"address"}]},{"name":"mintToken","inputs":[{"name":"answerId","type":"uint32"},{"name":"tokenOwner","type":"address"},{"name":"json","type":"string"},{"name":"count","type":"uint128"},{"name":"remainingGasTo","type":"address"},{"name":"notify","type":"bool"},{"name":"payload","type":"cell"}],"outputs":[{"name":"value0","type":"uint256"},{"name":"value1","type":"address"},{"name":"value2","type":"address"}]},{"name":"onAcceptMultiTokensBurn","inputs":[{"name":"count","type":"uint128"},{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"remainingGasTo","type":"address"},{"name":"callbackTo","type":"address"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"onTokenSupplyUpdate","inputs":[{"name":"tokenSupply","type":"uint128"},{"name":"params","type":"cell"}],"outputs":[]},{"name":"multiTokenWalletCode","inputs":[{"name":"answerId","type":"uint32"},{"name":"tokenId","type":"uint256"},{"name":"isEmpty","type":"bool"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"multiTokenCodeHash","inputs":[{"name":"answerId","type":"uint32"},{"name":"tokenId","type":"uint256"},{"name":"isEmpty","type":"bool"}],"outputs":[{"name":"codeHash","type":"uint256"}]},{"name":"multiTokenWalletAddress","inputs":[{"name":"answerId","type":"uint32"},{"name":"id","type":"uint256"},{"name":"owner","type":"address"}],"outputs":[{"name":"token","type":"address"}]},{"name":"onAcceptNFTBurn","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"}],"outputs":[]},{"name":"indexBasisCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"indexBasisCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"hash","type":"uint256"}]},{"name":"resolveIndexBasis","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"indexBasis","type":"address"}]},{"name":"indexCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"indexCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"hash","type":"uint256"}]},{"name":"getJson","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"json","type":"string"}]},{"name":"totalSupply","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"count","type":"uint128"}]},{"name":"nftCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"nftCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"codeHash","type":"uint256"}]},{"name":"nftAddress","inputs":[{"name":"answerId","type":"uint32"},{"name":"id","type":"uint256"}],"outputs":[{"name":"nft","type":"address"}]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"owner","inputs":[],"outputs":[{"name":"value0","type":"address"}]},{"name":"transferOwnership","inputs":[{"name":"newOwner","type":"address"}],"outputs":[]}],"data":[{"key":1,"name":"_deployer","type":"address"},{"key":2,"name":"_nonce","type":"uint64"},{"key":3,"name":"_platformCode","type":"cell"}],"events":[{"name":"MultiTokenCreated","inputs":[{"name":"id","type":"uint256"},{"name":"token","type":"address"},{"name":"balance","type":"uint128"},{"name":"owner","type":"address"},{"name":"creator","type":"address"}],"outputs":[]},{"name":"MultiTokenBurned","inputs":[{"name":"id","type":"uint256"},{"name":"count","type":"uint128"},{"name":"owner","type":"address"}],"outputs":[]},{"name":"NftCreated","inputs":[{"name":"id","type":"uint256"},{"name":"nft","type":"address"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"creator","type":"address"}],"outputs":[]},{"name":"NftBurned","inputs":[{"name":"id","type":"uint256"},{"name":"nft","type":"address"},{"name":"owner","type":"address"},{"name":"manager","type":"address"}],"outputs":[]},{"name":"OwnershipTransferred","inputs":[{"name":"oldOwner","type":"address"},{"name":"newOwner","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_owner","type":"address"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_codeNft","type":"cell"},{"name":"_totalSupply","type":"uint128"},{"name":"_json","type":"string"},{"name":"_codeIndex","type":"cell"},{"name":"_codeIndexBasis","type":"cell"},{"name":"_indexDeployValue","type":"uint128"},{"name":"_indexDestroyValue","type":"uint128"},{"name":"_deployIndexBasisValue","type":"uint128"},{"name":"_tokenCode","type":"cell"},{"name":"_deployer","type":"address"},{"name":"_nonce","type":"uint64"},{"name":"_platformCode","type":"cell"},{"name":"_lastTokenId","type":"uint128"}]} as const
const multiTokenCollectionWithRoyaltyAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"codeNft","type":"cell"},{"name":"codeToken","type":"cell"},{"name":"codeIndex","type":"cell"},{"name":"codeIndexBasis","type":"cell"},{"name":"ownerAddress","type":"address"},{"name":"json","type":"string"},{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"mintNft","inputs":[{"name":"answerId","type":"uint32"},{"name":"nftOwner","type":"address"},{"name":"json","type":"string"},{"name":"royaltyAddress","type":"address"},{"name":"royalty","type":"uint128"},{"name":"remainingGasTo","type":"address"}],"outputs":[{"name":"value0","type":"uint256"},{"name":"value1","type":"address"}]},{"name":"mintToken","inputs":[{"name":"answerId","type":"uint32"},{"name":"tokenOwner","type":"address"},{"name":"json","type":"string"},{"name":"count","type":"uint128"},{"name":"royaltyAddress","type":"address"},{"name":"royalty","type":"uint128"},{"name":"remainingGasTo","type":"address"},{"name":"notify","type":"bool"},{"name":"payload","type":"cell"}],"outputs":[{"name":"value0","type":"uint256"},{"name":"value1","type":"address"},{"name":"value2","type":"address"}]},{"name":"onAcceptMultiTokensBurn","inputs":[{"name":"count","type":"uint128"},{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"remainingGasTo","type":"address"},{"name":"callbackTo","type":"address"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"onTokenSupplyUpdate","inputs":[{"name":"tokenSupply","type":"uint128"},{"name":"params","type":"cell"}],"outputs":[]},{"name":"multiTokenWalletCode","inputs":[{"name":"answerId","type":"uint32"},{"name":"tokenId","type":"uint256"},{"name":"isEmpty","type":"bool"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"multiTokenCodeHash","inputs":[{"name":"answerId","type":"uint32"},{"name":"tokenId","type":"uint256"},{"name":"isEmpty","type":"bool"}],"outputs":[{"name":"codeHash","type":"uint256"}]},{"name":"multiTokenWalletAddress","inputs":[{"name":"answerId","type":"uint32"},{"name":"id","type":"uint256"},{"name":"owner","type":"address"}],"outputs":[{"name":"token","type":"address"}]},{"name":"onAcceptNFTBurn","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"}],"outputs":[]},{"name":"indexBasisCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"indexBasisCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"hash","type":"uint256"}]},{"name":"resolveIndexBasis","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"indexBasis","type":"address"}]},{"name":"indexCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"indexCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"hash","type":"uint256"}]},{"name":"getJson","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"json","type":"string"}]},{"name":"totalSupply","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"count","type":"uint128"}]},{"name":"nftCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"nftCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"codeHash","type":"uint256"}]},{"name":"nftAddress","inputs":[{"name":"answerId","type":"uint32"},{"name":"id","type":"uint256"}],"outputs":[{"name":"nft","type":"address"}]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"owner","inputs":[],"outputs":[{"name":"value0","type":"address"}]},{"name":"transferOwnership","inputs":[{"name":"newOwner","type":"address"}],"outputs":[]}],"data":[{"key":1,"name":"_deployer","type":"address"},{"key":2,"name":"_nonce","type":"uint64"},{"key":3,"name":"_platformCode","type":"cell"}],"events":[{"name":"MultiTokenCreated","inputs":[{"name":"id","type":"uint256"},{"name":"token","type":"address"},{"name":"balance","type":"uint128"},{"name":"owner","type":"address"},{"name":"creator","type":"address"}],"outputs":[]},{"name":"MultiTokenBurned","inputs":[{"name":"id","type":"uint256"},{"name":"count","type":"uint128"},{"name":"owner","type":"address"}],"outputs":[]},{"name":"NftCreated","inputs":[{"name":"id","type":"uint256"},{"name":"nft","type":"address"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"creator","type":"address"}],"outputs":[]},{"name":"NftBurned","inputs":[{"name":"id","type":"uint256"},{"name":"nft","type":"address"},{"name":"owner","type":"address"},{"name":"manager","type":"address"}],"outputs":[]},{"name":"OwnershipTransferred","inputs":[{"name":"oldOwner","type":"address"},{"name":"newOwner","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_owner","type":"address"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_codeNft","type":"cell"},{"name":"_totalSupply","type":"uint128"},{"name":"_json","type":"string"},{"name":"_codeIndex","type":"cell"},{"name":"_codeIndexBasis","type":"cell"},{"name":"_indexDeployValue","type":"uint128"},{"name":"_indexDestroyValue","type":"uint128"},{"name":"_deployIndexBasisValue","type":"uint128"},{"name":"_tokenCode","type":"cell"},{"name":"_deployer","type":"address"},{"name":"_nonce","type":"uint64"},{"name":"_platformCode","type":"cell"},{"name":"_lastTokenId","type":"uint128"}]} as const
const multiTokenWalletAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"onDeployRetry","id":"0x60903B64","inputs":[{"name":"value0","type":"cell"},{"name":"value1","type":"cell"},{"name":"sender","type":"address"},{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"destroy","inputs":[{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"indexCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"indexCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"hash","type":"uint256"}]},{"name":"resolveIndex","inputs":[{"name":"answerId","type":"uint32"},{"name":"collection","type":"address"},{"name":"owner","type":"address"}],"outputs":[{"name":"index","type":"address"}]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"collection","type":"address"}]},{"name":"balance","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"value","type":"uint128"}]},{"name":"transfer","inputs":[{"name":"count","type":"uint128"},{"name":"recipient","type":"address"},{"name":"deployTokenWalletValue","type":"uint128"},{"name":"remainingGasTo","type":"address"},{"name":"notify","type":"bool"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"transferToWallet","inputs":[{"name":"count","type":"uint128"},{"name":"recipientToken","type":"address"},{"name":"remainingGasTo","type":"address"},{"name":"notify","type":"bool"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"acceptTransfer","inputs":[{"name":"count","type":"uint128"},{"name":"sender","type":"address"},{"name":"remainingGasTo","type":"address"},{"name":"notify","type":"bool"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"burn","inputs":[{"name":"count","type":"uint128"},{"name":"remainingGasTo","type":"address"},{"name":"callbackTo","type":"address"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]}],"data":[],"events":[{"name":"MultiTokenWalletCreated","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"collection","type":"address"},{"name":"balance","type":"uint128"}],"outputs":[]},{"name":"MultiTokenTransfered","inputs":[{"name":"sender","type":"address"},{"name":"senderWallet","type":"address"},{"name":"recipient","type":"address"},{"name":"count","type":"uint128"},{"name":"newBalance","type":"uint128"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_id","type":"uint256"},{"name":"_collection","type":"address"},{"name":"_owner","type":"address"},{"name":"_nft","type":"address"},{"name":"_balance","type":"uint128"},{"name":"_indexDeployValue","type":"uint128"},{"name":"_indexDestroyValue","type":"uint128"},{"name":"_codeIndex","type":"cell"},{"name":"_platformCode","type":"cell"}]} as const
const multiTokenWalletPlatformAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","id":"0x60903B64","inputs":[{"name":"walletCode","type":"cell"},{"name":"params","type":"cell"},{"name":"sender","type":"address"},{"name":"remainingGasTo","type":"address"}],"outputs":[]}],"data":[{"key":1,"name":"_id","type":"uint256"},{"key":2,"name":"_collection","type":"address"},{"key":3,"name":"_owner","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_id","type":"uint256"},{"name":"_collection","type":"address"},{"name":"_owner","type":"address"}]} as const
const multiTokenWalletWithRoyaltyAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"royaltyInfo","inputs":[{"name":"answerId","type":"uint32"},{"name":"salePrice","type":"uint128"}],"outputs":[{"name":"receiver","type":"address"},{"name":"royaltyAmount","type":"uint128"}]},{"name":"onDeployRetry","id":"0x60903B64","inputs":[{"name":"value0","type":"cell"},{"name":"value1","type":"cell"},{"name":"sender","type":"address"},{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"destroy","inputs":[{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"indexCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"indexCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"hash","type":"uint256"}]},{"name":"resolveIndex","inputs":[{"name":"answerId","type":"uint32"},{"name":"collection","type":"address"},{"name":"owner","type":"address"}],"outputs":[{"name":"index","type":"address"}]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"collection","type":"address"}]},{"name":"balance","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"value","type":"uint128"}]},{"name":"transfer","inputs":[{"name":"count","type":"uint128"},{"name":"recipient","type":"address"},{"name":"deployTokenWalletValue","type":"uint128"},{"name":"remainingGasTo","type":"address"},{"name":"notify","type":"bool"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"transferToWallet","inputs":[{"name":"count","type":"uint128"},{"name":"recipientToken","type":"address"},{"name":"remainingGasTo","type":"address"},{"name":"notify","type":"bool"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"acceptTransfer","inputs":[{"name":"count","type":"uint128"},{"name":"sender","type":"address"},{"name":"remainingGasTo","type":"address"},{"name":"notify","type":"bool"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"burn","inputs":[{"name":"count","type":"uint128"},{"name":"remainingGasTo","type":"address"},{"name":"callbackTo","type":"address"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]}],"data":[],"events":[{"name":"MultiTokenWalletCreated","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"collection","type":"address"},{"name":"balance","type":"uint128"}],"outputs":[]},{"name":"MultiTokenTransfered","inputs":[{"name":"sender","type":"address"},{"name":"senderWallet","type":"address"},{"name":"recipient","type":"address"},{"name":"count","type":"uint128"},{"name":"newBalance","type":"uint128"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_id","type":"uint256"},{"name":"_collection","type":"address"},{"name":"_owner","type":"address"},{"name":"_nft","type":"address"},{"name":"_balance","type":"uint128"},{"name":"_indexDeployValue","type":"uint128"},{"name":"_indexDestroyValue","type":"uint128"},{"name":"_codeIndex","type":"cell"},{"name":"_platformCode","type":"cell"},{"name":"_royaltyAddress","type":"address"},{"name":"_royalty","type":"uint128"}]} as const
const nftAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"owner","type":"address"},{"name":"sendGasTo","type":"address"},{"name":"remainOnNft","type":"uint128"},{"name":"json","type":"string"},{"name":"indexDeployValue","type":"uint128"},{"name":"indexDestroyValue","type":"uint128"},{"name":"codeIndex","type":"cell"},{"name":"tokenSupply","type":"uint128"}],"outputs":[]},{"name":"multiTokenSupply","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"count","type":"uint128"}]},{"name":"burnToken","inputs":[{"name":"answerId","type":"uint32"},{"name":"count","type":"uint128"},{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"payload","type":"cell"}],"outputs":[{"name":"tokenSupply","type":"uint128"},{"name":"next","type":"cell"}]},{"name":"burn","inputs":[{"name":"dest","type":"address"}],"outputs":[]},{"name":"indexCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"indexCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"hash","type":"uint256"}]},{"name":"resolveIndex","inputs":[{"name":"answerId","type":"uint32"},{"name":"collection","type":"address"},{"name":"owner","type":"address"}],"outputs":[{"name":"index","type":"address"}]},{"name":"getJson","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"json","type":"string"}]},{"name":"transfer","inputs":[{"name":"to","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"changeOwner","inputs":[{"name":"newOwner","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"changeManager","inputs":[{"name":"newManager","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]}],"data":[{"key":1,"name":"_id","type":"uint256"}],"events":[{"name":"NftCreated","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}],"outputs":[]},{"name":"OwnerChanged","inputs":[{"name":"oldOwner","type":"address"},{"name":"newOwner","type":"address"}],"outputs":[]},{"name":"ManagerChanged","inputs":[{"name":"oldManager","type":"address"},{"name":"newManager","type":"address"}],"outputs":[]},{"name":"NftBurned","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_id","type":"uint256"},{"name":"_collection","type":"address"},{"name":"_owner","type":"address"},{"name":"_manager","type":"address"},{"name":"_json","type":"string"},{"name":"_indexDeployValue","type":"uint128"},{"name":"_indexDestroyValue","type":"uint128"},{"name":"_codeIndex","type":"cell"},{"name":"_tokenSupply","type":"uint128"}]} as const
const nftWithRoyaltyAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"owner","type":"address"},{"name":"sendGasTo","type":"address"},{"name":"remainOnNft","type":"uint128"},{"name":"json","type":"string"},{"name":"indexDeployValue","type":"uint128"},{"name":"indexDestroyValue","type":"uint128"},{"name":"codeIndex","type":"cell"},{"name":"royaltyAddress","type":"address"},{"name":"royalty","type":"uint128"},{"name":"count","type":"uint128"}],"outputs":[]},{"name":"royaltyInfo","inputs":[{"name":"answerId","type":"uint32"},{"name":"salePrice","type":"uint128"}],"outputs":[{"name":"receiver","type":"address"},{"name":"royaltyAmount","type":"uint128"}]},{"name":"multiTokenSupply","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"count","type":"uint128"}]},{"name":"burnToken","inputs":[{"name":"answerId","type":"uint32"},{"name":"count","type":"uint128"},{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"payload","type":"cell"}],"outputs":[{"name":"tokenSupply","type":"uint128"},{"name":"next","type":"cell"}]},{"name":"burn","inputs":[{"name":"dest","type":"address"}],"outputs":[]},{"name":"indexCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"indexCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"hash","type":"uint256"}]},{"name":"resolveIndex","inputs":[{"name":"answerId","type":"uint32"},{"name":"collection","type":"address"},{"name":"owner","type":"address"}],"outputs":[{"name":"index","type":"address"}]},{"name":"getJson","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"json","type":"string"}]},{"name":"transfer","inputs":[{"name":"to","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"changeOwner","inputs":[{"name":"newOwner","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"changeManager","inputs":[{"name":"newManager","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]}],"data":[{"key":1,"name":"_id","type":"uint256"}],"events":[{"name":"NftCreated","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}],"outputs":[]},{"name":"OwnerChanged","inputs":[{"name":"oldOwner","type":"address"},{"name":"newOwner","type":"address"}],"outputs":[]},{"name":"ManagerChanged","inputs":[{"name":"oldManager","type":"address"},{"name":"newManager","type":"address"}],"outputs":[]},{"name":"NftBurned","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_id","type":"uint256"},{"name":"_collection","type":"address"},{"name":"_owner","type":"address"},{"name":"_manager","type":"address"},{"name":"_json","type":"string"},{"name":"_indexDeployValue","type":"uint128"},{"name":"_indexDestroyValue","type":"uint128"},{"name":"_codeIndex","type":"cell"},{"name":"_tokenSupply","type":"uint128"},{"name":"_royaltyAddress","type":"address"},{"name":"_royalty","type":"uint128"}]} as const
const royaltySupportAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"royaltyInfo","inputs":[{"name":"answerId","type":"uint32"},{"name":"salePrice","type":"uint128"}],"outputs":[{"name":"receiver","type":"address"},{"name":"royaltyAmount","type":"uint128"}]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"constructor","inputs":[],"outputs":[]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_royaltyAddress","type":"address"},{"name":"_royalty","type":"uint128"}]} as const
const tIP4_1CollectionAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"codeNft","type":"cell"}],"outputs":[]},{"name":"totalSupply","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"count","type":"uint128"}]},{"name":"nftCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"nftCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"codeHash","type":"uint256"}]},{"name":"nftAddress","inputs":[{"name":"answerId","type":"uint32"},{"name":"id","type":"uint256"}],"outputs":[{"name":"nft","type":"address"}]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]}],"data":[],"events":[{"name":"NftCreated","inputs":[{"name":"id","type":"uint256"},{"name":"nft","type":"address"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"creator","type":"address"}],"outputs":[]},{"name":"NftBurned","inputs":[{"name":"id","type":"uint256"},{"name":"nft","type":"address"},{"name":"owner","type":"address"},{"name":"manager","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_codeNft","type":"cell"},{"name":"_totalSupply","type":"uint128"}]} as const
const tIP4_1NftAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"owner","type":"address"},{"name":"sendGasTo","type":"address"},{"name":"remainOnNft","type":"uint128"}],"outputs":[]},{"name":"transfer","inputs":[{"name":"to","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"changeOwner","inputs":[{"name":"newOwner","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"changeManager","inputs":[{"name":"newManager","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]}],"data":[{"key":1,"name":"_id","type":"uint256"}],"events":[{"name":"NftCreated","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}],"outputs":[]},{"name":"OwnerChanged","inputs":[{"name":"oldOwner","type":"address"},{"name":"newOwner","type":"address"}],"outputs":[]},{"name":"ManagerChanged","inputs":[{"name":"oldManager","type":"address"},{"name":"newManager","type":"address"}],"outputs":[]},{"name":"NftBurned","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_id","type":"uint256"},{"name":"_collection","type":"address"},{"name":"_owner","type":"address"},{"name":"_manager","type":"address"}]} as const
const walletAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"sendTransaction","inputs":[{"name":"dest","type":"address"},{"name":"value","type":"uint128"},{"name":"bounce","type":"bool"},{"name":"flags","type":"uint8"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"transferOwnership","inputs":[{"name":"newOwner","type":"uint256"}],"outputs":[]},{"name":"constructor","inputs":[],"outputs":[]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"uint256"}]},{"name":"_randomNonce","inputs":[],"outputs":[{"name":"_randomNonce","type":"uint256"}]}],"data":[{"key":1,"name":"_randomNonce","type":"uint256"}],"events":[{"name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"uint256"},{"name":"newOwner","type":"uint256"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"owner","type":"uint256"},{"name":"_randomNonce","type":"uint256"}]} as const

export const factorySource = {
    CantBeEvil: cantBeEvilAbi,
    Index: indexAbi,
    IndexBasis: indexBasisAbi,
    MultiTokenCollection: multiTokenCollectionAbi,
    MultiTokenCollectionWithRoyalty: multiTokenCollectionWithRoyaltyAbi,
    MultiTokenWallet: multiTokenWalletAbi,
    MultiTokenWalletPlatform: multiTokenWalletPlatformAbi,
    MultiTokenWalletWithRoyalty: multiTokenWalletWithRoyaltyAbi,
    Nft: nftAbi,
    NftWithRoyalty: nftWithRoyaltyAbi,
    RoyaltySupport: royaltySupportAbi,
    TIP4_1Collection: tIP4_1CollectionAbi,
    TIP4_1Nft: tIP4_1NftAbi,
    Wallet: walletAbi
} as const

export type FactorySource = typeof factorySource
export type CantBeEvilAbi = typeof cantBeEvilAbi
export type IndexAbi = typeof indexAbi
export type IndexBasisAbi = typeof indexBasisAbi
export type MultiTokenCollectionAbi = typeof multiTokenCollectionAbi
export type MultiTokenCollectionWithRoyaltyAbi = typeof multiTokenCollectionWithRoyaltyAbi
export type MultiTokenWalletAbi = typeof multiTokenWalletAbi
export type MultiTokenWalletPlatformAbi = typeof multiTokenWalletPlatformAbi
export type MultiTokenWalletWithRoyaltyAbi = typeof multiTokenWalletWithRoyaltyAbi
export type NftAbi = typeof nftAbi
export type NftWithRoyaltyAbi = typeof nftWithRoyaltyAbi
export type RoyaltySupportAbi = typeof royaltySupportAbi
export type TIP4_1CollectionAbi = typeof tIP4_1CollectionAbi
export type TIP4_1NftAbi = typeof tIP4_1NftAbi
export type WalletAbi = typeof walletAbi
