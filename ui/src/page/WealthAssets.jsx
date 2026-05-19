import AssetAllocation from "../components/AssetAllocation"
import AssetLedger from "../components/AssetLedger"
import LiabilitiesList from "../components/LiabilitiesList"

const WealthAssets = () => {
    return (
        <>
        <AssetLedger/>
        <LiabilitiesList/>
        <AssetAllocation/>
        </>

    )
}

export default WealthAssets
