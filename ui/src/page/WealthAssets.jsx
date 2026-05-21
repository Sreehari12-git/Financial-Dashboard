import AssetAllocation from "../components/AssetAllocation"
import AssetLedger from "../components/AssetLedger"
import LiabilitiesList from "../components/LiabilitiesList"
import LiabilityAllocation from "../components/LiabilityAllocation"

const WealthAssets = () => {
    return (
        <>

<div style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
  
  {/* Left column — stacked tables */}
  <div style={{ display: "flex", flexDirection: "column" }}>
    <AssetLedger />
    <LiabilitiesList />
  </div>

  {/* Right column — chart centered vertically between both tables */}
  <div style={{ display: "flex", alignItems: "center", alignSelf: "stretch" }}>
    <AssetAllocation />
    <LiabilityAllocation/>
  </div>

</div>
        </>

    )
}

export default WealthAssets
