import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

export default function ({info}) {

    let INIT_URL = "https://media.istockphoto.com/id/485189591/photo/young-optimist-a-change-in-the-weather.jpg?s=1024x1024&w=is&k=20&c=rvHQuPiUvOPnjwnokCtRiqi12UmfNT2icbpT0LZmcSQ=";

    let COLD_URL = "https://media.istockphoto.com/id/1127448496/photo/winter-storm-warning-sign-with-snowfall-and-stormy-background.jpg?s=1024x1024&w=is&k=20&c=MYY2GNH0GKzN1-dc9yN78tUogkX-Qic3r8O20vePqaE=";
    let HOT_URL = "https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.jpg?s=1024x1024&w=is&k=20&c=aNyp4atd-QF1Pf7PG69cP0moyao0Ip2S9iXQIq9Fxls=";
    let RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";
   
    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80?RAIN_URL:info.temp > 15?HOT_URL:COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity>80?<WaterDropIcon/>:info.temp > 15?<WbSunnyIcon/>:<AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        <div>Temperature = {info.temp} &deg;C</div>
                        <div>Humidity = {info.humidity}</div>
                        <div>Minimum Temperature = {info.tempMin} &deg;C</div>
                        <div>Maximum Temperature = {info.tempMax} &deg;C</div>
                        <div>Weather can be described <i>{info.weather} </i>and feels like {info.feelsLike}&deg;C</div>
                    </Typography>
                </CardContent>

            </Card>
            </div>
        </div>
    );
}