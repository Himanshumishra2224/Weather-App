import "./InfoBox.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ThunderStormIcon from '@mui/icons-material/Thunderstorm'; 
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit'; 



function InfoBox({info}){
    const weatherImages = {
    Clear: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?q=80&w=600&auto=format&fit=crop",
    Clouds: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=600&auto=format&fit=crop",
    Rain: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?q=80&w=600&auto=format&fit=crop",
    Haze: "https://plus.unsplash.com/premium_photo-1688431299592-2d5d714e98b4?q=80&w=600&auto=format&fit=crop",
    Mist: "https://images.unsplash.com/photo-1653618417841-79d6672aa395?q=80&w=600&auto=format&fit=crop",
    Default: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=600&auto=format&fit=crop",
  };
    const INIT_Url = weatherImages[info.weatherType] || weatherImages.Default;

    return(
        <div className="InfoBox"> 
            <h2>Weather Info</h2>
            <h3>Weather Type:- {info.weatherType} </h3>
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }} style={{ boxShadow: '5px 5px 8px #526a40'}}>
                    <CardMedia sx={{height: 150}} image={INIT_Url} title = "Weather Report" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{fontWeight: '700'}}>
                            {info.city} {info.humidity > 80 ? <ThunderStormIcon/> : info.temperature > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div" style={{fontWeight: '700'}}>
                            <div>Temperature = {info.temperature} &deg;C</div>
                            <div>Humidity = {info.humidity}</div>
                            <div>Pressure = {info.pressure}</div>
                            <div>The weather can be described as <i>{info.weatherType}</i> and feels like {info.feelsLike}&deg;C </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default InfoBox;