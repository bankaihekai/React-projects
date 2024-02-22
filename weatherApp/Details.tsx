export default function Details(props: any) {
    const color = (t: number) => {
      if (t >= 30) {
        return 'danger';
      } else if (t < 30 && t >= 25) {
        return 'warning';
      } else if (t < 25 && t >= 20) {
        return 'success';
      } else if (t < 20 && t >= 15) {
        return 'info';
      } else {
        return 'primary';
      }
    };
  
    return (
      <div className="d-flex border justify-content-between align-items-center px-3 bg-dark">
        <div className="d-flex justify-content-evenly align-items-center">
          <img
            src={`https://flagsapi.com/${props.placeDetails?.sys.country}/flat/32.png`}
          />
          <span className="px-2 text-white">{props.placeDetails?.name}</span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center px-2">
            <img
              src={`http://openweathermap.org/img/wn/${props.placeDetails?.weather?.[0]?.icon}.png`}
              alt="Weather Icon"
            />
            <span className="text-white">
              <b className={`text-${color(props.placeDetails?.main?.temp)}`}>
                {props.placeDetails?.main?.temp}
              </b>
              °C
            </span>
          </div>
          <span className="text-white">
            {props.placeDetails?.weather?.[0]?.description}
          </span>
        </div>
      </div>
    );
  }
  