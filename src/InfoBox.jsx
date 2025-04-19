import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL = "https://v.w-x.co/1615541473848_TWC_SUMMER_2021_NEW_1.jpg?crop=16:9&width=320&format=pjpg&auto=webp&quality=60";
  const COLD_URL = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/09/cold_weather_GettyImages107191741_Header-1024x575.jpg";
  const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhCESoyPiadpWc1mUVqTXVNFVS-sJGXhe-g&s";

  return (
    <div className="InfoBox">
      <Grow in={true} timeout={500}>
        <div className="cardContainer">
          <Card elevation={4} sx={{ borderRadius: '20px' }}>
            <CardMedia
              component="img"
              alt="Weather image"
              image={
                info.humidity > 80
                  ? RAIN_URL
                  : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
              }
              sx={{
                height: 200,
                width: '100%',
                objectFit: 'cover',
                borderBottom: '2px solid #eee'
              }}
            />
            <CardContent>
              <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
                {info.city}&nbsp;
                {info.humidity > 80
                  ? <ThunderstormIcon color="primary" />
                  : info.temp > 15
                  ? <SunnyIcon color="warning" />
                  : <AcUnitIcon color="info" />}
              </Typography>

              <Typography variant="body2" color="text.secondary" align="center">
                <p>🌡️ Temperature: {info.temp}°C</p>
                <p>💧 Humidity: {info.humidity}%</p>
                <p>🔻 Min Temp: {info.tempMin}°C</p>
                <p>🔺 Max Temp: {info.tempMax}°C</p>
                <p>📖 {info.weather}, feels like {info.feelslike}°C</p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Grow>
    </div>
  );
}
