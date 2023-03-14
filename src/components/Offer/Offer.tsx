import { ReactComponent as SquaresIcone } from "../../assets/icons/squares.svg";
import { ReactComponent as SearchIcone } from "../../assets/icons/search.svg";
import { ReactComponent as HistogramIcone } from "../../assets/icons/histogram.svg";
import './styles.scss'


export const Offer = () => {
  return (
    <div className='offer'>
      <div className='offer__container container'>
        <h2 className='offer__title'>List. Sell. Grow</h2>
        <div className='offer__container-inner'>
          <div className='offer__card'>
            <SquaresIcone />
            <h5 className='offer__card-text'>Be a part of the only  All-In-One platform for IT services </h5>
          </div>
          <div className='offer__card'>
          <SearchIcone />
            <h5 className='offer__card-text'>Come closer to finding your next customer</h5>
          </div>
          <div className='offer__card'>
            <HistogramIcone />
            <h5 className='offer__card-text'>Grow your business with a single click</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
