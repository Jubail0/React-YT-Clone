import {Link} from 'react-router-dom'
import{Typography,Card,CardContent,CardMedia} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VideoCard = ({video :{id:{videoId},snippet}}) => {
    
  return (
    <Card sx={{width:{xs:"100%",sm:'358px', md:'320px'},boxShadow:'none',borderRadius:0}}>
        <Link to={`/video/${videoId}`}>
        <CardMedia image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width:{xs:"100%",sm:'358px'},height:180}}
        />
        </Link>

        <CardContent sx={{backgroundColor:'#1e1e1e',height:"106px"}}>
        <Link to={videoId && `/video/${videoId}`}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0,60)}
        </Typography>
        </Link>

        <Link to={snippet?.channelId && `/channel/${snippet?.channelId}`}>
        <Typography variant="subtitle1" fontWeight="bold" color="gray">
            {snippet?.channelTitle}
            <CheckCircleIcon sx={{color:'gray',fontSize:12,ml:'5px'}} />
        </Typography>
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard