import './CountriesListShimmer.css'

export default function CountriesListShimmer() {

  return (
    <div className="countries">
        {Array.from({length: 15}).map((el,i) => {
        return <div key={i} className="country-card shimmer-card">
          <div className="flag"/>
          <div className="details"/>
          <div className="details"/>
          <div className="details"/>
          <div className="details"/>
        </div>
    })}
    </div>
  )
}
