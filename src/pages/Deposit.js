import { observer } from 'mobx-react'
import Farm from '../components/Farm'
import './Deposit.scss'
import { useFarms } from '../hooks/useFarms'
import { usePrices } from '../hooks/usePrices'
// const deposits = [1]

function DepositPage() {

  const farms = useFarms()
  const prices = usePrices()

  return (
    <div className="deposit">
      <div className="d-flex flex-column">
        <div className="text-center d-flex flex-column w-100 justify-content-center align-items-center text-white top-view">
          <img
            src={`${process.env.PUBLIC_URL}/img/top_bg.jpg`}
            className="w-100 position-absolute top-img"
          />
          <h2 className="font-weight-extra-bold">LIQUID CONTAINERS</h2>
          <p className="pt-2 pb-4">Stake SUSHI LP Tokens, Earn LQDR</p>
          <button className="font-weight-bold btn btn-primary rounded-2 px-5 used-bt">
            Deposit Fee will be used to buy back LQDR and burn it.
          </button>
          <div className="d-flex flex-row p-4">
            <div className="custom-control custom-switch mx-4">
              <input
                type="checkbox"
                className="custom-control-input"
                id="stake"
                readOnly
              />
              <label className="custom-control-label" htmlFor="stake">
                Stacked Only
              </label>
            </div>

            <div className="custom-control custom-switch mx-4">
              <input
                type="checkbox"
                className="custom-control-input"
                id="active"
                readOnly
              />
              <label className="custom-control-label" htmlFor="active">
                Active
              </label>
            </div>
          </div>
        </div>
        <div className="pools w-100 my-5 px-4">
          <div className="row p-0 cell-row">
            {farms && farms.map((farm, index) => (
              <Farm key={index} index={index} farm={farm} prices={prices} />
            ))}
          </div>
        </div>
        <div style={{ height: '64px' }}></div>
      </div>

    </div>
  )
}

export default observer(DepositPage)
